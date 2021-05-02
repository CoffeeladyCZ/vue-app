<template>
  <v-app-bar 
    app
    absolute
    color="deep-orange lighten-1"
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title
      class="white--text"
    >
    <h1 class="h1-title">Webside</h1></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      color="white"
      medium
      rounded
      class="mr-3"
    ><router-link to="/">Home</router-link></v-btn>
    
    <v-btn
      color="white"
      medium
      rounded
    ><router-link class="text-black" to="/language">Language</router-link></v-btn>

  </v-app-bar>
</template>
  
<script>

</script>

<style>
  .h1-title {
    font-size: 28px;
  }
  body .v-application a {
    color: black ;
    text-decoration: none;
  }
</style>
