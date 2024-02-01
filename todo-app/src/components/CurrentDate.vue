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
     /* align-items: center;  */
    flex-direction: column;
 }
.date{
  margin:5px 0px 0px 0px;
  padding: 7px 10px 2px 10px;
  font-size: 1.4rem;

}

.time{
  margin:5px 0px 0px 0px;
  padding: 7px 10px 20px 10px;
  font-size: 1.4rem;

}
</style>