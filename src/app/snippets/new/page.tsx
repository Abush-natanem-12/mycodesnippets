'use client';

import * as actions from "@/actions";

import { useFormState } from "react-dom";


const CreateNewSnippets = function () {
  

  const [formState, action] = useFormState(actions.createSnippet, {message: ''})

    

    return <>
    <form action={action}
    className="flex flex-col items-center   w-[70rem] py-10 h-screen gap-6">
      <h3 className="font-bold m-8 text-4xl text-slate-500">Create a Snippet</h3>
      <div className="flex flex-col gap-8 w-full items-center">
        <div className="flex gap-10 w-full justify-center">
          <label className="w-12 text-3xl text-slate-50" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-[80%] bg-[#00000077] border-none outline-none h-16 text-slate-500 text-2xl"
            id="title"
          />
        </div>

        <div className="flex gap-10 w-full justify-center">
          <label className="w-12 text-3xl text-slate-50" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-[80%] bg-[#00000077] border-none outline-none h-60 resize-none text-slate-500 text-2xl"
            id="code"

          />
        </div>

        {
          formState.message
        }

        <button type="submit" className="rounded p-2 bg-zinc-950  text-white w-[20%] text-3xl">
          Create
        </button>
      </div>
    </form>
    </>
}

export default CreateNewSnippets;