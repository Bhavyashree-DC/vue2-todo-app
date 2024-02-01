<template>
  <div class="task-summary">
      <div class="allTasks-summary">
          <i class="ri-todo-fill" 
          :class="{ active: activeIcon === 'all' }"
          @click="showAllTasks"></i>
      </div>
      <div class="completed-summary">
          <span><i class="ri-checkbox-circle-fill" 
            :class="{ active: activeIcon === 'completed'}"
            @click="showCompletedTasks"></i></span>
          <!-- <span>{{ completedTasks.length }} / {{ this.$store.getters.allTasks.length }} Done </span> -->
      </div>
      <div class="pending-summary">
          <span><i class="ri-hourglass-2-fill" 
            :class="{ active: activeIcon === 'pending'}"
            @click="showPendingTasks"></i></span>
          <!-- <span>{{ pendingTasks.length }} / {{ this.$store.getters.allTasks.length }} Pending </span> -->
      </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data() {
    return {
      activeIcon: 'all',
    };
  },
  computed: {
      completedTasks() {
          return this.$store.getters.completedTask;
      },
      pendingTasks() {
          return this.$store.getters.pendingTask;
      },
  },
  methods: {
      showAllTasks() {
          this.$store.commit('setViewMode', 'all');
          this.activeIcon = 'all';
      },
      showCompletedTasks() {
          this.$store.commit('setViewMode', 'completed');
          this.activeIcon = 'completed';
      },
      showPendingTasks() {
          this.$store.commit('setViewMode', 'pending');
          this.activeIcon = 'pending';
      },
  },
};
</script>

<style scoped>
.task-summary {
    display: flex;
    justify-content: space-evenly;
    gap:20px;
    align-items: center;
    margin: 14px 20px -9px 20px;
  }
  
  .allTasks-summary,
  .completed-summary,
  .pending-summary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap:20px;
    flex-direction: column;
    border-bottom: 2px solid #007bff; 
    border-radius: 50%;
    background-color: rgb(113,127,166);
    padding: 12px 14px;
    margin:20px;
    cursor: pointer;
  }
  .allTasks-summary:hover,
  .completed-summary:hover,
   .pending-summary:hover {
       background-color: rgb(160, 183, 229); 
       color: coral;
  }
  .active{
     background-color: rgb(227, 228, 230);
     color: coral;
  }
  i{
     font-size: 1.5rem;
  }
  
</style>