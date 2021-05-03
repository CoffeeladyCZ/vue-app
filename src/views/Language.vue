<template>
  <v-container
    class="px-0"
    fluid
  > 
    <h2 class="language-title">{{ $t("change")}}</h2>
    <SelectLocale />
  </v-container>
</template>

<script>
import SelectLocale from "@/components/SelectLocale.vue";

export default {
  name: "Language",
  components: { SelectLocale }
}
</script>

<style>
.language-title {
  font-size: 30px;
  margin-bottom: 20px;
  color: #616161;
}
</style>
