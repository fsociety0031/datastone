# Cadastro de Clientes e Produtos - Teste Técnico

Este projeto foi desenvolvido como parte de um teste técnico para criar um sistema de cadastro de clientes e produtos, bem como associar produtos a clientes. Neste README, vou fornecer informações sobre como o projeto foi resolvido, as decisões tomadas e como você pode executá-lo.

## Decisões de Design

O projeto foi desenvolvido usando o framework Vue.js para a parte de frontend, com Vuex para o gerenciamento de estado. Foram criadas telas para o cadastro de clientes, produtos e associação de produtos a clientes. Também foi adicionada uma página de listagem de clientes e produtos, com opções para editar, inativar/ativar e associar produtos.

As principais decisões de design incluem:

- Uso do Vue.js como framework principal para o frontend.
- Uso do Vuex para gerenciamento de estado.
- Criação de telas distintas para cada funcionalidade (cadastro de cliente, cadastro de produto, associação de produtos, listagem de clientes e produtos).
- Opção para escolher "Ativo (Sim ou Não)" para clientes e produtos.
- Utilização de checkboxes separados para "Sim" e "Não" nos formulários.
- Organização do código em componentes Vue reutilizáveis.

## Estrutura do Projeto

A estrutura do projeto foi organizada da seguinte forma:

- `mock/`: Contém o arquivo JSON de mock para exemplo.
- `views/`: Contém as telas principais do aplicativo.
- `store.js`: Arquivo de configuração do Vuex para o gerenciamento de estado.
- `App.vue`: O componente raiz do aplicativo.
- `main.js`: Arquivo de inicialização do Vue.
- `router.js`: Configuração das rotas da aplicação.

## Como Rodar o Projeto

Para rodar o projeto, siga estas etapas:

1. Clone este repositório para sua máquina local.
2. Certifique-se de que você tem o Node.js instalado.
3. No diretório raiz do projeto, execute o seguinte comando para instalar as dependências: yarn ou npm install
4. Após a instalação, inicie o servidor de desenvolvimento com o seguinte comando: yarn dev ou npm run dev
5. O aplicativo estará disponível em `http://localhost:5173`. Acesse este URL em seu navegador para usar o aplicativo.

## Observações

- Os dados são mocados no aplicativo para refletir nos grids, caso queria ver os dados ou altera-los use de /src/mock/data.json

Espero que este README forneça as informações necessárias para executar e entender o projeto. Se você tiver alguma dúvida ou precisar de assistência adicional, não hesite em entrar em contato.

Obrigado por considerar meu teste técnico!