<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

# SIPOC ACAD - Matriz de Processos da Academia INPI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646cff.svg)](https://vitejs.dev/)
[![CI](https://github.com/dmenezes007/sipoc-acad/workflows/CI/badge.svg)](https://github.com/dmenezes007/sipoc-acad/actions)

Aplicação one-pager completa para visualização da **Matriz SIPOC** (Suppliers, Inputs, Process, Outputs, Customers) da **Academia de Propriedade Intelectual, Inovação e Desenvolvimento de Pessoas (ACAD)** do INPI.

[Demo](https://dmenezes007.github.io/sipoc-acad) · [Reportar Bug](https://github.com/dmenezes007/sipoc-acad/issues) · [Sugerir Feature](https://github.com/dmenezes007/sipoc-acad/issues)

</div>

## 📋 Sobre o Projeto

Esta aplicação oferece uma interface visual moderna e intuitiva para explorar todos os processos da Academia do INPI, incluindo:

- **39 Processos Finalísticos** - Formação em PI e Inovação
- **51 Processos de Gestão e Suporte** - Desenvolvimento Organizacional, Gestão de Pessoas, e mais
- **90 Processos Totais** organizados em **10 Categorias**

## 🎨 Características

- ✅ Layout **Bento Grid** moderno e responsivo
- ✅ Interface intuitiva com navegação por categorias
- ✅ Busca dinâmica de processos e subprocessos
- ✅ Visualização detalhada da matriz SIPOC completa
- ✅ Design minimalista com gradientes dinâmicos
- ✅ Dados completos da planilha sipoc-acad.xlsx

## 📚 Categorias de Processos

1. **Formação em PI e Inovação** - Programas de extensão, pós-graduação, projetos e eventos
2. **Desenvolvimento e Transformação Organizacional** - Inovação e gestão do conhecimento
3. **Gestão Estratégica de Pessoas** - Desenvolvimento, capacitação e gestão de talentos
4. **Consultoria e Assessoramento Jurídico** - Suporte legal institucional
5. **Desenvolvimento de Negócios e Mercado de PI** - Estratégias de mercado
6. **Gestão da Conformidade e Integridade** - Controles e conformidade
7. **Gestão de Controles Institucionais** - Auditoria e controles internos
8. **Inteligência e Combate a Falsificação** - Proteção e fiscalização
9. **Relacionamento Institucional** - Cooperação e parcerias
10. **Resolução de Conflitos** - Mediação e conciliação

## 🚀 Como Executar

**Pré-requisitos:** Node.js (versão 18 ou superior)

### Instalação Local

```bash
# Clone o repositório
git clone https://github.com/dmenezes007/sipoc-acad.git
cd sipoc-acad

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Acesse em seu navegador
http://localhost:5173
```

### Build para Produção

```bash
# Gerar build otimizado
npm run build

# Preview da build
npm run preview
```

### Deploy

O projeto está configurado para deploy automático no GitHub Pages via GitHub Actions.

Para deploy manual:
```bash
npm run build
# Os arquivos estarão em dist/
```

## 🏗️ Estrutura do Projeto

```
sipoc-acad/
├── App.tsx              # Componente principal
├── data.ts              # Dados completos dos 90 processos
├── types.ts             # Definições TypeScript
├── components/
│   ├── Sidebar.tsx      # Navegação por categorias
│   ├── ProcessCard.tsx  # Card de processo individual
│   └── DetailModal.tsx  # Modal com detalhes SIPOC
├── sipoc-acad.xlsx      # Planilha fonte de dados
└── index.html           # Ponto de entrada
```

## 📊 Estrutura de Dados SIPOC

Cada processo contém informações completas:

- **Tipo**: Finalístico, Gestão ou Suporte
- **Categoria/Macroprocesso**: Área de atuação
- **Processo e Subprocesso**: Identificação hierárquica
- **Necessidades (P2 e P3)**: Objetivos e requisitos
- **Fornecedores (S)**: Provedores de insumos
- **Entradas (I)**: Recursos necessários
- **Produtos (P)**: Resultados gerados
- **Saídas (O)**: Entregas efetivas
- **Clientes (C)**: Beneficiários finais
- **Requisitos**: Critérios de qualidade
- **Ferramentas**: Sistemas utilizados
- **Atores**: Responsáveis envolvidos
- **KPIs**: Indicadores de desempenho
- **Regulamentações**: Base legal aplicável

## 🔗 Links Úteis

- **Portal do INPI**: https://www.gov.br/inpi
- **Repositório GitHub**: https://github.com/dmenezes007/sipoc-acad
- **Documentação Completa**: Ver arquivos .md no projeto
- **Issues**: https://github.com/dmenezes007/sipoc-acad/issues

## 🤝 Contribuindo

Contribuições são bem-vindas! Veja o guia [CONTRIBUTING.md](CONTRIBUTING.md) para saber como contribuir.

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **E-mail**: academia@inpi.gov.br
- **Portal**: https://www.gov.br/inpi
- **Issues**: https://github.com/dmenezes007/sipoc-acad/issues

## 📝 Licença

Desenvolvido pela Engenharia de Front-end & UX da Academia INPI © 2026

---

**Sistema de Gestão por Processos - Academia INPI**

<div align="center">

[![GitHub Stars](https://img.shields.io/github/stars/dmenezes007/sipoc-acad?style=social)](https://github.com/dmenezes007/sipoc-acad/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/dmenezes007/sipoc-acad?style=social)](https://github.com/dmenezes007/sipoc-acad/network/members)

</div>
