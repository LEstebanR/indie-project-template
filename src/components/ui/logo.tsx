import { TreePalm } from "lucide-react";
import { CustomLink } from "./link";

export function Logo() {
  return (
    <CustomLink href="/">
      <div className="flex gap-1 items-center outline-offset-4 outline-dotted outline-2 cursor-pointer">
        <TreePalm className="text-primary" data-testid="tree-palm-icon" />
        <p className="text-primary ">Indie Project</p>
      </div>
    </CustomLink>
  );
}
