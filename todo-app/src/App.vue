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
  
    </div>
</div>
</template>

<script>
import  InputForm  from './components/InputForm.vue'
export default {
  name:'App',
  components:{ 
      InputForm,
      TaskList,
  },

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
}
}
</script>

<style>

</style>