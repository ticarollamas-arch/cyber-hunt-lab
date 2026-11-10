'use client';
import Link from 'next/link';
import {useState} from 'react';
import {Menu,X,ArrowUpRight} from 'lucide-react';
export default function Header(){const [open,setOpen]=useState(false);return <header className="header"><Link href="/" className="brand"><span className="brand-mark">CH</span><span>CYBER<span className="brand-light">HUNT LAB</span><small>TECHNICAL PROMPT LIBRARY</small></span></Link><button className="mobile-toggle" onClick={()=>setOpen(!open)} aria-label="Abrir menu">{open?<X/>:<Menu/>}</button><nav className={open?'nav nav-open':'nav'}><Link href="/biblioteca" onClick={()=>setOpen(false)}>Biblioteca</Link><Link href="/sobre" onClick={()=>setOpen(false)}>Sobre a autora</Link><a href="https://github.com/ticarollamas-arch" target="_blank" rel="noreferrer" onClick={()=>setOpen(false)}>GitHub <ArrowUpRight size={14}/></a></nav></header>}
