import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  


  return (
    <div className="w-full h-screen bg-cyan-950 flex flex-col gap-16 overflow-auto p-10">
      <div className="flex justify-between w-[100%] pr-28">
        <h2 className="text-5xl  text-slate-500 tracking-wide">My code Snippets</h2>
        <Link href="/snippets/new" className="text-4xl text-slate-500">Create New</Link>

      </div>
     {
      snippets.map((el, i) => {
        return (
          <Link key={i} className="text-white bg-emerald-700 text-3xl w-[30%] flex justify-between p-8 border-5 border-yellow-950 rounded" 
          href={`/snippets/${el.id}`}

          >
            <div>{el.title}</div>
            <div >View</div>
            </Link>
        )
      })
     }
    </div>
  );
}
