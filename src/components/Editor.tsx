import { useState } from 'react'
import SimpleCodeEditor from 'react-simple-code-editor'
import Prism from 'prismjs'
import 'prismjs/components/prism-markdown'
import 'prismjs/themes/prism.css'

interface EditorProps {
  initialCode: string
  onChange: (code: string) => void
}

export default function Editor({ initialCode, onChange }: EditorProps) {
  const [code, setCode] = useState(initialCode)

  const handleChange = (code: string) => {
    setCode(code)
    onChange(code)
  }

  return (
    <SimpleCodeEditor
      value={code}
      onValueChange={(code) => handleChange(code)}
      highlight={(code) => Prism.highlight(code, Prism.languages['markdown'], 'markdown')}
      tabSize={2}
      insertSpaces={true}
      padding={10}
      autoFocus={true}
    />
  )
}
