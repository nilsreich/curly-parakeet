import { EditIcon, HomeIcon, LogInIcon, SettingsIcon } from "lucide-react";
import { RailItem } from "./Items";

export const Rail = () => {
  return (
    <div className="border-r w-[50px] flex flex-col items-center pt-1">
      <RailItem href="/" label="Dashboard">
        <HomeIcon strokeWidth={1} />
      </RailItem>
      <RailItem href="/login" label="Login">
        <LogInIcon strokeWidth={1} />
      </RailItem>
      <RailItem href="/editor" label="Editor">
        <EditIcon strokeWidth={1} />
      </RailItem>
      <div className="grow" />
      <RailItem href="/settings" label="Dashboard">
        <SettingsIcon strokeWidth={1} />
      </RailItem>
    </div>
  );
};
