<template lang="pug">
form.reply-container(@submit.prevent='submit')
  .__alia_email
    input.alia(
      v-model='comment.alia',
      placeholder='Name (Required)',
      Required,
      maxlength='8',
      minlength='2'
    )
    input.email(v-model="comment.email", placeholder='Email', type='email')
  textarea.comment-content(
    v-model="comment.comment"
    placeholder='Say Something (Required)',
    Required,
    maxlength='24',
    minlength='2'
  )
  button.btn.submit(type='submit') Submit
</template>

<script>
export default {
  name: 'Reply',
  data() {
    return {
      comment: {
        alia: '',
        email: '',
        comment: '',
        avatar: 'http://cdn.u2.huluxia.com/g3/M00/2A/74/wKgBOVwKin-APdabAADFkZN89Ok088.jpg',
        article: +this.id,
      },
    };
  },
  props: ['id'],
  methods: {
    async submit() {
      if (!this.comment.email) {
        delete this.comment.email
      }
      this.$emit('create-comment', this.comment)
    },
  },
};
</script>

<style lang="scss">
@mixin input {
  border: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px;
  box-sizing: border-box;
  outline: none;
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  transition: all 0.25s;
  &::placeholder {
    color: #ccc;
  }
  &:focus {
    border-color: #333;
  }
}

.btn {
  border: none;
  color: white;
  background-color: #666;
  height: 32px;
  padding: 0 12px;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.25s;
  outline: none;
}

.cancel {
  @extend .btn;
  background-color: transparent;
  color: #999;
  border: 1px solid #eee;
  margin-left: 12px;
  &:hover {
    background-color: whitesmoke;
  }
}

#reply {
  display: none;
}

.reply-container {
  .__alia_email {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    .alia {
      margin-bottom: 8px;
    }
  }
  .alia,
  .email {
    flex: 1;
    min-width: 100px;
    height: 36px;
    @include input;
  }

  .comment-content {
    width: 100%;
    height: 140px;
    resize: none;
    vertical-align: middle;
    margin-bottom: 16px;
    @include input;
  }
  .submit {
    @extend .btn;
    &:hover {
      background-color: tomato;
    }
  }
}

@media (min-width: 576px) {
  .reply-container {
    .__alia_email {
      display: flex;
      flex-direction: row;
      margin-bottom: 16px;
      .alia {
        margin-bottom: 0;
      }
    }
    .alia {
      margin-right: 16px;
    }
  }
}
</style>

