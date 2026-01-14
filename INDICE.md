# 📚 Índice da Documentação - SIPOC ACAD

## 📖 Guia de Leitura

Dependendo do seu perfil e necessidade, siga um dos caminhos abaixo:

---

## 👤 Perfis de Usuário

### 🎯 Gestor / Stakeholder
**Você quer**: Entender o projeto, resultados e estatísticas

**Leia nesta ordem:**
1. 📄 [SUMARIO.md](SUMARIO.md) - Visão geral do projeto (5 min)
2. 📄 [README.md](README.md) - Documentação principal (3 min)
3. 📄 [CATEGORIAS.md](CATEGORIAS.md) - Mapeamento completo (8 min)

---

### 💻 Desenvolvedor / Técnico
**Você quer**: Entender a implementação e modificar o código

**Leia nesta ordem:**
1. 📄 [README.md](README.md) - Como executar (2 min)
2. 📄 [DESENVOLVIMENTO.md](DESENVOLVIMENTO.md) - Guia técnico (15 min)
3. 📄 [IMPLEMENTACAO.md](IMPLEMENTACAO.md) - Detalhes da implementação (10 min)
4. 📄 Código-fonte - Explore os arquivos .tsx e .ts

---

### 📊 Analista de Processos
**Você quer**: Entender os processos SIPOC mapeados

**Leia nesta ordem:**
1. 📄 [CATEGORIAS.md](CATEGORIAS.md) - Todas as categorias (10 min)
2. 📄 [sipoc-acad.xlsx](sipoc-acad.xlsx) - Planilha original
3. 📄 Execute a aplicação e navegue pelos processos

---

### 🎨 Designer / UX
**Você quer**: Entender a interface e experiência do usuário

**Leia nesta ordem:**
1. 📄 [SUMARIO.md](SUMARIO.md) - Preview da interface (5 min)
2. 📄 Execute `npm run dev` e explore a aplicação
3. 📄 [DESENVOLVIMENTO.md](DESENVOLVIMENTO.md) - Seção "Customização de Estilos"

---

## 📑 Todos os Documentos

### Documentação Principal
| Arquivo | Descrição | Tempo de Leitura |
|---------|-----------|------------------|
| [README.md](README.md) | Documentação principal do projeto | 5 min |
| [SUMARIO.md](SUMARIO.md) | Resumo executivo e estatísticas | 8 min |
| [IMPLEMENTACAO.md](IMPLEMENTACAO.md) | Detalhes técnicos da implementação | 12 min |
| [CATEGORIAS.md](CATEGORIAS.md) | Mapeamento de categorias e processos | 10 min |
| [DESENVOLVIMENTO.md](DESENVOLVIMENTO.md) | Guia completo de desenvolvimento | 20 min |

### Dados e Configuração
| Arquivo | Descrição | Tipo |
|---------|-----------|------|
| [sipoc-acad.xlsx](sipoc-acad.xlsx) | Planilha fonte (39+51 processos) | Excel |
| [data.ts](data.ts) | 90 processos em TypeScript (4.884 linhas) | Código |
| [types.ts](types.ts) | Definições de tipos TypeScript | Código |
| [metadata.json](metadata.json) | Metadados da aplicação | JSON |

### Componentes React
| Arquivo | Descrição | Linhas |
|---------|-----------|--------|
| [App.tsx](App.tsx) | Componente principal | 159 |
| [components/Sidebar.tsx](components/Sidebar.tsx) | Navegação lateral | ~60 |
| [components/ProcessCard.tsx](components/ProcessCard.tsx) | Card de processo | ~70 |
| [components/DetailModal.tsx](components/DetailModal.tsx) | Modal detalhado | ~120 |

---

## 🎯 Por Objetivo

### Executar a Aplicação
1. [README.md](README.md#-como-executar) → Seção "Como Executar"
2. [DESENVOLVIMENTO.md](DESENVOLVIMENTO.md#-primeiros-passos) → Seção "Primeiros Passos"

### Adicionar Novo Processo
1. [DESENVOLVIMENTO.md](DESENVOLVIMENTO.md#-modificando-dados) → Seção "Adicionar Novo Processo"
2. [data.ts](data.ts) → Array `SIPOC_DATA`

### Criar Nova Categoria
1. [DESENVOLVIMENTO.md](DESENVOLVIMENTO.md#adicionar-nova-categoria) → Seção "Adicionar Nova Categoria"
2. [types.ts](types.ts) → Type `Category`
3. [data.ts](data.ts) → Array `CATEGORIES`

### Customizar Cores/Estilos
1. [DESENVOLVIMENTO.md](DESENVOLVIMENTO.md#-customização-de-estilos) → Seção "Customização"
2. [data.ts](data.ts) → Propriedade `color` em `CATEGORIES`

### Entender Estrutura SIPOC
1. [CATEGORIAS.md](CATEGORIAS.md#estrutura-sipoc-completa) → Seção "Estrutura SIPOC"
2. [IMPLEMENTACAO.md](IMPLEMENTACAO.md#-estrutura-sipoc-completa) → Campos detalhados

### Deploy / Publicar
1. [DESENVOLVIMENTO.md](DESENVOLVIMENTO.md#-deploy) → Seção "Deploy"

---

## 🔍 Busca Rápida

### Por Tecnologia
- **React**: [App.tsx](App.tsx), [components/](components/)
- **TypeScript**: [types.ts](types.ts), [data.ts](data.ts)
- **Tailwind CSS**: [DESENVOLVIMENTO.md](DESENVOLVIMENTO.md#-customização-de-estilos)
- **Vite**: [vite.config.ts](vite.config.ts)
- **Lucide Icons**: [DESENVOLVIMENTO.md](DESENVOLVIMENTO.md#ícones-disponíveis)

### Por Conceito
- **SIPOC**: [CATEGORIAS.md](CATEGORIAS.md), [data.ts](data.ts)
- **Categorias**: [CATEGORIAS.md](CATEGORIAS.md#distribuição-de-processos-por-categoria)
- **Processos**: [sipoc-acad.xlsx](sipoc-acad.xlsx), [data.ts](data.ts)
- **Interface**: [SUMARIO.md](SUMARIO.md#-preview-da-interface)
- **Estatísticas**: [SUMARIO.md](SUMARIO.md#-estatísticas-do-projeto)

---

## 📊 Estatísticas dos Documentos

| Documento | Linhas | Palavras | Caracteres |
|-----------|--------|----------|------------|
| README.md | ~130 | ~800 | ~4KB |
| SUMARIO.md | ~280 | ~1.800 | ~7KB |
| IMPLEMENTACAO.md | ~230 | ~1.500 | ~6KB |
| CATEGORIAS.md | ~250 | ~1.600 | ~7KB |
| DESENVOLVIMENTO.md | ~450 | ~3.000 | ~10KB |
| **TOTAL** | **~1.340** | **~8.700** | **~34KB** |

---

## 🗺️ Mapa Mental

```
SIPOC ACAD
│
├── 📖 Documentação
│   ├── README.md ............... Início aqui
│   ├── SUMARIO.md .............. Visão geral
│   ├── IMPLEMENTACAO.md ........ Detalhes técnicos
│   ├── CATEGORIAS.md ........... Processos mapeados
│   └── DESENVOLVIMENTO.md ...... Guia do desenvolvedor
│
├── 💾 Dados
│   ├── sipoc-acad.xlsx ......... Fonte oficial (90 processos)
│   └── data.ts ................. Dados em TypeScript
│
├── 🎨 Interface
│   ├── App.tsx ................. Aplicação principal
│   ├── Sidebar.tsx ............. 10 categorias
│   ├── ProcessCard.tsx ......... Cards de processo
│   └── DetailModal.tsx ......... Modal SIPOC
│
├── ⚙️ Configuração
│   ├── types.ts ................ Definições TypeScript
│   ├── vite.config.ts .......... Build Vite
│   ├── tsconfig.json ........... TypeScript config
│   └── package.json ............ Dependências
│
└── 🚀 Deploy
    └── Ver DESENVOLVIMENTO.md
```

---

## 📞 Ajuda Rápida

### Não consigo executar
👉 [DESENVOLVIMENTO.md](DESENVOLVIMENTO.md#-pré-requisitos-para-desenvolvimento)

### Como adicionar dados
👉 [DESENVOLVIMENTO.md](DESENVOLVIMENTO.md#-modificando-dados)

### Entender a planilha
👉 [CATEGORIAS.md](CATEGORIAS.md)

### Customizar cores
👉 [DESENVOLVIMENTO.md](DESENVOLVIMENTO.md#-customização-de-estilos)

### Fazer deploy
👉 [DESENVOLVIMENTO.md](DESENVOLVIMENTO.md#-deploy)

### Ver estatísticas
👉 [SUMARIO.md](SUMARIO.md#-estatísticas-do-projeto)

---

## ✅ Checklist de Leitura

Para estar completamente familiarizado com o projeto:

- [ ] Li o [README.md](README.md)
- [ ] Li o [SUMARIO.md](SUMARIO.md)
- [ ] Entendi as [CATEGORIAS.md](CATEGORIAS.md)
- [ ] Explorei o código ([App.tsx](App.tsx), [data.ts](data.ts))
- [ ] Executei a aplicação localmente
- [ ] Li o guia de [DESENVOLVIMENTO.md](DESENVOLVIMENTO.md)
- [ ] Consultei [IMPLEMENTACAO.md](IMPLEMENTACAO.md)

---

<div align="center">

### 📚 Documentação Completa e Organizada

**Sistema de Gestão por Processos - Academia INPI**

Total: 5 documentos | ~1.340 linhas | ~8.700 palavras

</div>
