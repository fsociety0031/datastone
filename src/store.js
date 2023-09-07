import { createApp } from 'vue';
import Vuex from 'vuex';
import dataMock from './mock/data.json';

createApp(Vuex);

export default new Vuex.Store({
  state: {
    clientes: dataMock.clientes,
    produtos: dataMock.produtos,
    produtosAssociados: {},
    proximoIdCliente: 1,
    proximoIdProduto: 1,
    clienteParaEdicao: null,
    produtoParaEdicao: null
  },
  mutations: {
    adicionarCliente(state, cliente) {
      cliente.id = state.proximoIdCliente++;
      state.clientes.push(cliente);
    },
    adicionarProduto(state, produto) {
      produto.id = state.proximoIdProduto++;
      state.produtos.push(produto);
    },
    atualizarProduto(state, produtoAtualizado) {
      const index = state.produtos.findIndex(produto => produto.id === produtoAtualizado.id);
      if (index !== -1) {
        state.produtos[index] = produtoAtualizado;
      }
    },
    atualizarCliente(state, cliente) {
      const clienteExistente = state.clientes.find((c) => c.id === cliente.id);
      if (clienteExistente) {
        clienteExistente.nome = cliente.nome;
        clienteExistente.cpf = cliente.cpf;
        clienteExistente.telefone = cliente.telefone;
        clienteExistente.email = cliente.email;
        clienteExistente.ativo = cliente.ativo;
      }
    },
    inativarAtivarCliente(state, cliente) {
      const clienteExistente = state.clientes.find((c) => c.id === cliente.id);
      if (clienteExistente) {
        clienteExistente.ativo = !clienteExistente.ativo;
      }
    },
    associarProdutosAoCliente(state, { clienteId, produtos }) {
      const clienteExistente = state.clientes.find((c) => c.id === clienteId);
      if (clienteExistente) {
        clienteExistente.produtos = produtos;
        state.produtosAssociados[clienteId] = produtos;
        console.log(state, clienteId);
      }
    },
    setClienteParaEdicao(state, cliente) {
      state.clienteParaEdicao = cliente;
    },
    setProdutoParaEdicao(state, produto) {
      state.produtoParaEdicao = produto;
    },
  },
  actions: {
    cadastrarCliente({ commit }, cliente) {
      commit('adicionarCliente', cliente);
    },
    cadastrarProduto({ commit }, produto) {
      commit('adicionarProduto', produto);
    },
    editarCliente({ commit }, cliente) {
      commit('atualizarCliente', cliente);
    },
    editarProduto({ commit }, produto) {
      commit('atualizarProduto', produto);
    },
    inativarAtivarCliente({ commit }, cliente) {
      commit('inativarAtivarCliente', cliente);
    },
    associarProdutosAoCliente({ commit }, { clienteId, produtos }) {
      commit('associarProdutosAoCliente', { clienteId, produtos });
    },
  },
});
