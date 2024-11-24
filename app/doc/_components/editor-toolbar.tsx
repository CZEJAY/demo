"use client"

import { type Editor } from '@tiptap/react'
import { Button } from "@/components/ui/button"
import { Bold, Italic, List, ListOrdered, ImageIcon, Link } from 'lucide-react'

interface EditorToolbarProps {
  editor: Editor | null
}

export function EditorToolbar({ editor }: EditorToolbarProps) {
  if (!editor) {
    return null
  }

  return (
    <div className="flex items-center gap-1 border-b border-zinc-800 bg-zinc-900/50 px-4 py-2 backdrop-blur-xl">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleBold().run()}
        data-active={editor.isActive('bold')}
        className="data-[active=true]:bg-zinc-800"
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        data-active={editor.isActive('italic')}
        className="data-[active=true]:bg-zinc-800"
      >
        <Italic className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        data-active={editor.isActive('bulletList')}
        className="data-[active=true]:bg-zinc-800"
      >
        <List className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        data-active={editor.isActive('orderedList')}
        className="data-[active=true]:bg-zinc-800"
      >
        <ListOrdered className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <ImageIcon className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Link className="h-4 w-4" />
      </Button>
    </div>
  )
}

