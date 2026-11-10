import {NextResponse} from 'next/server';
import {prisma} from '@/lib/prisma';

export const dynamic = 'force-dynamic';
export async function GET(request:Request){
  const {searchParams}=new URL(request.url);
  const q=(searchParams.get('q')||'').trim().slice(0,100);
  const category=(searchParams.get('categoria')||'').trim().slice(0,80);
  const page=Math.max(1,Math.min(10000,Number(searchParams.get('page')||1)||1));
  try {
    const where:any={status:'PUBLISHED',publishedAt:{not:null}};
    if(category) where.category=category;
    if(q) where.OR=[{title:{contains:q,mode:'insensitive'}},{summary:{contains:q,mode:'insensitive'}},{content:{contains:q,mode:'insensitive'}},{tags:{has:q}},{technologies:{has:q}}];
    const [items,total]=await Promise.all([
      prisma.prompt.findMany({where,select:{slug:true,title:true,summary:true,category:true,level:true,technologies:true,publishedAt:true},orderBy:{publishedAt:'desc'},skip:(page-1)*24,take:24}),
      prisma.prompt.count({where})
    ]);
    return NextResponse.json({items,total,page,pageSize:24},{headers:{'Cache-Control':'public, s-maxage=60, stale-while-revalidate=300'}});
  } catch {
    return NextResponse.json({items:[],total:0,page,pageSize:24,databaseUnavailable:true},{status:503});
  }
}
