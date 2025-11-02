<br>
<p align="center">
  <img src="documentation/cookiefy/logo.png" alt="Cookiefy Logo" width="100">
</p>

<h1 align="center">Cookiefy</h1>

## 🖥️ Descrição

O Cookiefy é uma plataforma inovadora para compartilhamento e descoberta de receitas culinárias. Nosso objetivo é conectar amantes da culinária através de uma experiência intuitiva e funcional para explorar, criar e compartilhar receitas deliciosas.

---

## 📖 Backlog do Produto

[Backlog do Produto](./documentation/images/user-stories.png)

---

## 📅 Sprints

**Sprint 1**: [User Stories](./documentation/images/user-stories-sprint-1.png)

**Sprint 2**: 🚧 [Futuro Desenvolvimento](./docs/backlog.md#sprint-2---funcionalidades-avançadas-em-desenvolvimento-)

**Sprint 3**: 🚧 [Futuro Desenvolvimento](./docs/backlog.md#sprint-3---recursos-premium-planejado-)

---

### Sprint 1

- Cadastro de usuário com e-mail e senha
- Publicação de receitas com fotos e descrições
- Tela inicial com receitas em destaque e categorias
- Busca de receitas por nome, ingrediente ou tipo de culinária
- Filtros por tempo de preparo e nível de dificuldade
- Visualização detalhada da receita (ingredientes, passos, tempo, valor nutricional, fotos)
- Modo de preparo interativo com timers por etapa
- Favoritar receitas e acessar lista de favoritos
- Edição de dados básicos do perfil (nome/foto)

![User Stories Sprint 1](documentation/images/user-stories-sprint-1.png)

### Sprint 2


- Avaliação de receitas com nota e comentário
- Geração de lista de compras a partir de uma receita, com marcação de itens comprados
- Salvar receitas para acesso offline (texto + imagens essenciais)
- Compartilhamento de receitas via WhatsApp/Instagram/Facebook

![User Stories Sprint 2](documentation/images/user-stories-sprint-2.png)

### Sprint 3

- Login com conta Google
- Notificações push de novas receitas e sugestões
- Painel administrativo no app para gestão de receitas (acesso restrito)
- Moderação de receitas enviadas (excluir/editar) e monitoramento de estatísticas de uso
- Comandos de voz para buscar e navegar pelos passos da receita
- Seleção de idioma do app e conteúdos traduzidos quando disponíveis

![User Stories Sprint 3](documentation/images/user-stories-sprint-3.png)

---

## 🚀 Instalação

O Cookiefy é composto por dois projetos principais:

- [cookiefy-mobile](https://github.com/0thigs/cookiefy-mobile): Aplicativo mobile (React Native + Expo)

- [cookiefy-server](https://github.com/0thigs/cookiefy-server): API/Servidor (Node.js + TypeScript + Prisma)

Siga os passos abaixo para rodar ambos localmente:

### 1. Clonar os repositórios

```bash
git clone https://github.com/0thigs/cookiefy-mobile.git

git clone https://github.com/0thigs/cookiefy-server.git
```

---

### 2. Instalar dependências

#### Mobile (App)

```bash
cd cookiefy-mobile
npm install
```

#### Servidor (API)

```bash
cd ../cookiefy-server
npm install
```

---

### 3. Configurar variáveis de ambiente

#### Mobile

- Edite o arquivo `app.json` e configure o campo `extra.apiBaseUrl` para apontar para a URL da API local, por exemplo:
  ```json
  "extra": {
    "apiBaseUrl": "http://localhost:3333"
  }
  ```

#### Servidor

- Copie `.env.example` para `.env` e preencha as variáveis:
  ```bash
  cp .env.example .env
  ```
- Configure as variáveis principais, como:
  - `DATABASE_URL` (string de conexão do PostgreSQL)
  - `JWT_ACCESS_SECRET` e `JWT_REFRESH_SECRET` (chaves secretas)

---

### 4. Configurar o banco de dados (Servidor)

Certifique-se de ter o PostgreSQL rodando e a string de conexão correta no `.env`.

```bash
# Executar as migrations do Prisma
npx prisma migrate

```

---

### 5. Rodar os projetos

#### Servidor (API)

```bash
cd cookiefy-server
npm run dev
```

A API estará disponível em http://localhost:3333

#### Mobile (App)

Abra um novo terminal:

```bash
cd cookiefy-mobile
npx expo start
```

O Expo abrirá o app no navegador e você poderá rodar no emulador ou dispositivo físico.

---

### 6. Testar a aplicação

- Acesse a API em [http://localhost:3333/docs](http://localhost:3333/docs) para ver a documentação Swagger.
- Use o app mobile normalmente, ele já estará conectado à API local.

---

### Observações

- Para rodar em produção, consulte os READMEs de cada repositório para detalhes de build e deploy.
- Certifique-se de que as portas não estejam em uso e que o mobile aponte para o IP correto da API se for testar em dispositivo físico.

8. **Baixa**: Como usuário, quero favoritar uma receita e acessar minha lista pessoal de favoritos, para achar rápido depois. (5)
9. **Baixa**: Como usuário, quero editar dados básicos do meu perfil (nome/foto), para manter minha conta atualizada. (2)

<!-- ## 📚 Documentação

- [Documentação do Projeto](./docs/README.md)
- [Backlog do Produto](./docs/backlog.md)
- [Arquitetura do Sistema](./docs/architecture.md)
- [API Documentation](./docs/api.md)
- [Padrão de Commits](./docs/commit-guideline.md) -->

---

## 📜 Licença

Este projeto está licenciado sob a Licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).

---

## 👨‍💻 Autor

<p align="center">
  <img src="https://github.com/0thigs.png" alt="0thigs Avatar" width="100" style="border-radius: 50%;">
</p>

<p align="center">
  <b>Desenvolvido por <a href="https://github.com/0thigs">0thigs</a></b><br>
  <a href="https://github.com/0thigs">
    <img src="https://img.shields.io/github/followers/0thigs?label=GitHub&style=social" alt="GitHub Followers">
  </a>
</p>
