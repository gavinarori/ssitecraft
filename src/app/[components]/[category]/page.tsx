import { notFound } from 'next/navigation'

import { join } from 'path'
import { promises as fs } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import Container from '@/mdx/components/Container'
import HeroBanner from '@/mdx/components/HeroBanner'
import CollectionGrid from '@/mdx/components/CollectionGrid'



export async function generateStaticParams() {
  return ['application-ui', 'marketing']
}

async function getCategory(params:any) {
  try {
    const componentsPath = join(process.cwd(), '/mdx/data/components')
    const categoriesPath = join(process.cwd(), '/mdx/data/categories')

    const categorySlug = params.category
    const categoryPath = join(categoriesPath, `${categorySlug}.mdx`)

    const componentSlugs = await fs.readdir(componentsPath)
    const categoryItem = await fs.readFile(categoryPath, 'utf-8')

    const { frontmatter: categoryData } = await serialize(categoryItem, {
      parseFrontmatter: true,
    })

    const componentItems = await Promise.all(
      componentSlugs
        .filter((componentSlug) => componentSlug.includes(categorySlug))
        .map(async (componentSlug) => {
          const componentPath = join(componentsPath, componentSlug)
          const componentItem = await fs.readFile(componentPath, 'utf-8')

          const { frontmatter: componentData }:any = await serialize(componentItem, {
            parseFrontmatter: true,
          })

          const componentSlugFormatted = componentSlug.replace('.mdx', '')
          const componentSlugTrue = componentSlugFormatted.replace(`${categorySlug}-`, '')
          const componentCount= Object.values(componentData.components).length

          return {
            title: componentData.title,
            slug: componentSlugTrue,
            category: componentData.category,
            emoji: componentData.emoji,
            count: componentCount,
            tag: componentData.tag,
            id: componentSlugFormatted,
          }
        })
    )

    componentItems.sort((itemA, itemB) => itemA.title.localeCompare(itemB.title))

    return {
      categoryData,
      componentItems,
    }
  } catch {
    notFound()
  }
}

export default async function Page({ params }:any) {
  const { categoryData, componentItems } = await getCategory(params)

  return (
    <>
      <HeroBanner title={categoryData.title} subtitle={categoryData.subtitle}>
        {categoryData.description}
      </HeroBanner>

      <Container id="mainContent" classNames="pb-8 lg:pb-12 space-y-8">
        <CollectionGrid componentItems={componentItems} />
      </Container>
    </>
  )
}