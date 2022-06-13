import { createStore, createLogger } from 'vuex'
import ui from './modules/ui/index.js'

export default createStore({
  modules: {
    ui
  }
})