'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { blogPreviewHtml, componentPreviewJsx, componentPreviewVue } from '../utils/transformers'
import PreviewCode from './PreviewCode'
import PreviewCopy from './PreviewCopy'
import PreviewIframe from './PreviewIframe'
import PreviewView from './PreviewView'
import PreviewType from './PreviewType'

interface BlogPreviewProps {
  previewId: string
  previewTitle: string
  previewContainer: string
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ previewId, previewTitle, previewContainer }) => {
  const refIframe = useRef<HTMLIFrameElement>(null)

  const [previewCode, setPreviewCode] = useState<string>('')
  const [previewHtml, setPreviewHtml] = useState<string>('')
  const [previewJsx, setPreviewJsx] = useState<string>('')
  const [previewVue, setPreviewVue] = useState<string>('')
  const [showPreview, setShowPreview] = useState<boolean>(true)
  const [isDarkMode] = useState<boolean>(false)
  const [codeType, setCodeType] = useState<'html' | 'jsx' | 'vue'>('html')

  const componentId = previewId

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      fetchHtml()
    }
  }, [inView])

  useEffect(() => {
    if (inView) {
      fetchHtml()
    }
  }, [isDarkMode])

  useEffect(() => {
    switch (codeType) {
      case 'html':
        setPreviewCode(previewHtml)
        break
      case 'jsx':
        setPreviewCode(previewJsx)
        break
      case 'vue':
        setPreviewCode(previewVue)
        break
    }
  }, [codeType, previewHtml, previewJsx, previewVue])

  const fetchHtml = async () => {
    const previewUrl = `/blogs/${previewId}.html`

    const fetchResponse = await fetch(previewUrl)
    const textResponse = await fetchResponse.text()
    const transformedHtml = blogPreviewHtml(textResponse, previewContainer, isDarkMode)
    const transformedJsx = componentPreviewJsx(textResponse)
    const transformedVue = componentPreviewVue(textResponse)

    setPreviewCode(textResponse)
    setPreviewHtml(transformedHtml)
    setPreviewJsx(transformedJsx)
    setPreviewVue(transformedVue)
  }

  return (
    <div className="not-prose space-y-4 lg:-ms-[10ch] lg:w-[85ch]" ref={ref}>
      {previewCode && (
        <div className="flex gap-2 sm:gap-4">
          <PreviewView handleSetShowPreview={setShowPreview} showPreview={showPreview} />

          <PreviewType componentId={componentId} handleSetCodeType={setCodeType} />

          <PreviewCopy componentCode={previewCode} codeType={codeType} />
        </div>
      )}

      <div className="relative">
        <div>
          <PreviewIframe
            showPreview={showPreview}
            componentHtml={previewHtml}
            componentTitle={previewTitle}
            refIframe={refIframe}
            previewDark={isDarkMode}
          />

          <PreviewCode showPreview={showPreview} componentCode={previewCode} />
        </div>
      </div>
    </div>
  )
}

export default BlogPreview
