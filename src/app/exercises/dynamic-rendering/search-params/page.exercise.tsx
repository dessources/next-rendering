import RenderTime from '@/components/render-time'
import {getPosts} from '@/db/sgbd'
import {Post} from '@/lib/type'
import {notFound} from 'next/navigation'

// 🐶 Cette page est statique par défaut
// 🐶 par rapport à l'exercice 3. 🚀 Search Params

// 🐶 Ajoute les `props` pour avoir accès à `searchParams`
//https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional
const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{[key: string]: string | string[] | undefined}>
}) => {
  const posts = await getPosts()

  const {filter: filterField, text: textField} = await searchParams

  // 🤖 const filterField = searchParams?.filter as string //champs à filrer
  // 🤖 const text = searchParams?.text as string //valeur à filrer

  // 🐶 Utilise la méthode `filter`
  const filteredPosts = posts.filter((post) =>
    post[filterField as keyof Post]
      ?.toLowerCase()
      .includes((textField as string).toLowerCase())
  )
  if (filteredPosts.length) notFound()

  return (
    <div className="mx-auto max-w-4xl p-6 text-lg">
      <h1 className="mb-4 text-center text-3xl font-bold">Search Posts</h1>
      <ul className="list-disc p-4 pl-4">
        {/* 🐶 Remplace `post` par `filteredPosts` */}
        {filteredPosts?.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <RenderTime />
    </div>
  )
}
export default Page
