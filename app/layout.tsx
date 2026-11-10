import type {Metadata} from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import {site} from '@/lib/site';
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:'Cyber Hunt Lab — Biblioteca de Prompts Técnicos',template:'%s | Cyber Hunt Lab'},description:site.description,robots:{index:true,follow:true},openGraph:{title:'Cyber Hunt Lab',description:site.description,type:'website',locale:'pt_BR'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><Analytics/><Header/><main>{children}</main><Footer/></body></html>}
