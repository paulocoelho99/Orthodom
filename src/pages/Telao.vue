<template>
  <q-layout view="lHh Lpr lFf">
      <q-page-container>
        <q-page class="q-pa-md flex flex-center">
          <q-list bordered separator>
            <q-item v-for="(chamado, index) in chamados" :key="index">
              <q-item-section>{{ chamado.cliente }}</q-item-section>
              <q-item-section>{{ chamado.createdAt }}</q-item-section>
            </q-item>
          </q-list>
        </q-page>
      </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'PageTelao',

  data () {
    return {
      chamados: []
    }
  },

  created () {
    this.getClientes()
  },

  methods: {
    getClientes () {
      this.$db.collection('chamados')
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.chamados.push(doc.data())
            console.log(doc.id, ' => ', doc.data())
          })
        })
        .catch((error) => {
          alert('Erro ao buscar dados: ' + error)
        })
    }
  }
}
</script>
