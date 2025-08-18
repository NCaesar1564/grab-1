import React from 'react'
import Product from './Product'
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata): Promise<Metadata> {
    const id = (await params).id
    const post = await fetch(`http://localhost:3001/Product/${id}`).then((res) =>
        res.json()
    )

    return {
        title: post.name,
    }
}
const page = () => {
    return (
        <div>
            <Product />
        </div>
    )
}

export default page