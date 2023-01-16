'use client'

import Editor from '@/components/Editor'

export default function AppPage() {
  return (
    <div>
      <Editor
        initialCode="This is initial code"
        onChange={(c) => {
          console.log(c)
        }}
      />
    </div>
  )
}
