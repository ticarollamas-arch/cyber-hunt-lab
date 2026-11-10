'use client';
import Link from 'next/link';
import {useEffect,useState} from 'react';
import {useSearchParams} from 'next/navigation';
import {Search,ArrowUpRight,BookOpen,Filter} from 'lucide-react';
import {categories} from '@/lib/site';
import AdSlot from '@/components/AdSlot';
type PromptItem={slug:string;title:string;summary:string;category:string;level:string;technologies:string[]};
export default function Biblioteca(){
 const params=useSearchParams();
 const [q,setQ]=useState('');
 const [cat,setCat]=useState(params.get('categoria')||'');
 const [items,setItems]=useState<PromptItem[]>([]);
 const [total,setTotal]=useState(0);
 const [loading,setLoading]=useState(true);
 const [unavailable,setUnavailable]=useState(false);
 useEffect(()=>{let active=true;setLoading(true);const query=new URLSearchParams();if(q.trim())query.set('q',q.trim());if(cat)query.set('categoria',cat);fetch(`/api/prompts?${query.toString()}`).then(async r=>({ok:r.ok,data:await r.json()})).then(({ok,data})=>{if(!active)return;setItems(data.items||[]);setTotal(data.total||0);setUnavailable(!ok&&!!data.databaseUnavailable);}).catch(()=>{if(active){setItems([]);setTotal(0);setUnavailable(true);}}).finally(()=>{if(active)setLoading(false);});return()=>{active=false;};},[q,cat]);
 return <div className="inner-page library-page"><section className="page-hero"><div className="container"><span className="eyebrow">CYBER HUNT LAB / BIBLIOTECA</span><h1>Biblioteca de<br/><span className="gradient-text">prompts.</span></h1><p>Encontre prompts técnicos por categoria. Conteúdo textual para programação, IA, automação, cloud e cibersegurança.</p><div className="search-bar"><Search/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Pesquisar prompts, tecnologias e assuntos..."/><button onClick={()=>setQ('')}>Limpar</button></div><div className="filter-row"><span><Filter size={14}/> FILTROS</span><select value={cat} onChange={e=>setCat(e.target.value)}><option value="">Todas as categorias</option>{categories.map(([n,s])=><option value={s} key={s}>{n}</option>)}</select></div></div></section>
 <section className="section section-dark"><div className="container"><AdSlot placement="top"/><div className="library-status"><div><span className="eyebrow">CONTEÚDO PUBLICADO</span><h2>{total.toLocaleString('pt-BR')} prompts disponíveis</h2></div><span className="status-pill"><i/> BIBLIOTECA PÚBLICA</span></div>
 <div className="library-grid">{items.map(item=><Link href={`/biblioteca/${item.slug}`} className="library-card" key={item.slug}><div className="library-card-top"><BookOpen/><span>{item.level}</span></div><h3>{item.title}</h3><p>{item.summary}</p><div className="library-card-bottom"><span>{item.category}</span><ArrowUpRight size={17}/></div></Link>)}</div>
 {loading&&<p className="empty-state">Carregando prompts...</p>}{!loading&&items.length===0&&!unavailable&&<p className="empty-state">Nenhum prompt publicado encontrado para esta pesquisa. Experimente outra palavra ou categoria.</p>}{unavailable&&<p className="empty-state">A biblioteca ainda não está conectada ao banco de dados. Configure o PostgreSQL e publique os primeiros prompts para exibi-los aqui.</p>}
 <div className="library-note"><strong>Sobre a biblioteca</strong><p>A biblioteca cresce com conteúdos originais e revisados. Cada página publicada deverá oferecer informação útil e diferente, sem duplicação ou páginas vazias criadas apenas para mecanismos de busca.</p></div><AdSlot placement="bottom"/></div></section></div>
}
