import { db } from '@/db';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import * as actions from "@/actions";


interface SnippetShowPageProps {
    params: {
        id: string
    }
}

const ShowSnippetPage = async function (props: SnippetShowPageProps) {
    const snippet = await db.snippet.findFirst({
        where : {id: parseInt(props.params.id)}
    })

    if (!snippet) notFound();
    const deleteSnippet = actions.deleteSnippet.bind(null, snippet.id);


    return <div className="w-[100%] h-screen flex flex-col pt-16 items-center gap-16">
        <div className='w-[80%] flex justify-betwwen'>
            <h2 className='text-4xl text-yellow-100 pr-8 w-[50%]'>{snippet.title}</h2>
            <div className='text-2xl w-[50%] flex justify-between'>
                <Link className='text-2xl text-slate-500 bg-teal-950 py-2 px-8 tracking-widest' 
                    href={`${snippet.id}/edit`}
                >Edit</Link>
                <form action={deleteSnippet}>

                    <button type='submit' className='text-2xl text-slate-500 bg-teal-950 py-2 px-8 tracking-widest'>Delete</button>
                </form>
                
            </div>
        </div>

        <pre className='w-[80%] p-24 text-3xl text-slate-500 bg-teal-950'>
            <code>
                {snippet.code}
            </code>
        </pre>

        </div>
}

export default ShowSnippetPage;

