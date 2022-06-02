# Monorepo
### PNPM - Configurando server
`pnpm --filter <package_selector> <command>`
- Instalar Package Manager: `npm i -g pnpm`
- Criar package.json: `pnpm init`
- Alterar a propriedade nome no `package.json` do raiz para `*/root` e nas pastas `server` para `*/server` e `web` para `*/web`;
- Atualizar: `pnpm i`;
- Criar `node_modules`: `pnpm --filter @graphql/server i`;
- Rodar projeto a partir do root: `pnpm --filter @graphql/server run start`
**
### React - web
- Instalar React na pasta web: `pnpx create-react-app packages/web`
- Instalar dependências com pnpm. Semelhante ao `yarn`: `pnpm --filter @graphql/web i`
### GraphQL
- Instalar: `pnpm --filter @graphql/server i graphql`
### Dependências
`pnpm --filter @graphql/web i  react-router-dom`