import {SkeletonCardList} from '@/components/skeleton-card-list'
import {SkeletonPostList} from '@/components/skeleton-post-list'
import {ProductList} from './product-list'
import {PostList} from './post-list'

import {Separator} from '@/components/ui/separator'
import RenderTime from '@/components/render-time'
import {unstable_noStore as noStore} from 'next/cache'
import {Suspense} from 'react'

const Page = async () => {
  noStore()
  const username = 'Mike Codeur'
  return (
    <>
      <div className="mx-auto max-w-4xl p-6 text-lg">
        <h1 className="mb-4 text-center text-4xl font-bold">
          Streaming User Dashboard
        </h1>
        <p>
          Bonjour {username}, votre retrouvez votre dashboard avec toutes vos
          informations ici
        </p>
        <Separator className="my-4" />
      </div>
      <div className="mx-auto max-w-4xl p-6 text-lg">
        <h2 className="mb-4 text-center text-3xl font-bold">Products</h2>
        {/* 🐶 Utilise <Suspense> pour affichier <ProductList />   */}
        {/* Affiche `SkeletonCardList` pendant le chargement  */}
        {/* 📑Suspense https://react.dev/reference/react/Suspense */}
        {/* <Suspense fallback={<SkeletonCardList />}> */}
        <ProductList />
        {/* </Suspense> */}
        <Separator className="my-4" />
        <h2 className="mb-4 text-center text-3xl font-bold">Posts</h2>

        {/* <Suspense fallback={<SkeletonPostList />}> */}
        <PostList />
        {/* </Suspense> */}
        <RenderTime name="streaming page" />
      </div>
    </>
  )
}
export default Page
