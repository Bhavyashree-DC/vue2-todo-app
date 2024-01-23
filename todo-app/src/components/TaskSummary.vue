 <template>
    <div class="task-summary">
        <div class="completed-summary">
          Completed: {{ this.$store.getters.completedTask.length }}
        </div>
        <div class="pending-summary">
          Pending: {{ this.$store.getters.pendingTask.length }}
        </div>
    </div>
</template>

<script>
export default {
   name:'TaskSummary',
}
</script>

<style scoped>
.task-summary {
    display: flex;
    justify-content: space-evenly;
    gap:20px;
    align-items: center;
    margin: 18px 20px -5px 20px;
  }
  
  .completed-summary,
  .pending-summary {
    border-bottom: 2px solid #007bff; 
    border-radius: 20px;
    background-color: rgb(113,127,166);
    padding: 14px 18px;
  }
  
</style>