
export interface SIPOCItem {
  id: string;
  type: string;  // Finalístico, Gestão ou Suporte
  category: string;
  macroprocess: string;
  process: string;
  needP2?: string;
  subprocess: string;
  needP3?: string;
  owner?: string; // Área Dona (para processos de gestão)
  products: string[];
  suppliers: string[];
  inputs: string[];
  outputs: string[];
  customers: string[];
  requirements?: string[];
  customerRequirements?: string[];
  tools: string[];
  actors?: string[];
  kpis: string[];
  regulations: string[];
}

export type Category = 
  | 'Formação em PI e Inovação'
  | 'Desenvolvimento e Transformação Organizacional'
  | 'Gestão Estratégica de Pessoas'
  | 'Consultoria e Assessoramento Jurídico'
  | 'Desenvolvimento de Negócios e Mercado de Propriedade Intelectual'
  | 'Gestão da Conformidade e Integridade'
  | 'Gestão de Controles Institucionais e Integridade'
  | 'Inteligência e Combate a Falsificação'
  | 'Relacionamento Institucional e Cooperação'
  | 'Resolução de Conflitos';

export interface CategoryMetadata {
  id: Category;
  label: string;
  iconName: string;
  color: string;
}
