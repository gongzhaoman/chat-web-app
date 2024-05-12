import MarkdownRenderer from '@/components/MarkdownRenderer'

import ChatBubble from './components/ChatBubble'

function App() {
  const markdownText = `
  This is a paragraph
  ### Hello world
  \`\`\`tsx
  const App = () => {
    return <div>Hello world</div>
  }
  \`\`\`
  `

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <ChatBubble sender={'You'}>
        <MarkdownRenderer markdownText={markdownText} />
      </ChatBubble>
    </div>
  )
}

export default App
