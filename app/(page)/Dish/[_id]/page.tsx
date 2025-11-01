import type { Metadata, ResolvingMetadata } from 'next'
import Product from './Product'

type Props = {
  params: Promise<{ _id: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { _id } = await params

  const post = await fetch(`http://localhost:8080/products/public/${_id}`, {
    cache: 'no-store',
  }).then((res) => res.json())

  const product = post?.data ?? post

  return {
    title: product?.name ?? 'Product',
    description: product?.description ?? 'Product detail',
    openGraph:{
        images: product.images[0],
        url:product.slug,
    }
  }
}

export default function Page() {
  return <Product />
}
