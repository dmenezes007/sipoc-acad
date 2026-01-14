import { SIPOCItem, Category } from './types';

export const SIPOC_DATA: SIPOCItem[] = [
  {
    id: '1',
    type: 'Finalístico',
    category: 'Formação em PI e Inovação',
    macroprocess: 'Formação em PI e Inovação',
    process: 'Gestão de Programas de Extensão em PI  - GPEPI',
    needP2: 'Planejar, implementar e monitorar programas de extensão (cursos, capacitações e parcerias) para disseminar conhecimento em propriedade intelectual, atendendo a demandas internas (servidores) e externas (sociedade, empresas).',
    subprocess: 'Implementação de Programas de Extensão',
    needP3: 'Validar e implementar programas de extensão conforme diretrizes da Academia, incluindo parcerias e editais.',
    products: [
    'Programas de Extensão formalizados e ativos',
    'Parcerias interinstitucionais de extensão estabelecidas'
  ],
    suppliers: [
    'CGDI (Acordos)',
    'COINT (Memorandos)',
    'InovACAD (pareceres técnicos)',
    'PFE (análise jurídica)',
    'Instituições de Ensino e Pesquisa parceiras'
  ],
    inputs: [
    'Demandas de formação',
    'Minutas de instrumentos jurídicos',
    'Planos de Trabalho de PD&I ou Extensão',
    'Editais de fomento'
  ],
    outputs: [
    'Acordos e Convênios assinados',
    'Plano de Ação de Extensão anual aprovado',
    'Cronograma de ofertas presenciais e híbridas'
  ],
    customers: [
    'Sociedade',
    'Setores produtivos',
    'Governos locais',
    'Escolas e IES',
    'Inventores Independentes'
  ],
    requirements: [
    'Conformidade com o Marco Legal de CT&I',
    'Capacidade técnica do parceiro',
    'Alinhamento à missão institucional do INPI'
  ],
    customerRequirements: [
    'Transparência nos critérios de adesão',
    'Relevância social e econômica',
    'Linguagem acessível',
    'Justiça social'
  ],
    tools: [
    'SEI',
    'Portal do INPI'
  ],
    actors: [
    'DIEPI',
    'ACAD',
    'CGRH',
    'DIRAD'
  ],
    kpis: [
    'Número de iniciativas inscritas no Prêmio PI nas Escolas',
    'Número de cursos customizados em parceria',
    'Número de parcerias firmadas com o setor público/privado'
  ],
    regulations: [
    'Lei nº 10.973/04 e Lei nº 13.243/16 (Marco Legal CT&I)',
    'Decreto nº 9.283/18',
    'Política de Inovação da ACAD',
    'Política de Relacionamento da ACAD'
  ]
  }
,
  {
    id: '2',
    type: 'Finalístico',
    category: 'Formação em PI e Inovação',
    macroprocess: 'Formação em PI e Inovação',
    process: 'Gestão de Programas de Extensão em PI  - GPEPI',
    needP2: 'Planejar, implementar e monitorar programas de extensão (cursos, capacitações e parcerias) para disseminar conhecimento em propriedade intelectual, atendendo a demandas internas (servidores) e externas (sociedade, empresas).',
    subprocess: 'Gestão do Portfolio de Cursos de Extensão',
    needP3: 'Coordenar a realização e gerenciar a oferta de cursos na plataforma virtual da Academia, OMPI, AVAMEC, ENAP e outras, garantindo operacionalização e suporte; manter e aprimorar o ambiente de aprendizagem virtual do INPI, desenvolvido na Plataforma Moodle; credenciar, recredenciar e descredenciar professores convidados para o desenvolvimento de cursos de extensão; e Produzir, revisar e curar materiais didáticos para todos os programas de extensão.',
    products: [
    'Cursos de extensão ofertados e certificados',
    'Materiais didáticos e instrucionais produzidos/curados'
  ],
    suppliers: [
    'SETED (conteúdo)',
    'Biblioteca (apoio editorial)',
    'Professores Credenciados',
    'OMPI',
    'ENAP',
    'Escolas de Governo parceiras'
  ],
    inputs: [
    'Conteúdo base para adaptação',
    'Necessidades de desenvolvimento (do PDP)',
    'Solicitações de novas temáticas',
    'Matriz de competências'
  ],
    outputs: [
    'Certificados emitidos',
    'Notas de aprovação',
    'Planilha de saldo de horas (GECC)',
    'Materiais didáticos no repositório'
  ],
    customers: [
    'Qualquer interessado',
    'Servidores e colaboradores do INPI',
    'Agentes do SNPI',
    'Países lusófonos e latino-americanos'
  ],
    requirements: [
    'Experiência técnica e pedagógica',
    'Qualificação na área de PI',
    'Observância à Política Editorial da ACAD'
  ],
    customerRequirements: [
    'Qualidade pedagógica',
    'Estabilidade da plataforma virtual',
    'Reconhecimento do certificado',
    'Flexibilidade de acesso'
  ],
    tools: [
    'Academia Virtual do INPI (Moodle)',
    'E-mail Institucional (cursos@inpi.gov.br)'
  ],
    actors: [
    'SETED',
    'DIEPI',
    'ACAD',
    'CGRH'
  ],
    kpis: [
    'Taxa média de conclusão/evasão',
    'Taxa média de satisfação (Nível 1 - Reação)',
    'Número de materiais pedagógicos produzidos'
  ],
    regulations: [
    'Decreto nº 9.991/19',
    'Portaria INPI/CGRH nº 19/23 (PGP)',
    'Política Editorial da ACAD',
    'Guia de Boas Práticas da GECC'
  ]
  }
,
  {
    id: '3',
    type: 'Finalístico',
    category: 'Formação em PI e Inovação',
    macroprocess: 'Formação em PI e Inovação',
    process: 'Gestão de Programas de Extensão em PI  - GPEPI',
    needP2: 'Planejar, implementar e monitorar programas de extensão (cursos, capacitações e parcerias) para disseminar conhecimento em propriedade intelectual, atendendo a demandas internas (servidores) e externas (sociedade, empresas).',
    subprocess: 'Promoção de Visitas Acadêmicas',
    needP3: 'Receber estudantes, professores, pesquisadores e interessados em Propriedade Intelectual e Inovação, de diferentes níveis e origens, em atividades presenciais que envolvam interação com a estrutura acadêmica do INPI ou com temas de interesse científico, tecnológico, cultural e social.',
    products: [
    'Visitas presenciais ou mediadas por tecnologia realizadas',
    'Certificados de participação'
  ],
    suppliers: [
    'Áreas finalísticas do INPI (anfitriãs)',
    'Divisão de Promoção e Eventos (logística)',
    'Equipes de Segurança e Administração Predial'
  ],
    inputs: [
    'Formulários de solicitação de visita',
    'Cronograma de disponibilidade das áreas',
    'Lista de visitantes'
  ],
    outputs: [
    'Relatório consolidado de visitas',
    'Feedback de satisfação dos grupos',
    'Fotos/registros autorizados para difusão'
  ],
    customers: [
    'Grupos de estudantes (Ensino Médio e Superior)',
    'Pesquisadores',
    'Entidades estrangeiras',
    'Sociedade civil'
  ],
    requirements: [
    'Disponibilidade de infraestrutura',
    'Segurança das instalações',
    'Profissionais aptos à recepção'
  ],
    customerRequirements: [
    'Urbanidade e cortesia',
    'Acessibilidade física e comunicacional',
    'Clareza nas explicações técnicas'
  ],
    tools: [
    'E-mail Institucional (academia@inpi.gov.br)',
    'Formulário de Agendamento'
  ],
    actors: [
    'DIEPI',
    'DIPGP',
    'ACAD',
    'CGRH',
    'CGCOM'
  ],
    kpis: [
    'Número de visitantes recepcionados',
    'Tempo médio de visita',
    'Índice de satisfação dos visitantes'
  ],
    regulations: [
    'Lei nº 13.460/17 (Direitos do Usuário)',
    'Política de Direitos Autorais da ACAD (Uso de Imagem)',
    'Regimento Interno do INPI'
  ]
  }
,
  {
    id: '4',
    type: 'Finalístico',
    category: 'Formação em PI e Inovação',
    macroprocess: 'Formação em PI e Inovação',
    process: 'Gestão de Programas de Pós-Graduação em PI - GPGPI',
    needP2: 'Planejar, coordenar e executar os programas de pós-graduação stricto e lato sensu sensu, promovendo a formação de profissionais e especialistas de alto nível e o desenvolvimento de pesquisas aplicadas em Propriedade Intelectual e Inovação, visando atender às demandas estratégicas do Sistema Nacional de Inovação.',
    subprocess: 'Gestão dos Cursos de Pós-Graduação Stricto Sensu',
    needP3: 'Garantir a oferta, organização e execução eficiente dos cursos de mestrado e doutorado em Propriedade Intelectual, alinhados às diretrizes da Capes e do INPI, promovendo capacitação qualificada e gratuita; selecionar e matricular alunos nacionais e internacionais, garantindo conformidade com as diretrizes do programa; garantir a oferta de disciplinas alinhadas ao projeto pedagógico e alocar docentes qualificados; acompanhar o desempenho discente e a qualidade do programa, incluindo participação em eventos; garantir a emissão e registro legal de diplomas e históricos; e viabilizar e supervisionar estágios pós-doutorais em Propriedade Intelectual, garantindo alinhamento às metas do INPI e à produção científica relevante.',
    products: [
    'Mestres e Doutores qualificados',
    'Teses e dissertações defendidas e publicadas',
    'Pesquisas aplicadas em PI e Inovação desenvolvidas'
  ],
    suppliers: [
    'CAPES (financiamento e fomento)',
    'Corpo Docente Permanente e Colaborador',
    'InovACAD (gestão de ativos gerados)',
    'IES parceiras (em redes de cooperação ou cotutela)'
  ],
    inputs: [
    'Editais de seleção',
    'Projetos Pedagógicos de Curso (PPC)',
    'Diretrizes da CAPES para a Área Interdisciplinar (Área 45)',
    'Planos de Trabalho de bolsistas',
    'Demandas estratégicas de pesquisa do INPI'
  ],
    outputs: [
    'Diplomas registrados',
    'Publicações em periódicos de alto impacto',
    'Dados consolidados na Plataforma Sucupira',
    'Relatórios de autoavaliação do programa'
  ],
    customers: [
    'Discentes',
    'Comunidade acadêmica',
    'Setores produtivos',
    'Governos',
    'Países parceiros (estrangeiros)'
  ],
    requirements: [
    'Qualificação acadêmica (título de doutor)',
    'Experiência em orientação e pesquisa',
    'Aderência à interdisciplinaridade',
    'Conformidade com os critérios de produção intelectual da CAPES'
  ],
    customerRequirements: [
    'Qualidade da formação',
    'Gratuidade',
    'Rigor acadêmico',
    'Relevância da pesquisa para o mercado',
    'Justiça social e acessibilidade'
  ],
    tools: [
    'SEI',
    'Plataforma Sucupira (CAPES)',
    'Moodle (Academia Virtual)',
    'Portal do INPI'
  ],
    actors: [
    'DIPGP',
    'ACAD',
    'CGRH',
    'PFE',
    'Comitê de Cursos de Mestrado e Doutorado (CCMD)',
    'Conselho de Pós-Graduação (CPG)'
  ],
    kpis: [
    'Nota da CAPES',
    'Taxa média de evasão',
    'Tempo médio de titulação',
    'Taxa média de empregabilidade dos egressos',
    'Número de orientações por professor',
    'Índice de satisfação discente/docente'
  ],
    regulations: [
    'Lei nº 10.973/04',
    'Diretrizes da Área 45 da CAPES',
    'Política de Direitos Autorais da ACAD',
    'Política de Gestão da Inovação do INPI',
    'Regimento Interno do INPI'
  ]
  }
,
  {
    id: '5',
    type: 'Finalístico',
    category: 'Formação em PI e Inovação',
    macroprocess: 'Formação em PI e Inovação',
    process: 'Gestão de Programas de Pós-Graduação em PI - GPGPI',
    needP2: 'Planejar, coordenar e executar os programas de pós-graduação stricto e lato sensu sensu, promovendo a formação de profissionais e especialistas de alto nível e o desenvolvimento de pesquisas aplicadas em Propriedade Intelectual e Inovação, visando atender às demandas estratégicas do Sistema Nacional de Inovação.',
    subprocess: 'Gestão dos Cursos de Pós-Graduação Lato Sensu',
    needP3: 'Oferecer cursos de pós-graduação lato sensu pagos, em parceria com outras instituições, para disseminar conhecimento em Propriedade Intelectual (PI) e Inovação, garantindo qualidade e sustentabilidade financeira; definir a estrutura pedagógica, currículo e parcerias para oferta de cursos alinhados à demanda de mercado e diretrizes do INPI; atrair, selecionar e matricular alunos, garantindo adesão e satisfação inicial; garantir a execução adequada das aulas (presenciais/EAD), gestão financeira e suporte operacional; e avaliar resultados, coletar feedback e implementar melhorias contínuas nos cursos.',
    products: [
    'Especialistas certificados em PI e Inovação',
    'Portfolio de cursos de especialização atualizado',
    'Projetos de conclusão de curso aplicados'
  ],
    suppliers: [
    'Instituições parceiras (IES e Escolas de Governo)',
    'Professores especialistas',
    'Fundações de Apoio (gestão financeira de cursos pagos)',
    'SETED (suporte tecnológico)'
  ],
    inputs: [
    'Demandas de mercado',
    'Projetos Pedagógicos',
    'Matriz curricular (mínimo 360h)',
    'Planos de curso',
    'Convenção/Acordo de parceria'
  ],
    outputs: [
    'Certificados emitidos',
    'Históricos escolares',
    'Relatórios de desempenho das turmas',
    'Ganhos econômicos para o fundo da Academia'
  ],
    customers: [
    'Profissionais graduados',
    'Servidores públicos',
    'Empresas e organizações do terceiro setor'
  ],
    requirements: [
    'Reconhecida qualidade e competência na área',
    'Atendimento aos 30% de docentes mestres/doutores',
    'Regularidade jurídica e fiscal (Fundações)'
  ],
    customerRequirements: [
    'Reconhecimento do MEC',
    'Flexibilidade (presencial/EAD)',
    'Aplicabilidade prática das competências',
    'Transparência na gestão financeira'
  ],
    tools: [
    'Sistema e-MEC',
    'Academia Virtual (Moodle)',
    'SEI',
    'Portal do INPI'
  ],
    actors: [
    'DIEPI',
    'ACAD',
    'CGRH',
    'Fundações de Apoio',
    'PFE'
  ],
    kpis: [
    'Número de concluintes',
    'Taxa média de satisfação',
    'Custo médio por aluno',
    'Percentagem de execução dos recursos via Fundação de Apoio',
    'Índice de adesão de novos alunos'
  ],
    regulations: [
    'Resolução CNE/CES nº 1/2018',
    'Lei nº 8.958/94 (Fundações de Apoio)',
    'Política de Relacionamento da Academia com Fundações',
    'Portaria INPI/CGRH nº 19/23'
  ]
  }
,
  {
    id: '6',
    type: 'Finalístico',
    category: 'Formação em PI e Inovação',
    macroprocess: 'Formação em PI e Inovação',
    process: 'Gestão de Projetos de Educação e Inovação Tecnológica - GPEIT',
    needP2: 'Identificar, estruturar e gerenciar o portfólio de projetos de educação e inovação tecnológica, viabilizando a captação de recursos externos e a cooperação com fundações de apoio e agências de fomento, para impulsionar o desenvolvimento acadêmico-institucional em propriedade intlectual e inovação',
    subprocess: 'Identificação, Priorização e Submissão de Projetos',
    needP3: 'Selecionar, priorizar e submeter a financiamento projetos de educação e inovação tecnológica com base no potencial de impacto em PI, recursos disponíveis e alinhamento estratégico.',
    products: [
    'Portfólio de projetos de PD&I priorizados',
    'Propostas de financiamento/fomento submetidas'
  ],
    suppliers: [
    'Unidades do INPI (demandantes)',
    'InovACAD (prospecção)',
    'Agências de fomento (FINEP, BNDES, CNPq)'
  ],
    inputs: [
    'Demandas de pesquisa aplicada',
    'Editais de fomento',
    'Desafios tecnológicos identificados'
  ],
    outputs: [
    'Projetos aprovados para captação',
    'Justificativas de priorização técnica'
  ],
    customers: [
    'Alta Gestão do INPI',
    'Ecossistema de inovação',
    'Órgãos financiadores'
  ],
    requirements: [
    'Aderência à Política de Inovação da ACAD',
    'Capacidade técnica do proponente'
  ],
    customerRequirements: [
    'Alinhamento estratégico',
    'Viabilidade técnica e econômica'
  ],
    tools: [
    'SEI',
    'Inovadata',
    'Portal do INPI'
  ],
    actors: [
    'InovACAD',
    'ACAD',
    'Comitê de Governança Interno (CGI)'
  ],
    kpis: [
    'Número de projetos patrocinados ou fomentados',
    'Valor médio de fomento captado'
  ],
    regulations: [
    'Lei nº 10.973/04',
    'Decreto nº 9.283/18',
    'Política de Inovação da ACAD'
  ]
  }
,
  {
    id: '7',
    type: 'Finalístico',
    category: 'Formação em PI e Inovação',
    macroprocess: 'Formação em PI e Inovação',
    process: 'Gestão de Projetos de Educação e Inovação Tecnológica - GPEIT',
    needP2: 'Identificar, estruturar e gerenciar o portfólio de projetos de educação e inovação tecnológica, viabilizando a captação de recursos externos e a cooperação com fundações de apoio e agências de fomento, para impulsionar o desenvolvimento acadêmico-institucional em propriedade intlectual e inovação',
    subprocess: 'Planejamento e Alocação de Recursos',
    needP3: 'Estruturar os projetos aprovados, definindo escopo, prazos, orçamento e equipes, garantindo recursos necessários para execução.',
    products: [
    'Planos de Trabalho formalizados',
    'Acordos de Parceria e Convênios'
  ],
    suppliers: [
    'InovACAD',
    'Coordenação-Geral de Orçamento e Finanças (CGOF)',
    'Fundações de Apoio'
  ],
    inputs: [
    'Escopo dos projetos aprovados',
    'Cronograma físico-financeiro preliminar',
    'Matriz de competências'
  ],
    outputs: [
    'Recursos humanos e financeiros alocados',
    'Contratos assinados com Fundações'
  ],
    customers: [
    'Coordenadores de programas/projetos',
    'Pesquisadores'
  ],
    requirements: [
    'Conformidade com o Marco Legal de CT&I',
    'Regularidade fiscal e jurídica'
  ],
    customerRequirements: [
    'Transparência na gestão',
    'Rapidez na alocação',
    'Justiça social na distribuição'
  ],
    tools: [
    'SEI',
    'Inovadata',
    'Sistemas das Fundações de Apoio'
  ],
    actors: [
    'InovACAD',
    'CGOF',
    'DIRAD',
    'PFE'
  ],
    kpis: [
    'Percentagem de execução dos recursos financeiros',
    'Tempo médio para empenho/ordem de fornecimento'
  ],
    regulations: [
    'Lei nº 8.958/94',
    'Decreto nº 7.423/10',
    'Política de Relacionamento da ACAD'
  ]
  }
,
  {
    id: '8',
    type: 'Finalístico',
    category: 'Formação em PI e Inovação',
    macroprocess: 'Formação em PI e Inovação',
    process: 'Gestão de Projetos de Educação e Inovação Tecnológica - GPEIT',
    needP2: 'Identificar, estruturar e gerenciar o portfólio de projetos de educação e inovação tecnológica, viabilizando a captação de recursos externos e a cooperação com fundações de apoio e agências de fomento, para impulsionar o desenvolvimento acadêmico-institucional em propriedade intlectual e inovação',
    subprocess: 'Execução e Monitoramento dos Projetos',
    needP3: 'Garantir a implementação eficiente dos projetos, com monitoramento contínuo de prazos, custos e qualidade.',
    products: [
    'Relatórios de execução parciais',
    'Protótipos e tecnologias desenvolvidas'
  ],
    suppliers: [
    'Pesquisadores (bolsistas e servidores)',
    'Laboratório de Inovação',
    'Coordenadores de Projeto'
  ],
    inputs: [
    'Plano de Trabalho executado',
    'Dados de campo e laboratoriais'
  ],
    outputs: [
    'Relatórios de monitoramento',
    'Ativos de PI protegidos ou licenciados'
  ],
    customers: [
    'Alta Direção',
    'Setores produtivos',
    'Sociedade'
  ],
    requirements: [
    'Cumprimento de prazos e metas',
    'Sigilo e Confidencialidade'
  ],
    customerRequirements: [
    'Qualidade técnica',
    'Aplicabilidade prática',
    'Inovação pública'
  ],
    tools: [
    'SEI',
    'Laboratório de Inovação'
  ],
    actors: [
    'Coordenadores de Projeto',
    'InovACAD',
    'CGI'
  ],
    kpis: [
    'Tempo médio de conclusão de projetos',
    'Número de ativos protegidos'
  ],
    regulations: [
    'Política de Inovação',
    'Política de Direitos Autorais da ACAD'
  ]
  }
,
  {
    id: '9',
    type: 'Finalístico',
    category: 'Formação em PI e Inovação',
    macroprocess: 'Formação em PI e Inovação',
    process: 'Gestão de Projetos de Educação e Inovação Tecnológica - GPEIT',
    needP2: 'Identificar, estruturar e gerenciar o portfólio de projetos de educação e inovação tecnológica, viabilizando a captação de recursos externos e a cooperação com fundações de apoio e agências de fomento, para impulsionar o desenvolvimento acadêmico-institucional em propriedade intlectual e inovação',
    subprocess: 'Prestação de Contas e Divulgação de Resultados',
    needP3: 'Concluir o ciclo do projeto, documentar e divulgar os resultados, e prestar contas aos financiadores e à sociedade.',
    products: [
    'Relatórios finais de prestação de contas',
    'Publicações Científicas e Técnicas'
  ],
    suppliers: [
    'Fundações de Apoio',
    'InovACAD',
    'Conselho Editorial'
  ],
    inputs: [
    'Resultados finais dos projetos',
    'Comprovantes de despesa',
    'Manuscritos técnicos'
  ],
    outputs: [
    'Parecer conclusivo de contas',
    'Artigos publicados na Revista Interfaces da PI'
  ],
    customers: [
    'Órgãos de Controle (CGU/TCU)',
    'Comunidade acadêmica',
    'Financiadores'
  ],
    requirements: [
    'Transparência e integridade',
    'Padrão culto da língua'
  ],
    customerRequirements: [
    'Acesso aberto',
    'Transparência pública',
    'Qualidade editorial'
  ],
    tools: [
    'SEI',
    'Revista Interfaces da PI',
    'Repositório Institucional'
  ],
    actors: [
    'Biblioteca',
    'Editor-Chefe',
    'Auditoria Interna (AUDIT)'
  ],
    kpis: [
    'Índice de aprovação de contas',
    'Número de publicações do corpo docente/discente'
  ],
    regulations: [
    'Política Editorial da ACAD',
    'Regulamento da Revista Interfaces da PI',
    'Lei nº 12.527/11 (LAI)'
  ]
  }
,
  {
    id: '10',
    type: 'Finalístico',
    category: 'Formação em PI e Inovação',
    macroprocess: 'Formação em PI e Inovação',
    process: 'Gestão de Projetos de Educação e Inovação Tecnológica - GPEIT',
    needP2: 'Identificar, estruturar e gerenciar o portfólio de projetos de educação e inovação tecnológica, viabilizando a captação de recursos externos e a cooperação com fundações de apoio e agências de fomento, para impulsionar o desenvolvimento acadêmico-institucional em propriedade intlectual e inovação',
    subprocess: 'Gestão de Bolsas de Pesquisa em Inovação',
    needP3: 'Captar e gerir os recursos de editais de fomento, em parceria com fundações de apoio, para financiar bolsistas em projetos de pesquisa do INPI.',
    products: [
    'Bolsas de estímulo à inovação concedidas',
    'Termos de Compromisso assinados'
  ],
    suppliers: [
    'Fundações de Apoio',
    'CGRH',
    'Comitê Julgador'
  ],
    inputs: [
    'Chamadas Públicas (Editais)',
    'Planos de Trabalho de bolsistas',
    'Currículos (Lattes)'
  ],
    outputs: [
    'Declarações de participação',
    'Relatórios de atividades dos bolsistas'
  ],
    customers: [
    'Pesquisadores (bolsistas)',
    'Unidades do INPI',
    'Sociedade'
  ],
    requirements: [
    'Ausência de Conflito de Interesses',
    'Obediência ao teto constitucional'
  ],
    customerRequirements: [
    'Tempestividade no pagamento',
    'Segurança jurídica',
    'Valorização do capital intelectual'
  ],
    tools: [
    'SEI',
    'Sistema de Pagamento das Fundações',
    'Inovadata'
  ],
    actors: [
    'InovACAD',
    'CGRH',
    'Responsáveis Acadêmicos e Técnicos'
  ],
    kpis: [
    'Número de bolsas concedidas',
    'Tempo médio de permanência do bolsista',
    'Satisfação do bolsista'
  ],
    regulations: [
    'Portaria INPI/PR nº 346/20 (PDPI)',
    'Lei nº 12.813/13'
  ]
  }
,
  {
    id: '11',
    type: 'Finalístico',
    category: 'Formação em PI e Inovação',
    macroprocess: 'Formação em PI e Inovação',
    process: 'Gestão de Eventos e de Difusão do Conhecimento Acadêmico - GED',
    needP2: 'Coordenar e amplificar a divulgação da produção acadêmica da Academia do INPI (pós-graduação, cursos, eventos e pesquisas), em articulação com a Área de Comunicação do INPI, garantindo alcance estratégico, alinhamento institucional e impacto na sociedade.',
    subprocess: 'Divulgação de Eventos Acadêmicos',
    needP3: 'Garantir a divulgação estratégica de eventos (webinars, palestras, defesas) da Academia do INPI, maximizando participação e impacto institucional.',
    products: [
    'Campanhas de divulgação de eventos concluídas',
    'Relatórios de engajamento e público'
  ],
    suppliers: [
    'DIPGP',
    'DIEPI',
    'InovACAD',
    'Coordenação de Comunicação Social (CGCOM)'
  ],
    inputs: [
    'Programação detalhada (datas e temas)',
    'Materiais de apoio dos palestrantes',
    'Diretrizes de identidade visual do INPI'
  ],
    outputs: [
    'Peças publicitárias digitais',
    'Convites institucionais disparados',
    'Gravações de eventos disponibilizadas no canal oficial'
  ],
    customers: [
    'Sociedade em geral',
    'Comunidade acadêmica',
    'Profissionais de PI e inovação'
  ],
    requirements: [
    'Antecedência mínima para divulgação',
    'Aderência à identidade visual e uso correto de logomarcas'
  ],
    customerRequirements: [
    'Clareza das informações',
    'Facilidade de inscrição',
    'Acesso a conteúdos pós-evento'
  ],
    tools: [
    'Portal do INPI',
    'Intranet',
    'YouTube',
    'Termos de Autorização de Voz e Imagem',
    'SEI'
  ],
    actors: [
    'CGCOM',
    'ACAD'
  ],
    kpis: [
    'Número de eventos realizados por ano',
    'Taxa média de satisfação dos participantes'
  ],
    regulations: [
    'Portaria INPI/PR nº 512/2019 (Política de Relacionamento e Transparência)',
    'Regimento Interno do INPI'
  ]
  }
,
  {
    id: '12',
    type: 'Finalístico',
    category: 'Formação em PI e Inovação',
    macroprocess: 'Formação em PI e Inovação',
    process: 'Gestão de Eventos e de Difusão do Conhecimento Acadêmico - GED',
    needP2: 'Coordenar e amplificar a divulgação da produção acadêmica da Academia do INPI (pós-graduação, cursos, eventos e pesquisas), em articulação com a Área de Comunicação do INPI, garantindo alcance estratégico, alinhamento institucional e impacto na sociedade.',
    subprocess: 'Gestão dos Perfis da Academia em Redes Sociais',
    needP3: 'Manter canais especializados da Academia para divulgar produção acadêmica e engajar comunidades técnicas em PI',
    products: [
    'Canais de comunicação social ativos',
    'Portfólio de postagens técnicas e acadêmicas'
  ],
    suppliers: [
    'CGCOM',
    'ACAD',
    'Biblioteca (BIBLI)',
    'Pesquisadores e alunos'
  ],
    inputs: [
    'Pautas de interesse público',
    'Resultados de pesquisas científicas',
    'Informes sobre novos serviços e publicações'
  ],
    outputs: [
    'Conteúdos multimídia publicados',
    'Relatórios de métricas de alcance social'
  ],
    customers: [
    'Seguidores',
    'Usuários do Sistema Nacional de Propriedade Intelectual (SNPI)',
    'Empresas e agências de fomento'
  ],
    requirements: [
    'Linguagem acessível',
    'Autorização prévia para divulgação de imagens e vozes'
  ],
    customerRequirements: [
    'Interatividade',
    'Periodicidade das postagens',
    'Veracidade e tempestividade das informações'
  ],
    tools: [
    'Redes Sociais Oficiais',
    'Ferramentas de Edição'
  ],
    actors: [
    'CGCOM',
    'ACAD'
  ],
    kpis: [
    'Número de seguidores nas redes sociais',
    'Taxa média de compartilhamentos'
  ],
    regulations: [
    'Política de Direitos Autorais da ACAD',
    'Diretrizes da Secretaria de Comunicação Social da Presidência'
  ]
  }
,
  {
    id: '13',
    type: 'Finalístico',
    category: 'Formação em PI e Inovação',
    macroprocess: 'Formação em PI e Inovação',
    process: 'Gestão de Eventos e de Difusão do Conhecimento Acadêmico - GED',
    needP2: 'Coordenar e amplificar a divulgação da produção acadêmica da Academia do INPI (pós-graduação, cursos, eventos e pesquisas), em articulação com a Área de Comunicação do INPI, garantindo alcance estratégico, alinhamento institucional e impacto na sociedade.',
    subprocess: 'Produção de Conteúdo Multimídia',
    needP3: 'Transformar produção acadêmica em formatos acessíveis e atraentes para ampliar divulgação e impacto.',
    products: [
    'Vídeos, podcasts e infográficos de divulgação científica',
    'Objetos de aprendizagem multimídia'
  ],
    suppliers: [
    'SETED',
    'BIBLI',
    'Docentes e especialistas',
    'Produtoras de áudio/vídeo (terceirizadas)'
  ],
    inputs: [
    'Artigos e teses originais',
    'Briefings pedagógicos',
    'Termos de cessão de direitos autorais'
  ],
    outputs: [
    'Arquivos digitais diagramados',
    'Conteúdos em "Acesso Aberto" (Creative Commons)'
  ],
    customers: [
    'Estudantes',
    'Educadores',
    'Instituições parceiras',
    'Sociedade'
  ],
    requirements: [
    'Qualidade técnica e pedagógica',
    'Atendimento aos critérios de acessibilidade (Vlibras, audiodescrição)'
  ],
    customerRequirements: [
    'Dinamismo',
    'Formatos compatíveis com dispositivos móveis',
    'Inovação externa'
  ],
    tools: [
    'Portal do INPI',
    'Ferramentas de Edição'
  ],
    actors: [
    'CGCOM',
    'ACAD'
  ],
    kpis: [
    'Número de materiais pedagógicos produzidos',
    'Índice de visualizações/downloads'
  ],
    regulations: [
    'Lei nº 9.610/98 (Direitos Autorais)',
    'Política Editorial da ACAD'
  ]
  }
,
  {
    id: '14',
    type: 'Finalístico',
    category: 'Formação em PI e Inovação',
    macroprocess: 'Formação em PI e Inovação',
    process: 'Gestão de Eventos e de Difusão do Conhecimento Acadêmico - GED',
    needP2: 'Coordenar e amplificar a divulgação da produção acadêmica da Academia do INPI (pós-graduação, cursos, eventos e pesquisas), em articulação com a Área de Comunicação do INPI, garantindo alcance estratégico, alinhamento institucional e impacto na sociedade.',
    subprocess: 'Gestão da Página da Academia',
    needP3: 'Manter a página da Academia atualizada, funcional e alinhada às diretrizes do INPI, servindo como hub central para divulgação acadêmica e interação com públicos estratégicos.',
    products: [
    'Hub digital de conhecimento atualizado',
    'Repositório de documentos oficiais e acadêmicos'
  ],
    suppliers: [
    'CGTI',
    'BIBLI',
    'Serviço Acadêmico (SERAC)',
    'DIPGP'
  ],
    inputs: [
    'Versões finais de teses e dissertações',
    'Editais de seleção',
    'Notícias da ACAD'
  ],
    outputs: [
    'Catálogo digital disponível para busca',
    'Documentação acessível em múltiplos idiomas'
  ],
    customers: [
    'Pesquisadores',
    'Candidatos a cursos',
    'Órgãos de controle',
    'Usuários do Portal Gov.br'
  ],
    requirements: [
    'Estabilidade do servidor',
    'Segurança da informação',
    'Padronização conforme o SISP'
  ],
    customerRequirements: [
    'Usabilidade e navegabilidade',
    'Transparência passiva e ativa',
    'Download rápido de arquivos'
  ],
    tools: [
    'Portal do INPI (CMS Plone)'
  ],
    actors: [
    'ACAD'
  ],
    kpis: [
    'Número de publicações catalogadas no repositório institucional',
    'Número de acessos ao acervo digital'
  ],
    regulations: [
    'Lei nº 12.527/11 (LAI)',
    'Política de Gestão da Inovação do INPI'
  ]
  }
,
  {
    id: '15',
    type: 'Finalístico',
    category: 'Formação em PI e Inovação',
    macroprocess: 'Formação em PI e Inovação',
    process: 'Gestão de Acervo Bibliográfico e Editorial - GAB',
    needP2: 'Garantir a organização, preservação e disseminação do acervo bibliográfico e editorial do INPI, promovendo o acesso à informação técnica e científica em propriedade intelectual (PI) para servidores, pesquisadores e sociedade.',
    subprocess: 'Aquisição e Atualização de Acervo',
    needP3: 'Adquirir materiais alinhados às demandas do INPI, garantindo atualização constante do acervo em PI e inovação.',
    products: [
    'Acervo físico e digital atualizado',
    'Assinaturas de bases de dados técnico-científicas ativas'
  ],
    suppliers: [
    'Editoras e livrarias especializadas',
    'OMPI',
    'Agências de fomento',
    'Doadores (pesquisadores e autores)'
  ],
    inputs: [
    'Demandas de aquisição das áreas técnicas',
    'Sugestões de docentes e discentes',
    'Orçamento anual aprovado'
  ],
    outputs: [
    'Obras incorporadas ao acervo',
    'Bases de dados acessíveis via IP ou acesso remoto'
  ],
    customers: [
    'Servidores e colaboradores do INPI',
    'Alunos da ACAD',
    'Pesquisadores externos e sociedade'
  ],
    requirements: [
    'Pertinência temática à PI e Inovação',
    'Atualidade das obras',
    'Conformidade com normas de contratação pública'
  ],
    customerRequirements: [
    'Diversidade de títulos',
    'Rapidez na atualização',
    'Facilidade de consulta'
  ],
    tools: [
    'SEI',
    'Sistema de Gestão de Bibliotecas',
    'Portal do INPI'
  ],
    actors: [
    'BIBLI'
  ],
    kpis: [
    'Número de publicações catalogadas no acervo da Biblioteca',
    'Percentual de execução do orçamento de acervo'
  ],
    regulations: [
    'Lei nº 12.244/10 (Universalização de Bibliotecas)',
    'Política Editorial da ACAD',
    'Regimento Interno do INPI'
  ]
  }
,
  {
    id: '16',
    type: 'Finalístico',
    category: 'Formação em PI e Inovação',
    macroprocess: 'Formação em PI e Inovação',
    process: 'Gestão de Acervo Bibliográfico e Editorial - GAB',
    needP2: 'Garantir a organização, preservação e disseminação do acervo bibliográfico e editorial do INPI, promovendo o acesso à informação técnica e científica em propriedade intelectual (PI) para servidores, pesquisadores e sociedade.',
    subprocess: 'Catalogação, Indexação e Preservação do Acervo',
    needP3: 'Padronizar a organização, recuperação e preservação do acervo físico e digital do INPI, garantindo acesso eficiente e conservação de longo prazo, com foco em materiais de propriedade intelectual.',
    products: [
    'Obras tecnicamente catalogadas',
    'Fichas catalográficas emitidas',
    'Acervo físico preservado e higienizado'
  ],
    suppliers: [
    'Autores',
    'Unidades acadêmicas (DIEPI/DIPGP)',
    'Gráficas e editoras (depósito legal)'
  ],
    inputs: [
    'Novas obras adquiridas',
    'Doações recebidas',
    'Teses e dissertações defendidas',
    'Publicações institucionais originais'
  ],
    outputs: [
    'Registros ativos no catálogo online',
    'Etiquetas de identificação e segurança',
    'Itens restaurados'
  ],
    customers: [
    'Usuários da biblioteca',
    'Pesquisadores',
    'Conselho Editorial'
  ],
    requirements: [
    'Observância aos padrões ABNT e ISO',
    'Integridade física dos volumes',
    'Qualidade de metadados'
  ],
    customerRequirements: [
    'Precisão na recuperação da informação',
    'Organização lógica do acervo',
    'Acesso à memória técnica'
  ],
    tools: [
    'SEI',
    'Sistema de Gestão de Bibliotecas',
    'Portal do INPI'
  ],
    actors: [
    'BIBLI'
  ],
    kpis: [
    'Porcentagem de itens catalogados no prazo',
    'Número de obras preservadas/restauradas por ano'
  ],
    regulations: [
    'Lei nº 4.084/62 (Profissão de Bibliotecário)',
    'Política Editorial da ACAD',
    'Lei nº 9.610/98 (Direitos Autorais)'
  ]
  }
,
  {
    id: '17',
    type: 'Finalístico',
    category: 'Formação em PI e Inovação',
    macroprocess: 'Formação em PI e Inovação',
    process: 'Gestão de Acervo Bibliográfico e Editorial - GAB',
    needP2: 'Garantir a organização, preservação e disseminação do acervo bibliográfico e editorial do INPI, promovendo o acesso à informação técnica e científica em propriedade intelectual (PI) para servidores, pesquisadores e sociedade.',
    subprocess: 'Disseminação e Acesso Virtual',
    needP3: 'Disponibilizar e promover o acesso remoto ao acervo digital do INPI, garantindo visibilidade, usabilidade e impacto dos materiais em propriedade intelectual para públicos estratégicos.',
    products: [
    'Repositório Institucional atualizado',
    'Sistema de empréstimo virtual operante'
  ],
    suppliers: [
    'CGTI (suporte de rede)',
    'BIBLI',
    'DIPGP',
    'DIEPI'
  ],
    inputs: [
    'Versões digitais de obras',
    'Metadados de publicações',
    'Pedidos de consulta remota'
  ],
    outputs: [
    'Downloads de artigos e teses',
    'Consultas online realizadas',
    'Divulgação em redes sociais'
  ],
    customers: [
    'Servidores',
    'Discentes',
    'Sociedade brasileira e estrangeira (países lusófonos e latino-americanos)'
  ],
    requirements: [
    'Estabilidade do sistema',
    'Segurança da informação',
    'Fomento ao Acesso Aberto'
  ],
    customerRequirements: [
    'Navegabilidade intuitiva',
    'Acessibilidade digital (Vlibras)',
    'Disponibilidade 24/7'
  ],
    tools: [
    'Repositório Institucional (DSpace)',
    'Academia Virtual (Moodle)',
    'Portal do INPI'
  ],
    actors: [
    'BIBLI'
  ],
    kpis: [
    'Número de acessos ao acervo digital',
    'Taxa de downloads por linha editorial'
  ],
    regulations: [
    'Lei nº 12.527/11 (LAI)',
    'Política de Direitos Autorais da ACAD',
    'Portaria INPI/PR nº 512/19'
  ]
  }
,
  {
    id: '18',
    type: 'Finalístico',
    category: 'Formação em PI e Inovação',
    macroprocess: 'Formação em PI e Inovação',
    process: 'Gestão de Acervo Bibliográfico e Editorial - GAB',
    needP2: 'Garantir a organização, preservação e disseminação do acervo bibliográfico e editorial do INPI, promovendo o acesso à informação técnica e científica em propriedade intelectual (PI) para servidores, pesquisadores e sociedade.',
    subprocess: 'Gestão da Revista de Estudos Acadêmicos de PI e Inovação',
    needP3: 'Garantir a publicação regular da Revista de Estudos Acadêmicos de PI e Inovação, assegurando qualidade científica, relevância temática e divulgação estratégica do conhecimento produzido no INPI e por parceiros.',
    products: [
    'Edições periódicas publicadas',
    'Artigos científicos diagramados e revisados'
  ],
    suppliers: [
    'Autores',
    'Pareceristas (Consultores Ad Hoc)',
    'Corpo Editorial Científico'
  ],
    inputs: [
    'Manuscritos submetidos',
    'Pareceres de avaliação (blind review)',
    'Chamadas de artigos'
  ],
    outputs: [
    'Artigos publicados com DOI',
    'Indexação em bases científicas',
    'Feedback aos autores'
  ],
    customers: [
    'Comunidade científica',
    'Profissionais de PI',
    'Gestores públicos',
    'Sociedade'
  ],
    requirements: [
    'Ineditismo e rigor acadêmico',
    'Ética na pesquisa (sem plágio)',
    'Observância a prazos de avaliação'
  ],
    customerRequirements: [
    'Qualidade editorial',
    'Gratuidade de submissão e acesso',
    'Relevância temática'
  ],
    tools: [
    'Open Journal Systems (OJS)',
    'SEI',
    'Portal do INPI'
  ],
    actors: [
    'BIBLI'
  ],
    kpis: [
    'Número de publicações acadêmicas do corpo docente/discente',
    'Fator de impacto e citações'
  ],
    regulations: [
    'Regulamento da Revista Interfaces da PI',
    'Política Editorial da ACAD',
    'Critérios CAPES'
  ]
  }
,
  {
    id: '19',
    type: 'Finalístico',
    category: 'Formação em PI e Inovação',
    macroprocess: 'Formação em PI e Inovação',
    process: 'Gestão de Acervo Bibliográfico e Editorial - GAB',
    needP2: 'Garantir a organização, preservação e disseminação do acervo bibliográfico e editorial do INPI, promovendo o acesso à informação técnica e científica em propriedade intelectual (PI) para servidores, pesquisadores e sociedade.',
    subprocess: 'Gestão de Depósito e Certificação de Teses e Dissertações',
    needP3: 'Assegurar o depósito, validação e certificação de trabalhos acadêmicos, garantindo conformidade com as normas do INPI e liberação de diplomas.',
    products: [
    'Teses e dissertações depositadas e validadas',
    'Certidões de "Nada Consta" de biblioteca'
  ],
    suppliers: [
    'Discentes (Mestrandos e Doutorandos)',
    'Orientadores',
    'DIPGP'
  ],
    inputs: [
    'Trabalhos aprovados em banca',
    'Formulários de depósito',
    'Termos de Cessão/Concessão de Direitos Autorais'
  ],
    outputs: [
    'Registros no repositório',
    'Encaminhamento de dados à Plataforma Sucupira'
  ],
    customers: [
    'Discentes (para expedição de diploma)',
    'ACAD',
    'CAPES',
    'Sociedade'
  ],
    requirements: [
    'Aderência às normas ABNT',
    'Qualidade textual',
    'Autorização expressa para publicação'
  ],
    customerRequirements: [
    'Agilidade na emissão da certidão',
    'Transparência nos fluxos',
    'Acesso virtual irrestrito'
  ],
    tools: [
    'SEI',
    'Plataforma Sucupira (CAPES)',
    'Repositório Institucional'
  ],
    actors: [
    'BIBLI',
    'SERAC',
    'DIPGP'
  ],
    kpis: [
    'Número de teses e dissertações catalogadas',
    'Prazo médio entre defesa e depósito final'
  ],
    regulations: [
    'Política de Direitos Autorais da ACAD',
    'Regimento Interno do INPI',
    'Normas de Pós-Graduação'
  ]
  }
,
  {
    id: '20',
    type: 'Gestão',
    category: 'Desenvolvimento e Transformação Organizacional',
    macroprocess: 'Desenvolvimento e Transformação Organizacional',
    process: 'Gestão da Inovação - GIN',
    needP2: 'Fomentar e gerenciar a inovação institucional de forma sistemática, coordenando o ciclo de identificação, desenvolvimento, implantação e medição de novas soluções, visando a modernização de processos, a melhoria dos serviços prestados e o fortalecimento da cultura intraempreendedora no INPI',
    subprocess: 'Estímulo à Inovação',
    needP3: 'Promover a cultura de intraempreendedorismo e captar ideias, dores ou oportunidades de aprimoramento u concepção de processos, produtos e serviços junto aos servidores e colaboradores, alimentando o funil de inovação institucional',
    products: [
    'Ideias captadas e registradas',
    'Banco de Ideias atualizado',
    'Campanhas de intraempreendedorismo realizadas'
  ],
    suppliers: [
    'Servidores e colaboradores de todas as unidades',
    'Agentes de Inovação e Prospecção Local (AGIL)'
  ],
    inputs: [
    'Desafios estratégicos',
    'Dores operacionais',
    'Tendências de mercado',
    'Editais de prêmios/desafios'
  ],
    outputs: [
    'Portfólio de ideias priorizadas pelo Comitê de Governança Interno (CGI)',
    'Propostas selecionadas para o Laboratório'
  ],
    customers: [
    'Alta Gestão',
    'Unidades organizacionais',
    'Sociedade'
  ],
    requirements: [
    'Criatividade',
    'Alinhamento à missão e valores',
    'Observância à ética e integridade'
  ],
    customerRequirements: [
    'Originalidade',
    'Potencial de geração de valor',
    'Viabilidade técnica preliminar'
  ],
    tools: [
    'Portal da Gestão da Inovação (PGI)',
    'Intranet',
    'Workshops de Ideação',
    'Ferramentas de Cocriação'
  ],
    actors: [
    'CGI',
    'Gestores das Unidades',
    'Servidores e Colaboradores'
  ],
    kpis: [
    'Número de propostas de inovação submetidas à avaliação',
    'Taxa de participação do corpo funcional'
  ],
    regulations: [
    'Política de Gestão da Inovação do INPI',
    'Lei nº 10.973/2004'
  ]
  }
,
  {
    id: '21',
    type: 'Gestão',
    category: 'Desenvolvimento e Transformação Organizacional',
    macroprocess: 'Desenvolvimento e Transformação Organizacional',
    process: 'Gestão da Inovação - GIN',
    needP2: 'Fomentar e gerenciar a inovação institucional de forma sistemática, coordenando o ciclo de identificação, desenvolvimento, implantação e medição de novas soluções, visando a modernização de processos, a melhoria dos serviços prestados e o fortalecimento da cultura intraempreendedora no INPI',
    subprocess: 'Desenvolvimento da Inovação',
    needP3: 'Transformar ideias selecionadas em projetos pilotos, protótipos ou soluções viáveis, definindo requisitos técnicos, recursos necessários e estratégias de execução',
    products: [
    'Protótipos validados',
    'Projetos-piloto executados',
    'Requisitos técnicos definidos'
  ],
    suppliers: [
    'Laboratório de Inovação',
    'Times volantes de inovação',
    'InovACAD'
  ],
    inputs: [
    'Ideias priorizadas',
    'Recursos orçamentários e tecnológicos',
    'Planos de trabalho'
  ],
    outputs: [
    'Soluções testadas e prontas para escala',
    'Relatórios de experimentação'
  ],
    customers: [
    'Donos de processos',
    'Usuários da solução'
  ],
    requirements: [
    'Uso de metodologias ágeis',
    'Segurança da experimentação',
    'Capacidade técnica muldisciplinar'
  ],
    customerRequirements: [
    'Robustez técnica',
    'Mitigação de riscos',
    'Facilidade de uso (usabilidade)'
  ],
    tools: [
    'Laboratório de Inovação',
    'Ferramentas de Prototipagem',
    'Design Thinking',
    'SCRUM',
    'Portal da Gestão da Inovação (PGI)'
  ],
    actors: [
    'Laboratório de Inovação',
    'Equipes de Projeto'
  ],
    kpis: [
    'Número de protótipos/pilotos validados',
    'Tempo médio de desenvolvimento'
  ],
    regulations: [
    'Manual de Gerenciamento de Projetos e de Gestão de Riscos do INPI'
  ]
  }
,
  {
    id: '22',
    type: 'Gestão',
    category: 'Desenvolvimento e Transformação Organizacional',
    macroprocess: 'Desenvolvimento e Transformação Organizacional',
    process: 'Gestão da Inovação - GIN',
    needP2: 'Fomentar e gerenciar a inovação institucional de forma sistemática, coordenando o ciclo de identificação, desenvolvimento, implantação e medição de novas soluções, visando a modernização de processos, a melhoria dos serviços prestados e o fortalecimento da cultura intraempreendedora no INPI',
    subprocess: 'Implantação da Inovação',
    needP3: 'Executar, escalar e integrar as novas soluções validadas aos processos de trabalho rotineiros do INPI, garantindo a gestão da mudança e a sua adoção efetiva pelos usuários',
    products: [
    'Novos processos/produtos integrados à rotina',
    'Serviços modernizados',
    'Inovações escaladas'
  ],
    suppliers: [
    'Comitê de Governança Interno (CGI)',
    'CGTI (integração tecnológica)',
    'DIRAD'
  ],
    inputs: [
    'Soluções validadas',
    'Plano de gestão da mudança',
    'Orçamento para escala'
  ],
    outputs: [
    'Valor público entregue',
    'Melhoria na experiência do usuário',
    'Eficiência operacional ampliada'
  ],
    customers: [
    'Sociedade',
    'Usuários do sistema de PI',
    'Corpo funcional do INPI'
  ],
    requirements: [
    'Escalabilidade',
    'Conformidade com segurança da informação e proteção de dados (LGPD)'
  ],
    customerRequirements: [
    'Continuidade do serviço',
    'Eficiência',
    'Simplicidade no acesso'
  ],
    tools: [
    'Sistemas Institucionais Integrados',
    'Intranet',
    'Portal da Gestão da Inovação (PGI)'
  ],
    actors: [
    'Laboratório de Inovação',
    'Equipes de Projeto'
  ],
    kpis: [
    'Número de inovações implantadas',
    'Taxa de adoção pelos usuários'
  ],
    regulations: [
    'Marco Legal de Ciência, Tecnologia e Inovação'
  ]
  }
,
  {
    id: '23',
    type: 'Gestão',
    category: 'Desenvolvimento e Transformação Organizacional',
    macroprocess: 'Desenvolvimento e Transformação Organizacional',
    process: 'Gestão da Inovação - GIN',
    needP2: 'Fomentar e gerenciar a inovação institucional de forma sistemática, coordenando o ciclo de identificação, desenvolvimento, implantação e medição de novas soluções, visando a modernização de processos, a melhoria dos serviços prestados e o fortalecimento da cultura intraempreendedora no INPI',
    subprocess: 'Medição da Inovação',
    needP3: 'Monitorar os indicadores de desempenho e impacto das iniciativas implementadas, avaliando o retorno sobre o investimento (ROI) e gerando aprendizado para novos ciclos',
    products: [
    'Relatórios de impacto',
    'Análise de ROI (Retorno sobre Investimento)',
    'Registro de lições aprendidas'
  ],
    suppliers: [
    'Gestores de processos',
    'InovACAD',
    'CGPE'
  ],
    inputs: [
    'Dados pós-implantação',
    'Resultados de KPIs',
    'Feedback de usuários'
  ],
    outputs: [
    'Subsídios para revisão estratégica',
    'Planos de melhoria para novos ciclos'
  ],
    customers: [
    'Presidência',
    'CGI',
    'CGPE'
  ],
    requirements: [
    'Rigor analítico',
    'Transparência',
    'Objetividade'
  ],
    customerRequirements: [
    'Apoio à tomada de decisão',
    'Comprovação da eficiência'
  ],
    tools: [
    'Portal da Gestão da Inovação (PGI)'
  ],
    actors: [
    'Laboratório de Inovação',
    'Equipes de Projeto'
  ],
    kpis: [
    'Métricas de desempenho e impacto definidas na fase de projeto'
  ],
    regulations: [
    'Política de Gestão da Inovação (Capítulo II - Monitoramento)'
  ]
  }
,
  {
    id: '24',
    type: 'Gestão',
    category: 'Desenvolvimento e Transformação Organizacional',
    macroprocess: 'Desenvolvimento e Transformação Organizacional',
    process: 'Gestão do Conhecimento - GCO',
    needP2: 'Gerenciar o ciclo de vida do conhecimento organizacional, promovendo a identificação, o desenvolvimento, a retenção e a aplicação efetiva dos saberes internos, a fim de preservar o capital intelectual, mitigar a perda de expertise crítica e potencializar a eficiência e a inovação institucional',
    subprocess: 'Identificação dos Conhecimentos',
    needP3: 'Mapear e inventariar o conhecimento existente na organização, tanto o conhecimento explícito (documentado) quanto o conhecimento tácito (experiências e habilidades dos colaboradores).',
    products: [
    'Mapeamento de conhecimentos críticos',
    'Inventário de saberes organizacionais'
  ],
    suppliers: [
    'Servidores e colaboradores de todos os níveis',
    'Bancos de dados e sistemas de informação'
  ],
    inputs: [
    'Necessidades de conhecimento da organização',
    'Informações sobre processos de trabalho',
    'Gaps de competência'
  ],
    outputs: [
    'Relatório de lacunas de conhecimento',
    'Base de dados de especialistas (expertises) mapeadas'
  ],
    customers: [
    'Gestores e líderes',
    'Equipes de projetos e áreas de inovação'
  ],
    requirements: [
    'Veracidade das informações',
    'Confiabilidade e autenticidade dos dados fornecidos'
  ],
    customerRequirements: [
    'Precisão dos dados',
    'Facilidade de recuperação da informação',
    'Atualização constante'
  ],
    tools: [
    'Portal da Gestão do Conhecimento (PGC)',
    'Mapa de Conhecimentos Críticos',
    'Intranet'
  ],
    actors: [
    'CETEC',
    'ACAD',
    'COADE',
    'CGRH'
  ],
    kpis: [
    'Número de itens de conhecimento mapeados',
    'Grau de vulnerabilidade dos conhecimentos'
  ],
    regulations: [
    'Política Editorial da ACAD (Método SECI)',
    'Norma ISO 30401'
  ]
  }
,
  {
    id: '25',
    type: 'Gestão',
    category: 'Desenvolvimento e Transformação Organizacional',
    macroprocess: 'Desenvolvimento e Transformação Organizacional',
    process: 'Gestão do Conhecimento - GCO',
    needP2: 'Gerenciar o ciclo de vida do conhecimento organizacional, promovendo a identificação, o desenvolvimento, a retenção e a aplicação efetiva dos saberes internos, a fim de preservar o capital intelectual, mitigar a perda de expertise crítica e potencializar a eficiência e a inovação institucional',
    subprocess: 'Desenvolvimento dos Conhecimentos',
    needP3: 'Criar novos conhecimentos e aprimorar os conhecimentos existentes, para atender às necessidades da organização.',
    products: [
    'Novos produtos, serviços e processos',
    'Relatórios de lições aprendidas e melhores práticas'
  ],
    suppliers: [
    'Equipes de PD&I',
    'Consultores externos',
    'Docentes da ACAD'
  ],
    inputs: [
    'Demandas de inovação',
    'Resultados de pesquisas e análises técnicas',
    'Metodologias ágeis'
  ],
    outputs: [
    'Publicações científicas',
    'Patentes e ativos de PI',
    'Manuais e normas técnicas atualizados'
  ],
    customers: [
    'Servidores e discentes',
    'Ecossistema de Inovação',
    'Setores produtivos'
  ],
    requirements: [
    'Ineditismo',
    'Rigor técnico-científico',
    'Observância às condutas éticas'
  ],
    customerRequirements: [
    'Acesso Aberto (Creative Commons)',
    'Aplicabilidade prática',
    'Qualidade pedagógica'
  ],
    tools: [
    'Academia Virtual (Moodle)',
    'Revista Interfaces da PI',
    'Laboratório de Inovação',
    'Portal da Gestão do Conhecimento (PGC)'
  ],
    actors: [
    'CETEC',
    'ACAD',
    'COADE',
    'CGRH'
  ],
    kpis: [
    'Número de publicações acadêmicas (corpo docente/discente)',
    'Taxa de satisfação com mentorias'
  ],
    regulations: [
    'Política de Inovação da ACAD',
    'Diretrizes da CAPES (Área 45)'
  ]
  }
,
  {
    id: '26',
    type: 'Gestão',
    category: 'Desenvolvimento e Transformação Organizacional',
    macroprocess: 'Desenvolvimento e Transformação Organizacional',
    process: 'Gestão do Conhecimento - GCO',
    needP2: 'Gerenciar o ciclo de vida do conhecimento organizacional, promovendo a identificação, o desenvolvimento, a retenção e a aplicação efetiva dos saberes internos, a fim de preservar o capital intelectual, mitigar a perda de expertise crítica e potencializar a eficiência e a inovação institucional',
    subprocess: 'Retenção e Proteção dos Conhecimentos',
    needP3: 'Garantir que o conhecimento valioso da organização seja preservado e protegido, para evitar a perda de informações e habilidades importantes, bem como evitar a publicação de informações sigilosas.',
    products: [
    'Repositório Institucional atualizado',
    'Ativos de PI protegidos',
    'Memória técnica preservada'
  ],
    suppliers: [
    'Especialistas em segurança da informação',
    'Equipes de gestão documental'
  ],
    inputs: [
    'Conhecimento estratégico valioso',
    'Termos de Sigilo e Confidencialidade',
    'Riscos de perda de conhecimento'
  ],
    outputs: [
    'Documentos protegidos',
    'Acervo digital classificado',
    'Termos de Cessão de Direitos Autorais'
  ],
    customers: [
    'Alta Gestão',
    'Auditores',
    'Gerações futuras de servidores'
  ],
    requirements: [
    'Confidencialidade',
    'Integridade física e digital do acervo',
    'Segurança da informação'
  ],
    customerRequirements: [
    'Estabilidade do sistema',
    'Segurança jurídica',
    'Perenidade do acesso'
  ],
    tools: [
    'INPI Drive',
    'Sistema de Gestão de Bibliotecas',
    'Repositório Institucional',
    'Portal da Gestão do Conhecimento (PGC)'
  ],
    actors: [
    'BIBLI',
    'ACAD',
    'CGRH',
    'DIRAD'
  ],
    kpis: [
    'Número de teses/dissertações catalogadas',
    'Porcentagem de itens catalogados no prazo'
  ],
    regulations: [
    'Política de Direitos Autorais da ACAD',
    'Lei nº 12.527/11 (LAI)'
  ]
  }
,
  {
    id: '27',
    type: 'Gestão',
    category: 'Desenvolvimento e Transformação Organizacional',
    macroprocess: 'Desenvolvimento e Transformação Organizacional',
    process: 'Gestão do Conhecimento - GCO',
    needP2: 'Gerenciar o ciclo de vida do conhecimento organizacional, promovendo a identificação, o desenvolvimento, a retenção e a aplicação efetiva dos saberes internos, a fim de preservar o capital intelectual, mitigar a perda de expertise crítica e potencializar a eficiência e a inovação institucional',
    subprocess: 'Utilização dos Conhecimentos',
    needP3: 'Garantir que o conhecimento seja aplicado de forma eficaz para melhorar os processos de trabalho, tomar decisões e gerar valor para a organização.',
    products: [
    'Tomadas de decisões assertivas',
    'Eficiência operacional ampliada',
    'Valor público gerado'
  ],
    suppliers: [
    'Sistemas de busca e recuperação',
    'Redes colaborativas e de especialistas'
  ],
    inputs: [
    'Demandas de resolução de problemas',
    'Propostas de melhoria de processos',
    'Necessidades de informação'
  ],
    outputs: [
    'Otimização de custos',
    'Redução de retrabalho',
    'Difusão tecnológica para o mercado'
  ],
    customers: [
    'Sociedade',
    'Usuários do sistema de PI',
    'Gestores governamentais'
  ],
    requirements: [
    'Acessibilidade digital (Vlibras)',
    'Usabilidade',
    'Rapidez na resposta'
  ],
    customerRequirements: [
    'Transparência',
    'Simplicidade no acesso',
    'Justiça social'
  ],
    tools: [
    'Portal do INPI',
    'Portal da Gestão do Conhecimento (PGC)'
  ],
    actors: [
    'BIBLI',
    'ACAD',
    'CGRH',
    'DIRAD'
  ],
    kpis: [
    'Número de acessos ao acervo digital',
    'Taxa de contribuições no repositório'
  ],
    regulations: [
    'Política de Relacionamento da ACAD',
    'Lei nº 13.460/17 (Direitos do Usuário)'
  ]
  }
,
  {
    id: '28',
    type: 'Gestão',
    category: 'Desenvolvimento e Transformação Organizacional',
    macroprocess: 'Desenvolvimento e Transformação Organizacional',
    process: 'Gestão de Programa de Bolsas de Pesquisa  - GPB',
    needP2: 'Selecionar, alocar e acompanhar bolsistas em projetos de pesquisa e inovação no INPI, garantindo alinhamento estratégico com as metas de propriedade intelectual e formação de recursos humanos qualificados.',
    subprocess: 'Seleção e Admissão de Bolsistas',
    needP3: 'Estruturar processos de seleção de bolsistas de pesquisa, em alinhamento às necessidades técnicas e estratégicas do INPI.',
    products: [
    'Edital de Chamada Pública publicado',
    'Candidatos avaliados',
    'Termos de Compromisso e de Ciência firmados'
  ],
    suppliers: [
    'Instituições de Ensino Superior (IES)',
    'Unidades Técnicas proponentes',
    'Comitê Julgador'
  ],
    inputs: [
    'Demandas das áreas finalísticas (ex: IA em marcas)',
    'Recursos orçamentários (Fonte 2000 ou fomento)',
    'Currículos cadastrados (Lattes/SIGEPE)'
  ],
    outputs: [
    'Bolsistas ativos e integrados aos projetos',
    'Cadastro no sistema de pagamento realizado',
    'Declaração de Ausência de Conflito de Interesses assinada'
  ],
    customers: [
    'Unidades técnicas do INPI',
    'Pesquisadores externos',
    'Sociedade'
  ],
    requirements: [
    'Ausência de vínculo com agentes de PI ou procuradores de usuários',
    'Titulação adequada',
    'Regularidade fiscal e jurídica'
  ],
    customerRequirements: [
    'Transparência e impessoalidade',
    'Isenção e meritocracia',
    'Agilidade no processo de admissão'
  ],
    tools: [
    'SEI',
    'E-mail',
    'Portal do INPI',
    'RPI'
  ],
    actors: [
    'Comitê Julgador',
    'DIPGP',
    'PFE',
    'DIRAD'
  ],
    kpis: [
    'Número de bolsas de pesquisa concedidas',
    'Número de candidatos inscritos por edital'
  ],
    regulations: [
    'Portaria INPI/PR nº 346/2020',
    'Lei nº 10.973/04 (Lei de Inovação)',
    'Lei nº 12.813/13 (Conflito de Interesses)'
  ]
  }
,
  {
    id: '29',
    type: 'Gestão',
    category: 'Desenvolvimento e Transformação Organizacional',
    macroprocess: 'Desenvolvimento e Transformação Organizacional',
    process: 'Gestão de Programa de Bolsas de Pesquisa  - GPB',
    needP2: 'Selecionar, alocar e acompanhar bolsistas em projetos de pesquisa e inovação no INPI, garantindo alinhamento estratégico com as metas de propriedade intelectual e formação de recursos humanos qualificados.',
    subprocess: 'Acompanhamento Científico e Financeiro',
    needP3: 'Assegurar o cumprimento dos planos de trabalho e a aplicação correta dos recursos.',
    products: [
    'Relatórios de atividades mensais/trimestrais',
    'Listas de frequência',
    'Notas de pagamento de bolsas'
  ],
    suppliers: [
    'Bolsistas',
    'Responsáveis Técnicos e Acadêmicos',
    'Fundações de Apoio (gestão financeira)'
  ],
    inputs: [
    'Plano de Trabalho e Cronograma',
    'Relatórios parciais de pesquisa',
    'Atestes de frequência'
  ],
    outputs: [
    'Bolsas pagas',
    'Pareceres de acompanhamento do Comitê Científico',
    'Relatórios parciais de resultados'
  ],
    customers: [
    'Unidades técnicas do INPI',
    'InovACAD',
    'Alta Gestão'
  ],
    requirements: [
    'Cumprimento rigoroso do cronograma',
    'Qualidade técnica das entregas',
    'Manutenção do sigilo e confidencialidade'
  ],
    customerRequirements: [
    'Tempestividade no pagamento',
    'Segurança jurídica',
    'Suporte técnico contínuo'
  ],
    tools: [
    'SEI',
    'E-mail'
  ],
    actors: [
    'Responsáveis Técnicos',
    'Comitê Científico',
    'Comitê Acadêmico'
  ],
    kpis: [
    'Tempo médio de permanência do bolsista',
    'Número de bolsas supervisionadas por professor',
    'Índice de cumprimento de cronograma'
  ],
    regulations: [
    'Decreto nº 9.283/18 (Regulamento de Inovação)',
    'Política de Relacionamento da ACAD com Fundações',
    'Portaria INPI/PR nº 346/2020'
  ]
  }
,
  {
    id: '30',
    type: 'Gestão',
    category: 'Desenvolvimento e Transformação Organizacional',
    macroprocess: 'Desenvolvimento e Transformação Organizacional',
    process: 'Gestão de Programa de Bolsas de Pesquisa  - GPB',
    needP2: 'Selecionar, alocar e acompanhar bolsistas em projetos de pesquisa e inovação no INPI, garantindo alinhamento estratégico com as metas de propriedade intelectual e formação de recursos humanos qualificados.',
    subprocess: 'Prestação de Contas e Divulgação de Resultados',
    needP3: 'Mensurar impactos dos projetos de pesquisa e divulgar resultados para a sociedade e partes interessadas.',
    products: [
    'Relatório Final de Resultados',
    'Produção Científica/Técnica (artigos, teses, avos de PI)',
    'Prestação de contas financeira concluída'
  ],
    suppliers: [
    'Bolsistas',
    'InovACAD',
    'Comitê Científico',
    'Biblioteca/Conselho Editorial'
  ],
    inputs: [
    'Resultados finais do projeto',
    'Relatórios financeiros da Fundação',
    'Manuscritos originais'
  ],
    outputs: [
    'Certificado de obtenção da bolsa',
    'Ativos de PI protegidos ou licenciados',
    'Artigos publicados na Revista Interfaces da PI'
  ],
    customers: [
    'Sociedade',
    'Comunidade acadêmica',
    'Órgãos de Controle (TCU/CGU)'
  ],
    requirements: [
    'Transparência e conformidade legal',
    'Ineditismo e rigor acadêmico',
    'Não violação de direitos autorais'
  ],
    customerRequirements: [
    'Acesso aberto aos resultados',
    'Segurança jurídica sobre a titularidade da PI',
    'Transparência pública'
  ],
    tools: [
    'SEI',
    'Repositório Institucional',
    'Portal do INPI'
  ],
    actors: [
    'Responsáveis Técnicos',
    'Comitê Científico',
    'Comitê Acadêmico'
  ],
    kpis: [
    'Taxa média de satisfação do bolsista',
    'Número de ativos de PI gerados',
    'Número de publicações do corpo discente'
  ],
    regulations: [
    'Política Editorial da ACAD',
    'Política de Direitos Autorais da ACAD',
    'Lei nº 12.527/11 (LAI)',
    'Portaria INPI/PR nº 346/2020'
  ]
  }
,
  {
    id: '31',
    type: 'Suporte',
    category: 'Gestão Estratégica de Pessoas',
    macroprocess: 'Gestão Estratégica de Pessoas',
    process: 'Desenvolvimento de Pessoas e Talentos - DPT',
    needP2: 'Planejar e gerenciar estratégias de educação corporativa e desenvolvimento profissional contínuo, alinhando as competências individuais aos objetivos estratégicos do INPI, visando suprir lacunas de conhecimento, promover a valorização do servidor e elevar o desempenho organizacional',
    subprocess: 'Desenvolvimento do Programas de Ambientação (PROAMB)',
    needP3: 'Acolher e integrar os novos servidores à cultura, estrutura e processos do INPI, fornecendo as informações essenciais para acelerar sua adaptação e produtividade inicial',
    products: [
    'Programa de Ambientação executado',
    'Servidores integrados à cultura organizacional'
  ],
    suppliers: [
    'CETEC',
    'Unidades do INPI',
    'ENAP (MGI)'
  ],
    inputs: [
    'Conteúdo programático',
    'Cronograma',
    'Cadastro de novos servidores'
  ],
    outputs: [
    'Relatórios de avaliação de reação',
    'Certificados de conclusão',
    'Servidores aptos ao exercício'
  ],
    customers: [
    'Novos servidores',
    'Unidades de lotação',
    'Diretoria-Executiva'
  ],
    requirements: [
    'Alinhamento aos princípios de valorização e isonomia da PGP',
    'Qualidade didático-pedagógica'
  ],
    customerRequirements: [
    'Clareza nas informações',
    'Acolhimento institucional',
    'Acessibilidade (Vlibras)'
  ],
    tools: [
    'SEI',
    'SIGEPE',
    'Academia Virtual (Moodle)'
  ],
    actors: [
    'CETEC',
    'CGRH',
    'Unidades finalísticas e administrativas'
  ],
    kpis: [
    'Taxa média de satisfação dos participantes do PROAMB',
    'Número de servidores ambientados por ano'
  ],
    regulations: [
    'Decreto nº 9.991/19',
    'Portaria INPI nº 19/23 (PGP)',
    'Lei nº 8.112/90'
  ]
  }
,
  {
    id: '32',
    type: 'Suporte',
    category: 'Gestão Estratégica de Pessoas',
    macroprocess: 'Gestão Estratégica de Pessoas',
    process: 'Desenvolvimento de Pessoas e Talentos - DPT',
    needP2: 'Planejar e gerenciar estratégias de educação corporativa e desenvolvimento profissional contínuo, alinhando as competências individuais aos objetivos estratégicos do INPI, visando suprir lacunas de conhecimento, promover a valorização do servidor e elevar o desempenho organizacional',
    subprocess: 'Concessão de Licença para Capacitação',
    needP3: 'Analisar e processar solicitações de afastamento para estudos, garantindo o cumprimento dos requisitos legais e o alinhamento com o interesse da Administração',
    products: [
    'Portaria de concessão publicada',
    'Afastamento formalizado'
  ],
    suppliers: [
    'Servidor proponente',
    'Instituição de ensino ou entidade externa'
  ],
    inputs: [
    'Requerimento de licença',
    'Cópia do trecho do PDP',
    'Currículo do Banco de Talentos'
  ],
    outputs: [
    'Portaria em Boletim de Pessoal',
    'Registro de licença no sistema'
  ],
    customers: [
    'Servidor',
    'Unidade de exercício'
  ],
    requirements: [
    'Carga horária igual ou superior a 30 horas semanais',
    'Previsão no PDP do órgão'
  ],
    customerRequirements: [
    'Tempestividade na decisão (prazo de 30 dias)',
    'Transparência nos critérios de deferimento'
  ],
    tools: [
    'SEI',
    'SIGEPE (Banco de Talentos)',
    'Boletim de Pessoal'
  ],
    actors: [
    'CGRH',
    'Chefia imediata',
    'Autoridade Máxima (Presidente/Diretor)'
  ],
    kpis: [
    'Número de licenças para capacitação concedidas',
    'Índice de eficácia do desenvolvimento'
  ],
    regulations: [
    'Lei nº 8.112/90 (Art. 87)',
    'Decreto nº 9.991/19',
    'IN SGP-ENAP nº 21/21'
  ]
  }
,
  {
    id: '33',
    type: 'Suporte',
    category: 'Gestão Estratégica de Pessoas',
    macroprocess: 'Gestão Estratégica de Pessoas',
    process: 'Desenvolvimento de Pessoas e Talentos - DPT',
    needP2: 'Planejar e gerenciar estratégias de educação corporativa e desenvolvimento profissional contínuo, alinhando as competências individuais aos objetivos estratégicos do INPI, visando suprir lacunas de conhecimento, promover a valorização do servidor e elevar o desempenho organizacional',
    subprocess: 'Promoção da Capacitação Nacional (Interna e Externa)',
    needP3: 'Viabilizar a participação de servidores em ações de desenvolvimento no país (cursos, congressos, seminários), visando suprir lacunas de competência mapeadas no PDP',
    products: [
    'Servidores capacitados',
    'Cursos e treinamentos regularmente instituídos'
  ],
    suppliers: [
    'ENAP',
    'Escolas de Governo',
    'Instituições de Ensino Superior (IES)'
  ],
    inputs: [
    'PDP aprovado',
    'Pedidos de capacitação',
    'Disponibilidade orçamentária'
  ],
    outputs: [
    'Certificado de conclusão',
    'Relatório de avaliação de efetividade',
    'Prestação de contas'
  ],
    customers: [
    'Servidores do INPI',
    'Unidades organizacionais',
    'Sociedade'
  ],
    requirements: [
    'Expertise técnica comprovada',
    'Alinhamento com a Matriz de Competências'
  ],
    customerRequirements: [
    'Aplicabilidade prática no trabalho',
    'Justiça social e acesso equânime'
  ],
    tools: [
    'SEI',
    'Academia Virtual',
    'SCDP'
  ],
    actors: [
    'CETEC',
    'CGRH',
    'Ordenador de Despesas'
  ],
    kpis: [
    'Taxa média de satisfação (Níveis 1 a 4)',
    'Custo das ações de capacitação'
  ],
    regulations: [
    'Decreto nº 9.991/19',
    'Portaria INPI nº 19/23',
    'Guia de Boas Práticas da GECC'
  ]
  }
,
  {
    id: '34',
    type: 'Suporte',
    category: 'Gestão Estratégica de Pessoas',
    macroprocess: 'Gestão Estratégica de Pessoas',
    process: 'Desenvolvimento de Pessoas e Talentos - DPT',
    needP2: 'Planejar e gerenciar estratégias de educação corporativa e desenvolvimento profissional contínuo, alinhando as competências individuais aos objetivos estratégicos do INPI, visando suprir lacunas de conhecimento, promover a valorização do servidor e elevar o desempenho organizacional',
    subprocess: 'Gerenciamento da Capacitação Internacional',
    needP3: 'Gerir os processos de afastamento do país para fins educacionais, assegurando a relevância estratégica da ação para o INPI e a conformidade com as restritas normas de viagens internacionais',
    products: [
    'Portaria de afastamento publicada',
    'Intercâmbio de conhecimento técnico-científico'
  ],
    suppliers: [
    'Parceiros Internacionais (OMPI, EPO)',
    'Escritórios estrangeiros de PI'
  ],
    inputs: [
    'Convite ou Edital de intercâmbio',
    'Interesse estratégico da administração'
  ],
    outputs: [
    'Portaria no Diário Oficial da União (DOU)',
    'Relatório de viagem e participação'
  ],
    customers: [
    'Servidor envolvido',
    'INPI',
    'MDIC'
  ],
    requirements: [
    'Excelência na área de PI',
    'Acordo de Cooperação formalizado'
  ],
    customerRequirements: [
    'Segurança jurídica do afastamento',
    'Apoio institucional logístico',
    'Interculturalidade'
  ],
    tools: [
    'SEI',
    'SCDP',
    'DOU'
  ],
    actors: [
    'COINT',
    'CGRH',
    'Presidência do INPI'
  ],
    kpis: [
    'Número de afastamentos para o exterior concedidos',
    'Índice de publicações internacionais'
  ],
    regulations: [
    'Decreto nº 91.800/85',
    'Art. 95 da Lei nº 8.112/90',
    'Decreto nº 9.283/18'
  ]
  }
,
  {
    id: '35',
    type: 'Suporte',
    category: 'Gestão Estratégica de Pessoas',
    macroprocess: 'Gestão Estratégica de Pessoas',
    process: 'Desenvolvimento de Pessoas e Talentos - DPT',
    needP2: 'Planejar e gerenciar estratégias de educação corporativa e desenvolvimento profissional contínuo, alinhando as competências individuais aos objetivos estratégicos do INPI, visando suprir lacunas de conhecimento, promover a valorização do servidor e elevar o desempenho organizacional',
    subprocess: 'Realização de Aconselhamento para Desenvolvimento Profissional',
    needP3: 'Oferecer suporte, orientação e mentoria aos servidores para o planejamento de suas carreiras e desenvolvimento de competências, alinhando expectativas individuais e institucionais',
    products: [
    'Relatório de mentoria',
    'Plano de Desenvolvimento Individual (PDI)'
  ],
    suppliers: [
    'Mentores e conselheiros internos',
    'DISAO/CETEC'
  ],
    inputs: [
    'Resultados da avaliação de desempenho',
    'Mapeamento de gaps de competência'
  ],
    outputs: [
    'Servidor orientado',
    'Plano de sucessão para cargos críticos'
  ],
    customers: [
    'Servidores',
    'Gestores de equipes'
  ],
    requirements: [
    'Expertise técnica e comportamental',
    'Confidencialidade e conduta ética'
  ],
    customerRequirements: [
    'Foco no crescimento de carreira',
    'Isenção e meritocracia'
  ],
    tools: [
    'SIGEPE',
    'Matriz 9 Box',
    'Pesquisa de Cultura e Clima Organizacional'
  ],
    actors: [
    'CGRH',
    'DISAO',
    'Chefias imediatas'
  ],
    kpis: [
    'Taxa média de satisfação com mentorias',
    'Índice de aproveitamento interno'
  ],
    regulations: [
    'Portaria INPI nº 19/23 (PGP)',
    'Decreto nº 9.991/19 (Arts. 18-22)'
  ]
  }
,
  {
    id: '36',
    type: 'Suporte',
    category: 'Gestão Estratégica de Pessoas',
    macroprocess: 'Gestão Estratégica de Pessoas',
    process: 'Desenvolvimento de Pessoas e Talentos - DPT',
    needP2: 'Planejar e gerenciar estratégias de educação corporativa e desenvolvimento profissional contínuo, alinhando as competências individuais aos objetivos estratégicos do INPI, visando suprir lacunas de conhecimento, promover a valorização do servidor e elevar o desempenho organizacional',
    subprocess: 'Elaboração do Plano de Desenvolvimento de Pessoas (PDP)',
    needP3: 'Diagnosticar necessidades de capacitação junto às unidades e consolidá-las no planejamento anual (PDP), em conformidade com a Política Nacional de Desenvolvimento de Pessoas (PNDP)',
    products: [
    'PDP anual aprovado',
    'Relatório anual de execução do PDP'
  ],
    suppliers: [
    'Unidades organizacionais do INPI',
    'SIPEC (MGI)'
  ],
    inputs: [
    'Diagnóstico de competências',
    'Necessidades estratégicas',
    'Estratégia institucional'
  ],
    outputs: [
    'Plano Consolidado de Ações de Desenvolvimento',
    'Autorização para despesas'
  ],
    customers: [
    'Alta Administração',
    'Servidores',
    'SIPEC (MGI)'
  ],
    requirements: [
    'Alinhamento estratégico',
    'Tempestividade (envio até 30/09)',
    'Economicidade'
  ],
    customerRequirements: [
    'Equidade na oferta de ações',
    'Transparência e eficiência pública'
  ],
    tools: [
    'Ferramenta do SIPEC',
    'Portal do Servidor'
  ],
    actors: [
    'CGRH',
    'CETEC',
    'Autoridade Máxima do órgão'
  ],
    kpis: [
    '% de necessidades atendidas via PDP',
    'Índice de execução do orçamento de capacitação'
  ],
    regulations: [
    'Decreto nº 9.991/19 (Art. 3º a 5º)',
    'Decreto nº 10.506/20',
    'IN 21/21'
  ]
  }
,
  {
    id: '37',
    type: 'Suporte',
    category: 'Gestão Estratégica de Pessoas',
    macroprocess: 'Gestão Estratégica de Pessoas',
    process: 'Gestão de Programa de Estágio - GPE',
    needP2: 'Selecionar, capacitar e acompanhar estagiários para contribuir com atividades de disseminação da PI, alinhando formação prática às necessidades do INPI.',
    subprocess: 'Seleção e Onboarding de Estagiários',
    needP3: 'Garantir a seleção de estagiários, alinhada às necessidades do INPI, e promover sua integração eficaz na Academia de PI.',
    products: [
    'Termos de Compromisso de Estágio (TCE) firmados',
    'Estagiários integrados e aptos ao exercício'
  ],
    suppliers: [
    'Instituições de Ensino (IES)',
    'Agentes de Integração (CIEE, IEL)',
    'Unidades demandantes do INPI'
  ],
    inputs: [
    'Editais de seleção',
    'Perfis de competências requeridas',
    'Vagas demandadas',
    'Recursos orçamentários'
  ],
    outputs: [
    'Estagiários cadastrados no SIAPE',
    'Apólices de seguro contra acidentes pessoais contratadas'
  ],
    customers: [
    'Unidades do INPI',
    'Instituições de Ensino',
    'Estagiários'
  ],
    requirements: [
    'Regularidade acadêmica do educando',
    'Compatibilidade entre o curso e as atividades do INPI',
    'Observância à cota de 10% para pessoas com deficiência'
  ],
    customerRequirements: [
    'Transparência e isonomia no processo seletivo',
    'Agilidade na formalização do ingresso'
  ],
    tools: [
    'SEI',
    'E-mail',
    'Academia Virtual (Moodle)',
    'Portal do INPI',
    'Intranet'
  ],
    actors: [
    'CETEC',
    'CGRH',
    'Supervisores de estágio'
  ],
    kpis: [
    'Número de oportunidades de estágio ofertadas',
    'Número de candidatos inscritos por vaga'
  ],
    regulations: [
    'Lei nº 11.788/2008',
    'Portaria INPI/CGRH nº 19/2023'
  ]
  }
,
  {
    id: '38',
    type: 'Suporte',
    category: 'Gestão Estratégica de Pessoas',
    macroprocess: 'Gestão Estratégica de Pessoas',
    process: 'Gestão de Programa de Estágio - GPE',
    needP2: 'Selecionar, capacitar e acompanhar estagiários para contribuir com atividades de disseminação da PI, alinhando formação prática às necessidades do INPI.',
    subprocess: 'Desenvolvimento e Acompanhamento do Estágio',
    needP3: 'Assegurar o desenvolvimento técnico e profissional dos estagiários, com foco em atividades de disseminação da PI.',
    products: [
    'Relatórios de atividades semestrais validados',
    'Competências técnicas em PI desenvolvidas'
  ],
    suppliers: [
    'Supervisores do quadro permanente',
    'Professores orientadores das IES',
    'Academia Virtual do INPI'
  ],
    inputs: [
    'Planos de atividades',
    'Registros de frequência',
    'Oferta de cursos de extensão da ACAD'
  ],
    outputs: [
    'Conhecimento tácito transferido',
    'Horas de estágio efetivadas'
  ],
    customers: [
    'Estagiários',
    'Unidades de lotação do INPI'
  ],
    requirements: [
    'Limite de até 10 estagiários por supervisor',
    'Formação ou experiência profissional do supervisor na área de conhecimento'
  ],
    customerRequirements: [
    'Compatibilidade de horários',
    'Redução da carga horária em períodos de avaliação escolar'
  ],
    tools: [
    'SEI',
    'Academia Virtual (Moodle)',
    'Registro de Frequência'
  ],
    actors: [
    'Supervisores (INPI)',
    'CETEC',
    'Professores das IES'
  ],
    kpis: [
    'Tempo médio de permanência do estagiário'
  ],
    regulations: [
    'Lei nº 11.788/2008',
    'Portaria INPI nº 19/2023 (Princípio da Qualidade de Vida)'
  ]
  }
,
  {
    id: '39',
    type: 'Suporte',
    category: 'Gestão Estratégica de Pessoas',
    macroprocess: 'Gestão Estratégica de Pessoas',
    process: 'Gestão de Programa de Estágio - GPE',
    needP2: 'Selecionar, capacitar e acompanhar estagiários para contribuir com atividades de disseminação da PI, alinhando formação prática às necessidades do INPI.',
    subprocess: 'Avaliação do Estágio',
    needP3: 'Avaliar o desempenho global do estagiário e do programa, identificando oportunidades de melhoria.',
    products: [
    'Termo de Realização do Estágio emitido',
    'Avaliação de desempenho final concluída'
  ],
    suppliers: [
    'Supervisores',
    'Estagiários (autoavaliação)',
    'CETEC'
  ],
    inputs: [
    'Resultados das atividades desenvolvidas',
    'Feedbacks acumulados',
    'Pesquisas de satisfação'
  ],
    outputs: [
    'Relatório de desempenho consolidado',
    'Dados para melhoria do ciclo seletivo e pedagógico'
  ],
    customers: [
    'Estagiário (para fins acadêmicos)',
    'Instituições de Ensino',
    'CGRH'
  ],
    requirements: [
    'Rigor técnico na avaliação',
    'Imparcialidade',
    'Observância ao propósito educativo'
  ],
    customerRequirements: [
    'Emissão tempestiva do certificado de conclusão',
    'Reconhecimento da experiência adquirida'
  ],
    tools: [
    'SEI',
    'Formulários de Pesquisa'
  ],
    actors: [
    'CETEC',
    'CGRH',
    'Supervisores'
  ],
    kpis: [
    'Taxa média de satisfação do estagiário'
  ],
    regulations: [
    'Lei nº 11.788/2008',
    'Portaria INPI nº 19/2023 (Princípios de Meritocracia e Valorização)'
  ]
  }
,
  {
    id: 'g1',
    type: 'Gestão',
    category: 'Consultoria e Assessoramento Jurídico',
    macroprocess: 'Consultoria e Assessoramento Jurídico',
    process: 'Consultoria jurídica',
    subprocess: '',
    owner: 'PFE',
    products: [
    '- Manifestações jurídicas conclusivas sobre matérias administrativas e propriedade intelectual emitidas',
    '- Atas das reuniões de assessoramento jurídico elaboradas',
    '- Despacho emitido de remessa dos créditos do INPI à Equipe Nacional de Cobrança - ENAC/AGU para inscrição em dívida ativa e cobrança extrajudicial e judicial.'
  ],
    suppliers: [
    '– Unidades da PGF via SAPIENS  (sistema da AGU). Neste caso o preenchimento no SEI é feito pela própria PFE.

 - Setores do INPI (Sede e Regionais).  (geralmente consultas decorrentes de ofícios recebidos por eles em processos judiciais que o INPI não é parte).'
  ],
    inputs: [
    '- Documentos instrutórios do ato que se pretende atuar juridicamente

- Formulação de consulta jurídica específica para assessoramento jurídico 

- Documentos instrutórios para cobrança de crédito da autarquia'
  ],
    outputs: [
    '- Manifestações jurídicas conclusivas sobre matérias administrativas e propriedade intelectual emitidas',
    '- Atas das reuniões de assessoramento jurídico elaboradas',
    '- Despacho emitido de remessa dos créditos do INPI à Equipe Nacional de Cobrança - ENAC/AGU para inscrição em dívida ativa e cobrança extrajudicial e judicial.'
  ],
    customers: [
    '- Presidente do INPI
 - Setores do INPI (Sede e Regionais).'
  ],
    tools: [
    '- Sapiens

- SEI      

- E-mail

- SINPI

- Planilha de monitoramento de processos (prazos e responsáveis)'
  ],
    kpis: [
    '- Tempo médio de atendimento às demandas consultivas'
  ],
    regulations: []
  }
,
  {
    id: 'g2',
    type: 'Gestão',
    category: 'Consultoria e Assessoramento Jurídico',
    macroprocess: 'Consultoria e Assessoramento Jurídico',
    process: 'Representação judicial e extra judicial',
    subprocess: '',
    owner: 'PFE',
    products: [
    '- Subsídios fornecidos, incluindo cálculos e perícias, quando necessários à atuação dos orgãos da PGF na defesa judicial do INPI',
    '- Manifestações juridicas conclusivas emitidas sobre a atuação em processos judiciais',
    '- Ata das reuniões de Representação judicial e extra judicial elaboradas',
    '- Minuta de defesa mínima da autarquia nas ações de PI elaborada',
    '- Minutas de Informações da Autoridade Coatora em processos judiciais de mandado de segurança',
    '- Informações em defesa extra judicial (ofícios) fornecidas'
  ],
    suppliers: [
    '- Unidades da PGF
 - Ministério Público por Ofícios via SEI
 - Juízo por Ofícios que chegam por meio dos setores do INPI demandados.'
  ],
    inputs: [
    '- Ofícios do Ministério Público com solicitações técnicas para resposta em Juizo.

- Ofícios de Juizo

- Formulário de solicitação de reunião / audiências particulares (AGU)

- Normas específicas da AGU, por exemplo:
Portaria Nº 656, de 11 DE outubro de 2013
Portaria Nº 267 de 16 de março de 2009
Portaria Nº 911 de 10 de dezembro de 2018.

- Solicitante de reuniões sobre ações judiciais internos ou externos'
  ],
    outputs: [
    '- Subsídios fornecidos, incluindo cálculos e perícias, quando necessários à atuação dos orgãos da PGF na defesa judicial do INPI',
    '- Manifestações juridicas conclusivas emitidas sobre a atuação em processos judiciais',
    '- Ata das reuniões de Representação judicial e extra judicial elaboradas',
    '- Minuta de defesa mínima da autarquia nas ações de PI elaborada',
    '- Minutas de Informações da Autoridade Coatora em processos judiciais de mandado de segurança',
    '- Informações em defesa extra judicial (ofícios) fornecidas'
  ],
    customers: [
    '- PGF/ AGU

 - Setores do INPI (Sede e Regionais). 

- Orgãos de controle externo

- Área técnica participante da reunião'
  ],
    tools: [
    '- Sapiens

- SEI      

- E-mail

- SINPI

- Planilha de monitoramento de processos (prazos e responsáveis)'
  ],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g3',
    type: 'Gestão',
    category: 'Gestão da Conformidade e Integridade',
    macroprocess: 'Gestão da Conformidade e Integridade',
    process: '',
    subprocess: '',
    products: [],
    suppliers: [],
    inputs: [],
    outputs: [],
    customers: [],
    tools: [],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g4',
    type: 'Gestão',
    category: 'Gestão da Conformidade e Integridade',
    macroprocess: 'Gestão da Conformidade e Integridade',
    process: 'Gestão das Atividades da Auditoria Interna',
    subprocess: '---',
    owner: 'AUDIT',
    products: [
    '- Plano Anual de Auditoria Interna (PAINT)  elaborado e divulgado
- Relatório Anual de Atividades de Auditoria Interna (RAINT) elaborado e divulgado
- Estatuto da AUDIT atualizado periodicamente
- Relatório de Avaliação do Programa de Gestão e Melhoria da Qualidade (PGMQ) apresentado 
- Planos de Trabalho expedidos'
  ],
    suppliers: [
    '- Poder Executivo Federal
- Controladoria-Geral da União (CGU)
 - Alta Administração do INPI
- Rede Qualifica UAIG'
  ],
    inputs: [
    '- Planejamento Estratégico do INPI'
  ],
    outputs: [
    ''- Plano Anual de Auditoria Interna (PAINT)  elaborado e divulgado
- Relatório Anual de Atividades de Auditoria Interna (RAINT) elaborado e divulgado
- Estatuto da AUDIT atualizado periodicamente
- Relatório de Avaliação do Programa de Gestão e Melhoria da Qualidade (PGMQ) apresentado. 
- Certificação do Nível do modelo IA-CM (Avaliação do PGMQ externa).
- Planos de Trabalho expedidos'
  ],
    customers: [
    '- Equipe da AUDIT
- CGU
 - TCU
 - Presidência  e Dirigentes do INPI
 - Gestores, servidores e colaboradores do INPI
 - Sociedade'
  ],
    tools: [
    '- Legislação referenciada acima
- Acesso ao e-CGU
- Acesso ao Conecta TCU
- Acesso ao SEI
- Acesso ao Fala BR
- Portal do INPI
- Cadastro para receber alerta do ALICE
- Acesso ao sistema e-Pessoal'
  ],
    kpis: [],
    regulations: [
    'Art. 166 do Regimento Interno do INPI, aprovado pela Portaria/INPI/PR n.° 18 de 16 de junho de 2025',
    'o  Referencial Técnico da Atividade de Auditoria Interna Governamental do Poder Executivo Federal, aprovado pela IN SFC N.° 3  , de 09/06/2017 (Capítulos IV e V)',
    'a Portaria SFC nº 2.737, de 20 de dezembro de 2017, que disciplina o procedimento de consulta para nomeação, designação, exoneração ou dispensa do Auditor-Chefe, a IN. SFC N.° 9, de 09/10/2018, que dispõe sobre o Plano Anual de Auditoria Interna (PAINT)  e sobre o Relatório Anual de Atividades de Auditoria Interna (RAINT)',
    'a Portaria/INPI/PR/AUDIT n° 02, de 21 de agosto de 2025 - Manual de Operacionalização e Monitoramento do PGMQ-AUDIT',
    'Portaria/INPI/AUDIT n.° 01, de 29 de maio de 2025 - Define as ações, rotinas e prazos para elaboração e diuvulgação do PAINT e do RAINT da AUDIT',
    'e a Portaria CGU 2823-24 - Insitui a Rede Qualifica UAIG.'
  ]
  }
,
  {
    id: 'g5',
    type: 'Gestão',
    category: 'Gestão da Conformidade e Integridade',
    macroprocess: 'Gestão da Conformidade e Integridade',
    process: 'Gestão das Atividades da Auditoria Interna',
    subprocess: 'Prestação de serviços de Avaliação',
    owner: 'AUDIT',
    products: [
    '- Relatórios de Auditoria Interna emitidos contendo o resultado da avaliação realizada e, quando couber, recomendações.

- Notas de Auditoria Interna emitidas contendo o resultado da avaliação realizada e recomendações',
    '- Notas Técnicas emitidas contendo o resultado da avaliação realizada',
    'e

- Pareceres de Auditoria Interna emitidos contendo o resultado da avaliação realizada.'
  ],
    suppliers: [
    '- Auditor-Chefe

- CGU

- TCU'
  ],
    inputs: [
    '-  Planos de Trabalho, Ofício* ou despachos expedidos com referência ao Plano Anual de Auditoria Interna (PAINT)  elaborado.

- IN SFC n.° 8/2017: Manual de Orientações Técnicas da Atividade de Auditoria Interna Governamental do Poder Executivo Federal (MOT)

- Alertas do sistema ALICE

- Indícios constantes no e-Pessoal'
  ],
    outputs: [
    '- Relatórios de Auditoria Interna emitidos contendo o resultado da avaliação realizada e, quando couber, recomendações.

- Notas de Auditoria Interna emitidas contendo o resultado da avaliação realizada e recomendações',
    '- Notas Técnicas emitidas contendo o resultado da avaliação realizada',
    'e

- Pareceres de Auditoria Interna emitidos contendo o resultado da avaliação realizada.'
  ],
    customers: [
    '- CGU
 - TCU
 - Presidência  e Dirigentes da unidade auditada do INPI
 - Gestores, servidores e colaboradores do INPI
 - Sociedade'
  ],
    tools: [
    '- Legislação referenciada acima
- Acesso ao e-CGU
- Acesso ao Conecta TCU
- Acesso ao SEI
- Acesso ao Fala BR
- Portal do INPI
- Cadastro para receber alerta do ALICE
- Acesso ao sistema e-Pessoal'
  ],
    kpis: [],
    regulations: [
    'Referencial Técnico da Atividade de Auditoria Interna  Governamental do Poder Executivo Federal , aprovado pela IN SFC n.° 3, de 09/06/2017 (Capítulo I).'
  ]
  }
,
  {
    id: 'g6',
    type: 'Gestão',
    category: 'Gestão da Conformidade e Integridade',
    macroprocess: 'Gestão da Conformidade e Integridade',
    process: 'Gestão das Atividades da Auditoria Interna',
    subprocess: 'Prestação de serviços de Consultoria',
    owner: 'AUDIT',
    products: [
    '- Relatórios de Auditoria Interna emitidos, contendo, ou não,  recomendações  de aperfeiçoamento dos processos de governança, de gerenciamento de riscos e de implementação de controles internos',
    '- Treinamentos realizados',
    '- Notas Técnicas  emitidas contendo propostas de aperfeiçoamento dos processos de governança, de gerenciamento de riscos e de implementação de controles internos.'
  ],
    suppliers: [
    '- Auditor-Chefe

- PR e gestores do INPI'
  ],
    inputs: [
    'Plano de Trabalho, Ofício* ou despachos expedidos com referência ao Plano Anual de Auditoria Interna (PAINT) elaborado.'
  ],
    outputs: [
    'Relatórios de Auditoria Interna emitidos, contendo, ou não,  recomendações  de aperfeiçoamento dos processos de governança, de gerenciamento de riscos e de implementação de controles internos',
    '- Treinamentos realizados',
    '- Notas Técnicas  emitidas contendo propostas de aperfeiçoamento dos processos de governança, de gerenciamento de riscos e de implementação de controles internos.'
  ],
    customers: [
    'Presidência e gestores do INPI'
  ],
    tools: [
    '- Legislação referenciada acima
- Acesso ao e-CGU
- Acesso ao Conecta TCU
- Acesso ao SEI
- Acesso ao Fala BR
- Portal do INPI
- Cadastro para receber alerta do ALICE
- Acesso ao sistema e-Pessoal'
  ],
    kpis: [],
    regulations: [
    'Referencial Técnico da Atividade de  Atividade de Auditoria Interna Governamental do Poder Executivo Federal (Referencial Técnico), aprovado pela IN MTFCGU/SFC n.° 3, de 09.06.2017 (Capítulo I - Seção II).'
  ]
  }
,
  {
    id: 'g7',
    type: 'Gestão',
    category: 'Gestão da Conformidade e Integridade',
    macroprocess: 'Gestão da Conformidade e Integridade',
    process: 'Gestão das Atividades da Auditoria Interna',
    subprocess: 'Prestação de serviços de Apuração',
    owner: 'AUDIT',
    products: [
    '- Relatórios de Auditoria Interna emitidos contendo o resultado da apuração e recomendações, quando couber',
    '- Notas de Auditoria Interna emitidas contendo recomendações',
    '- Notas Técnicas emitidas contendo o resultado da apuração',
    '- Parecer de Auditoria Interna'
  ],
    suppliers: [
    'Denunciantes internos e externos

Auditor-Chefe'
  ],
    inputs: [
    'Denúcias administrativas

Comunicações de irregularidades

Irregularidades identificadas pela AUDIT'
  ],
    outputs: [
    '- Relatórios de Auditoria Interna emitidos contendo o resultado da apuração e recomendações, quando couber',
    '- Notas de Auditoria Interna emitidas contendo recomendações',
    '- Notas Técnicas emitidas contendo o resultado da apuração'
  ],
    customers: [
    'AUDIT

Denunciante

PR/INPI             

Òrgãos de Controle interno e externo

Sociedade'
  ],
    tools: [
    '- Legislação referenciada acima
- Acesso ao e-CGU
- Acesso ao Conecta TCU
- Acesso ao SEI
- Acesso ao Fala BR
- Portal do INPI
- Cadastro para receber alerta do ALICE
- Acesso ao sistema e-Pessoal'
  ],
    kpis: [],
    regulations: [
    'Manual de Orientações Técnicas da Atividade de Auditoria Interna Governamental do Poder Executivo Federal, aprovado pela Instrução Normativa SFC nº 8, de 6 de dezembro de 2017, Regimento Interno do INPI, Orientação Prática: Serviços de Auditoria, aprovada pela Portaria SFC nº 3.307 de 23 de outubro de 2022, Instrução Normativa/INPI/PR nº 06, de 14 de dezembro de 2023 - Aprova a prática de reunião de busca conjunta de soluções nas atividades de auditoria interna e a rotina de monitoramento das recomendações emitidas pela Auditoria Interna e pelos órgãos de controle interno e externo, Procedimento “Monitoramento contínuo das recomendações” – AGOV-MRE-PP-0001, Instrução Normativa/INPI/PR nº 07 , de 29 de dezembro de 2023, Aprova a sistemática de quanficação e registro dos benefícios da Auditoria Interna e dos prejuízos idenficados',
    'Seção IV da Portaria Normativa CGU nº 116, de 18 de março de 2024 - Regula o tratamento de denúncias',
    'Portaria/INPI/AUDIT n.° 03, de 06 de dezembro de 2024 - Institui o fluxo de Nível 2 (Prestação de Serviços de Apuração" e de "Apoio à Prestação de Contas Anual, no âmbito da AUDIT.'
  ]
  }
,
  {
    id: 'g8',
    type: 'Gestão',
    category: 'Gestão da Conformidade e Integridade',
    macroprocess: 'Gestão da Conformidade e Integridade',
    process: 'Gestão das Atividades da Auditoria Interna',
    subprocess: 'Monitoramento das Recomendações',
    owner: 'AUDIT',
    products: [
    '- Recomendações analisadas e posicionamentos da AUDIT inseridos no sistema e-CGU.

- Informações semestrais de monitoramento das recomendações disponibilizadas no Relatório de Acompanhamento do PAINT e no RAINT.

- Relatórios semanais de monitoramento.

- Benefícios apurados (decorrentes das implementações das recomendações das atividades de atividades da auditoria interna).'
  ],
    suppliers: [
    '- CGU

- TCU

- Auditor-Chefe e equipe da AUDIT'
  ],
    inputs: [
    '- Relatórios e Notas de Auditoria da CGU

 - Acórdãos e Decisões do TCU

 - Relatórios de Auditoria Interna

- Notas Técnicas 

- Notas de Auditoria Interna'
  ],
    outputs: [
    '- Recomendações monitoradas (analisadas e posicionamentos da AUDIT inseridos no sistema e-CGU.)

- Informações semestrais de monitoramento das recomendações disponibilizadas no Relatório de Acompanhamento do PAINT e no RAINT.

- Relatórios semanais de monitoramento encaminhados.

- Benefícios apurados (decorrentes das implementações das recomendações das atividades de atividades da auditoria interna).'
  ],
    customers: [
    '- Presidência e Dirigentes da unidade auditada do INPI

 - CGU

 - TCU

- Equipe da AUDIT'
  ],
    tools: [
    '- Legislação referenciada acima
- Acesso ao e-CGU
- Acesso ao Conecta TCU
- Acesso ao SEI
- Acesso ao Fala BR
- Portal do INPI
- Cadastro para receber alerta do ALICE
- Acesso ao sistema e-Pessoal'
  ],
    kpis: [],
    regulations: [
    'Regimento Interno do INPI, aprovado pela Portaria/INPI/PR n.° 18 de 16 de junho de 2025, a IN SFC n.º 9/2018',
    'o Referencial Técnico (Capítulo V - Seção IV), a IN SFC n.° 10/ 2020, que aprova a Sistemática de Quantificação e Registro dos Resultados e Benefícios da Atividade de Auditoria Interna Governamental do Poder Executivo Federal, a Portaria CGU n.° 3.805, de 21 de novembro de 2023, que publica a Deliberação CCCI n.° 01/2023 que dá diretrizes para monitoramento das recomendações nas UAIGs, a IN/INPI/PR n.°06 de 14 de dezembro de 2023, que orienta a prática de reunião de busca conjunta de soluções nas atividades de auditoria interna e estabelece rotina de acompanhamento e de implementação das recomendações emitidas pela AUDIT e pelos órgãos de controle interno e externo, a IN/INPI/PR n.° 7 de 29 de dezembro de 2023, que institui sistemática de quantificação e registro dos benefícios da Auditoria Interna e dos prejuízos identificados e a Portaria INPI/PR/AUDIT n.° 01 de 04 de novembro de 2024, que institui o procedimento e monitoramento contínuo das recomendações no âmbito da AUDIT.'
  ]
  }
,
  {
    id: 'g9',
    type: 'Gestão',
    category: 'Gestão da Conformidade e Integridade',
    macroprocess: 'Gestão da Conformidade e Integridade',
    process: 'Gestão Correcional',
    subprocess: 'Análise de Notícia de Possível Irregularidade',
    owner: 'COGER',
    products: [
    '- Parecer de Juízo de Admissibilidade gerado e inserido no Sistema e-PAD.
 - Publicação da portaria de instauração de procedimento correcional no Boletim de Pessoal ou no DOU, caso o juízo de admissibilidade seja conclusivo pela identificação de indícios de irregularidade administrativa.                                                                                    - Cadastramento do processo correcional no Sistema CGU-PAD ou CGU-PJ, conforme a natureza da apuração.
- Notificação de irregularidade com repercussão não correcional às instâncias de integridade e unidades competentes do INPI, caso o juízo de admissibilidade seja negativo quanto a inexistência de indícios de materialidade de irregularidade administrativa.
- Termo de Ajustamento de Conduta, caso o juízo de admissibilidade identifique a potencial ocorrência de ilícito administrativo de menor potencial ofensivo.                                                           - Cadastramento do Termo de Ajustamento de Conduta no Sistema e-PAD.'
  ],
    suppliers: [
    '- Ouvidoria
 - Servidores do INPI
 - CGU
 - Auditoria Interna
 - Sociedade
 - Imprensa
-Servidores encarregados da condução de procedimentos correcionais'
  ],
    inputs: [
    '- Representações Funcionais (servidores públicos).
- Relatórios de Auditoria Interna.
 - Pareceres Jurídicos.
- Representações oficiadas por outros órgãos públicos (MPF, Polícia Federal, TCU, CGU, Comissão de Ética Pública ou demais comissões de ética, etc).
 - Notícias veiculadas na mídia.
- Denúncias (inclusive anônimas).
- Relatórios Finais de Procedimentos Correcionais.
- Constatações decorrentes do exercício do poder hierárquico.'
  ],
    outputs: [
    '- Parecer de Juízo de Admissibilidade gerado e inserido no Sistema e-PAD.

 - Publicação da portaria de instauração de procedimento correcional no Boletim de Pessoal ou no DOU, caso o juízo de admissibilidade seja conclusivo pela identificação de indícios de irregularidade administrativa.     
                                                                               -Cadastramento do processo correcional no Sistema CGU-PAD ou CGU-PJ, conforme a natureza da apuração.

- Notificação de irregularidade com repercussão não correcional às instâncias de integridade e unidades competentes do INPI, caso o juízo de admissibilidade seja negativo quanto a inexistência de indícios de materialidade de irregularidade administrativa.

- Termo de Ajustamento de Conduta, caso o juízo de admissibilidade identifique a potencial ocorrência de ilícito administrativo de menor potencial ofensivo.        
                                                                                                   - Cadastramento do Termo de Ajustamento de Conduta no Sistema e-PAD.'
  ],
    customers: [
    '- CGU/CRG.                                                                          - Ouvidoria do INPI.                
-  Órgãos Públicos Externos.
- Presidência, Instâncias de Integridade e demais unidades do INPI.'
  ],
    tools: [
    '- SEI
 - CGU-PAD
 - E-PAD
 - CGU-PJ
 - eAUD'
  ],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g10',
    type: 'Gestão',
    category: 'Gestão da Conformidade e Integridade',
    macroprocess: 'Gestão da Conformidade e Integridade',
    process: 'Gestão Correcional',
    subprocess: 'Controle, Direção, Supervisão e Monitoramento da Atividade Correcional',
    owner: 'COGER',
    products: [
    '- Relatório Mensal de Monitoramento das Atividades Correcionais, elaborado pelo Assistente da COGER, encaminhado para avaliação do Corregedor. 
 - Relatório Anual de Gestão Correcional, elaborado por todos os servidores do quadro permanente da COGER, e disponibilizado na intranet e no site do INPI (em seus ícones relacionados à atividade correcional e a prestação de de contas).
 - Relatórios extraídos de Sistemas de Informação da CGU, disponibilizados como anexos ao Relatório Anual de Gestão Correcional.                                                                                                                                  - Planos de Trabalho dos Procedimentos Correcionais, elaborados pelo servidor ou Comissão Responsável pela condução do procedimento, submetidos ao Corregedor quando do início dos trabalhos e a cada pedido de prorrogação de prazo ou recondução da comissão processante.'
  ],
    suppliers: [
    '- Autoridade instauradora
 - Comissões de apuração
 - Autoridade julgadora'
  ],
    inputs: [
    '- Pareceres de Juízo de Admissibilidade. 
- Portarias de nomeação, prorrogação de prazo, recondução das comissões processantes.
- Portarias de nomeação de assistentes técnicos e defensores dativos.
 - Plano de Atividades dos Trabalhos dos procedimentos correcionais.
- Peças processuais incluídas nos Sistemas de Informação da CGU.
- Relatórios de Informação extraídos dos Sistemas de Informação da CGU.'
  ],
    outputs: [
    '- Relatório Mensal de Monitoramento das Atividades Correcionais, elaborado pelo Assistente da COGER, e encaminhado para avaliação do Corregedor. 

 - Relatório Anual de Gestão Correcional, elaborado por todos os servidores do quadro permanente da COGER, e disponibilizado na intranet e no site do INPI (em seus ícones relacionados à atividade correcional e a prestação de de contas).

 - Relatórios extraídos de Sistemas de Informação da CGU, disponibilizados como anexos ao Relatório Anual de Gestão Correcional.'
  ],
    customers: [
    '- CGU.
 - CGRH.
 - Corregedor.
 - Assistente da COGER.
- CGPE.
- Presidência.'
  ],
    tools: [
    '- SEI
 - CGU-PAD
 - E-PAD
 - CGU-PJ
 - eAUD'
  ],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g11',
    type: 'Gestão',
    category: 'Gestão da Conformidade e Integridade',
    macroprocess: 'Gestão da Conformidade e Integridade',
    process: 'Gestão Correcional',
    subprocess: 'Disseminação do Conhecimento',
    owner: 'COGER',
    products: [
    '- Servidor e colaborador capacitado.
 - Listas de Presença. 
 - Avaliações de reação. 
 - Comunicados na intranet (campanhas, cursos, notas técnicas, orientações da COGER e CGU).                                                                                           
- Acordos de Cooperação Técnica, firmados com outras unidades de correição ou instituições públicas.                                                  
- Plano de Ação do Relatório Anual de Gestão Correcional, contendo as ações e o cronograma dos eventos da COGER programados para o exercício.'
  ],
    suppliers: [
    'Corregedor.
Servidores do quadro permanente da COGER.
CGU.
CGRH
Órgãos externos.'
  ],
    inputs: [
    '- Plano Instrucional do evento de capacitação.                                                                   - Plano de Trabalho das atividades de Capacitação contidas no Relatório Anual de Gestão Correcional.                               -  Eventos, Orientações, Notas Técnicas, Cartilhas e demais artefatos originários da CGU.      
 -  Acordos de Cooperação Técnica, firmados com outras unidades de correição ou instituições públicas. 
- Pedidos de realização de cursos de capacitação por parte dos gestores'
  ],
    outputs: [
    '- Servidor e colaborador capacitado.

 - Listas de Presença. 

 - Avaliações de reação. 

 - Comunicados na intranet (campanhas, cursos, notas técnicas, orientações da COGER e CGU).
                                                                                                                                            
- Plano de Ação do Relatório Anual de Gestão Correcional, contendo as ações e o cronograma dos eventos da COGER programados para o exercício subsequente.'
  ],
    customers: [
    '- Servidores, colaboradores e gestores do INPI.          
- Outras unidades de correição ou instituições públicas.'
  ],
    tools: [
    '- SEI
 - CGU-PAD
 - E-PAD
 - CGU-PJ
 - eAUD'
  ],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g12',
    type: 'Gestão',
    category: 'Gestão da Conformidade e Integridade',
    macroprocess: 'Gestão da Conformidade e Integridade',
    process: 'Gestão Correcional',
    subprocess: 'Condução de Procedimentos Correcionais',
    owner: 'COGER',
    products: [
    '- Notícia da ocorrência de potencial irregularidade administrativa',
    '- Relatórios Finais de Procedimentos Correcionais',
    '- Pareceres e decisões de julgamento',
    '- Pareceres e decisões de julgamento de pedidos de reconsideração, recurso hierárquico e revisão.'
  ],
    suppliers: [
    '- Ouvidoria
 - Servidores do INPI
 - CGU
 - Auditoria Interna
 - Sociedade
 - Imprensa
- Servidores encarregados da condução de procedimentos correcionais
- Corregedor'
  ],
    inputs: [
    '- Pareceres de Juízo de Admissibilidade, gerados e inseridos no Sistema e-PAD.                                                                                                                                                                                     - Relatórios Finais de procedimentos correcionais.
 - Pareceres de julgamento emitidos pelo Corregedor e inseridos nos Sistemas de Informação da CGU.                                        - Decisão da Autoridade Competente.                                                                                                                  - Atas de reunião e despachos no âmbito do processo de monitoramento do Plano de Integridade.'
  ],
    outputs: [
    '- Pareceres de Juízo de Admissibilidade, gerados e inseridos no Sistema e-PAD.                           
                                                                                   
- Notificação de irregularidade com repercussão não correcional às instâncias de integridade e unidades competentes do INPI, caso o juízo de admissibilidade seja negativo quanto a inexistência de indícios de materialidade de irregularidade administrativa.                     
                                                                                                  
- Recomendações preventivas incluídas em relatórios finais de procedimentos correcionais.

 - Pareceres de julgamento emitidos pelo Corregedor e inseridos nos Sistemas de Informação da CGU.                                 

- Decisão da Autoridade Competente.       
                                                                                                           - Notícia  de fragilidades detectadas em procedimentos correcionais às instâncias de integridade e demais unidades interessadas.

 - Atas de reunião e despachos no âmbito do processo de monitoramento do Plano de Integridade.'
  ],
    customers: [
    '- CQUAL
 - CEINPI
 - AUDIT
 - OUVID
 - Presidência e demais unidades do INPI.'
  ],
    tools: [
    '- SEI
 - CGU-PAD
 - E-PAD
 - CGU-PJ
 - eAUD'
  ],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g13',
    type: 'Gestão',
    category: 'Gestão de Controles Institucionais e Integridade',
    macroprocess: 'Gestão de Controles Institucionais e Integridade',
    process: 'Gestão das Manifestações de Ouvidoria',
    subprocess: 'Suporte à Governança de Serviços',
    owner: 'OUVID',
    products: [
    '— Resposta Prestada a Solicitações de Simplificação, Racionalização e Padronização de Métodos e Procedimentos
— Solicitações de Simplificação e de Sugestões Procedentes Monitoradas e Banco de Sugestões Atualizado
— Eventos Gravados e Disponibilizados aos Usuários
— Avaliações e Enquetes Realizadas pelos Conselheiros dos Serviços Públicos'
  ],
    suppliers: [
    '— Usuários do Sistema de Propriedade Industrial
— Conselheiros dos Serviços Públicos
— Gestores dos Serviços'
  ],
    inputs: [
    '— Solicitações de Simplificação
— Carta de Serviços ao Usuário
— Formulário de Registro de Solicitações
de Simplificação e de
Sugestões Procedentes
— Eventos de Orientação dos Usuários'
  ],
    outputs: [
    '— Resposta Prestada a Solicitações de Simplificação, Racionalização e Padronização de Métodos e Procedimentos
— Solicitações de Simplificação e de Sugestões Procedentes Monitoradas e Banco de Sugestões Atualizado
— Eventos Gravados e Disponibilizados aos Usuários
— Avaliações e Enquetes Realizadas pelos Conselheiros dos Serviços Públicos'
  ],
    customers: [
    '— Usuários do Sistema de Propriedade Industrial
— Gestores do INPI
— Alta Direção do INPI
— Conselheiros dos Serviços Públicos'
  ],
    tools: [
    '— Adobe Acrobat Reader
— Avaya Workspace
— BuscaWeb
— Google Calendar
— Google Data Studio
— Google Drive
— Google Meet
— Google Sheet
— Intranet do INPI
— Microsoft Office
— Painel Lei de Acesso à Informação
— Painel Resolveu?
— Plataforma Comex Responde
— Plataforma Fala.Br
— Plataforma Reclame Aqui
— Portal Brasileiro de Dados Abertos
— Portal de Serviços do Governo Federal
— Portal do INPI
— Redmine
— Sistema Ágatha
— Sistema de Gestão do Desempenho (SISGD)
— Sistema de Registro Eletrônico de Frequência (SISREF)
— Sistema e-Aud
— Sistema Eletrônico de Informações (SEI)
— Sistema Fale Conosco
— Typeform
— Webmail Institucional'
  ],
    kpis: [
    '— Número de Solicitações de Pré-Atendimento',
    '— Satisfação do Usuário com o Pré-Atendimento',
    '— Número de Solicitações de Atendimento',
    '— Tempo de Resposta do Atendimento',
    '— Satisfação do Usuário com o Atendimento',
    '— Número de Ações de Pós-Atendimento',
    '— Satisfação do Usuário com o Pós-Atendimento',
    '— Procedência de Solicitações de Simplificação e Sugestões',
    '— Criticidade das Manifestações',
    '— Qualidade dos Canais de Comunicação e de Atendimento',
    '— Satisfação das Partes com o Procedimento de Resolução Pacífica de Conflitos',
    '— Tempo do Procedimento de Resolução Pacífica de Conflitos',
    '— Satisfação do Usuário com os Serviços',
    '— Tempo para Obtenção dos Serviços',
    '— Custo ou Esforço para Obtenção dos Serviços',
    '— Performance, Estabilidade e Disponibilidade dos Serviços',
    '— Utilidade da Carta de Serviços ao Usuário',
    '— Clareza das Informações Disponibilizadas',
    '— Satisfação do Usuário com os Dados Abertos',
    '— Facilidade de Uso e de Navegação no Site e Sistemas',
    '— Reputação e Transparência Institucional',
    '— Resultado de Enquetes do Conselho de Usuários de Serviços Públicos',
    '— Resultado de Pospostas de Melhoria do Conselho de Usuários de Serviços Públicos',
    'e
— Benecios Financeiros e Não-Financeiros da Atuação da Ouvidoria do INPI'
  ],
    regulations: [
    '— Lei nº 14.129, de 29 de março de 2021, que dispõe sobre princípios, regras e instrumentos para o Governo Digital e para o aumento da eficiência pública
— Lei nº 13.709, de 14 de agosto de 2018, que institui a Lei Geral de Proteção de Dados Pessoais (LGPD)
— Lei nº 13.460, de 26 de junho de 2017, que dispõe sobre participação, proteção e defesa dos direitos do usuário dos serviços públicos da administração pública
— Lei nº 12.527, de 18 de novembro de 2011, que dispõe sobre o direito fundamental de acesso à informação (Lei de Acesso à Informação – LAI)
— Lei nº 9.279, de 14 de maio de 1996, que regula direitos e obrigações relativos à propriedade industrial (Lei da Propriedade Industrial – LPI)
— Lei nº 5.648, de 11 de dezembro de 1970, que cria o Instituto Nacional da Propriedade Industrial
— Decreto nº 9.094, de 17 de julho de 2017, que dispõe sobre a simplificação do atendimento prestado aos usuários dos serviços públicos
— Portaria INPI/PR nº 512, de 25 de outubro de 2019, que institui a Política de Relacionamento e Transparência do INPI'
  ]
  }
,
  {
    id: 'g14',
    type: 'Gestão',
    category: 'Gestão da Conformidade e Integridade',
    macroprocess: 'Gestão da Conformidade e Integridade',
    process: 'Gestão do Programa de Integridade',
    subprocess: 'Suporte à Integridade Pública',
    owner: 'OUVID',
    products: [
    '— Respostas Prestadas a Comunicações de Irregularidade e Denúncias
— Procedimentos de Resolução Pacífica de Conflito Concluídos
— Oficios Expedidos à Autoridade Nacional de Proteção de Dados
— Notificações Extrajudiciais Expedidas
— Medidas de Proteção aos Denunciantes Adotadas'
  ],
    suppliers: [
    '— Usuários do Sistema de Propriedade Industrial
— Corpo Funcional do INPI
— Instâncias de Integridade do INPI'
  ],
    inputs: [
    '— Comunicações de Irregularidade
— Denúncias
— Proposta de Resolução Pacífica de Conflitos
— Casos de Abordagem Indevida
— Pedidos de Proteção de Dados Pessoais'
  ],
    outputs: [
    '— Respostas Prestadas a Comunicações de Irregularidade e Denúncias
— Procedimentos de Resolução Pacífica de Conflito Concluídos
— Oficios Expedidos à Autoridade Nacional de Proteção de Dados
— Notificações Extrajudiciais Expedidas
— Medidas de Proteção aos Denunciantes Adotadas'
  ],
    customers: [
    '— Denunciantes
— Usuários do Sistema de Propriedade Industrial
— Corpo Funcional do INPI
— Instâncias de Integridade do INPI
— Gestores do INPI
— Alta Direção do INPI
— Autoridade Nacional de Proteção de Dados'
  ],
    tools: [
    '— Adobe Acrobat Reader
— Avaya Workspace
— BuscaWeb
— Google Calendar
— Google Data Studio
— Google Drive
— Google Meet
— Google Sheet
— Intranet do INPI
— Microsoft Office
— Painel Lei de Acesso à Informação
— Painel Resolveu?
— Plataforma Comex Responde
— Plataforma Fala.Br
— Plataforma Reclame Aqui
— Portal Brasileiro de Dados Abertos
— Portal de Serviços do Governo Federal
— Portal do INPI
— Redmine
— Sistema Ágatha
— Sistema de Gestão do Desempenho (SISGD)
— Sistema de Registro Eletrônico de Frequência (SISREF)
— Sistema e-Aud
— Sistema Eletrônico de Informações (SEI)
— Sistema Fale Conosco
— Typeform
— Webmail Institucional'
  ],
    kpis: [
    '— Número de Solicitações de Pré-Atendimento',
    '— Satisfação do Usuário com o Pré-Atendimento',
    '— Número de Solicitações de Atendimento',
    '— Tempo de Resposta do Atendimento',
    '— Satisfação do Usuário com o Atendimento',
    '— Número de Ações de Pós-Atendimento',
    '— Satisfação do Usuário com o Pós-Atendimento',
    '— Procedência de Solicitações de Simplificação e Sugestões',
    '— Criticidade das Manifestações',
    '— Qualidade dos Canais de Comunicação e de Atendimento',
    '— Satisfação das Partes com o Procedimento de Resolução Pacífica de Conflitos',
    '— Tempo do Procedimento de Resolução Pacífica de Conflitos',
    '— Satisfação do Usuário com os Serviços',
    '— Tempo para Obtenção dos Serviços',
    '— Custo ou Esforço para Obtenção dos Serviços',
    '— Performance, Estabilidade e Disponibilidade dos Serviços',
    '— Utilidade da Carta de Serviços ao Usuário',
    '— Clareza das Informações Disponibilizadas',
    '— Satisfação do Usuário com os Dados Abertos',
    '— Facilidade de Uso e de Navegação no Site e Sistemas',
    '— Reputação e Transparência Institucional',
    '— Resultado de Enquetes do Conselho de Usuários de Serviços Públicos',
    '— Resultado de Pospostas de Melhoria do Conselho de Usuários de Serviços Públicos',
    'e
— Benecios Financeiros e Não-Financeiros da Atuação da Ouvidoria do INPI'
  ],
    regulations: [
    'Referenciais Normativos:
— Lei nº 14.129, de 29 de março de 2021, que dispõe sobre princípios, regras e instrumentos para o Governo Digital e para o aumento da eficiência pública
— Lei nº 13.709, de 14 de agosto de 2018, que institui a Lei Geral de Proteção de Dados Pessoais (LGPD)
— Lei nº 13.460, de 26 de junho de 2017, que dispõe sobre participação, proteção e defesa dos direitos do usuário dos serviços públicos da administração pública
— Lei nº 12.527, de 18 de novembro de 2011, que dispõe sobre o direito fundamental de acesso à informação (Lei de Acesso à Informação – LAI)
— Lei nº 9.279, de 14 de maio de 1996, que regula direitos e obrigações relativos à propriedade industrial (Lei da Propriedade Industrial – LPI)
— Lei nº 5.648, de 11 de dezembro de 1970, que cria o Instituto Nacional da Propriedade Industrial
— Decreto nº 9.094, de 17 de julho de 2017, que dispõe sobre a simplificação do atendimento prestado aos usuários dos serviços públicos
— Portaria INPI/PR nº 512, de 25 de outubro de 2019, que institui a Política de Relacionamento e Transparência do INPI'
  ]
  }
,
  {
    id: 'g15',
    type: 'Gestão',
    category: 'Gestão da Conformidade e Integridade',
    macroprocess: 'Gestão da Conformidade e Integridade',
    process: 'Gestão da Ética',
    subprocess: '',
    products: [],
    suppliers: [],
    inputs: [],
    outputs: [],
    customers: [],
    tools: [],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g16',
    type: 'Gestão',
    category: 'Gestão da Conformidade e Integridade',
    macroprocess: 'Gestão da Conformidade e Integridade',
    process: 'Gestão de Atos Normativos Internos',
    subprocess: '',
    products: [],
    suppliers: [],
    inputs: [],
    outputs: [],
    customers: [],
    tools: [],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g17',
    type: 'Gestão',
    category: 'Relacionamento Institucional e Cooperação',
    macroprocess: 'Relacionamento Institucional e Cooperação',
    process: '',
    subprocess: '',
    products: [],
    suppliers: [],
    inputs: [],
    outputs: [],
    customers: [],
    tools: [],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g18',
    type: 'Gestão',
    category: 'Relacionamento Institucional e Cooperação',
    macroprocess: 'Relacionamento Institucional e Cooperação',
    process: 'Gestão da Cooperação Técnica',
    subprocess: 'Aprovação de instrumentos de entendimento interinstitucional (Relações Internacionais em PI)',
    owner: 'COINT',
    products: [
    '- Instrumento de parceria divulgado na intranet',
    '- Instrumentos de Entendimento Interinstitucional (Memorando de Entendimento de Cooperação ou o Acordo de Cooperação Técnica Internacional), assinado pelas partes e publicado no DOU'
  ],
    suppliers: [
    '- Gabinete - GAB ou Presidência - PR',
    '- Divisão de Relações Bilaterais – DIRBI',
    '- Divisão de Relações Multilaterais - DIREM',
    '- Áreas técnicas do INPI',
    '- Parceiro externo (por ex.: organismos multilaterias',
    'outros institutos internacionais',
    'entre outros)'
  ],
    inputs: [
    '- Proposta de Instrumento de Entendimento InterInstitucional',
    '- Minuta de Instrumento de Entendimento InterInstitucional previamente negociado',
    '- Ofício via SEI',
    '- Formulário de Requisição via SEI',
    '- Minutas nos idiomas',
    '- Nota Técnica',
    '- Declaração Idiomática',
    '- Declaração de Disponibilidade Orçamentária disponível',
    '-  Manifestação de conveniência',
    '- Análise jurídica',
    '- Despacho decisório'
  ],
    outputs: [
    '- Instrumentos de Entendimento Interinstitucional (Memorando de  Entendimento de Cooperação ou o Acordo de Cooperação Técnica Internacional), assinado pelas partes e publicado no DOU',
    '- Instrumento de parceria divulgado na intranet.'
  ],
    customers: [
    '- INPI (COINT e Áreas Tècnicas)',
    '- Parceiro externo (por ex.: organismos multilaterias, outros institutos internacionais',
    'entre outros)',
    '-  Sociedade em geral.'
  ],
    tools: [
    '- SEI (Sistema Eletrônico de Informações)'
  ],
    kpis: [
    '- Monitoramento do Plano de Ação Anual do INPI (ações com impacto ou intercace intercacional)'
  ],
    regulations: [
    '- Decreto 5151/2004',
    '- Lei 8666/93',
    '- LPI',
    '- Decreto 5648/70',
    '- Normas infralegais do INPI (Normativos e resoluções).'
  ]
  }
,
  {
    id: 'g19',
    type: 'Gestão',
    category: 'Relacionamento Institucional e Cooperação',
    macroprocess: 'Relacionamento Institucional e Cooperação',
    process: 'Gestão da Cooperação Técnica',
    subprocess: 'Cooperação Técnica',
    owner: 'CGDI',
    products: [
    '- Instrumento de constituição da parceria assinado',
    '- Articulação institucional realizada',
    '- Relatório trimestral das atividades de disseminação disponibilizado (até que o novo relatório, em Power BI, esteja disponível).'
  ],
    suppliers: [
    '- COART
- DICOP
- Entes da administração pública indireta, direta, organizações sociais e organizações do terceiro setor, que não exerçam atividade econômica
Instituições governamentais'
  ],
    inputs: [
    '- Normas e legislações aplicáveis
- Minuta do instrumento de constituição da parceria
- Plano de trabalho (quando aplicável)'
  ],
    outputs: [
    '- Instrumento de constituição da parceria assinado',
    '- Relatórios de acompanhamento das atividades elaborados.
- Relatório trimestral das atividades de disseminação disponibilizado, até que o novo relatório, em Power BI, esteja disponível.'
  ],
    customers: [
    '- Entes da administração pública indireta, direta, organizações sociais e organizações do terceiro setor, que não exerçam atividade econômica
Instituições governamentais
 -  Sociedade em geral.'
  ],
    tools: [
    '- SEI (Sistema Eletrônico de Informações)
- Sistema de Concessão de Diárias e Passagens - SCDP
- Painel de Compras do Governo Federal
- Sistema Eletrônico de Informações - SEI
- Plataforma da OMPI - https://welc.wipo.int/
- Plataforma Moodle em parceria com a UniRio
- Plataforma Sucupira/ Capes
- Sistema Biblioteca
- Email dos cursos
- Email institucionais e setoriais 
(coart@, inpi.u(r)@)
- Inovadoc
- Inovadata'
  ],
    kpis: [
    '- Disponibilização de relatórios: 
Nº de participantes em cursos à distância',
    'Nº de participantes em cursos/oficinas presenciais no INPI e em instituições parceiras',
    'Nº de defesas de trabalhos de qualificação e de conclusão de curso',
    'Nº de Buscas Efetuadas para Usuários Internos e Externos em Bases Patentárias e Não Patentárias',
    'atividades de disseminação realizadas',
    'atendimentos realizados.
 Indicadores do IRRADIAR - processo SEI 52402.000103/2023-45'
  ],
    regulations: [
    '- Normas e resoluções: - DELIBERAÇÃO/INPI/CGDI/ACAD/CCMD Nº 001, DE 30 DE AGOSTO DE 2018',
    '- Manual de Elaboração de Teses e Dissertações - aprovado em 30/08/2018',
    '- RESOLUÇÃO/INPI/PR Nº 231, DE 28 DE DEZEMBRO DE 2018',
    'RESOLUÇÃO/INPI/PR Nº 219, DE 10 DE MAIO DE 2019',
    '- INSTRUÇÃO NORMATIVA Nº 093, DE 30 DE AGOSTO DE 2018',
    '- RESOLUÇÃO/INPI/PR Nº 108, DE 29 DE AGOSTO DE 2013',
    '- RESOLUÇÃO/INPI/PR Nº 216, DE 30 DE ABRIL DE 2018',
    '- RESOLUÇÃO/INPI/PR Nº 185, DE 25 DE ABRIL DE 2017 e
- RESOLUÇÃO/INPI/PR Nº 230, DE 14 DE DEZEMBRO DE 2018'
  ]
  }
,
  {
    id: 'g20',
    type: 'Gestão',
    category: 'Gestão de Controles Institucionais e Integridade',
    macroprocess: 'Gestão de Controles Institucionais e Integridade',
    process: 'Gestão das Atividades da Auditoria Interna',
    subprocess: 'Apoio à  Prestação de Contas anual',
    owner: 'AUDIT',
    products: [
    'Parecer da AUDIT quanto à Prestação de Contas Anual divulgado
Nota Técnica de Assessoramento do Relatório de Gestão emitido
Nota Técnica de Assessoramento das Demostrações Contábeis emitido
Nota Técnica de Avaliação do Relatório de Gestão emitida
Nota Técnica de Avaliação das Demontrações Contábeis emitida
Nota Técnica do monitoramento da Prestação de Contas emitida.'
  ],
    suppliers: [
    'TCU

CGPE'
  ],
    inputs: [
    'Normativos relacionados à Prestação de Contas anual.

Minutas do Relatório de Gestão e das Demosntrações Contábeis.'
  ],
    outputs: [
    'Parecer da AUDIT quanto à Prestação de Contas Anual
Nota Técnica de Assessoramento do Relatório de Gestão
Nota Técnica de Assessoramento das Demostrações Contábeis
Nota Técnica de Avaliação do Relatório de Gestão
Nota Técnica de Avaliação das Demontrações Contábeis
Nota Técnica do monitoramento da Prestação de Contas'
  ],
    customers: [
    'TCU

PR/INPI

AUDIT

Dirigentes e demais unidade do INPI

Sociedade'
  ],
    tools: [
    '- Sistema e-CGU
 - Sistema e-Pessoal
- SEI
- Conecta TCU
- Fala BR
- Excel 
- ALICE
- e-Pessoal'
  ],
    kpis: [],
    regulations: [
    'Portaria INPI n.° 019/2021 C16- Estabelece normas complementares para a prestação de contas dos administradores e responsáveis da administração pública federal, nos termos do inciso I do art. 2º',
    '§ 1º do art. 5º',
    'inciso III e § 3º do art. 8º',
    '§ 3º do art. 9º',
    'Instrução Normativa-TCU nº 84/2020',
    'Decisão Normativa TCU n.° 198/2022 - Estabelece normas complementares para a prestação de contas dos administradores e responsáveis da administração pública federal, nos termos do inciso I do art. 2º',
    '§ 1º do art. 5º',
    'inciso III e § 3º do art. 8º',
    '§ 3º do art. 9º',
    'e art. 14 da Instrução Normativa-TCU nº 84/2020',
    'Regimento Interno do INPI, aprovado pela Portaria/INPI/PR n.° 18 de 16 de junho de 2025,  Portaria CGU n.° 3.805, de 21 de novembro de 2023, que publica a Deliberação CCCI n.° 02/2023 que dá diretrizes para a elaboração do parecer sobre a prestação de contas da entidade previsto na Instrução Normativa SFC nº 5, de 27 de agosto de 2021, Decreto n.° 3.591 de 6 de setembro de 2000 - Dispõe sobre o Sistema de Controle Interno do Poder Executivo Federal e dá outras providências, Instrução Normativa SFC Nº 5, de 27 de agosto de 2021 - estabelece a sistemática para planejamento, execução e apresentação de resultados das atividades das unidades de auditoria interna governamental sujeitas à supervisão técnica do Sistema de Controle Interno do Poder Executivo Federal, Lei nº 10.180, de 6 de fevereiro de 2001 - Organiza e disciplina os Sistemas de Planejamento e de Orçamento Federal, de Administração Financeira Federal, de Contabilidade Federal e de Controle Interno do Poder Executivo Federal, Instrução Normativa SFC nº 8, de 6 de dezembro de 2017 - Aprova o Manual de Orientações Técnicas da Atividade de Auditoria Interna Governamental do Poder Executivo Federal',
    'e Portaria/INPI/AUDIT n.° 03, de 06 de dezembro de 2024 - Institui o fluxo de Nível 2 (Prestação de Serviços de Apuração" e de "Apoio à Prestação de Contas Anual, no âmbito da AUDIT.'
  ]
  }
,
  {
    id: 'g21',
    type: 'Gestão',
    category: 'Relacionamento Institucional e Cooperação',
    macroprocess: 'Relacionamento Institucional e Cooperação',
    process: 'Prestação de Contas e Transparência',
    subprocess: 'Levantamento de informações para órgãos de controle',
    owner: 'AUDIT',
    products: [
    '- Documentos encaminhados aos órgãos de controle externo (CGU e TCU) .
'- Informações e respostas coletadas e inseridas nos sistemas dos  órgãos de controle externo (CGU e TCU) 
- Monitoramento de recomendações e/ou determinações dos órgãos do controle externo (CGU e TCU) divulgados no portal do INPI.'
  ],
    suppliers: [
    'TCU

CGU'
  ],
    inputs: [
    'Recomendações e Determinações dos orgãos de controle interno e externo.

Ofícios dos órgãos de controle interno e externo.'
  ],
    outputs: [
    '- Documentos encaminhados aos órgãos de controle externo (CGU e TCU) .
'- Informações e respostas coletadas e inseridas nos sistemas dos  órgãos de controle externo (CGU e TCU) 
- DIvulgação do monitoramento de recomendações e/ou determinações dos órgãos do controle externo (CGU e TCU) no portal do INPI.'
  ],
    customers: [
    'TCU

CGU

AUDIT 

Sociedade'
  ],
    tools: [
    '- Sistema e-CGU
 - Sistema e-Pessoal
- SEI
- Conecta TCU
- Fala BR
- Excel 
- ALICE
- e-Pessoal'
  ],
    kpis: [],
    regulations: [
    'Regimento Interno do INPI, aprovado pela Portaria/INPI/PR n.° 18 de 16 de junho de 2025',
    'Portaria Conjunta PGF/SE-CGU Nº 3, de 7 de dezembro de 2023 - que estabelece procedimentos para a atuação das UAIG e das Procuradorias Federais vinculadas a autarquias e fundações públicas federais, com o intuito de aprimorar a defesa dessas entidades em processos que tramitam junto ao TCU',
    'Parágrafo 4° do Inciso II do Art. 9º da Instrução Normativa TCU nº 84, de 22 de abril de 2020, que  estabelece normas para a tomada e prestação de contas dos administradores e responsáveis da administração pública federal, para fins de julgamento pelo TCU',
    'e Portaria INPI/PR/AUDIT n.°02, de 04 de dezembro de 2024 - Institui procedimento de tratamento das demandas oriundas do TCU e encaminhadas ao INPI, por meio do sistema "Conecta TCU", no âmbito da AUDIT.'
  ]
  }
,
  {
    id: 'g22',
    type: 'Gestão',
    category: 'Gestão da Conformidade e Integridade',
    macroprocess: 'Gestão da Conformidade e Integridade',
    process: 'Gestão Correcional',
    subprocess: 'Identificação de  Riscos à Integridade',
    owner: 'COGER',
    products: [
    '- Pareceres de Juízo de Admissibilidade, gerados e inseridos no Sistema e-PAD.                                                                                                              - Notificação de irregularidade com repercussão não correcional às instâncias de integridade e unidades competentes do INPI, caso o juízo de admissibilidade seja negativo quanto a inexistência de indícios de materialidade de irregularidade administrativa.                                                                                                                       - Recomendações preventivas incluídas em relatórios finais de procedimentos correcionais.
 - Pareceres de julgamento emitidos pelo Corregedor e inseridos nos Sistemas de Informação da CGU.                                        
- Decisão da Autoridade Competente.                                                                                                                  - Notícia  de fragilidades detectadas em procedimentos correcionais às instâncias de integridade e demais unidades interessadas.
 - Atas de reunião e despachos no âmbito do processo de monitoramento do Plano de Integridade.'
  ],
    suppliers: [
    '- Ouvidoria
 - Servidores do INPI
 - CGU
 - Auditoria Interna
 - Sociedade
 - Imprensa
- Corregedor
- Servidores encarregados da condução de procedimentos correcionais'
  ],
    inputs: [
    '- Notícia da ocorrência de potencial irregularidade administrativa.
 - Relatórios Finais de Procedimentos Correcionais.
 - Pareceres de juízo de admissibilidade.
- Pareceres de julgamento.
- Decisões da Autoridade Competente.  
- Pareceres e decisões de julgamento de pedidos de reconsideração, recurso hierárquico e revisão.
 - Portarias de Instauração de procedimento correcional.'
  ],
    outputs: [
    '- Notícia da ocorrência de potencial irregularidade administrativa.                   

- Relatórios Finais de Procedimentos Correcionais. 

- Pareceres e decisões de julgamento.  
                                                                                                   - Pareceres e decisões de julgamento de pedidos de reconsideração, recurso hierárquico e revisão.

- Decisão de autoridade competente.'
  ],
    customers: [
    '- Corregedor.     
- Servidores designados para a condução dos trabalhos.    
 - Assistente da COGER.
- Demais unidade do INPI.
- CQUAL.
- CEINPI.
- AUDIT.
- OUVID.
 - CGU/CRG.'
  ],
    tools: [
    '- SEI
 - CGU-PAD
 - E-PAD
 - CGU-PJ
 - eAUD'
  ],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g23',
    type: 'Gestão',
    category: 'Relacionamento Institucional e Cooperação',
    macroprocess: 'Relacionamento Institucional e Cooperação',
    process: 'Prestação de Contas e Transparência',
    subprocess: 'Sustentação da Transparência Pública',
    owner: 'OUVID',
    products: [
    '— Respostas Prestadas a Pedidos de Acesso à Informação e a Reclamações por Omissão de Resposta a Pedidos de Acesso a Informação
— Perguntas e Respostas Mais Frequentes Consolidadas e Conteúdo de Relacionamento e Transparência do Portal do INPI Atualizado
— Publicação e Atualização da Seção de Acesso à Informação do Portal do INPI e da Agenda de Compromisso das Autoridades do INPI Monitoradas
— Informações Classificadas, Desclassificadas, Reclassificadas ou Reavaliadas em Grau de Sigilo
— Sistema de Transparência Ativa (STA) Monitorado e Atualizado
— Edições e Revisões do Plano de Dados Abertos Publicadas
— Conjuntos de Dados Corporativos Catalogados no Portal do INPI e no Portal Brasileiro de Dados Abertos'
  ],
    suppliers: [
    '— Usuários do Sistema de Propriedade Industrial
— Corpo Funcional do INPI
— Controladoria-Geral da União
— Agentes Institucionais de Relacionamento do INPI
— Auditoria Interna do INPI'
  ],
    inputs: [
    '— Pedidos de Acesso à Informação
— Reclamações por Omissão de Resposta a Pedidos de Acesso a Informação
— Relatório do Sistema de Transparência Ativa (STA) da Plataforma Fala.Br
— Plano de Dados Abertos do INPI
— Páginas de Seção de Acesso à Informação do Porta do INPI
— Compromissos Publicados no Sistema e-Agendas
— Formulário de  Monitoramento da Transparência no Portal do INPI
— Formulário de Monitoramento da
Agenda Oficial de Autoridades do INPI'
  ],
    outputs: [
    '— Respostas Prestadas a Pedidos de Acesso à Informação e a Reclamações por Omissão de Resposta a Pedidos de Acesso a Informação
— Perguntas e Respostas Mais Frequentes Consolidadas e Conteúdo de Relacionamento e Transparência do Portal do INPI Atualizado
— Publicação e Atualização da Seção de Acesso à Informação do Portal do INPI e da Agenda de Compromisso das Autoridades do INPI Monitoradas
— Informações Classificadas, Desclassificadas, Reclassificadas ou Reavaliadas em Grau de Sigilo
— Sistema de Transparência Ativa (STA) Monitorado e Atualizado
— Edições e Revisões do Plano de Dados Abertos Publicadas
— Conjuntos de Dados Corporativos Catalogados no Portal do INPI e no Portal Brasileiro de Dados Abertos'
  ],
    customers: [
    '— Usuários do Sistema de Propriedade Industrial
— Alta Direção do INPI
— Controladoria-Geral da União'
  ],
    tools: [
    '— Adobe Acrobat Reader
— Avaya Workspace
— BuscaWeb
— Google Calendar
— Google Data Studio
— Google Drive
— Google Meet
— Google Sheet
— Intranet do INPI
— Microsoft Office
— Painel Lei de Acesso à Informação
— Painel Resolveu?
— Plataforma Comex Responde
— Plataforma Fala.Br
— Plataforma Reclame Aqui
— Portal Brasileiro de Dados Abertos
— Portal de Serviços do Governo Federal
— Portal do INPI
— Redmine
— Sistema Ágatha
— Sistema de Gestão do Desempenho (SISGD)
— Sistema de Registro Eletrônico de Frequência (SISREF)
— Sistema e-Aud
— Sistema Eletrônico de Informações (SEI)
— Sistema Fale Conosco
— Typeform
— Webmail Institucional'
  ],
    kpis: [
    '— Número de Solicitações de Pré-Atendimento',
    '— Satisfação do Usuário com o Pré-Atendimento',
    '— Número de Solicitações de Atendimento',
    '— Tempo de Resposta do Atendimento',
    '— Satisfação do Usuário com o Atendimento',
    '— Número de Ações de Pós-Atendimento',
    '— Satisfação do Usuário com o Pós-Atendimento',
    '— Procedência de Solicitações de Simplificação e Sugestões',
    '— Criticidade das Manifestações',
    '— Qualidade dos Canais de Comunicação e de Atendimento',
    '— Satisfação das Partes com o Procedimento de Resolução Pacífica de Conflitos',
    '— Tempo do Procedimento de Resolução Pacífica de Conflitos',
    '— Satisfação do Usuário com os Serviços',
    '— Tempo para Obtenção dos Serviços',
    '— Custo ou Esforço para Obtenção dos Serviços',
    '— Performance, Estabilidade e Disponibilidade dos Serviços',
    '— Utilidade da Carta de Serviços ao Usuário',
    '— Clareza das Informações Disponibilizadas',
    '— Satisfação do Usuário com os Dados Abertos',
    '— Facilidade de Uso e de Navegação no Site e Sistemas',
    '— Reputação e Transparência Institucional',
    '— Resultado de Enquetes do Conselho de Usuários de Serviços Públicos',
    '— Resultado de Pospostas de Melhoria do Conselho de Usuários de Serviços Públicos',
    'e
— Benecios Financeiros e Não-Financeiros da Atuação da Ouvidoria do INPI'
  ],
    regulations: [
    'Referenciais Normativos:
— Lei nº 14.129, de 29 de março de 2021, que dispõe sobre princípios, regras e instrumentos para o Governo Digital e para o aumento da eficiência pública
— Lei nº 13.709, de 14 de agosto de 2018, que institui a Lei Geral de Proteção de Dados Pessoais (LGPD)
— Lei nº 13.460, de 26 de junho de 2017, que dispõe sobre participação, proteção e defesa dos direitos do usuário dos serviços públicos da administração pública
— Lei nº 12.527, de 18 de novembro de 2011, que dispõe sobre o direito fundamental de acesso à informação (Lei de Acesso à Informação – LAI)
— Lei nº 9.279, de 14 de maio de 1996, que regula direitos e obrigações relativos à propriedade industrial (Lei da Propriedade Industrial – LPI)
— Lei nº 5.648, de 11 de dezembro de 1970, que cria o Instituto Nacional da Propriedade Industrial
— Decreto nº 9.094, de 17 de julho de 2017, que dispõe sobre a simplificação do atendimento prestado aos usuários dos serviços públicos
— Portaria INPI/PR nº 512, de 25 de outubro de 2019, que institui a Política de Relacionamento e Transparência do INPI'
  ]
  }
,
  {
    id: 'g24',
    type: 'Gestão',
    category: 'Relacionamento Institucional e Cooperação',
    macroprocess: 'Relacionamento Institucional e Cooperação',
    process: '',
    subprocess: 'Garantia da Participação e do Controle Social',
    owner: 'OUVID',
    products: [
    '— Acolhimentos e Direcionamentos Prestados aos Usuários
— Manifestações Direcionadas para o Canal de Atendimento Adequado
— Respostas Prestadas a Elogios, Reclamações, Solicitações de Providências e Sugestões
— Elogios Monitorados e Publicados no Boletim de Pessoal do INPI
— Atendimento Telepresencial aos Usuários dos Serviços de Propriedade Industrial Prestado'
  ],
    suppliers: [
    '— Usuários do Sistema de Propriedade Industrial
— Corpo Funcional do INPI
— Ouvidoria-Geral da União
— Agentes Institucionais de Relacionamento do INPI'
  ],
    inputs: [
    '— Acionamentos do INPI Conecta Todos
— Manifestações do Fale Conosco
— Manifestações do Fala.Br
— Solicitações de Agendamento de Atendimento (Tele)Presencial
— Manifestações do Reclame Aqui'
  ],
    outputs: [
    '— Acolhimentos e Direcionamentos Prestados aos Usuários
— Manifestações Direcionadas para o Canal de Atendimento Adequado
— Respostas Prestadas a Elogios, Reclamações, Solicitações de Providências e Sugestões
— Elogios Monitorados e Publicados no Boletim de Pessoal do INPI
— Atendimento Telepresencial aos Usuários dos Serviços de Propriedade Industrial Prestado'
  ],
    customers: [
    '— Usuários do Sistema de Propriedade Industrial
— Corpo Funcional do INPI
— Gestores do INPI'
  ],
    tools: [
    '— Adobe Acrobat Reader
— Avaya Workspace
— BuscaWeb
— Google Calendar
— Google Data Studio
— Google Drive
— Google Meet
— Google Sheet
— Intranet do INPI
— Microsoft Office
— Painel Lei de Acesso à Informação
— Painel Resolveu?
— Plataforma Comex Responde
— Plataforma Fala.Br
— Plataforma Reclame Aqui
— Portal Brasileiro de Dados Abertos
— Portal de Serviços do Governo Federal
— Portal do INPI
— Redmine
— Sistema Ágatha
— Sistema de Gestão do Desempenho (SISGD)
— Sistema de Registro Eletrônico de Frequência (SISREF)
— Sistema e-Aud
— Sistema Eletrônico de Informações (SEI)
— Sistema Fale Conosco
— Typeform
— Webmail Institucional'
  ],
    kpis: [
    '— Número de Solicitações de Pré-Atendimento',
    '— Satisfação do Usuário com o Pré-Atendimento',
    '— Número de Solicitações de Atendimento',
    '— Tempo de Resposta do Atendimento',
    '— Satisfação do Usuário com o Atendimento',
    '— Número de Ações de Pós-Atendimento',
    '— Satisfação do Usuário com o Pós-Atendimento',
    '— Procedência de Solicitações de Simplificação e Sugestões',
    '— Criticidade das Manifestações',
    '— Qualidade dos Canais de Comunicação e de Atendimento',
    '— Satisfação das Partes com o Procedimento de Resolução Pacífica de Conflitos',
    '— Tempo do Procedimento de Resolução Pacífica de Conflitos',
    '— Satisfação do Usuário com os Serviços',
    '— Tempo para Obtenção dos Serviços',
    '— Custo ou Esforço para Obtenção dos Serviços',
    '— Performance, Estabilidade e Disponibilidade dos Serviços',
    '— Utilidade da Carta de Serviços ao Usuário',
    '— Clareza das Informações Disponibilizadas',
    '— Satisfação do Usuário com os Dados Abertos',
    '— Facilidade de Uso e de Navegação no Site e Sistemas',
    '— Reputação e Transparência Institucional',
    '— Resultado de Enquetes do Conselho de Usuários de Serviços Públicos',
    '— Resultado de Pospostas de Melhoria do Conselho de Usuários de Serviços Públicos',
    'e
— Benecios Financeiros e Não-Financeiros da Atuação da Ouvidoria do INPI'
  ],
    regulations: [
    'Referenciais Normativos:
— Lei nº 14.129, de 29 de março de 2021, que dispõe sobre princípios, regras e instrumentos para o Governo Digital e para o aumento da eficiência pública
— Lei nº 13.709, de 14 de agosto de 2018, que institui a Lei Geral de Proteção de Dados Pessoais (LGPD)
— Lei nº 13.460, de 26 de junho de 2017, que dispõe sobre participação, proteção e defesa dos direitos do usuário dos serviços públicos da administração pública
— Lei nº 12.527, de 18 de novembro de 2011, que dispõe sobre o direito fundamental de acesso à informação (Lei de Acesso à Informação – LAI)
— Lei nº 9.279, de 14 de maio de 1996, que regula direitos e obrigações relativos à propriedade industrial (Lei da Propriedade Industrial – LPI)
— Lei nº 5.648, de 11 de dezembro de 1970, que cria o Instituto Nacional da Propriedade Industrial
— Decreto nº 9.094, de 17 de julho de 2017, que dispõe sobre a simplificação do atendimento prestado aos usuários dos serviços públicos
— Portaria INPI/PR nº 512, de 25 de outubro de 2019, que institui a Política de Relacionamento e Transparência do INPI'
  ]
  }
,
  {
    id: 'g25',
    type: 'Gestão',
    category: 'Relacionamento Institucional e Cooperação',
    macroprocess: 'Relacionamento Institucional e Cooperação',
    process: '',
    subprocess: 'Supervisão Técnica dos Canais de Atendimento',
    owner: 'OUVID',
    products: [
    '— Manifestações Críticas Monitoradas e Relatórios Expedidos
— Recomendações de Ouvidoria Expedidas
— Enunciados de Ouvidoria Emitidos
— Atendimento Telepresencial, Chatbot do INPI e Módulo de Avaliação Pós-Consumo do Serviço Monitorados
— Informações Publicadas no Portal de Serviços do Governo Federal
— Edições da Carta de Serviços ao Usuário do INPI, do Guias de Atendimento e de Transparência e Dados Abertos do INPI Atualizadas
— Relatório de Relacionamento e Transparência do INPI Publicado
— Encontros e Webinários da Rede Agir Realizados
— Ações do Conselho de Usuários de Serviços Públicos de Propriedade Industrial Monitoradas e Pesquisas Qualificadas Aplicadas
— Capacitação Institucional em Práticas e Estratégias de Relacionamento e Transparência do INPI Realizada
— Plano de Ação da Ouvidoria Publicado'
  ],
    suppliers: [
    '— Usuários do Sistema de Propriedade Industrial
— Corpo Funcional do INPI
— Agentes Institucionais de Relacionamento do INPI'
  ],
    inputs: [
    '— Formulário de Registro de Manifestações Críticas
— Formulário de Consolidação das
Principais Informações e
Solicitações Demandadas
— Formulário de Consolidação das
Perguntas e Respostas
Mais Frequentes
— Saídas do Processo e Nível 2 "Garantia da Participação e do Controle Social da Gestão Institucional"'
  ],
    outputs: [
    '— Manifestações Críticas Monitoradas e Relatórios Expedidos
— Recomendações de Ouvidoria Expedidas
— Enunciados de Ouvidoria Emitidos
— Atendimento Telepresencial, Chatbot do INPI e Módulo de Avaliação Pós-Consumo do Serviço Monitorados
— Informações Publicadas no Portal de Serviços do Governo Federal
— Edições da Carta de Serviços ao Usuário do INPI, do Guias de Atendimento e de Transparência e Dados Abertos do INPI Atualizadas
— Relatório de Relacionamento e Transparência do INPI Publicado
— Encontros e Webinários da Rede Agir Realizados
— Ações do Conselho de Usuários de Serviços Públicos de Propriedade Industrial Monitoradas e Pesquisas Qualificadas Aplicadas
— Capacitação Institucional em Práticas e Estratégias de Relacionamento e Transparência do INPI Realizada
— Plano de Ação da Ouvidoria Publicado'
  ],
    customers: [
    '— Usuários do Sistema de Propriedade Industrial
— Corpo Funcional do INPI
— Gestores do INPI
— Alta Direção do INPI'
  ],
    tools: [
    '— Adobe Acrobat Reader
— Avaya Workspace
— BuscaWeb
— Google Calendar
— Google Data Studio
— Google Drive
— Google Meet
— Google Sheet
— Intranet do INPI
— Microsoft Office
— Painel Lei de Acesso à Informação
— Painel Resolveu?
— Plataforma Comex Responde
— Plataforma Fala.Br
— Plataforma Reclame Aqui
— Portal Brasileiro de Dados Abertos
— Portal de Serviços do Governo Federal
— Portal do INPI
— Redmine
— Sistema Ágatha
— Sistema de Gestão do Desempenho (SISGD)
— Sistema de Registro Eletrônico de Frequência (SISREF)
— Sistema e-Aud
— Sistema Eletrônico de Informações (SEI)
— Sistema Fale Conosco
— Typeform
— Webmail Institucional'
  ],
    kpis: [
    '— Número de Solicitações de Pré-Atendimento',
    '— Satisfação do Usuário com o Pré-Atendimento',
    '— Número de Solicitações de Atendimento',
    '— Tempo de Resposta do Atendimento',
    '— Satisfação do Usuário com o Atendimento',
    '— Número de Ações de Pós-Atendimento',
    '— Satisfação do Usuário com o Pós-Atendimento',
    '— Procedência de Solicitações de Simplificação e Sugestões',
    '— Criticidade das Manifestações',
    '— Qualidade dos Canais de Comunicação e de Atendimento',
    '— Satisfação das Partes com o Procedimento de Resolução Pacífica de Conflitos',
    '— Tempo do Procedimento de Resolução Pacífica de Conflitos',
    '— Satisfação do Usuário com os Serviços',
    '— Tempo para Obtenção dos Serviços',
    '— Custo ou Esforço para Obtenção dos Serviços',
    '— Performance, Estabilidade e Disponibilidade dos Serviços',
    '— Utilidade da Carta de Serviços ao Usuário',
    '— Clareza das Informações Disponibilizadas',
    '— Satisfação do Usuário com os Dados Abertos',
    '— Facilidade de Uso e de Navegação no Site e Sistemas',
    '— Reputação e Transparência Institucional',
    '— Resultado de Enquetes do Conselho de Usuários de Serviços Públicos',
    '— Resultado de Pospostas de Melhoria do Conselho de Usuários de Serviços Públicos',
    'e
— Benecios Financeiros e Não-Financeiros da Atuação da Ouvidoria do INPI'
  ],
    regulations: [
    'Referenciais Normativos:
— Lei nº 14.129, de 29 de março de 2021, que dispõe sobre princípios, regras e instrumentos para o Governo Digital e para o aumento da eficiência pública
— Lei nº 13.709, de 14 de agosto de 2018, que institui a Lei Geral de Proteção de Dados Pessoais (LGPD)
— Lei nº 13.460, de 26 de junho de 2017, que dispõe sobre participação, proteção e defesa dos direitos do usuário dos serviços públicos da administração pública
— Lei nº 12.527, de 18 de novembro de 2011, que dispõe sobre o direito fundamental de acesso à informação (Lei de Acesso à Informação – LAI)
— Lei nº 9.279, de 14 de maio de 1996, que regula direitos e obrigações relativos à propriedade industrial (Lei da Propriedade Industrial – LPI)
— Lei nº 5.648, de 11 de dezembro de 1970, que cria o Instituto Nacional da Propriedade Industrial
— Decreto nº 9.094, de 17 de julho de 2017, que dispõe sobre a simplificação do atendimento prestado aos usuários dos serviços públicos
— Portaria INPI/PR nº 512, de 25 de outubro de 2019, que institui a Política de Relacionamento e Transparência do INPI'
  ]
  }
,
  {
    id: 'g26',
    type: 'Gestão',
    category: 'Relacionamento Institucional e Cooperação',
    macroprocess: 'Relacionamento Institucional e Cooperação',
    process: 'Gestão do Relacionamento das Partes Interessadas',
    subprocess: '',
    products: [],
    suppliers: [],
    inputs: [],
    outputs: [],
    customers: [],
    tools: [],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g27',
    type: 'Gestão',
    category: 'Relacionamento Institucional e Cooperação',
    macroprocess: 'Relacionamento Institucional e Cooperação',
    process: 'Gestão do Relacionamento das Partes Interessadas',
    subprocess: 'Posição institucional do INPI junto a organizações e parceiros internacionais.',
    owner: 'COINT',
    products: [
    '- Ofício ou Nota Técnica sobre o posicionamento institucional do INPI enviados'
  ],
    suppliers: [
    '- Parceiro externo (exemplo: institutos de PI, OMPI)
 - Ministério das Relações Exteriores',
    '- Ministério da Economia',
    '- INPI (COINT e Áreas Técnicas).'
  ],
    inputs: [
    '- Demanda externa de posicionamento interinstitucional',
    ''- Legislação aplicável vigente (por ex.: LPI e normas internas(exemplo: instruções normativas internas, resoluções, etc.).'
  ],
    outputs: [
    '- Ofício ou Nota Técnica ou documento similar, no devido idioma sobre o posicionamento interinstitucional do INPI.'
  ],
    customers: [
    '- Parceiro externo (exemplo: institutos de PI, OMPI)',
    '- Ministério das Relações Exteriores',
    '- Ministério da Economia',
    '- INPI (COINT e Presidência)',
    '- Sociedade em geral.'
  ],
    tools: [
    ''- SEI (Sistema Eletrônico de Informações)'
  ],
    kpis: [
    '' - Monitoramento do Plano de Ação Anual do INPI (ações com impacto ou intercace intercacional)'
  ],
    regulations: [
    '- Decreto 5151/2004',
    '- Lei 8666/93',
    '- LPI',
    '- Decreto 5648/70',
    '- Normas infralegais do INPI (Normativos e resoluções).'
  ]
  }
,
  {
    id: 'g28',
    type: 'Gestão',
    category: 'Relacionamento Institucional e Cooperação',
    macroprocess: 'Relacionamento Institucional e Cooperação',
    process: 'Gestão do Relacionamento das Partes Interessadas',
    subprocess: 'Organização de eventos e reuniões internacionais (exceto capacitações)',
    owner: 'COINT',
    products: [
    '- Eventos e reuniões com entidades ou institutos internacionais voltados à propriedade intelectual'
  ],
    suppliers: [
    '- Parceiro externo (Institutos de PI, OMPI, etc)
 - Ministério das Relações Exteriores',
    '- Ministério da Economia',
    '- INPI (Presidência, COINT e Áreas Técnicas)'
  ],
    inputs: [
    '- Interesse interno na realização de eventos internacionais',
    '- Programação do evento ou reunião internacional',
    '- Diretrizes e normas internas (por ex.Manual de Visitas de Autoridades Estrangeiras ao Brasil - MRE)',
    '- Demanda externa para realização de eventos internacionais',
    '- Instrumento de Entendimento',
    'Interinstitucional aprovado (Se aplicável)',
    '- Check List de eventos.'
  ],
    outputs: [
    '- Eventos realizados',
    '- Reuniões realizadas',
    '- Relatório ou ata sobre a realização do evento elaborados (quando aplicável)'
  ],
    customers: [
    '- Dirigentes e Gestores do INPI',
    '- Servidores do INPI',
    '- Sociedade em geral',
    '- Parceiros externos (exemplo: Institutos de Propriedade Industrial, OMPI)',
    '- Ministério das Relações Exteriores',
    '- Ministério da Economia.'
  ],
    tools: [
    ''- SEI (Sistema Eletrônico de Informações)'
  ],
    kpis: [
    '- Monitoramento do Plano de Ação Anual do INPI (ações com impacto ou intercace intercacional)'
  ],
    regulations: [
    '- Decreto 5151/2004',
    '- Lei 8666/93',
    '- LPI',
    '- Decreto 5648/70',
    '- Normas infralegais do INPI (Normativos e resoluções).'
  ]
  }
,
  {
    id: 'g29',
    type: 'Gestão',
    category: 'Relacionamento Institucional e Cooperação',
    macroprocess: 'Relacionamento Institucional e Cooperação',
    process: 'Gestão da Comunicação',
    subprocess: 'Divulgação externa',
    owner: 'CCOM',
    products: [
    '- Notícias e comunicados publicados, 
- Gestão do portal realizada, 
- Relatórios produzidos e coberturas de eventos realizadas, 
- Ações realizadas sobre uso indevido do nome institucional.'
  ],
    suppliers: [
    '- Setores do INPI (Sede e Regionais)
 - Ministério da Economia
 - Entidades parceiras do Instituto'
  ],
    inputs: [
    '- Ações e resultados da gestão
-  Eventos a serem realizados.
-  Informes sobre sistemas, publicações e estatísticas do INPI.
-  Reuniões e demandas das áreas e da própria CCOM para estruturar ou atualizar seções do portal.'
  ],
    outputs: [
    '- Notícias e comunicados publicados',
    '- Gestão do portal realizada',
    '- Relatórios produzidos e coberturas de eventos realizadas',
    '- Ações realizadas sobre o uso indevido do nome industrial.'
  ],
    customers: [
    '- Sociedade em geral
 - Usuários de serviços do INPI (atuais e potenciais)
 - Representantes do Poder Público
 - Setores do INPI (Sede e Regionais).'
  ],
    tools: [
    'Nos processos acima, são usados: 
 - Rredes sociais
 - Portal INPI
 - Intranet
 - Boletins eletrônicos INPI Hoje e INPI Acontece
 - Ferramentas de edição gráfica e audiovisual, como Corel Draw, InDesign e Canva.'
  ],
    kpis: [
    'Os processos acima são acompanhados pela CCOM por meio de indicadores quantitativos de criação dos produtos citados, como números absolutos de notícias publicadas no portal e na intranet, total de atendimentos à imprensa, posts em redes sociais, peças produzidas para campanhas e eventos, entre outros, permitindo a comparação dos números com períodos anteriores.'
  ],
    regulations: []
  }
,
  {
    id: 'g30',
    type: 'Gestão',
    category: 'Relacionamento Institucional e Cooperação',
    macroprocess: 'Relacionamento Institucional e Cooperação',
    process: 'Gestão da Comunicação',
    subprocess: 'Divulgação interna',
    owner: 'CCOM',
    products: [
    '- Notícias e comunicados publicados. 
- Gestão da intranet realizada. 
- Boletins informativos divulgados. 
- Campanhas internas produzidas. 
- Coberturas de eventos realizadas.'
  ],
    suppliers: [
    '- Setores do INPI (Sede e Regionais)'
  ],
    inputs: [
    'Informações obtidas internamente para embasar divulgações, tais como: 
- Funcionamento do INPI
- Avaliação de desempenho
- Atividades da área de saúde.
- Seleções internas. 
- Demandas das áreas e da própria CCOM para estruturar ou atualizar seções da intranet.'
  ],
    outputs: [
    '- Notícias e comunicados publicados',
    '- Gestão da intranet realizada',
    '- Boletins informativos divulgados',
    '- Campanhas internas produzidas',
    '- Coberturas de eventos realizadas.'
  ],
    customers: [
    '- Gestores, servidores (ativos e inativos), pensionistas e colaboradores do INPI.'
  ],
    tools: [
    'Nos processos acima, são usados: 
 - Rredes sociais
 - Portal INPI
 - Intranet
 - Boletins eletrônicos INPI Hoje e INPI Acontece
 - Ferramentas de edição gráfica e audiovisual, como Corel Draw, InDesign e Canva.'
  ],
    kpis: [
    'Os processos acima são acompanhados pela CCOM por meio de indicadores quantitativos de criação dos produtos citados, como números absolutos de notícias publicadas no portal e na intranet, total de atendimentos à imprensa, posts em redes sociais, peças produzidas para campanhas e eventos, entre outros, permitindo a comparação dos números com períodos anteriores.'
  ],
    regulations: []
  }
,
  {
    id: 'g31',
    type: 'Gestão',
    category: 'Relacionamento Institucional e Cooperação',
    macroprocess: 'Relacionamento Institucional e Cooperação',
    process: 'Gestão da Comunicação',
    subprocess: 'Relacionamento com a imprensa',
    owner: 'CCOM',
    products: [
    '- Sugestões de pauta elaboradas e enviadas.
- Respostas à imprensa encaminhadas.
- Entrevistas acompanhadas. 
- Capacitações em PI para profissionais de comunicação realizadas. 
- Clipping produzido.'
  ],
    suppliers: [
    '- Setores do INPI (Sede e Regionais)
 - Imprensa'
  ],
    inputs: [
    '- Solicitações de veículos de imprensa (p. ex. como funciona o sistema de marcas, o tempo de exame de patentes e contratação de servidores).
- Informações obtidas internamente para divulgação voltada aos jornalistas, tais como ações e resultados da gestão, projetos, eventos, entre outros.
 - Necessidade de ampliar o conhecimento em PI dos profissionais da área.'
  ],
    outputs: [
    '- Sugestões de pauta elaboradas e enviadas',
    '- Respostas à imprensa encaminhadas',
    '- Entrevistas acompanhadas',
    '- Capacitações em PI para profissionais de comunicação realizadas',
    '- Clipping produzido.'
  ],
    customers: [
    '- Profissionais de comunicação e, como receptora da informação divulgada pela mídia
 - Sociedade em geral.'
  ],
    tools: [
    'Nos processos acima, são usados: 
 - Rredes sociais
 - Portal INPI
 - Intranet
 - Boletins eletrônicos INPI Hoje e INPI Acontece
 - Ferramentas de edição gráfica e audiovisual, como Corel Draw, InDesign e Canva.'
  ],
    kpis: [
    'Os processos acima são acompanhados pela CCOM por meio de indicadores quantitativos de criação dos produtos citados, como números absolutos de notícias publicadas no portal e na intranet, total de atendimentos à imprensa, posts em redes sociais, peças produzidas para campanhas e eventos, entre outros, permitindo a comparação dos números com períodos anteriores.'
  ],
    regulations: []
  }
,
  {
    id: 'g32',
    type: 'Gestão',
    category: 'Relacionamento Institucional e Cooperação',
    macroprocess: 'Relacionamento Institucional e Cooperação',
    process: 'Gestão da Comunicação',
    subprocess: 'Gestão de redes sociais',
    owner: 'CCOM',
    products: [
    '- Conteúdos publicados, seja na forma de posts individuais ou campanhas, incluindo: textos, peças gráficas e vídeos.'
  ],
    suppliers: [
    '- Setores do INPI (Sede e Regionais)
 - Representantes do Poder Público
 - Entidades parceiras do INPI'
  ],
    inputs: [
    '- Informações obtidas interna e externamente, abordando temas de interesse para o INPI, tais como passo a passo para os serviços, projetos estratégicos, notícias e eventos, além de conteúdos de outros órgãos públicos e demais parceiros com temas afins ao INPI.'
  ],
    outputs: [
    '- Conteúdos publicados, seja na forma de posts individuais ou campanhas, incluindo: textos, peças gráficas e vídeos.'
  ],
    customers: [
    '- Sociedade em geral
 - Usuários de serviços do INPI (atuais e potenciais) 
 - Representantes do Poder Público.'
  ],
    tools: [
    'Nos processos acima, são usados: 
 - Rredes sociais
 - Portal INPI
 - Intranet
 - Boletins eletrônicos INPI Hoje e INPI Acontece
 - Ferramentas de edição gráfica e audiovisual, como Corel Draw, InDesign e Canva.'
  ],
    kpis: [
    'Os processos acima são acompanhados pela CCOM por meio de indicadores quantitativos de criação dos produtos citados, como números absolutos de notícias publicadas no portal e na intranet, total de atendimentos à imprensa, posts em redes sociais, peças produzidas para campanhas e eventos, entre outros, permitindo a comparação dos números com períodos anteriores.'
  ],
    regulations: []
  }
,
  {
    id: 'g33',
    type: 'Gestão',
    category: 'Relacionamento Institucional e Cooperação',
    macroprocess: 'Relacionamento Institucional e Cooperação',
    process: 'Gestão da Comunicação',
    subprocess: 'Realização de cerimonial e eventos',
    owner: 'CCOM',
    products: [
    '- Planejamento da atividade formatado. 
- Roteiro de evento e cerimonial produzidos.
- Acompanhamento do evento realizado.'
  ],
    suppliers: [
    '- Setores do INPI (Sede e Regionais)
 - Parceiros  do Instituto'
  ],
    inputs: [
    '- Briefing sobre data, local, formato, objetivo e público do evento, além de outras informações relevantes.'
  ],
    outputs: [
    '- Planejamento da atividade formatado',
    '- Roteiro de evento e cerimonial produzidos',
    '- Acompanhamento do evento realizado.'
  ],
    customers: [
    '- Setores do INPI (Sede e Regionais)
 - Entidades e órgãos públicos
 - Parceiros do Instituto (no Brasil e no exterior) 
 - Pesquisadores e profissionais da área de PI e inovação.'
  ],
    tools: [
    'Nos processos acima, são usados: 
 - Rredes sociais
 - Portal INPI
 - Intranet
 - Boletins eletrônicos INPI Hoje e INPI Acontece
 - Ferramentas de edição gráfica e audiovisual, como Corel Draw, InDesign e Canva.'
  ],
    kpis: [
    'Os processos acima são acompanhados pela CCOM por meio de indicadores quantitativos de criação dos produtos citados, como números absolutos de notícias publicadas no portal e na intranet, total de atendimentos à imprensa, posts em redes sociais, peças produzidas para campanhas e eventos, entre outros, permitindo a comparação dos números com períodos anteriores.'
  ],
    regulations: []
  }
,
  {
    id: 'g34',
    type: 'Gestão',
    category: 'Relacionamento Institucional e Cooperação',
    macroprocess: 'Relacionamento Institucional e Cooperação',
    process: 'Gestão da Comunicação',
    subprocess: 'Produção gráfica e audiovisual',
    owner: 'CCOM',
    products: [
    '- Peças gráficas e audiovisuais produzidas e validadas para divulgação, bem como publicações diagramadas. 
- Revisão e divulgação da identidade visual do INPI, além do uso da logomarca institucional supervisionado, tanto interna quanto externamente.'
  ],
    suppliers: [
    '- Setores do INPI (Sede e Regionais)
 - Instituições Parceiras'
  ],
    inputs: [
    '- Briefing sobre objetivo da peça gráfica ou audiovisual, público-alvo e demais informações pertinentes.'
  ],
    outputs: [
    '- Peças gráficas e audiovisuais produzidas e validadas para divulgação, bem como publicações diagramadas',
    '- Revisão e divulgação da identidade visual do INPI, além do uso da logomarca institucional supervisonado, tanto interna quanto externamente.'
  ],
    customers: [
    '- Setores do INPI (Sede e Regionais)
 - Entidades e órgãos públicos
 - Parceiros do Instituto. 
 - Sociedade em geral, por ser receptora dos produtos divulgados pelo INPI.'
  ],
    tools: [
    'Nos processos acima, são usados: 
 - Rredes sociais
 - Portal INPI
 - Intranet
 - Boletins eletrônicos INPI Hoje e INPI Acontece
 - Ferramentas de edição gráfica e audiovisual, como Corel Draw, InDesign e Canva.'
  ],
    kpis: [
    'Os processos acima são acompanhados pela CCOM por meio de indicadores quantitativos de criação dos produtos citados, como números absolutos de notícias publicadas no portal e na intranet, total de atendimentos à imprensa, posts em redes sociais, peças produzidas para campanhas e eventos, entre outros, permitindo a comparação dos números com períodos anteriores.'
  ],
    regulations: []
  }
,
  {
    id: 'g35',
    type: 'Gestão',
    category: 'Relacionamento Institucional e Cooperação',
    macroprocess: 'Relacionamento Institucional e Cooperação',
    process: 'Gestão da Comunicação',
    subprocess: 'Acompanhamento do sistema Fale Conosco',
    owner: 'CCOM',
    products: [
    '- Sistema Fale Conosco funcionando adequadamente.'
  ],
    suppliers: [
    '- Setores do INPI (Sede e Regionais)'
  ],
    inputs: [
    '- Solicitações de usuários internos quanto a ajustes ou  melhorias no sistema',
    '- Instabilidades ou falhas sistêmicas que são identificadas e reportadas a CGTI para solução.'
  ],
    outputs: [
    '- Sistema Fale Conosco funcionando adequadamente.'
  ],
    customers: [
    '- Setores do INPI que atuam no Fale Conosco.'
  ],
    tools: [
    'Nos processos acima, são usados: 
 - Rredes sociais
 - Portal INPI
 - Intranet
 - Boletins eletrônicos INPI Hoje e INPI Acontece
 - Ferramentas de edição gráfica e audiovisual, como Corel Draw, InDesign e Canva.'
  ],
    kpis: [
    'Os processos acima são acompanhados pela CCOM por meio de indicadores quantitativos de criação dos produtos citados, como números absolutos de notícias publicadas no portal e na intranet, total de atendimentos à imprensa, posts em redes sociais, peças produzidas para campanhas e eventos, entre outros, permitindo a comparação dos números com períodos anteriores.'
  ],
    regulations: []
  }
,
  {
    id: 'g36',
    type: 'Gestão',
    category: 'Relacionamento Institucional e Cooperação',
    macroprocess: 'Relacionamento Institucional e Cooperação',
    process: 'Gestão da Comunicação',
    subprocess: 'Gestão de Patrocínio',
    owner: 'CCOM',
    products: [
    '- Patrocínio concretizado, com exposição da marca do INPI e outras contrapartidas estabelecidas em contratos e acordos.'
  ],
    suppliers: [
    '- Sociedade em geral
 - Iinstituições parceiras'
  ],
    inputs: [
    '- Solicitação de patrocínio para atividades que se enquadram nas regras da Resolução INPI n° 183/2017 e da Instrução Normativa SECOM/SEGOV n° 02/2019.'
  ],
    outputs: [
    '- Patrocínio concretizado, com exposição da marca do INPI e outras contrapartidas estabelecidas em contratos e acordos.'
  ],
    customers: [
    '- Solicitante do patrocínio
 - Iinstituições parceiras 
 - Setores do INPI (Sede e Regionais)'
  ],
    tools: [
    'Nos processos acima, são usados: 
 - Rredes sociais
 - Portal INPI
 - Intranet
 - Boletins eletrônicos INPI Hoje e INPI Acontece
 - Ferramentas de edição gráfica e audiovisual, como Corel Draw, InDesign e Canva.'
  ],
    kpis: [
    'Os processos acima são acompanhados pela CCOM por meio de indicadores quantitativos de criação dos produtos citados, como números absolutos de notícias publicadas no portal e na intranet, total de atendimentos à imprensa, posts em redes sociais, peças produzidas para campanhas e eventos, entre outros, permitindo a comparação dos números com períodos anteriores.'
  ],
    regulations: []
  }
,
  {
    id: 'g37',
    type: 'Finalístico',
    category: 'Desenvolvimento de Negócios e Mercado de Propriedade Intelectual',
    macroprocess: 'Desenvolvimento de Negócios e Mercado de Propriedade Intelectual',
    process: '',
    subprocess: '',
    products: [],
    suppliers: [],
    inputs: [],
    outputs: [],
    customers: [],
    tools: [],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g38',
    type: 'Finalístico',
    category: 'Desenvolvimento de Negócios e Mercado de Propriedade Intelectual',
    macroprocess: 'Desenvolvimento de Negócios e Mercado de Propriedade Intelectual',
    process: 'Disseminação da Propriedade Intelectual',
    subprocess: '',
    owner: 'CGDI',
    products: [
    '- Atividade  de disseminação realizada',
    '- Declaração de participação emitida, quando solicitada',
    'Relatório trimestral das atividades de disseminação disponibilizado, até que o novo relatório, em Power BI, esteja disponível.'
  ],
    suppliers: [
    'COART
Áreas técnicas
ACAD
"Universidades / ICT´s (públicas ou privadas)
Parques Tecnológicos
Associações Empresariais
Órgãos de governo
Micro, Pequenas Empresas 
Indústria / Comércio
Advogados / Escritórios de PI:
Advogados de PI, Escritórios e Associações desta categoria.
Órgãos de fomento: Órgãos, públicos e privados, de fomento."'
  ],
    inputs: [
    '- Normas e legislações aplicáveis

Solicitações de disseminação (formulário)

Ações de articulação'
  ],
    outputs: [
    '- Atividade  de disseminação realizada',
    '- Declaração de participação emitida, quando solicitada',
    'Relatório trimestral das atividades de disseminação disponibilizado, até que o novo relatório, em Power BI, esteja disponível.'
  ],
    customers: [
    '- Universidades / ICT´s (públicas ou privadas)
- Parques Tecnológicos
- Associações Empresariais
- Órgãos de governo
- Micro, Pequenas Empresas 
- Indústria / Comércio
- Advogados / Escritórios de PI: - Advogados de PI, Escritórios e Associações desta categoria.
- Órgãos de fomento: Órgãos, públicos e privados, de fomento.'
  ],
    tools: [
    '- Sistema de Concessão de Diárias e Passagens - SCDP
- Painel de Compras do Governo Federal
- Sistema Eletrônico de Informações - SEI
- Plataforma da OMPI - https://welc.wipo.int/
- Plataforma Moodle em parceria com a UniRio
- Plataforma Sucupira/ Capes
- Sistema Biblioteca
- Email dos cursos
- Email instituionais e setoriais 
(coart@, inpi.u(r)@)
- Inovadoc
- Inovadata'
  ],
    kpis: [
    'Disponibilização de relatórios : 
Nº de participantes em cursos à distância',
    'Nº de participantes em cursos/oficinas presenciais no INPI e em instituições parceiras',
    'Nº de defesas de trabalhos de qualificação e de conclusão de curso',
    'Nº de Buscas Efetuadas para Usuários Internos e Externos em Bases Patentárias e Não Patentárias',
    'atividades de disseminação realizadas',
    'atendimentos realizados.
 Indicadores do IRRADIAR - processo SEI 52402.000103/2023-45'
  ],
    regulations: [
    'Normas e resoluções: DELIBERAÇÃO/INPI/CGDI/ACAD/CCMD Nº 001, DE 30 DE AGOSTO DE 2018',
    'Manual de Elaboração de Teses e Dissertações - aprovado em 30/08/2018',
    'RESOLUÇÃO/INPI/PR Nº 231, DE 28 DE DEZEMBRO DE 2018',
    'RESOLUÇÃO/INPI/PR Nº 219, DE 10 DE MAIO DE 2019',
    'INSTRUÇÃO NORMATIVA Nº 093, DE 30 DE AGOSTO DE 2018',
    'RESOLUÇÃO/INPI/PR Nº 108, DE 29 DE AGOSTO DE 2013',
    'RESOLUÇÃO/INPI/PR Nº 216, DE 30 DE ABRIL DE 2018',
    'RESOLUÇÃO/INPI/PR Nº 185, DE 25 DE ABRIL DE 2017 e
RESOLUÇÃO/INPI/PR Nº 230, DE 14 DE DEZEMBRO DE 2018'
  ]
  }
,
  {
    id: 'g39',
    type: 'Finalístico',
    category: 'Desenvolvimento de Negócios e Mercado de Propriedade Intelectual',
    macroprocess: 'Desenvolvimento de Negócios e Mercado de Propriedade Intelectual',
    process: 'Mentoria em PI',
    subprocess: '',
    owner: 'CGDI',
    products: [
    'Curso de nivelamento realizado

Ação de mentoria concluída

Relatório de avaliação elaborado'
  ],
    suppliers: [
    'Profissionais de Instituições de Ciência e Tecnologia

Profissionais que atuam em empresas, incluindo startups

Agrupamentos e arranjos produtivos 

Parceiros de Acordos de Cooperação Técnica'
  ],
    inputs: [
    'Formulário de Indicação dos profissionais para realizar a Mentoria

PORTARIA/INPI/PR Nº 31, DE 24 DE JULHO DE 2023'
  ],
    outputs: [
    'Curso Uso da Propriedade Intelectual em Negócios de Base Tecnológica realizado

Ação de mentoria concluída

Relatório de avaliação elaborado'
  ],
    customers: [
    'Profissionais de Instituições de Ciência e Tecnologia

Profissionais que atuam em empresas, incluindo startups

Agrupamentos e arranjos produtivos 

Parceiros de Acordos de Cooperação Técnica'
  ],
    tools: [
    '- Sistema de Concessão de Diárias e Passagens - SCDP
- Painel de Compras do Governo Federal
- Sistema Eletrônico de Informações - SEI
- Plataforma da OMPI - https://welc.wipo.int/
- Plataforma Moodle em parceria com a UniRio
- Plataforma Sucupira/ Capes
- Sistema Biblioteca
- Email dos cursos
- Email instituionais e setoriais 
(coart@, inpi.u(r)@)
- Inovadoc
- Inovadata'
  ],
    kpis: [
    'Disponibilização de relatórios : 
Nº de participantes em cursos à distância',
    'Nº de participantes em cursos/oficinas presenciais no INPI e em instituições parceiras',
    'Nº de defesas de trabalhos de qualificação e de conclusão de curso',
    'Nº de Buscas Efetuadas para Usuários Internos e Externos em Bases Patentárias e Não Patentárias',
    'atividades de disseminação realizadas',
    'atendimentos realizados.
 Indicadores do IRRADIAR - processo SEI 52402.000103/2023-45'
  ],
    regulations: [
    'Normas e resoluções: DELIBERAÇÃO/INPI/CGDI/ACAD/CCMD Nº 001, DE 30 DE AGOSTO DE 2018',
    'Manual de Elaboração de Teses e Dissertações - aprovado em 30/08/2018',
    'RESOLUÇÃO/INPI/PR Nº 231, DE 28 DE DEZEMBRO DE 2018',
    'RESOLUÇÃO/INPI/PR Nº 219, DE 10 DE MAIO DE 2019',
    'INSTRUÇÃO NORMATIVA Nº 093, DE 30 DE AGOSTO DE 2018',
    'RESOLUÇÃO/INPI/PR Nº 108, DE 29 DE AGOSTO DE 2013',
    'RESOLUÇÃO/INPI/PR Nº 216, DE 30 DE ABRIL DE 2018',
    'RESOLUÇÃO/INPI/PR Nº 185, DE 25 DE ABRIL DE 2017 e
RESOLUÇÃO/INPI/PR Nº 230, DE 14 DE DEZEMBRO DE 2018'
  ]
  }
,
  {
    id: 'g40',
    type: 'Finalístico',
    category: 'Inteligência e Combate a Falsificação',
    macroprocess: 'Inteligência e Combate a Falsificação',
    process: '',
    subprocess: '',
    products: [],
    suppliers: [],
    inputs: [],
    outputs: [],
    customers: [],
    tools: [],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g41',
    type: 'Finalístico',
    category: 'Inteligência e Combate a Falsificação',
    macroprocess: 'Inteligência e Combate a Falsificação',
    process: 'Prospecção de Infrações e Ameaças',
    subprocess: '',
    products: [],
    suppliers: [],
    inputs: [],
    outputs: [],
    customers: [],
    tools: [],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g42',
    type: 'Finalístico',
    category: 'Inteligência e Combate a Falsificação',
    macroprocess: 'Inteligência e Combate a Falsificação',
    process: 'Operação de Combate à Falsificação',
    subprocess: '',
    products: [],
    suppliers: [],
    inputs: [],
    outputs: [],
    customers: [],
    tools: [],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g43',
    type: 'Finalístico',
    category: 'Inteligência e Combate a Falsificação',
    macroprocess: 'Inteligência e Combate a Falsificação',
    process: 'Monitoramento de ativos ou das medidas de combate',
    subprocess: '',
    products: [],
    suppliers: [],
    inputs: [],
    outputs: [],
    customers: [],
    tools: [],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g44',
    type: 'Finalístico',
    category: 'Inteligência e Combate a Falsificação',
    macroprocess: 'Inteligência e Combate a Falsificação',
    process: 'Divulgação das ações de combate a falsificação',
    subprocess: '',
    products: [],
    suppliers: [],
    inputs: [],
    outputs: [],
    customers: [],
    tools: [],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g45',
    type: 'Finalístico',
    category: 'Inteligência e Combate a Falsificação',
    macroprocess: 'Inteligência e Combate a Falsificação',
    process: 'Avaliação das Ações de Combate à Falsificação',
    subprocess: '',
    products: [],
    suppliers: [],
    inputs: [],
    outputs: [],
    customers: [],
    tools: [],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g46',
    type: 'Finalístico',
    category: 'Resolução de Conflitos',
    macroprocess: 'Resolução de Conflitos',
    process: '',
    subprocess: '',
    products: [],
    suppliers: [],
    inputs: [],
    outputs: [],
    customers: [],
    tools: [],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g47',
    type: 'Finalístico',
    category: 'Resolução de Conflitos',
    macroprocess: 'Resolução de Conflitos',
    process: 'Gestão/Execução da Mediação no INPI',
    subprocess: '',
    products: [],
    suppliers: [],
    inputs: [],
    outputs: [],
    customers: [],
    tools: [],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g48',
    type: 'Finalístico',
    category: 'Resolução de Conflitos',
    macroprocess: 'Resolução de Conflitos',
    process: 'Administração da Mediação Externa',
    subprocess: '',
    products: [],
    suppliers: [],
    inputs: [],
    outputs: [],
    customers: [],
    tools: [],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g49',
    type: 'Finalístico',
    category: 'Resolução de Conflitos',
    macroprocess: 'Resolução de Conflitos',
    process: 'Gestão/Execução da Conciliação no INPI',
    subprocess: '',
    products: [],
    suppliers: [],
    inputs: [],
    outputs: [],
    customers: [],
    tools: [],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g50',
    type: 'Finalístico',
    category: 'Resolução de Conflitos',
    macroprocess: 'Resolução de Conflitos',
    process: 'Administração da Conciliação Externa',
    subprocess: '',
    products: [],
    suppliers: [],
    inputs: [],
    outputs: [],
    customers: [],
    tools: [],
    kpis: [],
    regulations: []
  }
,
  {
    id: 'g51',
    type: 'Finalístico',
    category: 'Resolução de Conflitos',
    macroprocess: 'Resolução de Conflitos',
    process: 'Treinamento/Capacitação de mediadores',
    subprocess: '',
    products: [],
    suppliers: [],
    inputs: [],
    outputs: [],
    customers: [],
    tools: [],
    kpis: [],
    regulations: []
  }
];

export const CATEGORIES: { id: Category; label: string; icon: string; color: string }[] = [
  { id: 'Consultoria e Assessoramento Jurídico', label: 'Consultoria e Assessoramento Jurídico', icon: 'Scale', color: 'from-amber-600 to-orange-600' }
,
  { id: 'Desenvolvimento de Negócios e Mercado de Propriedade Intelectual', label: 'Desenvolvimento de Negócios e Mercado de Propriedade Intelectual', icon: 'TrendingUp', color: 'from-cyan-600 to-blue-600' }
,
  { id: 'Desenvolvimento e Transformação Organizacional', label: 'Desenvolvimento e Transformação Organizacional', icon: 'Lightbulb', color: 'from-purple-600 to-pink-600' }
,
  { id: 'Formação em PI e Inovação', label: 'Formação em PI e Inovação', icon: 'GraduationCap', color: 'from-blue-600 to-indigo-700' }
,
  { id: 'Gestão Estratégica de Pessoas', label: 'Gestão Estratégica de Pessoas', icon: 'Users', color: 'from-green-600 to-teal-600' }
,
  { id: 'Gestão da Conformidade e Integridade', label: 'Gestão da Conformidade e Integridade', icon: 'Shield', color: 'from-red-600 to-rose-600' }
,
  { id: 'Gestão de Controles Institucionais e Integridade', label: 'Gestão de Controles Institucionais e Integridade', icon: 'ShieldCheck', color: 'from-slate-600 to-gray-700' }
,
  { id: 'Inteligência e Combate a Falsificação', label: 'Inteligência e Combate a Falsificação', icon: 'SearchCheck', color: 'from-indigo-600 to-violet-600' }
,
  { id: 'Relacionamento Institucional e Cooperação', label: 'Relacionamento Institucional e Cooperação', icon: 'Handshake', color: 'from-emerald-600 to-green-600' }
,
  { id: 'Resolução de Conflitos', label: 'Resolução de Conflitos', icon: 'Gavel', color: 'from-orange-600 to-red-600' }
];