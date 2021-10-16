<template>
  <div>
    <Nav @barOpen='openbar(true)'/>
    <Content/>
    <SideBar @barClose='openbar(false)' :class="{open:openSideBar}"/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Content from '@/components/Content.vue'
import SideBar from '@/components/SideBar.vue'
export default {
  name:'Home',
  components: {
    Nav,
    Content,
    SideBar
  },
  data(){
    return{
      openSideBar:false,
    }
  },
  methods:{
    openbar(e) {
      this.openSideBar = e
    }
  }
}
</script>

<style>

</style>