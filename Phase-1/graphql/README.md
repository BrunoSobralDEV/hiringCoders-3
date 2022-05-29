# Monorepo
### PNPM - Configurando server

- Instalar Package Manager: `npm i -g pnpm`
- Criar package.json: `pnpm init`
- Alterar a propriedade nome no `package.json` do raiz para `*/root` e nas pastas `server` para `*/server` e `web` para `*/web`;
- Atualizar: `pnpm i`;
- Criar `node_modules`: `pnpm i --filter graphql/server`;
- Rodar projeto a partir do root: `pnpm --filter @graphql/server run start`
**
### React - web
- Instalar React na pasta web: `pnpx create-react-app packages/web`
- Instalar dependências com pnpm. Semelhante ao `yarn`: `pnpm i --filter @graphql/web`
### GraphQL
- Instalar: `instalar o graphql pnpm --filter @dev-demands/server i graphql`