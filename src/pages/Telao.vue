<template>
  <q-layout view="lHh Lpr lFf">
      <q-page-container>
        <q-page class="q-pa-md flex flex-center">
          <q-list bordered separator>
            <q-item v-for="(chamado, index) in chamados" :key="index">
              <q-item-section>{{ chamado.cliente }}</q-item-section>
              <q-item-section>{{ chamado.createdAt.toDate() }}</q-item-section>
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
      chamados: [],
      realtime: null
    }
  },

  created () {
    this.getClientes()
  },

  // executa quando sai da tela
  beforeDestroy () {
    // fecha a conexao realtime com firestore
    this.realtime()
  },

  methods: {
    getClientes () {
      this.realtime = this.$db.collection('chamados')
        .onSnapshot(querySnapshot => {
          let dados = []

          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, ' => ', doc.data())
            if (doc.exists) {
              dados.push(doc.data())
            } else {
              dados = []
            }
          })

          this.chamados = dados
        })
    }
  }
}
</script>
