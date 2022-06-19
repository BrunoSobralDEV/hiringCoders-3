# NextJS
**Algumas anotações no decorrer da aula**
- Zero configuration (rotas, hot reloading, code splitting e etc)
- Otimizado para produção;
## Fundamentos
- Opinativo (estrutura definida)
### SSG (Static Site Generation)
	- Desvantagens:
		- Build longo;
### CSR (Client Site Rendering)
### SSR (Server Site Rendering)
	- Vantagens:
		- Meta tags mais adequados;
		- Melhor perfomance;
		- Menor processamento do lado do cliente (tudo é renderizado do lado do servidor);
		- HTML maior;
		- Reload completo nas mudanças de rotas;
### SPA (Single Page Application)
	- tudo é "carregado" e é mostrado aos poucos;
	- permite interações, sem reload;
	- depois de "baixado" tudo é feito no browser;
	- Desvantagens:
		- Load inicial mais longo;
		- Performance imprevisível;
		- Robô do google não encontra;
## Quando usar SSG (NextJS, Gatsby)
- performance for o principal;
- Site sem interação;
- Único desenvolvedor;
- Poucas páginas;
ex.: Porfólios, blogs, Lading Pages
## Quando usar SPA
- similar ao SSG
## Quando usar SSR
- indexação do google;
- muitas páginas;
ex. e-commerce, sítes de notícias

### Rotas
- arquivos "privados" dentro da pasta "pages", basta colocar um "_" (underline) antes do nome que não será criado uma "rota"
# GatsbyJS
- é um (framework) gerador de site estático de código aberto construído sobre Node.js usando React e GraphQL;
- Performance e não depende de atualização em tempo real dos dados, o Gatsby é muito recomendado;
- DataSoucer -> building (site estático) -> deploy;
- SSG;
