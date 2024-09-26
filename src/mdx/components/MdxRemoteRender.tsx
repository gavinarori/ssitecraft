'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { MDXComponents } from 'mdx/types'

interface MdxContentProps {
  mdxSource: MDXRemoteSerializeResult
  mdxComponents?: MDXComponents
  mdxScope?: Record<string, unknown>
}

export default function MdxContent({
  mdxSource,
  mdxComponents = {},
  mdxScope = {},
}: MdxContentProps) {
  return <MDXRemote {...mdxSource} components={mdxComponents} scope={mdxScope} />
}
