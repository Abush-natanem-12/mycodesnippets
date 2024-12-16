import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";


interface SnippetEditProps {
    params: {
        id: string
    }
}

const SnippetEditPage = async function (props: SnippetEditProps) {
    const id = parseInt(props.params.id);


    const snippet = await db.snippet.findFirst({
        where: { id }
    });

    if (!snippet) return notFound();

    return <div className="w-[100%] h-screen bg-cyan-950 flex justify-center items-center flex-col gap-16">
        <SnippetEditForm snippet={snippet} />     
    </div>
}

export default SnippetEditPage;