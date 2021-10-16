<template>
  <div>
    <tinymce-editor ref="editor"
      v-model="msg"
      :disabled="disabled"
      :base-url="baseUrl"
      :language="language"
      :skin="skin"
      @onClick="onClick">
    </tinymce-editor>
    <div class="test" v-html="msg"></div>
  </div>
</template>

<script>
import TinymceEditor from './tinymce-editor/tinymce-editor'
export default {
  components: {
    TinymceEditor
  },
  data () {
    return {
      msg: 'Welcome to Use Tinymce Editor-liubing.me',
      disabled: false,
      baseUrl: process.env.NODE_ENV === 'production' ? '/vue_note' : '',
      language: 'zh_CN',
      skin: 'oxide'
    }
  },
  methods: {
    onClick (e, editor) {
      console.log('Element clicked')
      console.log(e)
      console.log(editor)
    }
  }
}
</script>
