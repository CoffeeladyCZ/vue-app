<template>
  <v-container fluid>

    <select
      class="select-language"
      v-model="$i18n.locale"
    >
      <option
      class="option-language"
      v-for="(lang, i) in langs"
      :key="`lang-${i}`"
      :value="lang"
      >
      {{ lang }}
      
      </option>
    </select>
  </v-container>
</template>

<script>

export default {
  name: 'SelectLocale',
  data() {
    return { langs: ['cz', 'en'] }
  },
}
</script>

<style>
.select-language {
  padding: 5px 120px;
  color: #616161;
  outline: none;
  border-bottom: 1px solid #616161;
  border-radius: 2px;
  cursor: pointer;

}

.select-language:hover {
  background-color: #FAFAFA;
}

.select-language:focus {
  outline: none;
}

.option-language {
  font-size: 16px;
}
</style>
