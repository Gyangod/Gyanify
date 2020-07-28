import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#9c27b0',
        secondary: '#3f51b5',
        accent: '#795548',
        error: '#f44336',
        warning: '#ffc107',
        info: '#03a9f4',
        success: '#4caf50'
      },
      dark: {
        primary: '#03a9f4',
        secondary: '#009688',
        accent: '#e91e63',
        error: '#ff5722',
        warning: '#ffc107',
        info: '#3f51b5',
        success: '#4caf50'
      }
    }
  },
  icons: {
    iconfont: 'md'
  }
})
