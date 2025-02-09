import {Section} from "./Section"
import {Button} from "@/components/ui/button"
import { GithubIcon } from "./icons/GithubIcon"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { XIcon } from "./icons/XIcon"
import { LinkedinIcon } from "./icons/LinkedinIcon"

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">

            <h1 className="text-lg font-bold text-primary">Nelson Tsamen.com</h1>
           <div className="flex-1"/>
                <ul className="flex items-center gap-2">

                   <Link href={"https://github.com/nelson-Tsa"} target="_blank" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                    <GithubIcon size={18} className="text-foreground"/>
                    </Link>

                    <Link href={"https://x.com/KaidoNaka"} target="_blank" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                    <XIcon size={18} className="text-foreground"/></Link>

                    <Link href={"https://www.linkedin.com/in/nelson-tsamen-108971346/"} target="_blank" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                    <LinkedinIcon size={18} className="text-foreground"/>
                    </Link>
                  
                </ul>
        </Section>
        </header>
    )
}   