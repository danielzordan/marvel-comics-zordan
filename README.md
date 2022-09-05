# **Marvel Comics Catalog**

Essa aplicação consome a [Marvel API](https://developer.marvel.com/documentation/getting_started) e monta um catálogo das revistas em quadrinhos retornadas. 

A lista possui: 

- Paginação
- Busca por texto
- Detalhes de cada revista
- Opção de favoritar revista
- Opção de filtrar a lista pelos favoritos

### Tecnologias

O projeto foi criado usando o [Vite](https://vitejs.dev/) e as usadas na construção das features foram:

- React
- React Router Dom
- Typescript
- ES6+
- React Hooks
- styled components
- React lazy load image component (para otimizar a renderização das imagens)
- Axios (para consumir a Marvel API)
- Dialog do Radix UI (para exibir a capa da revista como um modal e seguindo padrões de acessibilidade)
- [Fontawesome](https://fontawesome.com/) para ícones

### Testes

Para testes foram usados:

- Jest
- React testing library
- Cypress (para testes e2e)

### Execução

Para executar o projeto baixe as dependências com o comando 

```bash
npm install
```

Em seguida use o comando:

```bash
npm run dev
```

### Execução dos testes

Para executar os testes unitários utilize o comando:

```bash
npm run test:unit
```

Para executar os testes e2e utilize o comando: