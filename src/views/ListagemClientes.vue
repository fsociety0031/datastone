<template>
  <div class="listagem">
    <h2>Listagem de Clientes</h2>
    <table class="lista">
      <!-- Cabeçalho da tabela -->
      <thead>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>Telefone</th>
          <th>Email</th>
          <th>Ativo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <!-- Corpo da tabela -->
      <tbody>
        <tr v-for="cliente in clientes" :key="cliente.id">
          <td>{{ cliente.nome }}</td>
          <td>{{ cliente.cpf }}</td>
          <td>{{ cliente.telefone }}</td>
          <td>{{ cliente.email }}</td>
          <td>{{ cliente.ativo ? 'Sim' : 'Não' }}</td>
          <td>
            <button @click="editarCliente(cliente)">Editar</button>
            <button @click="editarCliente(cliente)">{{ cliente.ativo ? 'Inativar' : 'Ativar' }}</button>
            <button @click="associarProdutos(cliente)">Associar Produtos</button>
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
    ...mapState(['clientes']),
  },
  methods: {
    ...mapActions({
      actionEditarCliente: 'editarCliente',
      actionInativarAtivarCliente: 'inativarAtivarCliente',
      actionAssociarProdutos: 'associarProdutos',
    }),
    editarCliente(cliente) {
      this.$store.commit('setClienteParaEdicao', cliente);
      this.$router.push('/editar-cliente');
    },
    associarProdutos() {
      this.$router.push('/associar-produto');
    },
  },
};
</script>
<style lang="scss" scoped>
table {
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
  width: max-content;
  overflow: scroll;
}
.lista {
  width: max-content;
  overflow: scroll;
}
.listagem {
  overflow:auto;
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