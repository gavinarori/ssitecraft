import { notFound } from 'next/navigation'

import { promises as fs } from 'fs'
import { join } from 'path'
import { serialize } from 'next-mdx-remote/serialize'

import rehypeExternalLinks from 'rehype-external-links'
import remarkSlug from 'remark-slug'


import Ad from '@/mdx/components/Ad'
import FaqList from '@/mdx/components/FaqList'
import Container from '@/mdx/components/Container'
import MdxRemoteRender from '@/mdx/components/MdxRemoteRender'

const mdxComponents = {
  FaqList,
}

const pagesPath = join(process.cwd(), '/src/data/pages')



export async function generateStaticParams() {
  return await fs.readdir(pagesPath)
}

async function getPage(params:any) {
  try {
    const pagePath = join(pagesPath, `${params.slug}.mdx`)
    const pageItem = await fs.readFile(pagePath, 'utf-8')

    const mdxSource = await serialize(pageItem, {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkSlug] as any,
        rehypePlugins: [[rehypeExternalLinks, { target: '_blank' }]],
      },
    })

    return {
      pageData: mdxSource.frontmatter,
      pageContent: mdxSource,
    }
  } catch {
    notFound()
  }
}

export default async function Page({ params }:any) {
  const { pageData, pageContent }:any = await getPage(params)

  return (
    <Container id="mainContent" classNames="py-8 lg:py-12 space-y-8">
      <Ad />

      <article className="prose mx-auto">
        <h1>{pageData.title}</h1>

        <MdxRemoteRender mdxSource={pageContent} mdxComponents={mdxComponents} />
      </article>
    </Container>
  )
}