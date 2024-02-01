<template>
    <div class="list-items">
        <h4>{{ listHeader }}</h4>
            <ul class="task-list">
                <li v-for="(list,index) in filteredTasks" 
                :key="index" 
                class="items">
                    <div class="item-list">
                        <input type="checkBox" 
                        class="select-item"
                        :checked="list.isCompleted"
                        @change="updateStatus(list.id)">

                        <input v-if="list.isEditing"
                        class="edit-item"
                        v-model="list.editedTaskName"
                        @keyup.enter="finishEditing(list.id)"
                        />

                    <h4 v-if="!list.isEditing" :class="{ 'completed': list.isCompleted === true }">
                        {{ list.todoName }}
                    </h4>
                    </div>
                    <div class="more-options">
                        <i
                        :class="{ 'disabled-icon': list.isCompleted === true,'ri-edit-circle-fill': list.isCompleted !== true , 'ri-checkbox-circle-line' :list.isCompleted === true }"
                        @click="startEditing(list.id)"
                        ></i>
                        <i class="ri-delete-bin-line" @click="$store.commit('deleteTask',list.id)"></i>
                    </div>
                </li>
            </ul> 
    </div>
</template>

<script>

export default ({
    name:'TaskList',
    data() {
        return{
          listHeader:"Today's List",
          editingId: -1,
          editedTaskName: '',
          showCompleted: true,
        }
    },
    methods:{
        updateStatus(id){
            this.$store.commit('toggleStatus',id);
        },
        // deleteTask(id){
        //     this.$store.commit('deleteTask',id);
        //  },
         startEditing(id) {
            this.$store.commit('startEditing', id);
        },
        finishEditing(id) {
            this.$store.commit('finishEditing', id);
        }
    },
    computed:{
        allTasks(){
            return this.$store.getters.allTasks;
        },
       completedTasks(){
          return this.$store.getters.completedTask;
       },
       pendingTasks(){
          return this.$store.getters.pendingTask;
       },
       filteredTasks(){
            let tasks = [];
            if (this.$store.state.viewMode === 'all') {
            tasks = this.allTasks.slice().sort((a, b) => {
                if (!a.isCompleted && b.isCompleted) return -1;
                if (a.isCompleted && !b.isCompleted) return 1;
                return a.todoName.localeCompare(b.todoName);
            });
            } else if (this.$store.state.viewMode === 'completed') {
                tasks = this.completedTasks;
            } else if (this.$store.state.viewMode === 'pending') {
                tasks = this.pendingTasks;
            }

            return tasks;
       },
   }
})
</script>
<style scoped>
*{
   box-sizing: border-box;
}

.list-items{
    width: 100%;
    height: auto;
    margin: 20px 0px 7px 0px;
}

.list-items h4{
    font-size: 1.3rem;
    margin: 12px 0px;
}
.task-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    height: 100%;
    overflow-y: auto;
}
.task-list li{
    font-size: 20px;
    height: 70px; 
}

.items{
    width: 100%; 
    padding:16px;
    margin: 16px 0px;
    background-color: rgb(113,127,166);
    border-radius: 20px;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}

.items .item-list {
    display: flex;
    gap:10px;
    align-items: center;
}
.items .select-item{
    width: 20px;
    height: 20px;
    border-color: rgb(113,127,166);
    cursor: pointer;
    position: relative;
    accent-color: #39a20a;
}
 .edit-item{
    border:none;
    outline: none;
    width:76%;
    background-color:rgb(113,127,166) ;
    height: 40px;
    padding:10px;
    color:#fff;
    font-size:20px;
    border-bottom:2px solid #fff;
}

.items .more-options{
    display: flex;
    align-items: center;
    gap:20px;
    cursor: pointer;
}

.more-options .disabled-icon {
    color: #fff;
    opacity: 0.5;
    cursor: not-allowed;
  }
  
.task-list i{
    cursor: pointer;
}
.completed{
    text-decoration: line-through;
    color:lightgrey;
}
</style>

