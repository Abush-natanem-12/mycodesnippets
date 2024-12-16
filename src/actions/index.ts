'use server';

import { redirect } from "next/navigation";

import { db } from "@/db";

import { revalidatePath } from "next/cache";

export const editSnippet = async function (id: number, code: string) {
    await db.snippet.update({
        where : {id},
        data: { code }
    })

    redirect(`/snippets/${id}`)
} 

export const deleteSnippet = async function (id: number) {
    await db.snippet.delete({
        where: {id}
    })

    revalidatePath('/');
    redirect('/')
}


export const createSnippet = async function (formSate: {message: string}, formData: FormData) {

    // check all the user input is valid and take it

    const title = formData.get('title');
    const code = formData.get('code');

    if (typeof title !== 'string' || title.length < 3)  {
        return {message: 'title must be longer'}
    }

    if (typeof code !== 'string' || code.length < 10) {
        return {message: 'Code must be longer'}
    }

    // Create a new record in the database
    await db.snippet.create({
        data: {
            title,
            code
        }
    })

    revalidatePath('/');

    // Redirecting to the home Page

    redirect('/')

}

const name = function () {
  [1, 2, 3, 4, 5].forEach(element => {
    console.log(element)
  });
}


