<template>
  <div id="app" :class="{dark:bgModel==='dark'}">
    <transition name="fade">
      <router-view/>
    </transition>
    <div class="showBgModel">
      <div class="modelCard" v-show="modelShow && bgModel==='light'">
        <div class="sun"><i class="fas fa-sun"></i></div>
        <p>日間模式已開啟</p>
      </div>
      <div class="modelCard dark" v-show="modelShow  && bgModel==='dark'">
        <div class="moon"><i class="far fa-moon"></i></div>
        <p>夜間模式已開啟</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: 'app',
  computed:{
    ...mapState(["bgModel","modelShow"])
  }
}
</script>

<style lang="scss">
$font-6:12px;

#app {
  h1{
    font-size: $font-6*3;
  }
  h2{
    font-size: $font-6*2.5;
  }
  h3{
    font-size: $font-6*2;
  }
  h4{
    font-size: $font-6*1.5;
  }
  h5{
    font-size: $font-6*1.3;
  }
  h6{
    font-size: $font-6;
  }
  strong{
    font-weight: 900;
  }
  * {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden;
  // background: #F4F6F3;
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/img/bg.jpg');
  background-size: contain;
  .showBgModel{
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    .modelCard{
      width: 300px;
      height: 200px;
      background: rgba(0, 0, 0, 0.37);
      border-radius: 20px;
      color: #fff;
      &.dark{
        width: 300px;
        height: 200px;
        background: rgba(255, 255, 255, 0.678);
        border-radius: 20px;
        color: #204326;
      }
      .sun{
        color: #D3E18A;
        text-align: center;
        font-size: 72px;
        line-height: 144px;
      }.moon{
        color: #204326;
        text-align: center;
        font-size: 72px;
        line-height: 144px;
      }
      p{
        text-align: center;
        font-size: 18px;
        letter-spacing: 3vpx;
      }
    }
  }
  &.dark{
    // color: white;
    background-image: url('~@/assets/img/backbg.png');
    #nav{
      background: #323C2B;
      color: #FFFFFF80;
      .unactive{
        color: #FFFFFF33;
      }
    }
    #SideBar{
      background-image: url('~@/assets/img/backsidebarbg.png');
      color: #D3E18A;
      border-right: 10px solid #ffffff;
      .close{
        color: #FFFFFF80;
        transition: all 0.1s ease-in;
          &:hover{
            color: #D3E18A;
          }
      }
    }
    #content{
      .title{
        color: white;
      }
      p{
        color: rgb(207, 207, 207);
      }
      .main-content{
        color: #fff;
        #cardbox{
          .showcard{
            background: #323C2B;
            .star-box{
              color: #D3E18A;
            }
            &::before{
              background: linear-gradient(0deg,#323C2B 10%, #323c2b00);
            }
          }
        }
      }
      .add-note{
        background: #7B8A34;
        box-shadow:0 4px 10px rgba(255, 255, 255, 0.164)
      }
    }
    #noteDetail{
      #note-nav{
        background: #323C2B;
        color: #FFFFFF80;
        >div{
          transition: all 0.1s ease-in;
          &:hover{
            color: #D3E18A;
          }
        }
      }
      #openNote{
        background: #323C2B;
        color: #fff;
      }
    }
  }
}
@media screen and (max-width:768px) {
  #app {
      h1{
        font-size: $font-6*2.3;
      }
      h2{
        font-size: $font-6*2;
      }
      h3{
        font-size: $font-6*1.7;
      }
      h4{
        font-size: $font-6*1.3;
      }
      h5{
        font-size: $font-6*1.2;
      }
      h6{
        font-size: $font-6;
      }
    .showBgModel{
      .modelCard{
        &.dark{
          width: 200px;
        }
        width: 200px;
      }
    }
    background-repeat: no-repeat;
    background-size: cover;
  }
}
.fade-enter-active, 
.fade-leave-active {
  transition: all .5s ease-in-out;
}
.fade-enter-to, 
.fade-leave-from {
  opacity: 1;
}
.fade-enter, 
.fade-leave-to {
  opacity: 0;
}

</style>
