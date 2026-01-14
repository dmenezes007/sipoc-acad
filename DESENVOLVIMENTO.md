# 🛠️ Guia de Desenvolvimento - SIPOC ACAD

## 📋 Pré-requisitos para Desenvolvimento

### Software Necessário
- **Node.js** versão 16.x ou superior
- **npm** versão 8.x ou superior (incluído com Node.js)
- **Editor de Código**: VS Code (recomendado) ou similar
- **Git** (para controle de versão)

### Verificar Instalação
```bash
node --version    # deve retornar v16.x.x ou superior
npm --version     # deve retornar 8.x.x ou superior
```

---

## 🚀 Primeiros Passos

### 1. Instalar Dependências
```bash
cd sipoc-acad
npm install
```

Isso irá instalar:
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide Icons
- Outras dependências do `package.json`

### 2. Executar em Modo Desenvolvimento
```bash
npm run dev
```

A aplicação estará disponível em: `http://localhost:5173`

### 3. Build para Produção
```bash
npm run build
```

Os arquivos compilados estarão na pasta `dist/`

### 4. Preview da Build
```bash
npm run preview
```

---

## 📁 Estrutura de Arquivos

```
sipoc-acad/
│
├── public/                     # Arquivos públicos estáticos
│
├── components/                 # Componentes React
│   ├── Sidebar.tsx            # Navegação lateral com categorias
│   ├── ProcessCard.tsx        # Card individual de processo
│   └── DetailModal.tsx        # Modal com detalhes SIPOC
│
├── App.tsx                    # Componente principal da aplicação
├── index.tsx                  # Ponto de entrada React
├── data.ts                    # 90 processos SIPOC (4.884 linhas)
├── types.ts                   # Definições TypeScript
│
├── index.html                 # HTML base
├── vite.config.ts             # Configuração do Vite
├── tsconfig.json              # Configuração do TypeScript
├── package.json               # Dependências e scripts
│
├── sipoc-acad.xlsx            # Planilha fonte (não alterar)
│
├── README.md                  # Documentação principal
├── IMPLEMENTACAO.md           # Detalhes técnicos
├── CATEGORIAS.md              # Mapeamento de categorias
└── SUMARIO.md                 # Resumo executivo
```

---

## 🔧 Modificando Dados

### Adicionar Novo Processo
1. Edite `data.ts`
2. Adicione um novo objeto ao array `SIPOC_DATA`:

```typescript
{
  id: '91',  // Próximo ID disponível
  type: 'Finalístico',  // ou 'Gestão', 'Suporte'
  category: 'Formação em PI e Inovação',
  macroprocess: 'Nome do Macroprocesso',
  process: 'Nome do Processo',
  needP2: 'Necessidade nível 2',
  subprocess: 'Nome do Subprocesso',
  needP3: 'Necessidade nível 3',
  products: ['Produto 1', 'Produto 2'],
  suppliers: ['Fornecedor 1', 'Fornecedor 2'],
  inputs: ['Entrada 1', 'Entrada 2'],
  outputs: ['Saída 1', 'Saída 2'],
  customers: ['Cliente 1', 'Cliente 2'],
  requirements: ['Requisito 1', 'Requisito 2'],
  customerRequirements: ['Req. Cliente 1'],
  tools: ['Sistema 1', 'Sistema 2'],
  actors: ['Ator 1', 'Ator 2'],
  kpis: ['KPI 1', 'KPI 2'],
  regulations: ['Lei nº X', 'Decreto nº Y']
}
```

### Adicionar Nova Categoria
1. Edite `types.ts` - adicione à union type `Category`
2. Edite `data.ts` - adicione ao array `CATEGORIES`:

```typescript
{ 
  id: 'Nova Categoria', 
  label: 'Nova Categoria', 
  icon: 'IconName',  // Nome do ícone Lucide
  color: 'from-color-600 to-color-700'  // Gradiente Tailwind
}
```

### Ícones Disponíveis
Veja todos em: https://lucide.dev/icons

Exemplos populares:
- `GraduationCap`, `BookOpen`, `Users`, `Lightbulb`
- `Shield`, `Scale`, `TrendingUp`, `Handshake`
- `SearchCheck`, `Gavel`, `Building2`, etc.

---

## 🎨 Customização de Estilos

### Tailwind CSS
Os estilos usam classes utilitárias do Tailwind:

```tsx
// Exemplo de estilização
<div className="bg-blue-600 hover:bg-blue-700 rounded-2xl p-4">
  Conteúdo
</div>
```

### Cores por Categoria
Definidas em `data.ts` no array `CATEGORIES`:

```typescript
color: 'from-blue-600 to-indigo-700'  // Gradiente
```

Cores Tailwind disponíveis:
- `blue`, `indigo`, `purple`, `pink`, `red`, `orange`
- `amber`, `yellow`, `green`, `emerald`, `teal`, `cyan`
- `slate`, `gray`, `zinc`, etc.

---

## 🧪 Desenvolvimento de Componentes

### Criar Novo Componente
1. Crie arquivo em `components/NomeComponente.tsx`
2. Use TypeScript com interface de props:

```typescript
import React from 'react';

interface Props {
  title: string;
  onClose: () => void;
}

const NomeComponente: React.FC<Props> = ({ title, onClose }) => {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onClose}>Fechar</button>
    </div>
  );
};

export default NomeComponente;
```

3. Importe no `App.tsx`:
```typescript
import NomeComponente from './components/NomeComponente';
```

---

## 🐛 Debug e Troubleshooting

### Erros Comuns

#### 1. "Cannot find module"
```bash
npm install
```

#### 2. Porta 5173 já em uso
```bash
# Altere a porta em vite.config.ts
export default defineConfig({
  server: {
    port: 3000  // Nova porta
  }
})
```

#### 3. Erro de TypeScript
```bash
# Verifique tipos
npx tsc --noEmit
```

#### 4. Build falha
```bash
# Limpe cache e reinstale
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📊 Banco de Dados / Fonte de Dados

### Planilha Excel (sipoc-acad.xlsx)
**NÃO MODIFICAR DIRETAMENTE!**

Para atualizar dados da planilha:

1. Edite `sipoc-acad.xlsx` no Excel/Google Sheets
2. Execute script de processamento:

```python
# Criar script process_data.py
import pandas as pd

df1 = pd.read_excel('sipoc-acad.xlsx', sheet_name='Planilha1')
df2 = pd.read_excel('sipoc-acad.xlsx', sheet_name='Planilha2')

# Processar dados...
# Gerar novo data.ts
```

3. Substitua `data.ts` gerado

**OU** edite `data.ts` diretamente (mais rápido para mudanças pequenas)

---

## 🔄 Workflow de Atualização

### Fluxo Recomendado
```
1. Planilha Excel (fonte oficial)
     ↓
2. Script de Processamento (Python)
     ↓
3. Arquivo data.ts (gerado)
     ↓
4. Aplicação React (renderiza)
```

### Mudanças Rápidas
Para alterações urgentes, edite `data.ts` diretamente e atualize a planilha depois.

---

## 📝 Convenções de Código

### Naming
- **Componentes**: PascalCase (`ProcessCard.tsx`)
- **Funções**: camelCase (`getActiveCategory()`)
- **Constantes**: UPPER_SNAKE_CASE (`SIPOC_DATA`)
- **Interfaces**: PascalCase (`SIPOCItem`)

### Estrutura de Componente
```typescript
// 1. Imports
import React from 'react';
import { SIPOCItem } from '../types';

// 2. Interface de Props
interface Props {
  item: SIPOCItem;
}

// 3. Componente
const Component: React.FC<Props> = ({ item }) => {
  // Estado
  const [active, setActive] = React.useState(false);
  
  // Handlers
  const handleClick = () => setActive(!active);
  
  // Render
  return <div onClick={handleClick}>{item.subprocess}</div>;
};

// 4. Export
export default Component;
```

---

## 🧪 Testes

### Teste Manual
1. Navegue por todas as 10 categorias
2. Busque por diferentes termos
3. Abra modais de vários processos
4. Teste responsividade (mobile/tablet/desktop)
5. Verifique se todos os dados são exibidos

### Checklist de Qualidade
- [ ] Sem erros no console do navegador
- [ ] Sem erros TypeScript (`npx tsc --noEmit`)
- [ ] Todas as categorias visíveis e navegáveis
- [ ] Busca funcionando corretamente
- [ ] Modal abre e fecha suavemente
- [ ] Dados corretos em todos os processos
- [ ] Responsivo em diferentes telas
- [ ] Performance adequada (< 3s carregamento inicial)

---

## 🚢 Deploy

### Build para Produção
```bash
npm run build
```

Arquivos gerados em `dist/`:
- `index.html`
- `assets/` (JS, CSS minificados)

### Opções de Deploy

#### 1. Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

#### 2. Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### 3. GitHub Pages
```bash
npm run build
# Copie pasta dist/ para branch gh-pages
```

#### 4. Servidor Próprio
```bash
# Copie pasta dist/ para servidor web
# Configure servidor para servir SPA
```

---

## 📈 Métricas e Performance

### Otimizações Implementadas
- ✅ `useMemo` para cálculos pesados
- ✅ Lazy loading de ícones
- ✅ CSS otimizado com Tailwind
- ✅ Build minificado com Vite
- ✅ Code splitting automático

### Métricas Esperadas
- **Tempo de Carregamento**: < 3 segundos
- **Tamanho do Bundle**: ~200 KB (gzipped)
- **Lighthouse Score**: > 90/100

---

## 🤝 Contribuindo

### Para Contribuir
1. Fork o repositório
2. Crie branch (`git checkout -b feature/nova-feature`)
3. Commit mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para branch (`git push origin feature/nova-feature`)
5. Abra Pull Request

### Code Review
Certifique-se:
- [ ] Código segue convenções
- [ ] TypeScript sem erros
- [ ] Componentes documentados
- [ ] Mudanças testadas manualmente

---

## 📞 Suporte

### Contatos
- **E-mail**: academia@inpi.gov.br
- **Portal**: https://www.gov.br/inpi
- **Documentação**: Ver arquivos .md no projeto

### Issues Conhecidos
Nenhum no momento. Reporte bugs via e-mail.

---

## 📚 Recursos Úteis

### Documentação Técnica
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)

### Tutoriais Recomendados
- React Hooks: https://react.dev/reference/react
- TypeScript Basics: https://www.typescriptlang.org/docs/handbook/intro.html
- Tailwind Classes: https://tailwindcss.com/docs/utility-first

---

<div align="center">

**Happy Coding! 🚀**

Sistema de Gestão por Processos - Academia INPI

</div>
