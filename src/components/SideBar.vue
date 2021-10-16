<template>
  <div id="SideBar">
      <div class="close" @click="closebar">
        <i class="fas fa-times"></i>
      </div>
      <div class="chose-box">
        <div class="chose-all item" @click="selectFilterStatus('all')">
          所有筆記
        </div>
        <div class="chose-star item" @click="selectFilterStatus('like')">
          已加星號
        </div>
        <div class="chose-dark item">
          夜間模式
        </div>
      </div>
    </div>
</template>

<script>
import {mapMutations} from "vuex";
export default {
  methods: {
    ...mapMutations(["selectFilterStatus"]),
    closebar () {
      this.$emit('barClose')
    }
  }
}
</script>

<style lang="scss">
#SideBar{
  backdrop-filter: blur(8px);
  width: 300px;
  height: 100vh;
  position: fixed;
  left: -350px;
  top:0;
  background-image: url('~@/assets/img/sidebarbg.jpg');
  background-size: cover;
  opacity: 0.92;
  border-right: 10px solid #857d5a;
  transition: 0.3s all ease-in-out;
  color: #204326;
  box-shadow: 15px 0 10px rgba(14, 14, 14, 0.123),5px 0 10px rgba(14, 14, 14, 0.068);
  &.open{
    left: 0;
    top:0;
  }
  .close{
    font-size: 36px;
    position: absolute;
    top: 10px;
    right: 15px;
    color: #00000080;
    cursor: pointer;
  }
  .chose-box{
    width: 100%;
    height: 400px;
    padding: 100px 20px 20px 50px;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 3px;
    box-sizing: border-box;
    display: flex;
    align-content: center;
    flex-direction: column;
    .item{
      margin-bottom: 40px;
      cursor: pointer;
    }
  }
}
@media screen and (max-width:768px) {
  #SideBar {
    .close{
      font-size: 24px;
      top: 20px;
      right: 25px;
    }
    .chose-box{
      font-size: 18px;
      .item{
        margin-bottom: 25px;
      }
    }
  }
}
</style>
