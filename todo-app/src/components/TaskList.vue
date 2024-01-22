 <template>
    <div class="list-items">
        <ul class="task-list">
            <li v-for="(list,index) in tasks" 
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

                <h4  v-if="!list.isEditing" :class="{ 'completed': list.isCompleted === true }">
                    {{ list.todoName }}
                </h4>
                </div>
                <div class="more-options">
                    <i
                    :class="{ 'disabled-icon': list.isCompleted === true,'ri-edit-circle-fill': list.isCompleted !== true , 'ri-checkbox-circle-line' :list.isCompleted === true }"
                    @click="startEditing(list.id)"
                    ></i>
                    <i class="ri-delete-bin-line" @click="deleteTask(list.id)"></i>
                </div>
            </li>
        </ul> 
</div>
</template>

<script>
export default {
    name:'TaskList',
    data() {
        return{
          listHeader:"Today's List",
          editingId: -1,
          editedTaskName: '',
        }
    }
}
</script>

<style>
.list-items{
    width: 100%;
    height: auto;
    overflow-y: auto;
    margin: 10px 0px;
}

.list-items h3{
    margin: 20px  0px;
    font-size: 1.3rem;
}
.task-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    height: 100%;
}
.task-list li{
    font-size: 24px;
    height: 80px; 
}

.items{
    min-width: 90%;
    height: 80px;
    padding:22px;
    margin: 15px 0px;
    background-color: rgb(113,127,166);
    border-radius: 20px;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}

.items .item-list {
    display: flex;
    gap:20px;
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