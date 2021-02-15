<template>
  <q-layout view="lHh Lpr lFf">
      <q-page-container>
        <q-page class="q-pa-md">
          <q-form @submit.prevent="salvar">
            <q-input label="Cliente" v-model="cliente" filled />
          </q-form>
        </q-page>
      </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'PageIndex',

  data () {
    return {
      cliente: ''
    }
  },

  mounted () {
  },

  methods: {
    salvar () {
      this.$db.collection('chamados').add({ nome: this.cliente })

      this.$q.notify('Chamado com sucesso')

      this.cliente = ''
    }
  }
}
</script>
