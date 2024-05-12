interface ChatBubbleProps {
  sender: string
  children: React.ReactNode
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ sender, children }) => {
  return (
    <div className="flex w-full max-w-[604px] flex-col items-start space-y-1">
      <div className="font-semibold">{sender}</div>
      {children}
    </div>
  )
}

export default ChatBubble
