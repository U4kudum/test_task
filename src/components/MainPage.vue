<template>
  <div class="MainPage">
    <h1>Main Page</h1>
    <div class="container">
      <div class="row">
        <table class="table table-bordered">
          <thead>
            <th scope="col" class="info" v-for = "(info, index) in msg" :key="index">
              <p>{{ info.alias }}</p>
            </th>
          </thead>
          <tbody>
            <th scope="col" class="info" v-for = "(info, index) in msg" :key="index">
              <i class="material-icons" v-if=" info.status === 'SUCCESS'">
                <a class="geenA" :href = "'/#/'+info.alias+'/'+info.globalId">done</a>
              </i>
              <i class="material-icons" v-else-if=" info.status === 'CRASH'">
                <a class="redA" :href = "'/#/'+info.alias+'/'+info.globalId">clear</a>
              </i>
              <i class="material-icons" v-else>
                <a class="blackA" href="/#/quest_not_found">remove</a>
              </i>
            </th>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'MainPage',
  data () {
    return {
      msg: null,
      errored: false,
      loading: true
    }
  },

  mounted() {
    axios
    .get('http://localhost:3000/')
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

.redA {
  color: red;
}

.blackA { 
  color: black;
}

.greenA{
  color: green;
}
</style>
