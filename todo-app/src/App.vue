<template>
  <div class="container">
      <div class="todo-app">
          <header>
              <div class="header">
                  <h2>{{ header }} </h2>  
              </div>
          </header>
          <hr>
          <div class="date">
              {{ currentDate }}
          </div>
          <InputForm></InputForm>
          <div class="task-summary">
           <div class="completed-summary">
             Completed: {{ completedTask.length }}
           </div>
           <div class="pending-summary">
             Pending: {{ pendingTask.length }}
           </div>
         </div>
          <!-- <div class="status">
            <li><h3>Completed</h3>
                <span class="bar" :style="{ width: completedLevel, backgroundColor: completedBarColor }" ></span>
           </li>
            <li><h3>Pending</h3>
                <span class="bar" ><span class="pending" :style="{ width: pendingLevel, backgroundColor: pendingBarColor }"></span></span>
            </li>
          </div> -->
         <TaskList :taskList="tasks"></TaskList>
      </div>
  </div>
</template>

<script>
import  InputForm  from './components/InputForm.vue'
import TaskList from './components/TaskList.vue';
import { mapGetters } from 'vuex'

export default{
  name:'App',
  components:{ InputForm,TaskList},

  data(){
     return{
        header:'ToDo App', 
        dateFormatOptions: {
        weekday: "long",
        month: "long",
        day: "numeric",
     },
     }
  },
  
  computed:{
     currentDate(){
        let today = new Date();
        let dateFormat = new Intl.DateTimeFormat("en-GB", this.dateFormatOptions);
        return dateFormat.format(today);
     },
     completedBarColor() {
     const totalTasks = this.allTasks.length;
     const completedTasks = this.completedTasks.length;
     const completionPercentage = (completedTasks / totalTasks) * 100;

    
     return completionPercentage > 50 ? '#28a745' : '#5bc0de'; 
   },

   pendingBarColor() {
     const totalTasks = this.allTasks.length;
     const pendingTasks = this.pendingTasks.length;
     const completionPercentage = (pendingTasks / totalTasks) * 100;

     return completionPercentage > 50 ? '#ffc107' : '#5bc0de'; 
   },
   completedLevel() {
     const totalTasks = this.allTasks.length;
     const completedTasks = this.completedTasks.length;
     return (completedTasks / totalTasks) * 100 || 0; // Prevent division by zero
   },

   pendingLevel() {
     const totalTasks = this.allTasks.length;
     const pendingTasks = this.pendingTasks.length;
     return (pendingTasks / totalTasks) * 100 || 0; // Prevent division by zero
   },
     ...mapGetters({
        tasks: 'allTasks',
        completedTask :'completedTask',
        pendingTask :'pendingTask'
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
.todo-app .date{
  margin:10px 0px;
  padding: 10px;
  font-size: 1.4rem;
}

.task-summary {
  display: flex;
  justify-content: space-evenly;
  gap:20px;
  align-items: center;
  margin: 10px 20px 0px 20px;
}

.completed-summary,
.pending-summary {
  border-bottom: 2px solid #007bff; 
  border-radius: 20px;
  background-color: rgb(113,127,166);/* Change color as needed */
  padding: 18px;
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
