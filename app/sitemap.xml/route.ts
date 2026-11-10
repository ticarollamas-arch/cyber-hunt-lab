import {NextResponse} from 'next/server';
import {site} from '@/lib/site';
import {prisma} from '@/lib/prisma';
export const revalidate = 3600;
export async function GET(){
  let promptCount=0;
  try { promptCount=await prisma.prompt.count({where:{status:'PUBLISHED',publishedAt:{not:null}}}); } catch { /* Database may not be configured during local preview. */ }
  const pages=Math.ceil(promptCount/50000);
  const staticUrl=`${site.url}/sitemaps/static.xml`;
  const dynamic=Array.from({length:pages},(_,i)=>`<sitemap><loc>${site.url}/sitemaps/prompts/${i+1}</loc></sitemap>`).join('');
  const xml=`<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${staticUrl}</loc></sitemap>${dynamic}</sitemapindex>`;
  return new NextResponse(xml,{headers:{'Content-Type':'application/xml; charset=utf-8','Cache-Control':'public, max-age=3600, s-maxage=3600'}});
}
