<template>
  <v-app-bar 
    app
    absolute
    color="deep-orange lighten-1"
  >
    <v-toolbar-title
      class="white--text"
    >
    <h1 class="h1-title pl-4">{{ $t("title-eshop") }}</h1></v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn
      color="text-white"
      medium
      rounded
      class="mr-3"
    ><router-link to="/">{{ $t("home") }}</router-link></v-btn>
    
    <v-btn
      color="white"
      medium
      rounded
    ><router-link class="text-black" to="/language">{{ $t("language") }}</router-link></v-btn>
    
    <v-menu
      bottom
      left
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          icon
          v-bind="attrs"
          v-on="on"
          class="mx-2"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list
        class=""
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
  
<script>
export default {
  data: () => ({
    items: [
      { title: "Item 1" },
      { title: "Item 2" },
      { title: "Item 3" },
    ],
  }),
}
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
