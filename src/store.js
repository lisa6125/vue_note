import Vue from 'vue'
import Vuex from 'vuex'
import moment from "moment";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    noteList: [
      {
        id:'1534179824',
        faver: true,
        edit:false,
        content:
        `<div><h1>test1</h1> <p>測試插入文本與圖片<span style="color: #525f7f; font-family: 'Open Sans', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif; font-size: 16px; background-color: #ffffff;">tinymce官方提供了一个vue的组件</span><span style="color: #525f7f; font-family: 'Open Sans', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif; font-size: 16px; background-color: #ffffff;">如果有注册或购买过服务的话，直接通过组件配置api-key直接使用，像我这种懒的注册或者购买的直接下载tinymce，自力更生</span></p> <p><span style="color: #525f7f; font-family: 'Open Sans', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif; font-size: 16px; background-color: #ffffff;"><img src="https://i.pinimg.com/236x/8d/6a/16/8d6a164b9fad90d2a1a7940ebc090619.jpg" alt="" width="236" height="278" /></span></p> <p>&nbsp;</p> <p>&nbsp;</p></div>`
      },
      {
        id:'1634179777',
        faver: false,
        edit:false,
        content:
        `<h2><strong>Welcome</strong>&nbsp;</h2> <p><img src="https://i.pinimg.com/236x/d2/9d/90/d29d9084c262af2a98c5cad20c29e2ae.jpg" alt="" width="236" height="271" /></p> <p><span style="color: #525f7f; font-family: 'Open Sans', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif; font-size: 16px; background-color: #ffffff;">我使用这个源码，直接npm install ,然后预览，图标都是undefined，我百度了下，说是无法正常加载tinymce包里面的icons.js文件，直接变成了html页面，导致语法错误：</span><code style="box-sizing: border-box; font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; font-size: 14px; word-break: break-word; color: #f3a4b5; background-color: #ffffff;">Uncaught SyntaxError: Unexpected token '&lt;'</code><span style="color: #525f7f; font-family: 'Open Sans', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif; font-size: 16px; background-color: #ffffff;">,没有找到解决办法，应该怎么解决，如果有办法联系下微信a758922096,很</span></p>`
      },
      {
        id:'1634179888',
        faver: true,
        edit:false,
        content:
        `<h2><strong>Welcome</strong>&nbsp;</h2> <p><span style="color: #525f7f; font-family: 'Open Sans', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif; font-size: 16px; background-color: #ffffff;">我使用这个源码，直接npm install ,然后</span><span style="color: #525f7f; font-family: 'Open Sans', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif; font-size: 16px; background-color: #ffffff;">预览，图标都是undefined，我百度了下，说是无法正常加载tinymce包里面的icons.js文件，直接变成了html页面，导致语法错误：</span><code style="box-sizing: border-box; font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; font-size: 14px; word-break: break-word; color: #f3a4b5; background-color: #ffffff;">Uncaught SyntaxError: Unexpected token '&lt;'</code><span style="color: #525f7f; font-family: 'Open Sans', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif; font-size: 16px; background-color: #ffffff;">,没有找到解决办法，应该怎么解决，如果有办法联系下微信a758922096,很</span><img src="https://i.pinimg.com/236x/d2/9d/90/d29d9084c262af2a98c5cad20c29e2ae.jpg" alt="" width="236" height="271" /></p>`
      }
    ],
    listStatus: 'list',  // square or list,
    current: '',
    lastTime: '',
    filterStatus:'all'
  },
  mutations: {
    changeFaver(state, _id) {
      let chose = state.noteList.find((e) => {
        return e.id === _id
      })
      chose.faver = !chose.faver
    },
    changeEdit(state,note) {
      let chose = state.noteList.find((e) => {
        return e.id === note.id
      })
      chose.edit = !chose.edit
    },
    changeNoteContent(state, msg) {
      let chose = state.noteList.find((e) => {
        return e.id === state.current.id
      })
      chose.content = msg
      let editeTime = moment().unix()
      chose.id = editeTime
    },
    changeListStatus(state,status) {
      state.listStatus = status
    },
    setCurrent(state, _id) {
      let chose = state.noteList.find((e) => {
        return e.id === _id
      })
      state.current = chose
      state.lastTime = moment.unix(state.current.id).format('LL')
    },
    pushNewNote(state,note) {
      state.noteList.push(note)
    },
    selectFilterStatus(state,status) {
      state.filterStatus = status
    }
  },
  actions: {},
  getters: {
    filterCardItems(state) {
      if (state.filterStatus === 'all') {
        return state.noteList
      } else {
        let obj = state.noteList.filter((e) => {
          return e.faver
        })
        return obj
      }
    },
    openNote(state) {
      return state.current
    },
  },
  plugins: [createPersistedState()]
})