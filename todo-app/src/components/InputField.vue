<template>
    <div class="input-field">
        <input type="text" id="InputBox" v-model='inputValue' @keyup.enter="saveItems" placeholder="Enter task here..."/>
        <button @click="saveItems">ADD</button>
    </div>
</template>


<script>
   export default{
     name:'InputField',
     data(){
        return{
         inputValue : '',
        }
     },
     methods: {
        saveItems() {
            if(!this.inputValue){
                alert('Please enter the input!')
                return;
            }

            const existingTask = this.$store.getters.allTasks.find(
                                 (task) => task.todoName.toLowerCase() === this.inputValue.toLowerCase());
                                 
            if(existingTask){
                alert("Task with the same name already exists!");
                return;
            }
            this.$store.commit('saveTask', this.inputValue);
            this.inputValue = ''; 
        },
    },
 
   }
</script> 

<style scoped>

.input-field{
    display:flex;
    align-content: center;
    justify-content: space-between;
    gap:20px;
}
.input-field input{
    width:90%;
    height:60px;
    border: none;
    outline: none;
    background-color:#919AB6;
    border-radius: 20px;
    font-size:18px;
    padding: 8px;
    margin:14px 0px 20px 0px;
    color:#fff;
}
.input-field input::placeholder{
    padding:20px 30px;
    font-size: 18px;
    color:#fff;
}
.input-field button{
   width:68px;
   height: 60px;
   padding:10px;
   margin: 14px 0px 20px 0px;
   border-radius: 10px;
   cursor: pointer;
   background-color:coral;
   color:#fff;
}
.input-field button:hover{
    background-color:#f0997a  ;
}
.task-list ul.list-items{
    min-height: 80px;
    background-color: #6B799E;
    border-radius: 30px;
    color:#FFF;

    padding:15px;
    margin: 10px;
    list-style: none;

    display: flex;

}
.task-list ul li{
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:30px;
}
.task-list i{
    cursor: pointer;
}
</style>