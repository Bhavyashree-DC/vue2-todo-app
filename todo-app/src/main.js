import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    tasks: [
      {
          id:1,
          todoName: 'Task1',
          isCompleted:true,
          isEditing:false,
      },
      {
          id:2,
          todoName: 'Task2',
          isCompleted:false,
          isEditing:false,
      },
      {
          id:3,
          todoName: 'Task3 - store',
          isCompleted:true,
          isEditing:false,
      }
    ],
   
   },
  
   getters: {
    completedTask(state) {
      return state.tasks.filter(todo => todo.isCompleted)
    },
    pendingTask(state){
       return state.tasks.filter(task =>!task.isCompleted)
    },
    allTasks(state) {
      return state.tasks
    }
   },
  mutations: {
    
    saveTask(state,inputValue){
      state.tasks.push({
          id:state.tasks.length + 1,
          todoName:inputValue,
          isCompleted:false,
          isEditing:false,
      })
    },
  }
})
import './assets/main.css'

new Vue({
  el: '#app',
  render: (h) => h(App),
  store: store,
})