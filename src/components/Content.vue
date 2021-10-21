<template>
  <div id="content">
    <div class="title">所有筆記</div>
    <p v-if="filterCardItems.length !== 0">共有 {{filterCardItems.length}} 篇筆記 </p>
    <p v-else >這裡目前是空的</p>
    <div class="main-content">
      <div id="cardbox" :class="{showList:listStatus === 'list'}">
        <div class="showcard" v-for="item in filterCardItems" :key="item.id" @click.stop="goDetailNote(item.id)">
          <div class="star-box"  v-show="item.faver" @click.stop="changeFaver(item.id)">
            <i class="fas fa-star"></i>
          </div>
          <div class="star-box" v-show="!item.faver" @click.stop="changeFaver(item.id)">
            <i class="far fa-star"></i>
          </div>
          <div class="card" v-html="item.content">
          </div>
        </div>
      </div>
    </div>
    <div class="add-note" @click="addNewNote">
      New Note
    </div>
  </div>
</template>

<script>
import moment from "moment";
import {mapState, mapMutations,mapGetters} from "vuex";
export default {
  computed:{
    ...mapState(["listStatus"]),
    ...mapGetters(["filterCardItems"])
  },
  methods:{
    ...mapMutations(["changeFaver","setCurrent","pushNewNote"]),
    goDetailNote(noteId){
      this.setCurrent(noteId)
      this.$router.push(`/note/${noteId}`)
    },
    addNewNote(){
      let newItem = {
        id:moment().unix(),
        faver:false,
        edit:true,
        content:`開始編輯新內容`
      }
      this.pushNewNote(newItem)
      this.setCurrent(newItem.id)
      this.$router.push(`/note/${newItem.id}`)
    }
  }
}
</script>

<style lang="scss">
#content{
  width: 100%;
  min-height: calc(100vh - 60px);
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  p{
    font-size: 16px;
    letter-spacing: 2px;
    color: #00000080;
  }
  .title{
    font-weight: 700;
    color: #204326;
    font-size: 32px;
    letter-spacing: 10px;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  .main-content{
    margin-bottom: 100px;
  }
  .add-note{
    cursor: pointer;
    width: 160px;
    height: 52px;
    background: #6A855A 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 10px #0000001A;
    border-radius: 26px;
    text-align: center;
    color: white;
    line-height: 52px;
    position: fixed;
    bottom: 50px;
    left:calc(50% - 80px) ;
  }
}
#cardbox{
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  &.showList{
    .showcard{
      width: 70%;
      height: 250px;
    }
  }
  .showcard{
    width: 300px;
    height: 300px;
    background: rgb(255, 255, 255);
    border-radius: 10px;
    margin: 20px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.103);
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &:hover{
      transform: translateY(-5px);
    }
    &::before{
      content: '';
      position: absolute;
      height: 40%;
      width: 100%;
      bottom: 0;
      left: 0;
      background: linear-gradient(0deg,rgb(255, 255, 255)10%, rgba(255, 255, 255, 0));
    }
    .star-box{
      width: 30px;
      height: 30px;
      font-size: 24px;
      position: absolute;
      top: 15px;
      right: 10px;
    }
    .card{
      width: 100%;
      margin-top: 30px;
      padding: 0 10px;
      box-sizing: border-box;
    }
  }
}
@media screen and (max-width:768px) {
  #content{
    padding: 5px;
    .title{
      font-weight: 700;
      color: #204326;
      font-size: 24px;
      letter-spacing: 10px;
      margin-bottom: 20px;
    }

  }
  #cardbox{
    margin: 0 auto;
    margin-top: 10px;
    justify-content: flex-start;
      &.showList{
        .showcard{
          width: 100%;
          height: 100px;
        }
      }
    .showcard{
      width: 150px;
      height: 150px;
      margin: 7px;
      .star-box{
        font-size: 16px;
        top: 10px;
        right: 3px;
      }
    }
  }
}
</style>
