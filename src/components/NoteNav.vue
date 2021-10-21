<template>
    <div id="note-nav">
      <div class="goback" @click="goBack">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="stars" @click="changeFav">
        <div class="star-box"  v-show="item.faver">
          <i class="fas fa-star"></i>
        </div>
        <div class="star-box" v-show="!item.faver">
          <i class="far fa-star"></i>
        </div>
      </div>
      <div class="edit" v-show='!item.edit' @click="changeEdit">
        <i class="fas fa-pen"></i>
      </div>
      <div class="edit" v-show='item.edit' @click="changeEdit">
        save
      </div>
      <div class="trash" @click="noteDelete">
        <i class="fas fa-trash"></i>
      </div>
    </div>
</template>

<script>
export default {
  props: ['item'],
  methods:{
    changeFav () {
      this.$emit('navChangeFav')
    },
    goBack(){
      this.$emit('navgoBack')
    },
    changeEdit(){
      this.$emit('navChangeEdit')
    },
    noteDelete(){
      this.$emit('navNoteDelete')
    }
  }
}
</script>
<style lang="scss">
#note-nav{
  height: 60px;
  width: 100%;
  background: #d2dbce;
  font-size: 36px;
  padding: 0 50px;
  box-sizing: border-box;
  color: #00000080;
  display: flex;
  justify-content: space-around;
  align-content: center;
  .unactive{
    color: #0000004D;
  }

  .goback{
    margin-top: 10px;
    cursor: pointer;
    float: left;
  }
  .trash{
    margin-top: 10px;
    margin-left: 25px;
    cursor: pointer;
  }
  .edit,.stars{
    margin-top: 10px;
    margin-left: 25px;
    cursor: pointer;
  }
}
@media screen and (max-width:768px) {
  #note-nav{
    display: flex;
    justify-content: space-around;
    align-content: center;
    font-size: 24px;
    padding: 8px 20px;
      .edit,.stars{
        margin-left: 20px;
      }
  }
}
</style>