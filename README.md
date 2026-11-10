# Cyber Hunt Lab

Blog e biblioteca pública de prompts técnicos, com identidade visual tecnológica, animações, páginas institucionais e espaços para anúncios Adsterra.

## O que é (e o que não é)
- É um blog público de prompts: visitantes navegam e leem sem criar conta.
- Não existe login de visitante, cadastro de usuário ou área de membros.
- Não há painel administrativo público. O Google Analytics é configurado pelo ambiente de hospedagem.
- As páginas individuais dos prompts são textuais e não incluem imagens.
- A meta de 50 milhões é capacidade futura de catálogo, não geração de 50 milhões de páginas vazias. Somente conteúdos reais, únicos, úteis e publicados devem entrar no sitemap.

## Executar localmente
Requisitos: Node.js 20.9+ e PostgreSQL para o catálogo dinâmico.

```bash
cp .env.example .env
npm install
npx prisma generate
npm run dev
```
Acesse http://localhost:3000.

## Rotas
- `/` — apresentação do Cyber Hunt Lab e destaques da biblioteca.
- `/sobre` — apresentação profissional de Ana Caroline Lamas.
- `/biblioteca` — categorias e pesquisa inicial.
- `/biblioteca/[slug]` — página pública individual de um prompt publicado.
- `/sitemap.xml` — índice de sitemaps.
- `/sitemaps/static.xml` — páginas institucionais.
- `/sitemaps/prompts/[page]` — lotes de até 50.000 URLs públicas.
- `/robots.txt` — regras para mecanismos de busca.

## Google Analytics 4
Defina `NEXT_PUBLIC_GA_MEASUREMENT_ID` com o Measurement ID `G-XXXXXXXXXX` no ambiente de produção e faça novo deploy. O GA4 passa a coletar eventos de navegação. Para consultar relatórios, use o painel do próprio Google Analytics; esta versão não oferece painel privado nem consulta da Data API.

## Adsterra
No painel Publisher da Adsterra, crie os formatos/unidades desejados e copie as URLs HTTPS dos scripts fornecidos. Configure:
- `NEXT_PUBLIC_ADSTERRA_TOP_SCRIPT_URL`
- `NEXT_PUBLIC_ADSTERRA_INLINE_SCRIPT_URL`
- `NEXT_PUBLIC_ADSTERRA_BOTTOM_SCRIPT_URL`

Os espaços aparecem na página inicial, na biblioteca e nas páginas de prompts. Sem os códigos reais do Publisher, os anúncios não são exibidos. Não use códigos inventados. Verifique as políticas da Adsterra e a legislação de privacidade aplicável antes de ativar publicidade e rastreamento.

## Banco e conteúdo
O schema Prisma contém `Prompt`, com slug único, categoria, conteúdo, tags, tecnologias, estado editorial e datas. Configure `DATABASE_URL`, gere o cliente e aplique migrações conforme o ambiente. Cadastre e revise conteúdo real antes de publicar.

## SEO e escala
Sitemap XML dividido em arquivos de até 50.000 URLs. O sitemap deve conter apenas páginas canônicas, acessíveis, indexáveis e publicadas. O Google não garante indexação de todas as URLs enviadas; 50 milhões de páginas exigem qualidade editorial, infraestrutura, observabilidade, busca indexada, geração incremental e testes de carga. Antes de produção, validar a estratégia de paginação no banco, cache, canonical, dados estruturados e Search Console.

## Segurança
Não há contas de visitantes nem painel administrativo. Não exponha credenciais do banco ou de serviços no cliente. Configure HTTPS, atualize dependências, aplique rate limiting às rotas de escrita/importação quando forem implementadas, valide conteúdo no servidor e mantenha backups. O banco não deve ser acessível publicamente.
