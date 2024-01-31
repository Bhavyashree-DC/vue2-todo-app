<template>
        <div class="date-time-header">
            <div class="date">
                {{ $store.state.currentDate }}
            </div>
            <div class="time">
                {{ $store.state.currentTime }}
            </div>
        </div>
</template>
<script>
export default{
    name:'CurrentDate',
    created() {
       this.$store.dispatch('startDateTimeInterval');
    },
}
</script>

<style scoped>
 .date-time-header{
    display: flex;
     align-items: center; 
    flex-direction: column;
 }
.date,.time{
  margin:10px 0px 0px 0px;
  padding: 10px 10px 5px 10px;
  font-size: 1.4rem;

}
</style>