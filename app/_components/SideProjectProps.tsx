import { LucideIcon } from "lucide-react";
import Link from "next/link";

export type SideProjectProps = { 
    Logo: LucideIcon; 
    title: string; 
    description: string;
    url: string;
};

export const SideProject = (props: SideProjectProps) => { 
return (
    <Link href={props.url} className="flex items-center gap-4 p-1  rounded transition-colors hover:bg-accent/50" target="_blank">
        <span className="flex-shrink-0 p-3">
            <props.Logo size={20} className="text-muted-foreground" />
        </span>
        <div className="min-w-0 flex-1">
            <p className="text-md font-semibold truncate">{props.title}</p>
            <p className="text-sm text-muted-foreground truncate">{props.description}</p>
        </div>
    </Link>
)
}