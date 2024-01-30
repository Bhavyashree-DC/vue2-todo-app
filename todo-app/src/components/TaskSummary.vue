 <template>
    <div class="task-summary">
        <div class="completed-summary">
          Completed: {{ doneTask.length }}
        </div>
        <div class="pending-summary">
          Pending: {{ pendingTasks.length }}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
   name:'TaskSummary',
   computed:{
    ...mapGetters({
        doneTasks: 'completedTask',
        pendingTasks:'pendingTask'
    })
   }
}
</script>

<style scoped>
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
    background-color: rgb(113,127,166);
    padding: 14px 18px;
  }
  
</style>