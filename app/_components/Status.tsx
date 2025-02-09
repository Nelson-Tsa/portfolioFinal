import { Card } from "@/components/ui/card";
import {Section} from "./Section";
import {Home, LucideIcon, Laptop, FolderGit, Rocket, Briefcase, Code, Contact} from "lucide-react"
import Link from "next/link";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-6">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4">
                    <div className="flex items-center gap-2 mb-4">
                        <Rocket size={16} />
                        <p className="text-lg text-muted-foreground">Side, Fun Projects</p>
                    </div>
                    <div className="flex flex-col">
                        {SIDE_PROJECTS.map((project,index) => 
                            <SideProject
                                key={index}
                                Logo={project.Logo} 
                                title={project.title} 
                                description={project.description} 
                                url={project.url} 
                            />
                        )}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] w-full">
                <div className="flex flex-col gap-4 max-w-xs ml-auto">
                    <Card className="w-full p-4">
                        <div className="flex items-center gap-2 mb-4">
                            <Briefcase size={16} />
                            <p className="text-lg text-muted-foreground">Work</p>
                        </div>
                        <div className="flex flex-col">
                            {WORK.map((work,index) => 
                                <Work
                                    key={index}
                                    image={work.image} 
                                    title={work.title} 
                                    role={work.role} 
                                    date={work.date} 
                                    url={work.url} 
                                />
                            )}
                        </div>
                    </Card>
                    <Card className="w-full p-4">
                        <div className="flex items-center gap-2">
                            <Contact size={16}/>
                            <p className="text-lg text-muted-foreground">Contact me</p>
                        </div>
                    </Card>
                </div>
            </div>
        </Section>
    )
}

const SIDE_PROJECTS=[
    {
    Logo: Laptop,
    title: "Portfolio",
    description: "Site web personnel avec Next.js et Tailwind CSS",
    url: "https://github.com/nelson-Tsa/Portfolio",
    },
    {
        Logo: FolderGit,
        title: "Projet2",
        description: "Description du projet 2",
        url: "https://github.com/nelson-Tsa/Portfolio",
    },
];

type SideProjectProps = { 
    Logo: LucideIcon; 
    title: string; 
    description: string;
    url: string;
};

const SideProject = (props: SideProjectProps) => { 
return (
    <Link href={props.url} className="flex items-center gap-4 p-2 rounded transition-colors hover:bg-accent/50" target="_blank">
        <span className="flex-shrink-0 p-3">
            <props.Logo size={16} className="text-muted-foreground" />
        </span>
        <div className="min-w-0 flex-1">
            <p className="text-md font-semibold truncate">{props.title}</p>
            <p className="text-sm text-muted-foreground truncate">{props.description}</p>
        </div>
    </Link>
)
}


const WORK=[
    {
    image: "https://adatechschool.fr/app/uploads/2022/05/icn_logo_ada@2x.png",
    title: "Ada Tech School",
    role: "Formation intensive en développement web et mobile",
    date: "2023 - 2025",
    url: "https://adatechschool.fr/",
    },
    {
    image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
    title: "Portfolio",
    role: "Software Developer",
    date: "2024",
    url: "https://github.com/nelson-Tsa/Portfolio",
    },
];

type WorkProps = { 
    image: string; 
    title: string; 
    role: string;
    date: string;
    url: string;
};

const Work = (props: WorkProps) => { 
return (
    <Link href={props.url} className="flex items-center gap-4 p-2 rounded transition-colors hover:bg-accent/50" target="_blank">
        <span className="flex-shrink-0 p-3">
            <img src={props.image} 
                alt={props.title} 
                className="w-5 h-5 object-contain" 
            />
        </span>
        <div className="min-w-0 flex-1">
            <p className="text-md font-semibold truncate">{props.title}</p>
            <p className="text-sm text-muted-foreground truncate">{props.role}</p>
        </div>
        <div className="flex-shrink-0">
            <p className="text-sm text-muted-foreground whitespace-nowrap">{props.date}</p>
        </div>
    </Link>
)
}