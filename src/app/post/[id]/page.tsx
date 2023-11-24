import React from 'react'
import cl from './post.module.scss'
import Button from '@/app/components/Button'

async function getData(id: string) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            next: {
                revalidate: 60,
            }
        }
    )

    return response.json()
}

type Props = {
    params: {
        id: string
    }
}

export default async function Post({ params: { id } }: Props) {
    const post = await getData(id);

    return (
        <>
            <Button />
            <main className={cl.post}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </main>
        </>
    )
}
