import { TreePalm } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/">
      <div className="flex cursor-pointer items-center gap-1 outline-2 outline-offset-4 outline-dotted">
        <TreePalm className="text-primary" data-testid="tree-palm-icon" />
        <p className="text-primary">Indie Project</p>
      </div>
    </Link>
  );
}
