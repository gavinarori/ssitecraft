'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import {
  componentPreviewHtml,
  componentPreviewJsx,
  componentPreviewVue,
} from '../utils/transformers'
import { componentBreakpoints } from '../data/breakpoints'

import PreviewCreator from './PreviewCreator'
import PreviewBreakpoint from './PreviewBreakpoint'
import PreviewCode from './PreviewCode'
import PreviewCopy from './PreviewCopy'
import PreviewDark from './PreviewDark'
import PreviewIframe from './PreviewIframe'
import PreviewInteractive from './PreviewInteractive'
import PreviewRtl from './PreviewRtl'
import PreviewTitle from './PreviewTitle'
import PreviewView from './PreviewView'
import PreviewType from './PreviewType'

interface ComponentPreviewProps {
  componentData: {
    id: string
    title: string
    slug: string
    category: string
    container?: string
    creator?: string
    dark?: boolean
    interactive?: boolean
  }
  componentContainer?: {
    previewInner?: string
    previewHeight?: string
  }
}

export default function ComponentPreview({
  componentData,
  componentContainer,
}: ComponentPreviewProps) {
  const refIframe = useRef<HTMLIFrameElement>(null)

  const [codeType, setCodeType] = useState<'html' | 'jsx' | 'vue'>('html')
  const [componentCode, setComponentCode] = useState('')
  const [componentHtml, setComponentHtml] = useState('')
  const [componentJsx, setComponentJsx] = useState('')
  const [componentVue, setComponentVue] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isInteractive, setIsInteractive] = useState(false)
  const [isRtl, setIsRtl] = useState(false)
  const [previewCode, setPreviewCode] = useState('')
  const [previewWidth, setPreviewWidth] = useState('100%')
  const [showPreview, setShowPreview] = useState(true)

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  const {
    id: componentId,
    title: componentTitle,
    slug: componentSlug,
    category: componentCategory,
    container: componentSpace,
    creator: componentCreator,
    dark: componentHasDark,
    interactive: componentHasInteractive,
  } = componentData

  const trueComponentContainer = componentSpace || componentContainer?.previewInner
  const componentWrapper = componentContainer?.previewHeight || 'h-[400px] lg:h-[600px]'
  const componentHash = `component-${componentId}`

  useEffect(() => {
    if (inView) {
      fetchHtml({ useDark: isDarkMode })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  useEffect(() => {
    if (inView) {
      fetchHtml({ useDark: isDarkMode, useInteractive: isInteractive })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode, isInteractive])

  useEffect(() => {
    if (inView) {
      const transformedHtml = componentPreviewHtml(
        componentCode,
        trueComponentContainer,
        isDarkMode,
        isRtl
      )
      setComponentHtml(transformedHtml)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRtl])

  useEffect(() => {
    if (codeType === 'html') setPreviewCode(componentCode)
    else if (codeType === 'jsx') setPreviewCode(componentJsx)
    else if (codeType === 'vue') setPreviewCode(componentVue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codeType])

  async function fetchHtml({ useDark = false, useInteractive = false }: { useDark?: boolean, useInteractive?: boolean } = {}) {
    const useDarkMode = componentHasDark && useDark
    const useInteractiveMode = componentHasInteractive && useInteractive
    const componentPath = [componentId, useDarkMode && 'dark', useInteractiveMode && 'interactive']
      .filter(Boolean)
      .join('-')

    const componentUrl = `/components/${componentCategory}-${componentSlug}/${componentPath}.html`

    const fetchResponse = await fetch(componentUrl)
    const textResponse = await fetchResponse.text()
    const transformedHtml = componentPreviewHtml(
      textResponse,
      trueComponentContainer,
      useDark,
      isRtl
    )
    const transformedJsx = componentPreviewJsx(textResponse)
    const transformedVue = componentPreviewVue(textResponse)

    setPreviewCode(textResponse)
    setComponentCode(textResponse)
    setComponentHtml(transformedHtml)
    setComponentJsx(transformedJsx)
    setComponentVue(transformedVue)
  }

  return (
    <div ref={ref} id={componentHash}>
      <div className="space-y-4">
        <PreviewTitle componentTitle={componentTitle} componentHash={componentHash} />

        <div className="lg:flex lg:items-center">
          {componentCode && (
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <PreviewView handleSetShowPreview={setShowPreview} showPreview={showPreview} />

              {componentHasDark && (
                <PreviewDark isDarkMode={isDarkMode} handleSetIsDarkMode={setIsDarkMode} />
              )}

              {componentHasInteractive && (
                <PreviewInteractive
                  isInteractive={isInteractive}
                  handleSetIsInteractive={setIsInteractive}
                />
              )}

              <PreviewRtl isRtl={isRtl} handleSetIsRtl={setIsRtl} />

              <div className="hidden items-center sm:flex sm:gap-4">
                <span className="h-5 w-[2px] rounded-full bg-gray-900"></span>

                <PreviewType componentId={componentId} handleSetCodeType={setCodeType} />

                <PreviewCopy componentCode={previewCode} codeType={codeType} />
              </div>
            </div>
          )}

          <div className="hidden lg:flex lg:flex-1 lg:items-end lg:justify-end lg:gap-4">
            {componentBreakpoints.map(
              ({ name: breakpointName, emoji: breakpointEmoji, width: breakpointWidth }:any) => (
                <PreviewBreakpoint
                  key={breakpointName}
                  breakpointText={breakpointName}
                  breakpointEmoji={breakpointEmoji}
                  breakpointWidth={breakpointWidth}
                  handleSetPreviewWidth={setPreviewWidth}
                  breakpointActive={previewWidth === breakpointWidth}
                />
              )
            )}
          </div>
        </div>

        <div className="relative">
          <div>
            <PreviewIframe
              showPreview={showPreview}
              componentHtml={componentHtml}
              componentTitle={componentTitle}
              previewWidth={previewWidth}
              previewHeight={componentWrapper}
              refIframe={refIframe}
              previewDark={componentHasDark && isDarkMode}
            />

            <PreviewCode
              componentId={componentId}
              showPreview={showPreview}
              codeType={codeType}
              showToggle={!isInteractive}
              componentCode={previewCode}
            />
          </div>
        </div>

        {componentCreator && <PreviewCreator creatorGithub={componentCreator} />}
      </div>
    </div>
  )
}
