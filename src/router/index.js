import { createWebHistory, createRouter } from "vue-router";
import CadastroCliente  from "@/views/CadastroCliente.vue";
import CadastroProduto  from "@/views/CadastroProduto.vue";
import AssociarProduto  from "@/views/AssociarProduto.vue";
import ListagemProdutos  from "@/views/ListagemProdutos.vue";
import ListagemClientes  from "@/views/ListagemClientes.vue";
import EditarCliente  from "@/views/EditarCliente.vue";
import EditarProduto  from "@/views/EditarProduto.vue";

const routes = [
  {
    path: "/cadastro-cliente",
    component: CadastroCliente,
  },
  {
    path: "/cadastro-produto",
    component: CadastroProduto,
  },
  {
    path: "/associar-produto",
    component: AssociarProduto,
  },
  {
    path: "/listagem-produtos",
    component: ListagemProdutos,
  },
  {
    path: "/listagem-clientes",
    component: ListagemClientes,
  },
  {
    path: "/editar-cliente",
    component: EditarCliente,
  },
  {
    path: "/editar-produto",
    component: EditarProduto,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;