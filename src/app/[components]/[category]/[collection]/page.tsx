import { notFound } from 'next/navigation'

import { join } from 'path'
import { promises as fs } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'


import Ad from '@/mdx/components/Ad'
import Container from '@/mdx/components/Container'
import MdxRemoteRender from '@/mdx/components/MdxRemoteRender'
import CollectionList from '@/mdx/components/CollectionList'

const mdxComponents = {
  CollectionList,
}

const componentsDirectory = join(process.cwd(), '/src/data/components')



export async function generateStaticParams() {
  return await fs.readdir(componentsDirectory)
}

async function getCollection(params:any) {
  try {
    const componentPath = join(componentsDirectory, `${params.category}-${params.collection}.mdx`)
    const componentItem = await fs.readFile(componentPath, 'utf-8')

    const mdxSource = await serialize(componentItem, {
      parseFrontmatter: true,
    })

    return {
      collectionData: {
        ...mdxSource.frontmatter,
        slug: params.collection,
      },
      collectionContent: mdxSource,
    }
  } catch {
    notFound()
  }
}

export default async function Page({ params }:any) {
  const { collectionData, collectionContent }:any = await getCollection(params)

  const componentsData = {
    componentContainer: {
      previewInner: collectionData.container || '',
      previewHeight: collectionData.wrapper || '',
    },
    componentsData: Object.entries(collectionData.components).map(
      ([componentId, componentItem]:any) => {
        return {
          id: componentId,
          title: componentItem.title,
          slug: collectionData.slug,
          category: collectionData.category,
          container: componentItem.container || '',
          wrapper: componentItem.wrapper || '',
          creator: componentItem.creator || '',
          dark: !!componentItem.dark,
          interactive: !!componentItem.interactive,
        }
      }
    ),
  }

  return (
    <Container id="mainContent" classNames="py-8 lg:py-12 space-y-8">
      <Ad />

      <div className="prose max-w-none">
        <MdxRemoteRender
          mdxSource={collectionContent}
          mdxComponents={mdxComponents}
          mdxScope={componentsData}
        />
      </div>
    </Container>
  )
}