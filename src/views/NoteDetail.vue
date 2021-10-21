<template>
  <div id="noteDetail">
    <NoteNav :item='openNote' @navChangeFav='changeFaver(nowCurrent.id)' @navgoBack='$router.go(-1)' @navChangeEdit='changeEdit(nowCurrent),changeNoteContent(msg)' @navNoteDelete='handleDelete(nowCurrent.id),$router.go(-1)'/>
    <div id="openNote">
      <div class="card" v-if="!openNote.edit">
        <div class="lastTime"> <span>上次編輯時間</span> {{lastTime}}</div>
        <div class="noteContent" v-html='openNote.content'>
        </div>
      </div>
      <div class="card" v-if="openNote.edit">
        <tinymce-editor ref="editor"
          v-model="msg"
          :disabled="disabled"
          :base-url="baseUrl"
          :language="language"
          :skin="skin"
          >
        </tinymce-editor>
      </div>
    </div>
  </div>
</template>

<script>
// import moment from "moment";
import NoteNav from '@/components/NoteNav.vue'
import TinymceEditor from '@/components/tinymce-editor/tinymce-editor'
import {mapState,mapGetters,mapMutations} from "vuex"
export default {
  components:{
    NoteNav,TinymceEditor
  },
  data(){
    return{
      nowCurrent:'',
      disabled: false,
      msg:'test',
      baseUrl: process.env.NODE_ENV === 'production' ? '/vue-use-tinymce' : '',
      language: 'zh_CN',
      skin: 'oxide'
    }
  },
  computed:{
    ...mapGetters(["openNote"]),
    ...mapState(["noteList","lastTime"]),
  },
  methods:{
    ...mapMutations(["setCurrent","changeFaver","changeEdit","changeNoteContent","handleDelete"]),
  },
  mounted(){
    this.msg = this.openNote.content
    this.nowCurrent = this.openNote
  }

}
</script>

<style lang="scss" scoped>
#noteDetail{
  height: 100vh;
  #openNote{
    margin: 100px auto 0 auto;
    width: 70%;
    background: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.103);
    .lastTime{
      text-align: right;
      color: rgb(158, 158, 158);
      span{
        font-size: 14px;
        margin-right: 10px;
        color: rgb(195, 195, 195);
      }
    }
    .card{
      padding: 30px;
      box-sizing: border-box;
    }
  }
}
@media screen and (max-width:768px) {
  #noteDetail{
    #openNote{
      margin: 20px auto 0 auto;
      width: 90%;
      background: rgb(255, 255, 255);
      border-radius: 10px;
      box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.103);
      .card{
        padding: 20px 30px;
        box-sizing: border-box;
        .lastTime{
          text-align: left;
          span{
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>