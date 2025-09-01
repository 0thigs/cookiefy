# Padrão de Commits 👥

## 📝 Formato

```
type: subject
```

- **type:** Que tipo de mudança é esta? (Veja lista abaixo)
- **subject:** Um resumo curto e descritivo da mudança

---

## 📋 Regras da Linha de Assunto: 3 Regras Simples

1. **Use o modo imperativo.** Escreva como se estivesse dando um comando
   - ✅ `feat: Add user login page`
   - ❌ `feat: Added user login page`

2. **Mantenha curto.** Procure usar 50 caracteres ou menos

3. **Não termine com ponto.** 

---

## 🔧 Tipos de Commit Comuns

Mantenha a lista de tipos pequena e simples:

- **feat:** Uma nova funcionalidade para o usuário
- **fix:** Uma correção de bug para o usuário
- **docs:** Mudanças na documentação
- **style:** Mudanças de formatação que não afetam a lógica do código (ex: espaços, ponto e vírgula)
- **refactor:** Reescrevendo código sem mudar seu comportamento
- **ci:** Mudanças no CI ou submódulos
- **chore:** Atualizando tarefas de build, configurações do gerenciador de pacotes, etc.

---

## 📚 Exemplos

### ✅ Bons Exemplos
```
feat: Add recipe search functionality
fix: Resolve authentication token issue
docs: Update API documentation
style: Fix indentation in components
refactor: Simplify recipe validation logic
```

### ❌ Exemplos a Evitar
```
feat: Added recipe search functionality
fix: Fixed authentication token issue
docs: Updated API documentation
style: Fixed indentation in components
refactor: Simplified recipe validation logic
```

---

## 🔗 Commits Convencionais

Este projeto segue o padrão de [Conventional Commits](https://www.conventionalcommits.org/), que facilita:
- Geração automática de changelogs
- Versionamento semântico
- Integração com ferramentas de CI/CD
- Comunicação clara sobre mudanças
