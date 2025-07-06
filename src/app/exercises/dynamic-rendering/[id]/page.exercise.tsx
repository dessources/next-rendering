import RenderTime from '@/components/render-time'
// 🐶 Importe `getPostById` la fonction qui accède à la BDD.
import {getPostById, getPosts} from '@/db/sgbd'
import {Post} from '@/lib/type'
import {Metadata} from 'next'
import {notFound} from 'next/navigation'

export const revalidate = 10
export async function generateStaticParams() {
  return await getPosts().then((posts) =>
    posts?.map(({id}) => ({
      id,
    }))
  )
}

export async function generateMetadata(props: {
  params: Promise<{id: string}>
}): Promise<Metadata> {
  const params = await props.params
  const post: Post = (await getPostById(params.id)) as Post
  if (!post)
    return {
      title: 'Post Not Found',
      description: 'This post does not exist.',
    }
  else
    return {
      title: post.title,
      description: post.title,
      openGraph: {
        title: post.title,
      },
    }
}

const Page = async (props: {params: Promise<{id: string}>}) => {
  const params = await props.params //next 15
  //🐶 Remplace ce tableau par l'appel à la fonction `getPostById` avec l'ID de l'article.
  const post = await getPostById(params.id)
  // 🐶 Affiche une page 404 si l'id de post n'existe pas en BDD
  if (!post) notFound()

  return (
    <div className="mx-auto max-w-4xl p-6 text-lg">
      <h1 className="mb-4 text-center text-3xl font-bold">
        Dynamic Rendering Posts By ID
      </h1>
      <ul className="list-disc p-4 pl-4">
        <li key={post?.title}>
          {post?.title} (id : {post?.id})
        </li>
      </ul>
      <RenderTime />
    </div>
  )
}
export default Page
