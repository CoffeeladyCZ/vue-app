<template>
  <v-navigation-drawer 
    fixed
    permanent
    light
    id="main_sidebar"
  >
    <v-divider></v-divider>

    <Title />

    <v-card
      class="mx-auto my-5"
      max-width="200"
      v-for="nameItem of nameItems"
      :key="nameItem"
    >
      <v-card-title>{{ nameItem }}</v-card-title>
      <v-card-text class="text--primary">
        <p>Praha - Letná</p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="orange"
          text
        >
          {{ $t("share") }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
import Title from "@/components/Title.vue";

export default {
  name: "SideBar",
  components: { Title },
  data: () => ({
    nameItems: ["format.cafe", "Kafe Karlín", "Urban Café"],
  }),
}
</script>

<style scoped>
#main_sidebar {
  height: calc(100vh - 64px - 48px);
  margin-top: 64px;
  z-index: 0;
}

.main-title {
  margin: 10px 20px;
  text-align: center;
}

@media (max-width: 800px) {
  body .v-navigation-drawer {
    display: none;
  }
}
</style>
