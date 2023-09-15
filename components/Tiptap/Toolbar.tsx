"use client";

import { useCurrentEditor } from "@tiptap/react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  BoldIcon,
  CodeIcon,
  ItalicIcon,
  ListIcon,
  ListOrdered,
  ListOrderedIcon,
  QuoteIcon,
  RedoIcon,
  RemoveFormattingIcon,
  SeparatorHorizontalIcon,
  StrikethroughIcon,
  UndoIcon,
  WrapTextIcon,
} from "lucide-react";

export const Toolbar = () => {
  const { editor } = useCurrentEditor();
  const [style, setStyle] = useState("paragraph");

  if (!editor) {
    return null;
  }

  const setStyle2 = (style: string) => {
    switch (style) {
      case "paragraph":
        editor.chain().focus().setParagraph().run();
        setStyle("paragraph");
        break;
      case "heading1":
        editor.chain().focus().toggleHeading({ level: 1 }).run();
        setStyle("heading1");
        break;
      case "heading2":
        editor.chain().focus().toggleHeading({ level: 2 }).run();
        setStyle("heading2");
        break;
      case "heading3":
        editor.chain().focus().toggleHeading({ level: 3 }).run();
        setStyle("heading3");
        break;
      case "heading4":
        editor.chain().focus().toggleHeading({ level: 4 }).run();
        setStyle("heading4");
        break;
      case "heading5":
        editor.chain().focus().toggleHeading({ level: 5 }).run();
        setStyle("heading5");
        break;
      case "heading6":
        editor.chain().focus().toggleHeading({ level: 6 }).run();
        setStyle("heading6");
        break;
      default:
        break;
    }
  };

  editor.on("selectionUpdate", ({ editor }) => {
    editor.isActive("paragraph") && setStyle("paragraph");
    editor.isActive("heading", { level: 1 }) && setStyle("heading1");
    editor.isActive("heading", { level: 2 }) && setStyle("heading2");
    editor.isActive("heading", { level: 3 }) && setStyle("heading3");
    editor.isActive("heading", { level: 4 }) && setStyle("heading4");
    editor.isActive("heading", { level: 5 }) && setStyle("heading5");
    editor.isActive("heading", { level: 6 }) && setStyle("heading6");
  });
  return (
    <div className="flex gap-2 w-full p-2">
      <Select
        defaultValue={"paragraph"}
        value={style}
        onValueChange={(e: string) => setStyle2(e)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a style" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="paragraph">Paragraph</SelectItem>
            <SelectItem value="heading1">Überschrift 1</SelectItem>
            <SelectItem value="heading2">Überschrift 2</SelectItem>
            <SelectItem value="heading3">Überschrift 3</SelectItem>
            <SelectItem value="heading4">Überschrift 4</SelectItem>
            <SelectItem value="heading5">Überschrift 5</SelectItem>
            <SelectItem value="heading6">Überschrift 6</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "bg-accent" : ""}
      >
        <BoldIcon strokeWidth={"1"} />
      </Button>
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <ItalicIcon strokeWidth={"1"} />
      </Button>
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <StrikethroughIcon strokeWidth={"1"} />
      </Button>

      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
      >
        <RemoveFormattingIcon strokeWidth={"1"} />
      </Button>

      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <ListIcon strokeWidth={"1"} />
      </Button>
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <ListOrderedIcon strokeWidth={"1"} />
      </Button>
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        <CodeIcon strokeWidth={"1"} />
      </Button>
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        <QuoteIcon strokeWidth={"1"} />
      </Button>
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <SeparatorHorizontalIcon strokeWidth={"1"} />
      </Button>
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => editor.chain().focus().setHardBreak().run()}
      >
        <WrapTextIcon strokeWidth={"1"} />
      </Button>
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <UndoIcon strokeWidth={"1"} />
      </Button>
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <RedoIcon strokeWidth={"1"} />
      </Button>
    </div>
  );
};
