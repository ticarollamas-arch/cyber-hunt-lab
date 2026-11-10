import {NextResponse} from 'next/server';import {site} from '@/lib/site';
export async function GET(){return new NextResponse(`User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`,{headers:{'Content-Type':'text/plain; charset=utf-8'}})}
