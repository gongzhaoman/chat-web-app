import MarkdownRenderer from '@/components/MarkdownRenderer'
import { Button } from '@/components/ui/button'

function App() {
  const markdownText = `
  # Hello world
  This is a paragraph
  `

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <Button>Click me</Button>
      hello world
      <MarkdownRenderer markdownText={markdownText} />
    </div>
  )
}

export default App
