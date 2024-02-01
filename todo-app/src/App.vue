<template>
  <div class="container">
      <div class="todo-app">
          <header>
              <div class="header">
                  <!-- <h2>{{ header }} </h2>   -->
              </div>
          </header>
          <hr>
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
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(72, 70, 70, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
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
  font-size: 1.5rem;
  margin-bottom: 10px;
  padding:10px;
}
.todo-app hr{
  height:5px;
}

.status{
  display:flex;
  gap:19px;
  width:100%;
  margin:5px 0px;
  color: #fff;
  padding:20px 0px;
}

.status li{
  list-style: none;
  padding: 10px 0px;
}
.status h3{
   margin:14px 0px;
}
.bar{
  background: #fff;
  color:#324D9E;
  display: block;
  height:10px;
  width:200px;
  border:1px solid rgba(0,0,0,0.3);
  border-radius: 10px;
  overflow:hidden;
}
.task-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
}


</style>
