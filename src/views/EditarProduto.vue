<template>
  <div>
    <h2>Editar Produto</h2>
    <form @submit.prevent="salvarEdicao">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" v-model="produto.nome" required>

      <div class="ativo">
        <label for="ativo">Ativo:</label>
        <input type="checkbox" id="ativo" v-model="produto.ativo">
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
      produto: {},
    };
  },
  computed: {
    ...mapState(['produtoParaEdicao']),
  },
  methods: {
    ...mapActions({
      actionEditarproduto: 'editarProduto',
    }),
    salvarEdicao() {
      this.actionEditarproduto(this.produto);
      this.$router.push('/listagem-produtos');
    },
  },
  created() {
    this.produto = { ...this.produtoParaEdicao };
  },
};
</script>
<style lang="scss" scoped>
  button {
    padding: 7px 22px;
    border-radius: 5px;
    background: #2684FF; 
    color: #FFF;
    font-weight: 600;
    box-shadow: unset;
    border: 0px;
  }
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
  }
</style>