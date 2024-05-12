import DOMPurify from 'dompurify'
import { marked } from 'marked'
import React from 'react'

interface MarkdownRendererProps {
  markdownText: string
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdownText }) => {
  const getMarkdownText = () => {
    const rawMarkup = marked.parse(markdownText) as string
    const cleanHTML = DOMPurify.sanitize(rawMarkup)
    return { __html: cleanHTML }
  }

  return (
    <div
      className="markdown prose w-full break-words"
      dangerouslySetInnerHTML={getMarkdownText()}
    />
  )
}

export default MarkdownRenderer
