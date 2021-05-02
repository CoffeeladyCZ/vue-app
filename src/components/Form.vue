<template>
  <v-card
  >
    <v-form
    class="pa-6 auto"

    ref="form"
    v-model="valid"
    lazy-validation
    relative
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="agreeToTerms"
      label="Souhlasím s podmínkami"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Potvrdit
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Smazat
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
  </v-card>
</template>


<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Zadání jména je povinné.',
        v => (v && v.length <= 10) || 'Jméno musí mít méně než 10 znaků.',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Zadání e-mailu je povinné.',
        v => /.+@.+\..+/.test(v) || 'E-mail není platný.',
      ],
      checkbox: false,
      select: null,
      agreeToTerms: [
        v => !!v || 'Musíte souhlasit s podmínkami pro pokračování.',
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>


<style>

</style>