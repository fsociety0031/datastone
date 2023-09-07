<template>
  <div>
    <h2>Editar Cliente</h2>
    <form @submit.prevent="salvarEdicao">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" v-model="cliente.nome" required>

      <label for="cpf">CPF:</label>
      <input type="text" id="cpf" v-model="cliente.cpf" required>

      <label for="telefone">Telefone:</label>
      <input type="text" id="telefone" v-model="cliente.telefone" required>

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="cliente.email" required>

      <div class="ativo">
        <label for="ativo">Ativo:</label>
        <input type="checkbox" id="ativo" v-model="cliente.ativo">
      </div>


      <button type="submit">Salvar</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      cliente: {},
    };
  },
  computed: {
    ...mapState(['clienteParaEdicao']),
  },
  methods: {
    ...mapActions({
      actionEditarCliente: 'editarCliente',
    }),
    salvarEdicao() {
      this.actionEditarCliente(this.cliente);
      this.$router.push('/listagem-clientes');
    },
  },
  created() {
    this.cliente = { ...this.clienteParaEdicao };
  },
};
</script>
<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  max-width: 210px;
  input {
    width: 100%;
  }
  .ativo {
    display: flex;
  }
  button {
    padding: 7px 22px;
    border-radius: 5px;
    background: #2684FF; 
    color: #FFF;
    font-weight: 600;
    box-shadow: unset;
    border: 0px;
  }
}
</style>