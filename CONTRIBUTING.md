# Contribuindo para SIPOC ACAD

Obrigado por considerar contribuir para o projeto SIPOC ACAD! 🎉

## 📋 Como Contribuir

### Reportar Bugs
Se você encontrar um bug, por favor abra uma [issue](https://github.com/dmenezes007/sipoc-acad/issues) incluindo:
- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs. comportamento atual
- Screenshots (se aplicável)
- Informações do ambiente (navegador, SO, etc.)

### Sugerir Melhorias
Sugestões são bem-vindas! Abra uma [issue](https://github.com/dmenezes007/sipoc-acad/issues) com:
- Descrição clara da melhoria
- Justificativa (por que seria útil?)
- Exemplos de uso (se aplicável)

### Pull Requests

1. **Fork** o repositório
2. **Clone** seu fork:
   ```bash
   git clone https://github.com/seu-usuario/sipoc-acad.git
   cd sipoc-acad
   ```

3. **Crie uma branch** para sua feature:
   ```bash
   git checkout -b feature/minha-feature
   ```

4. **Instale** as dependências:
   ```bash
   npm install
   ```

5. **Faça suas alterações** seguindo as convenções do projeto

6. **Teste** suas alterações:
   ```bash
   npm run dev
   npm run build
   ```

7. **Commit** suas mudanças:
   ```bash
   git commit -m "feat: adiciona nova funcionalidade X"
   ```

8. **Push** para seu fork:
   ```bash
   git push origin feature/minha-feature
   ```

9. Abra um **Pull Request** no repositório original

## 📝 Convenções de Código

### Commits
Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação (não afeta o código)
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Manutenção

Exemplos:
```
feat: adiciona filtro por tipo de processo
fix: corrige erro ao abrir modal
docs: atualiza README com instruções de deploy
```

### Código TypeScript
- Use **TypeScript** para todo código novo
- Defina **interfaces** para props de componentes
- Evite `any` - use tipos específicos
- Documente funções complexas

### Componentes React
- Um componente por arquivo
- Use **PascalCase** para nomes de componentes
- Props tipadas com interfaces
- Prefira **function components** com hooks

### Estilo
- Use **Tailwind CSS** para estilização
- Mantenha classes organizadas
- Evite estilos inline quando possível

## 🧪 Testes

Antes de enviar um PR, verifique:

- [ ] Código compila sem erros TypeScript
- [ ] Aplicação funciona em modo dev
- [ ] Build de produção funciona
- [ ] Testado em Chrome, Firefox e Safari
- [ ] Responsivo (mobile, tablet, desktop)
- [ ] Sem erros no console

## 📚 Documentação

Se sua contribuição adiciona ou modifica funcionalidades:
- Atualize o README.md se necessário
- Adicione comentários explicativos no código
- Atualize arquivos .md relevantes

## 🔍 Code Review

Todos os PRs serão revisados. Esteja aberto a feedback e sugestões.

Critérios de aprovação:
- Código limpo e legível
- Segue convenções do projeto
- Funciona conforme esperado
- Sem regressões
- Documentação adequada

## 💡 Dúvidas?

- Abra uma [issue](https://github.com/dmenezes007/sipoc-acad/issues) com a tag `question`
- Entre em contato: academia@inpi.gov.br

## 📜 Código de Conduta

Este projeto segue os princípios de:
- **Respeito** mútuo entre contribuidores
- **Colaboração** construtiva
- **Inclusão** e diversidade
- **Profissionalismo** nas interações

---

Obrigado por contribuir! 🙏
