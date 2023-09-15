"use client";

import { useChat } from "ai/react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <div className="border-l flex flex-col w-[250px]">
      <ul className="grow p-2 flex flex-col gap-2">
        {messages.map((m, index) => (
          <li
            key={index}
            className={`${m.role === "user" ? "bg-blue-100" : ""} rounded `}
          >
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="border-t flex gap-2 mt-2 p-2">
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
        />

        <Button type="submit" size={"icon"} className="aspect-square">
          <SendIcon strokeWidth={1} />
        </Button>
      </form>
    </div>
  );
}
