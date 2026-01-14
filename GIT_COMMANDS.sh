# COMANDOS PRONTOS PARA PUBLICAÇÃO NO GITHUB

# Execute estes comandos em ordem no PowerShell ou Git Bash

# 1. Navegar para o diretório do projeto (se necessário)
cd "d:\Users\dmenezes\Documents\sipoc-acad"

# 2. Inicializar repositório Git (se ainda não foi feito)
git init

# 3. Adicionar todos os arquivos
git add .

# 4. Criar primeiro commit
git commit -m "feat: implementação inicial do SIPOC ACAD v1.0.0

- Implementados 90 processos completos (39 finalísticos + 51 gestão/suporte)
- 10 categorias com ícones e cores dinâmicos
- Interface responsiva com Bento Grid layout
- Sistema de busca e filtros por categoria
- Modal detalhado com visualização SIPOC completa
- Documentação completa (README, CONTRIBUTING, SECURITY, etc.)
- GitHub Actions para CI/CD
- Deploy automático para GitHub Pages
- TypeScript 100% tipado
"

# 5. Renomear branch para main
git branch -M main

# 6. Adicionar repositório remoto
git remote add origin https://github.com/dmenezes007/sipoc-acad.git

# 7. Fazer push para GitHub
git push -u origin main

# 8. (Opcional) Criar e enviar tag da versão 1.0.0
git tag -a v1.0.0 -m "Release v1.0.0 - Implementação inicial completa"
git push origin v1.0.0

# ============================================
# NOTA: Se pedir autenticação no passo 7
# ============================================
# 1. Vá em: https://github.com/settings/tokens
# 2. Generate new token (classic)
# 3. Selecione: repo, workflow
# 4. Gere o token e copie
# 5. Use como senha quando pedir

# ============================================
# VERIFICAÇÕES PÓS-PUBLICAÇÃO
# ============================================

# Verificar status
git status

# Verificar remotos configurados
git remote -v

# Ver histórico de commits
git log --oneline

# Ver branches
git branch -a

# ============================================
# ATUALIZAÇÕES FUTURAS
# ============================================

# Para fazer atualizações:
# 1. Edite os arquivos necessários
# 2. Execute:

git add .
git commit -m "tipo: descrição da mudança"
git push

# Tipos de commit:
# - feat: nova funcionalidade
# - fix: correção de bug
# - docs: documentação
# - style: formatação
# - refactor: refatoração
# - test: testes
# - chore: manutenção

# ============================================
# LINKS ÚTEIS
# ============================================

# Repositório: https://github.com/dmenezes007/sipoc-acad
# Actions: https://github.com/dmenezes007/sipoc-acad/actions
# Pages: https://dmenezes007.github.io/sipoc-acad
# Issues: https://github.com/dmenezes007/sipoc-acad/issues
# Releases: https://github.com/dmenezes007/sipoc-acad/releases
