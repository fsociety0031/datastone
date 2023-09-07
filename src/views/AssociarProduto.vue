<template>
  <div>
    <h2>Associar Produtos ao Cliente</h2>
    <label for="cliente">Selecione um Cliente: </label>
    <select v-model="clienteSelecionado" @change="carregarProdutos">
      <option value="">Selecione um Cliente</option>
      <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id">{{ cliente.nome }}</option>
    </select>

    <div class="lista" v-if="clienteSelecionado !== ''">
      <h3>Produtos Disponíveis</h3>
      <ul  v-for="produto in produtos" :key="produto.id">
        <input          
          type="checkbox"          
          v-model="produtosSelecionados[clienteSelecionado]"
          :label="produto.nome"
          :value="produto.id"
        />
        <label :for="produto.nome">{{ produto.nome }}</label>
      </ul>

      <button @click="associarProdutos">Associar Produtos</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      clienteSelecionado: '',
      produtosSelecionados: {},
    };
  },
  computed: {
    ...mapState(['clientes', 'produtos', 'produtosSelecionados']),
  },
  methods: {
    ...mapActions({
      actionAssociarProdutosAoCliente: 'associarProdutosAoCliente'
    }),
    carregarProdutos() {
      const clienteId = this.clienteSelecionado;
      if (!clienteId) {
        return;
      }

      const cliente = this.clientes.find((c) => c.id === clienteId);

      if (cliente) {
        const produtosAssociados = cliente.produtosAssociados || [];
        this.produtosSelecionados[clienteId] = produtosAssociados;
      }
    },
    associarProdutos() {
      const clienteId = this.clienteSelecionado;
      const produtosSelecionados = this.produtosSelecionados[clienteId] || [];
      
      this.actionAssociarProdutosAoCliente({ clienteId, produtos: produtosSelecionados });
      console.log(produtosSelecionados)
    },
  },
};
</script>
<style lang="scss" scoped>
.lista {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
ul {
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 0;
  padding-right: 0;
}
button {
  align-self: center;
}
h3 {
  align-self: center;
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
</style>