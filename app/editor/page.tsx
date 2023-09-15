import Chat from "@/components/Chat";
import { Navbar } from "@/components/Navbar";
import { Rail } from "@/components/Rail";
import { Sidebar } from "@/components/Sidebar";
import { Statusbar } from "@/components/Statusbar";
import Tiptap from "@/components/Tiptap";

export default function Editor() {
  return (
    <div className="h-[100dvh] flex flex-col">
      <Navbar />
      <div className="grow flex">
        <Rail />
        <Sidebar />
        <main className="grow p-4">
            <Tiptap />
        </main>
        <Chat />
      </div>
      <Statusbar />
    </div>
  );
}
