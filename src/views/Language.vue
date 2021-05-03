<template>
  
  <v-container
    class="px-0"
    fluid
  >
    <v-btn
          color="orange"
          text
        >
          {{ $t(message.hello) }}
        </v-btn>
  </v-container>
</template>

<script>
// import VueI18 from "vue-i18n";

// Vue.use(VueI18)

const messages = {
    en: {
      message: {
        hello: "Welcome to the webside."
      }
    },
    cz: {
      message: {
        hello: "Vítejte na webu"
      }
    }
  }


  export default {
    name: "Language",
    locale: "cz",
    messages,
    data () {
      
    },
  }
</script>
