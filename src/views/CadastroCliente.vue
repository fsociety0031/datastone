<template>
  <div>
    <h2>Cadastro de Cliente</h2>
    <form @submit.prevent="cadastrarCliente">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" v-model="cliente.nome" required>

      <label for="cpf">CPF:</label>
      <input type="text" id="cpf" v-model="cliente.cpf" required>

      <label for="telefone">Telefone:</label>
      <input type="text" id="telefone" v-model="cliente.telefone" required>

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="cliente.email" required>

      <div class="flex">
        <div class="active">
          <p>Ativo:</p>
          <div class="escolha">
            <label for="ativo_sim">Sim</label>
            <input type="checkbox" id="ativo_sim" @change="cliente.ativo = true" :checked="cliente.ativo">
          </div>
          <div class="escolha">
            <label for="ativo_nao">Não</label>
            <input type="checkbox" id="ativo_nao" @change="cliente.ativo = false" :checked="!cliente.ativo">
          </div>
        </div>
  
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      cliente: {
        nome: "",
        cpf: "",
        telefone: "",
        email: "",
        ativo: false,
      },
    };
  },
  methods: {
    ...mapActions({
      actionCadastrarCliente: 'cadastrarCliente'
    }),
    cadastrarCliente() {
      this.actionCadastrarCliente(this.cliente);
      console.log(this.cliente);
      this.cliente = {
        nome: "",
        cpf: "",
        telefone: "",
        email: "",
        ativo: false,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.escolha {
  display: flex;
}
 form {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  max-width: 210px;
  margin-left: auto;
  margin-right: auto;
 }
 form {
  input {
    width: 100%;
  }
  label, input {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  p {
    margin: 0;
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
 .active {
  label[for="ativo"] {
    display: block;
    margin-bottom: 5px;
    text-align: initial;
  }
 }
 .flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
 }
</style>