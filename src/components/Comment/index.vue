<template lang="pug">
reply(:id='id', :avatar='avatar', @create-comment='createComment')
.comments-wrapper
  .comment(v-for='comment in comments', :key='comment.id')
    .first-comment
      .comment-head
        img.avatar(:src='comment.avatar')
        .__alia_date
          p.alia {{ comment.alia }}
          p.date {{ format(comment.date) }}
        p.reply(@click='reply(comment.id, 0, 0, 0, $event)') Reply
      .comment-content {{ comment.comment }}
        .secondary-reply(:id='comment.id')
    .secondary-comment(
      v-for='secondaryComment in comment.children',
      :key='secondaryComment.id'
    )
      .comment-head
        img.avatar(:src='secondaryComment.avatar')
        .__alia_date
          p.alia {{ secondaryComment.alia }}
            span.deep-comment-alia(v-if='secondaryComment.deep_reply_id') &nbsp;@ {{ secondaryComment.deep_reply_alia }}
          p.date {{ format(secondaryComment.date) }}
        p.reply(@click='reply(comment.id, secondaryComment.id, secondaryComment.alia, secondaryComment.email, $event)') Reply
      .comment-content {{ secondaryComment.comment }}
        .secondary-reply(:id='secondaryComment.id')
</template>

<script>
import dayjs from 'dayjs';
import { getComments } from '@/api/comment';
import { createComment } from '@/api/comment';
import reply from './reply';
import { getAvatar, validateAvatar } from '@/api/comment'
export default {
  name: 'Comment',
  components: { reply },
  data() {
    return {
      comments: [],
      avatar: ''
    };
  },
  props: ['id'],
  beforeMount() {
    this.getComments();
    this.validateAvatar()
  },
  methods: {
    async validateAvatar() {
      const avatar = localStorage.getItem('avatar')
      if (avatar) {
        const { data } = await validateAvatar(avatar)
        if (!data) {
          this.getAvatar()
        } else {
          this.avatar = localStorage.getItem('avatar')
        }
      } else {
        this.getAvatar()
      }
    },
    async getAvatar() {
      const { data } = await getAvatar()
      this.avatar = data
    },
    async getComments() {
      const { data } = await getComments(this.id);
      this.comments = data;
    },
    format(date) {
      return dayjs(date).format('HH:mm YYYY-MM-DD');
    },
    async createComment(comment) {
      console.log(comment)
      const { data } = await createComment(comment);
      this.getComments();
      console.log(data);
    },
    reply(_parentId, _secondaryCommentId, _secondaryCommentAlia, _secondaryCommentEmail, e) {
      const reply =  this.initDeepComment()
      let wrapper
      _secondaryCommentId
        ? wrapper = document.getElementById(_secondaryCommentId)
        : wrapper = document.getElementById(_parentId)
      
      wrapper.append(reply);

      const alia = document.querySelector('.deep-reply-container .alia')
      const email = document.querySelector('.deep-reply-container .email')
      alia.value = localStorage.getItem('alia')
      email.value = localStorage.getItem('email')

      window.cancel = this.cancel
      window.deepCreateCommet = this.deepCreateCommet
      window.deepReplyPayload = {
        parentId: _parentId,
        deep_reply_id: _secondaryCommentId || null,
        deep_reply_alia: _secondaryCommentAlia || null,
        deep_reply_email: _secondaryCommentEmail || null,
      };

      const replyHeight = parseInt(getComputedStyle(document.getElementById('reply')).height) + 100
      const documentHeight = document.documentElement.clientHeight
      let _h = documentHeight - e.clientY

      if (_h < replyHeight) {
        window.scrollBy({top: replyHeight - _h , behavior: 'smooth' })
      }

    },
    async deepCreateCommet() {
      const alia = document.querySelector('.deep-reply-container .alia')
      const email = document.querySelector('.deep-reply-container .email')
      const comment = document.querySelector('.deep-reply-container .comment-content')
      if (!alia.reportValidity() || !email.reportValidity() || !comment.reportValidity()) {
        return false
      }

      const { parentId, deep_reply_id, deep_reply_alia ,deep_reply_email } = window.deepReplyPayload
      const payload = {
        alia: alia.value,
        avatar: this.avatar,
        email:  email.value,
        comment:  comment.value,
        parent: parentId,
        deep_reply_id,
        deep_reply_alia,
        deep_reply_email,
      };
      if (!payload.email) delete payload.email
      const { data } = await createComment(payload)
      console.log(data)
      localStorage.setItem('alia', alia.value)
      localStorage.setItem('email', email.value)
      localStorage.setItem('avatar', this.avatar)
      this.cancel()
      this.getComments();
    },
    initDeepComment() {
      let reply = document.getElementById('reply');
      if (!reply) {
        reply = document.createElement('div');
        const str = `
          <div class="reply-container deep-reply-container" style="margin-top: 12px">
            <div class="__alia_email">
              <input class="alia" placeholder="Name (Required)" Required="Required" maxlength="8" minlength="2" />
              <input class="email" placeholder="Email" type="email" />
            </div>
            <textarea class="comment-content" placeholder="Say Something (Required)" Required="Required" maxlength="24" minlength="2"></textarea>
            <button class="btn submit" type="submit" onclick="deepCreateCommet()">Submit</button>
            <button class="btn cancel" type="button" onclick="cancel('cancel')">Cancel</button>
          </div>
        `;
        reply.id = 'reply';
        reply.innerHTML = str;
      }
      reply.style.display = 'block';
      return reply
    },
    cancel(flag) {
      const reply = document.getElementById('reply');
      if (!flag) {
        const comment = reply.querySelector('.comment-content')
        comment.value = ''
      }
      reply.style.display = 'none';
    },
  },
};
</script>

<style lang="scss" scoped>
.comments-wrapper {
  margin-top: 36px;
}
.comment {
  padding-top: 24px;
  & + .comment {
    border-top: 1px solid whitesmoke;
  }
  .comment-head {
    display: flex;
    align-items: center;
    position: relative;
  }
  .__alia_date {
    display: flex;
    flex-direction: column;
  }
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid whitesmoke;
    margin-right: 8px;
  }
  .alia {
    color: #666;
  }
  .deep-comment-alia {
    color: tomato;
  }
  .reply {
    font-size: 13px;
    margin-left: auto;
    cursor: pointer;
    color: #666;
    transition: all 0.25s;
    &:hover {
      color: tomato;
    }
  }
  .date {
    font-size: 12px;
    color: #ccc;
  }
  .comment-content {
    color: #333;
    margin-left: 24px;
    padding: 6px 0 12px;
    border-bottom: 1px solid whitesmoke;
  }
  & > .first-comment:last-of-type .comment-content {
    border: none;
  }
}
.secondary-comment {
  margin: 12px 0 6px 24px;
  padding-top: 16px;
  &:last-child .comment-content {
    border: none;
  }
}
@media (min-width: 576px) {
  .comment {
    .secondary-comment {
      margin-left: 48px;
    }
    .comment-content {
      margin-left: 48px;
    }
    .__alia_date {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    .date {
      font-size: 14px;
    }
    .reply {
      margin-left: inherit;
      position: absolute;
      right: 130px;
      top: 10px;
      opacity: 0;
    }
    .first-comment:hover,
    .secondary-comment:hover {
      & .reply {
        opacity: 1;
      }
    }
  }
}
</style>
