# 🔧 Como Instalar o Git no Windows

## ❌ Problema Identificado
Git não está instalado no sistema Windows.

---

## ✅ Solução: Instalar Git para Windows

### Opção 1: Download Direto (Recomendado)

1. **Baixe o Git**:
   - Acesse: https://git-scm.com/download/win
   - O download começará automaticamente (64-bit)
   - Ou use o link direto: https://github.com/git-for-windows/git/releases/latest

2. **Execute o Instalador**:
   - Abra o arquivo `.exe` baixado
   - Clique em "Next" nas telas de instalação
   - **IMPORTANTE**: Nas opções, certifique-se de:
     ✅ "Git from the command line and also from 3rd-party software" (padrão)
     ✅ "Use Git and optional Unix tools from the Command Prompt"

3. **Finalize a Instalação**:
   - Continue clicando "Next" até "Install"
   - Aguarde a instalação completar
   - Clique em "Finish"

4. **Reinicie o PowerShell**:
   - Feche todas as janelas do PowerShell
   - Abra uma nova janela do PowerShell

5. **Verifique a Instalação**:
   ```powershell
   git --version
   ```
   
   Deve retornar algo como: `git version 2.43.0.windows.1`

---

### Opção 2: Usar Winget (Windows 10/11)

Se você tem Windows 10 (versão 1809+) ou Windows 11:

```powershell
# Instalar Git via Winget
winget install --id Git.Git -e --source winget

# Fechar e reabrir PowerShell após instalação

# Verificar instalação
git --version
```

---

### Opção 3: Usar Chocolatey (se já tiver instalado)

```powershell
# Instalar Git via Chocolatey
choco install git -y

# Fechar e reabrir PowerShell

# Verificar instalação
git --version
```

---

## 📝 Configuração Inicial do Git (Após Instalação)

Depois de instalar, configure seu nome e email:

```powershell
# Configurar nome
git config --global user.name "Seu Nome"

# Configurar email
git config --global user.email "seu.email@exemplo.com"

# Verificar configuração
git config --list
```

---

## 🚀 Publicar o SIPOC-ACAD no GitHub

Após instalar o Git, execute os comandos em ordem:

### 1. Navegar para o projeto
```powershell
cd "D:\Users\dmenezes\Documents\sipoc-acad"
```

### 2. Inicializar repositório
```powershell
git init
```

### 3. Adicionar todos os arquivos
```powershell
git add .
```

### 4. Verificar status (opcional)
```powershell
git status
```

### 5. Criar primeiro commit
```powershell
git commit -m "feat: implementação inicial do SIPOC ACAD v1.0.0

- 90 processos completos (39 finalísticos + 51 gestão)
- 10 categorias com navegação dinâmica
- Interface responsiva com Bento Grid
- Documentação completa
- GitHub Actions configurado"
```

### 6. Renomear branch para main
```powershell
git branch -M main
```

### 7. Adicionar repositório remoto
```powershell
git remote add origin https://github.com/dmenezes007/sipoc-acad.git
```

### 8. Fazer push para GitHub
```powershell
git push -u origin main
```

**NOTA**: Se pedir autenticação:
1. Vá em: https://github.com/settings/tokens
2. Generate new token (classic)
3. Selecione: `repo`, `workflow`
4. Copie o token gerado
5. Use o token como senha quando o Git pedir

---

## 🔍 Verificar se Git está no PATH

Após instalação, se ainda não funcionar:

```powershell
# Verificar PATH
$env:Path -split ';' | Select-String -Pattern 'Git'

# Adicionar Git ao PATH (se necessário)
$env:Path += ";C:\Program Files\Git\cmd"

# Ou reinicie o computador
```

---

## ❓ Solução de Problemas

### Git ainda não funciona após instalação?

1. **Reinicie o PowerShell** (importante!)
2. **Reinicie o VS Code** (se estiver usando)
3. **Reinicie o computador** (último recurso)

### Erro de certificado SSL?

```powershell
git config --global http.sslVerify false
```

### Erro de autenticação no push?

Use Personal Access Token ao invés de senha:
- Token: https://github.com/settings/tokens
- Ao fazer push, use o token como senha

---

## 📦 Alternativa: GitHub Desktop (Interface Gráfica)

Se preferir não usar linha de comando:

1. Baixe GitHub Desktop: https://desktop.github.com/
2. Instale e faça login com sua conta GitHub
3. Arraste a pasta `sipoc-acad` para o GitHub Desktop
4. Clique em "Publish repository"

---

## 🎯 Resumo Rápido

```
1. Baixar Git: https://git-scm.com/download/win
2. Instalar (padrão, apenas Next > Next > Next)
3. Fechar e reabrir PowerShell
4. Verificar: git --version
5. Configurar: git config --global user.name "Nome"
6. Configurar: git config --global user.email "email"
7. Publicar projeto (comandos acima)
```

---

## 📞 Links Úteis

- **Git para Windows**: https://git-scm.com/download/win
- **Documentação Git**: https://git-scm.com/doc
- **GitHub Desktop**: https://desktop.github.com/
- **Tutorial Git (português)**: https://git-scm.com/book/pt-br/v2

---

**Após instalar o Git, volte e execute os comandos de publicação!**
