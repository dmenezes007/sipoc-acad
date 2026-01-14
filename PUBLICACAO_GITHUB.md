# 🚀 Guia de Publicação no GitHub

Este guia explica como publicar o projeto SIPOC ACAD no GitHub.

## 📋 Pré-requisitos

- Git instalado
- Conta no GitHub
- Repositório criado: https://github.com/dmenezes007/sipoc-acad

## 🔧 Passos para Publicação

### 1. Inicializar Git (se ainda não foi feito)

```bash
cd d:\Users\dmenezes\Documents\sipoc-acad
git init
```

### 2. Adicionar Arquivos ao Git

```bash
# Adicionar todos os arquivos
git add .

# Verificar status
git status
```

### 3. Criar Primeiro Commit

```bash
git commit -m "feat: implementação inicial do SIPOC ACAD v1.0.0

- 90 processos completos (39 finalísticos + 51 gestão)
- 10 categorias com navegação dinâmica
- Interface responsiva com Bento Grid
- Documentação completa
- GitHub Actions configurado
"
```

### 4. Conectar ao Repositório Remoto

```bash
# Adicionar origem remota
git remote add origin https://github.com/dmenezes007/sipoc-acad.git

# Verificar conexão
git remote -v
```

### 5. Criar Branch Principal

```bash
# Renomear branch para main (se necessário)
git branch -M main
```

### 6. Fazer Push para GitHub

```bash
# Push inicial
git push -u origin main
```

Se pedir autenticação, use um Personal Access Token (PAT):
1. Vá em GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Selecione: `repo`, `workflow`
4. Use o token como senha

## 🌐 Configurar GitHub Pages

### Opção 1: Via Interface do GitHub (Recomendado)

1. Acesse: https://github.com/dmenezes007/sipoc-acad/settings/pages
2. Em **Source**, selecione: `GitHub Actions`
3. O workflow já está configurado (`.github/workflows/deploy.yml`)
4. Faça um push para disparar o deploy
5. Aguarde o build completar
6. Acesse: https://dmenezes007.github.io/sipoc-acad

### Opção 2: Via Linha de Comando

```bash
# O workflow já está configurado
# Basta fazer push que o deploy será automático
git push
```

## 📝 Checklist de Publicação

Antes de publicar, verifique:

- [ ] ✅ Todos os arquivos necessários estão commitados
- [ ] ✅ `.gitignore` configurado corretamente
- [ ] ✅ `package.json` atualizado com info do repo
- [ ] ✅ `LICENSE` criado
- [ ] ✅ `README.md` com badges e links
- [ ] ✅ `CONTRIBUTING.md` criado
- [ ] ✅ `SECURITY.md` criado
- [ ] ✅ `.github/workflows/` configurado
- [ ] ✅ Sem arquivos sensíveis (.env, credentials)
- [ ] ✅ `vite.config.ts` com base path correto

## 🔄 Workflow de Atualizações

Para futuras atualizações:

```bash
# 1. Fazer alterações nos arquivos

# 2. Adicionar alterações
git add .

# 3. Commit com mensagem descritiva
git commit -m "feat: adiciona nova funcionalidade X"

# 4. Push para GitHub
git push

# 5. GitHub Actions fará deploy automático
```

## 🏷️ Criar Release (Opcional)

Para criar uma release oficial:

```bash
# Criar tag
git tag -a v1.0.0 -m "Release v1.0.0 - Implementação inicial"

# Push da tag
git push origin v1.0.0
```

Ou via interface do GitHub:
1. Vá em: https://github.com/dmenezes007/sipoc-acad/releases
2. Click em "Create a new release"
3. Tag: `v1.0.0`
4. Título: "v1.0.0 - Implementação Inicial"
5. Descrição: Copie de `CHANGELOG.md`
6. Publique

## 🔍 Verificar Deploy

Após o push, verifique:

1. **Actions**: https://github.com/dmenezes007/sipoc-acad/actions
   - CI deve passar ✅
   - Deploy deve completar ✅

2. **GitHub Pages**: https://dmenezes007.github.io/sipoc-acad
   - Aplicação deve estar acessível
   - Todas as funcionalidades funcionando

## 🐛 Solução de Problemas

### Erro ao fazer push

```bash
# Se der erro de autenticação
git remote set-url origin https://TOKEN@github.com/dmenezes007/sipoc-acad.git

# Substitua TOKEN pelo seu Personal Access Token
```

### Deploy falha no GitHub Actions

1. Verifique os logs em: https://github.com/dmenezes007/sipoc-acad/actions
2. Comum: erro no build
   - Solução: Teste `npm run build` localmente primeiro

### GitHub Pages não funciona

1. Verifique se GitHub Pages está ativado:
   - Settings → Pages → Source: GitHub Actions
2. Verifique se o workflow rodou:
   - Actions → Deploy to GitHub Pages
3. Aguarde alguns minutos após o deploy

### Arquivos muito grandes

Git tem limite de 100MB por arquivo. Se necessário:

```bash
# Ver arquivos grandes
git ls-files -s | awk '$4 > 50000000 {print $4, $2}'

# Remover arquivo grande do histórico
git rm --cached arquivo-grande.xlsx
echo "arquivo-grande.xlsx" >> .gitignore
git add .gitignore
git commit -m "chore: remove arquivo grande"
```

## 📊 Estatísticas do Repositório

Após publicação, você pode:

- Adicionar tópicos/tags no GitHub
- Configurar proteção de branch
- Adicionar colaboradores
- Habilitar Discussions
- Configurar Projects para organização

## 🎯 Próximos Passos

1. ⭐ Peça para colegas darem star no repositório
2. 📢 Compartilhe o link: https://dmenezes007.github.io/sipoc-acad
3. 📝 Mantenha `CHANGELOG.md` atualizado
4. 🐛 Monitore issues reportadas
5. 🔄 Aceite pull requests de contribuidores

## 📞 Ajuda

Se tiver dúvidas:
- Documentação Git: https://git-scm.com/doc
- Documentação GitHub: https://docs.github.com
- GitHub Pages: https://pages.github.com

---

**Boa sorte com a publicação! 🚀**
