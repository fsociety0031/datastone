<template>
  <div>
    <h2>Listagem de Produtos</h2>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Ativo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="produto in produtos" :key="produto.id">
          <td>{{ produto.nome }}</td>
          <td>{{ produto.ativo ? 'Sim' : 'Não' }}</td>
          <td>
            <button @click="editarProduto(produto)">Editar</button>
            <button @click="inativarAtivarProduto(produto)">{{ produto.ativo ? 'Inativar' : 'Ativar' }}</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['produtos']),
  },
  methods: {
    ...mapActions({
      actionEditarProduto: 'editarProduto',
      actionInativarAtivarProduto: 'inativarAtivarProduto'
    }),
    editarProduto(produto) {
      this.$store.commit('setProdutoParaEdicao', produto);
      this.$router.push('/editar-produto');
    },
  },
};
</script>
<style lang="scss" scoped>
table {
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
}
button {
    padding: 7px 22px;
    border-radius: 5px;
    background: #2684FF; 
    color: #FFF;
    font-weight: 600;
    box-shadow: unset;
    border: 0px;
    margin-left: 5px;
  }
</style>