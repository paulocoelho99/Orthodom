<template>
  <q-layout view="lHh Lpr lFf">
      <q-page-container>
        <q-page class="q-pa-md flex flex-center">
          <q-form @submit.prevent="salvar">
            <q-input label="Insira seu nome inteiro" v-model="cliente" filled style="width: 500px" />
            <q-btn type="submit" label="Enviar" color="primary" />
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
      const timestamp = this.$firebase.firestore.FieldValue.serverTimestamp()
      this.$db.collection('chamados').add({ cliente: this.cliente, createdAt: timestamp })

      this.$q.notify('Chamado com sucesso')

      this.cliente = ''
    }
  }
}
</script>
