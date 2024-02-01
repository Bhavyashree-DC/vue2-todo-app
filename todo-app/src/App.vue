<template>
  <div class="container">
      <div class="todo-app">
        <div class="header">
            <h1>{{ header }}</h1>
        </div>
          <CurrentDate></CurrentDate>
          <InputField></InputField>
          <Tabs></Tabs>
          <TaskList :taskList="tasks"></TaskList>
      </div>
  </div>
</template>

<script>

import  InputField  from './components/InputField.vue'
import TaskList from './components/TaskList.vue';
import Tabs from './components/TaskTabs.vue'
import CurrentDate from './components/CurrentDate.vue'

import { mapGetters } from 'vuex'

export default{
  name:'App',
  components:{ 
    InputField,
    TaskList,
    Tabs,
    CurrentDate,
  },
  data(){
    return{
      header:'Todo App'
    }
  },
  computed:{
     ...mapGetters({
        tasks: 'allTasks',
     })
  }
}

</script>
   
<style scoped>
.container{
  width: 500px;
  min-height: 900px;
  background-color:#324D9E;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  color:#fff ;

  display: flex;
  align-items: center;
  flex-direction: column;
  padding:10px;
  margin: 20px;

}
.todo-app{
  width:430px;
  max-height: 50px;
  padding:15px;
  margin: 10px 15px;
}
.todo-app .header{
  text-align: center;
  font-size: 1rem;
  margin-bottom: 10px;
  padding:10px;
}


</style>
