'use client';
import { Editor } from '@monaco-editor/react';
import { useState } from 'react';
import * as actions from '@/actions'

import type { Snippet } from '@prisma/client';

interface SnippetEditFormProps {
    snippet: Snippet
}

const SnippetEditForm = function ( { snippet } : SnippetEditFormProps) {
    const [code, setCode] = useState(snippet.code)

    const handleEditorChange = function (value: string = "") {
        setCode(value)
    }

    const handleEditSnippet = actions.editSnippet.bind(null, snippet.id, code);

    return (
        <>
            <Editor 
            width={'70%'}
            height={'70%'}
            theme='vs-dark'
            language='javascript'
            defaultValue={snippet.code}
            options={{minimap : {enabled : false}}}
            onChange={handleEditorChange}
            />
            <form action={handleEditSnippet} className='w-[50%]'>
                <button type='submit' className='text-slate-500 text-5xl bg-teal-950 w-[100%] p-10 -tracking-tighter'>Save</button>
            </form>
        </>
    )

}

export default SnippetEditForm;