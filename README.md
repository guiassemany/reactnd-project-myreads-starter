# Projeto MyReads

#Instalando:
* Execute `yarn install` ou `npm install` na pasta raiz do projeto.
* Ligue o servidor de desenvolvimento com o comando `yarn start` ou `npm start`

## O que foi adicionado - features:
* Página de detalhes do livro (Clicar na capa do livro)
* Link para "comprar o livro" na página de detalhes - Leva a uma pesquisa pelo ISBN. O site irá buscar o livro em várias lojas e exibir o preço.
* Prateleiras dinâmicas, ou seja, se algum dia um livro vier da API com a propriedade shelf com um valor diferente dos três definidos por padrão, o app já está preparado para renderizar esta prateleira e adicionar / mover livros entre a nova prateleira e as outras existentes.

## O que foi usado além do básico do react:
* semantic-ui-react
* semantic-ui-css
* react-content-loader
* react-debounce-input
* moment
* sort-by
* prop-types ? (Acho que não conta)

## O que falta
* Aprender a escrever testes
* Fazer uma alteração maior no front da aplicação

## Estrutura do Projeto
```bash
├── CONTRIBUTING.md
├── README.md - Este arquivo.
├── SEARCH_TERMS.md # Os termos permitidos para a pesquisa de livros do app.
├── package.json
├── public
│   ├── favicon.ico # Icone do React
│   └── index.html
└── src
    ├── App.css # Folha de estilos do app
    ├── App.js # Raiz do App.
    ├── BooksAPI.js # Uma API JavaScript fornecida pela Udacity.
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── utils
    │   ├── Helpers.js # Arquivo com algumas funções úteis exportadas
    │   └── Helpers.test.js # Arquivo de teste para o arquivo acima
    ├── __tests__ # Testes dos componentes
    │   └── App.test.js
    ├── Components # Componentes do App
    │   ├── Book.js
    │   ├── BookDetails.js
    │   ├── BookGrid.js
    │   ├── BookList.js
    │   ├── BookSearch.js
    │   ├── BookShelf.js
    │   ├── BookShelfChanger.js
    │   └── BookShelfLoader.js
    ├── index.css # Estilos Globais.
    └── index.js # Renderizar o DOM.

```