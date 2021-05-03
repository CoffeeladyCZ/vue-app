<template>
  <v-app>
    <TopBar />
    <SideBar />
    <v-main
      id="main_content"
      class="d-flex justify-center align-center "
    >
      <router-view/>
     
    </v-main>
    <Footer /> 
  </v-app>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import SideBar from "@/components/SideBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: { TopBar, SideBar, Footer },
};
</script>

<style>
#main_content {
  margin-left: 256px;
  width: calc(100% - 256px);
}
body .v-main__wrap {
  flex: 0 0 auto;
  max-width: 500px;
}
</style>
