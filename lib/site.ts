export const site = {
  name: 'Cyber Hunt Lab',
  description: 'Biblioteca de prompts técnicos sobre programação, inteligência artificial, automação, cloud e cibersegurança.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
};
export const categories = [
  ['Cibersegurança & AppSec','ciberseguranca'],['Python & Backend','python-backend'],['Inteligência Artificial','inteligencia-artificial'],['Engenharia de Software','engenharia-software'],['Cloud & AWS','cloud'],['Docker & Kubernetes','containers'],['DevSecOps & SRE','devsecops-sre'],['APIs & Integrações','apis'],['Automação','automacao'],['Banco de Dados','banco-de-dados'],['JavaScript & TypeScript','javascript-typescript'],['Linux & Infraestrutura','linux-infraestrutura']
] as const;
export const skills = [
  {name:'Python',symbol:'Py',tone:'python'}, {name:'Go',symbol:'Go',tone:'go'}, {name:'Docker',symbol:'◈',tone:'docker'}, {name:'Kubernetes',symbol:'☸',tone:'kube'}, {name:'Google Cloud',symbol:'G',tone:'google'}, {name:'AWS',symbol:'aws',tone:'aws'}, {name:'Terraform',symbol:'Tf',tone:'terraform'}, {name:'GitHub Actions',symbol:'⌘',tone:'github'}, {name:'TypeScript',symbol:'TS',tone:'ts'}, {name:'Node.js',symbol:'JS',tone:'node'}, {name:'Firebase',symbol:'ϟ',tone:'firebase'}, {name:'PostgreSQL',symbol:'Pg',tone:'postgres'}, {name:'Linux',symbol:'♜',tone:'linux'}
];
