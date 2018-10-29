<template>
  <div class="QuestInfo">
    <h1> Quest info page </h1>
    <div class="container">
      <div class="row">
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col">BuildId</th>
              <th scope="col">Platform</th>
              <th scope="col">QuestName</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col"><p> {{ msg.questInfo.globalId }} </p></th>
              <th scope="col"><p> {{ msg.questInfo.platform }} </p></th>
              <th scope="col"><p> {{ msg.questInfo.name }} </p></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <h2 class="text-center"> Pathways </h2>
    <div class="container">
      <div class="row">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Status</th>
              <th scope="col">Path Name</th>
              <th scope="col">Leafs Info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{{ msg.questInfo.pathway.status }}</th>
              <td>{{ msg.questInfo.pathway.name }}</td>
              <td> 
                <span v-for = "(key, index) in msg.questInfo.pathway.leafs" :key = "index" >
                  <i class="material-icons greenA" v-if= " msg.questInfo.pathway.leafs[index]  === msg.leafsInfo[index]">
                    done arrow_right_alt</i>
                  <i class="material-icons redA" v-else>clear</i>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <a href = "/"> Main Page</a>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'


export default {
  name: 'QuestInfo',
  data () {
    return {
      msg: null,
      errored: false,
      loading: true
    }
  },
    mounted() {
    axios
    .get(`http://localhost:3000/${this.$route.params.alias}/${this.$route.params.globalId}`)
    .then(response => (this.msg = response.data))
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => (this.loading = false))
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.redA {
  color: red;
}

.greenA{
  color: green;
}
</style>
