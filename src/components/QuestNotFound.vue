<template>
  <div class="QuestNotFound">
      <i class="material-icons large">event_busy</i>
      <H1> {{ msg }}</H1>
      <h3> For more information, please contact the developers. </h3>
      <div class="container">
          <div class="row">
              <a href = "/#/">Main page</a>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>



<script>

export default {
  name: 'QuestNotFound',
  data () {
    return {
      msg: 'Quest Info not found'
    }
  }
}
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a{
  color: #42b983;
}
.large{
    font-size: 350px;
    color: #999;
}

</style>