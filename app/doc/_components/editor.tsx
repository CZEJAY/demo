"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorToolbar } from "./editor-toolbar";
import { DocumentSidebar } from "./document-sidebar";
import { DocumentHeader } from "./document-header";
import { MainEditorToolbar } from "./main-toolbar";
import { SidebarPanel } from "./panels/sidebar-panel";
import { DndContext, DragEndEvent } from "@dnd-kit/core"

export function DocumentEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Placeholder.configure({
        placeholder: "Start typing...",
      }),
    ],
    content: `
      <h1>👋 Welcome Caleb</h1>
      <h1>Patexa Tips & Tricks</h1>
      <h2>✨ Here's what you'll learn ✨</h2>
      <ul data-type="taskList">
        <li data-type="taskItem" data-checked="false">
          <label>👍 How to edit in Patexa (desktop)</label>
        </li>
        <li data-type="taskItem" data-checked="false">
          <label>✨ Standout features</label>
        </li>
        <li data-type="taskItem" data-checked="false">
          <label>👋 How to find help</label>
        </li>
        <li data-type="taskItem" data-checked="false">
          <label>Thanks</label>
        </li>
      </ul>
      <p>Tip: if you're on desktop, try editing <span class="highlight">Go wild!</span> 🚀</p>
    `,
    editorProps: {
      attributes: {
        class: "prose prose-lg dark:prose-invert max-w-none focus:outline-none",
      },
    },
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (active.data.current?.type === 'template') {
      // Here you would insert the template content based on the template ID
      console.log('Insert template:', active.data.current.template)
    }
  }

  return (
    <div className="flex h-screen bg-zinc-50">
      <DocumentSidebar />
      <div className="flex-1 overflow-hidden">
        <DocumentHeader />
        <DndContext onDragEnd={handleDragEnd}>
        <div className="relative mx-auto max-w-4xl px-8 py-16">
          <EditorContent editor={editor} />
          <div className="relative">
            <MainEditorToolbar />
            <SidebarPanel />
          </div>
        </div>
        </DndContext>
      </div>
    </div>
  );
}
