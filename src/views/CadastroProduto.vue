<template>
  <div>
    <h2>Cadastro de Produto</h2>
    <form @submit.prevent="cadastrarProduto">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" v-model="produto.nome" required>

      <div class="flex">
        <div class="active">
          <p>Ativo:</p>
          <div class="escolha">
            <label for="ativo_sim">Sim</label>
            <input type="checkbox" id="ativo_sim" @change="produto.ativo = true" :checked="produto.ativo">
          </div>
          <div class="escolha">
            <label for="ativo_nao">Não</label>
            <input type="checkbox" id="ativo_nao" @change="produto.ativo = false" :checked="!produto.ativo">
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
      produto: {
        nome: "",
        ativo: false,
      },
    };
  },
  methods: {
    ...mapActions({
      actionCadastrarProduto: 'cadastrarProduto'
    }),
    cadastrarProduto() {
      this.actionCadastrarProduto(this.produto);
      this.produto = {
        nome: "",
        ativo: false,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 210px;
  margin-left: auto;
  margin-right: auto;
  .active {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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