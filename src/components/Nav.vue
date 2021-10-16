<template>
      <div id="nav">
      <span class="menu" @click="openbar">
        <i class="fas fa-bars"></i>
      </span>
      <span class="list" :class="{unactive:listStatus !== 'list'}" @click="changeListStatus('list')">
        <i class="fas fa-th-list"></i>
      </span>
      <span class="list-large" :class="{unactive:listStatus !== 'square'}" @click="changeListStatus('square')">
        <i class="fas fa-th-large"></i>
      </span>
    </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";
export default {
  computed:{
    ...mapState(["listStatus"])
  },
  methods: {
    openbar () {
      this.$emit('barOpen')
    },
    ...mapMutations(["changeListStatus"])
  }
}
</script>

<style lang="scss">
#nav{
  height: 60px;
  width: 100%;
  background: #d2dbce;
  font-size: 36px;
  padding: 0 50px;
  box-sizing: border-box;
  color: #00000080;
  .unactive{
    color: #0000004D;
  }
  .menu{
    float: left;
    margin-top: 10px;
    cursor: pointer;
  }
  .list,.list-large{
    float: right;
    margin-top: 10px;
    margin-left: 25px;
    cursor: pointer;
  }
}
@media screen and (max-width:768px) {
  #nav{
    font-size: 24px;
    padding: 8px 20px;
      .list,.list-large{
        margin-left: 20px;
      }
  }
}
</style>
