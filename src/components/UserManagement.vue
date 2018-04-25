<template>
<div id="userRecords">
  <button type="button" class="btn btn-primary" v-on:click="getUsers">Get Users</button>
  <br><br>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'userManagement',

  data () {
    return {
      users: []
    }
  },

  methods: {
    getUsers: function (event) {
      this.$http.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
        this.users = response.data
      })
    }
  }
}
</script>
