import { createStore } from 'vuex';


const store = createStore({
  state: {
    navigation: [
      {
        title: "Projects",
        open: true,
        subnav: [
          {
            title: "Vue.js",
            open: false,
            subnav: [
              { title: "Transitions" },
              { title: "Components" },
              { title: "Slots" }
            ]
          },
          {
            title: "SCSS",
            open: false,
            subnav: [
              { title: "Nesting" }, 
              { title: "Mixins" }
            ]
          },
          { title: "JavaScript" },
          { title: "Webpack" }
        ]
      },
      {
        title: "Portfolio",
        open: true,
        subnav: [
          { title: "Websites" }, 
          { title: "Open Source" }
        ]
      },
      { title: "Resources" },
      {
        title: "Timeline",
        open: true,
        subnav: [
          { title: "2017" }, 
          { title: "2018" }, 
          { title: "2019" }
        ]
      },
      { title: "Documentation" }
    ]
  },
  getters: {
    navigation: state => {
      return state.navigation;
    }
  }
})



export default store;