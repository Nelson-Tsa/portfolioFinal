import { Card } from "@/components/ui/card";
import {Section} from "./Section";
import {Home, LucideIcon, Laptop, FolderGit, Rocket, Briefcase, Code, ArrowUpRight, Contact} from "lucide-react"
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-stretch gap-6">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 h-full">
                    <div className="flex items-center gap-2 mb-4">
                        <Rocket size={16} />
                        <p className="text-lg text-muted-foreground">Side, Fun Projects</p>
                    </div>
                    <div className="flex flex-col h-full gap-4">
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
            <div className="flex-[2] w-full flex flex-col gap-4 max-w-lg ml-auto">
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
                                    freelance={work.freelance}
                                />
                            )}
                        </div>
                    </Card>
                    <Card className="w-full p-4 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Contact size={16}/>
                            <p className="text-lg text-muted-foreground">Contact me</p>
                        </div>
                        <ContactCard 
                        name="nelson_tsa" 
                        description="1" 
                        image="https://github.com/nelson-Tsa.png" 
                        mediumImage="https://upload.wikimedia.org/wikipedia/commons/e/e6/Twitter-new-logo.jpg"
                        />
                         <ContactCard 
                        name="Nelson Tsamen" 
                        description="11" 
                        image="https://github.com/nelson-Tsa.png" 
                        mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png"
                        />
                    </Card>
                </div>
        </Section>
    )
}

const SIDE_PROJECTS=[
    {
    Logo: Laptop,
    title: "Portfolio",
    description: "Site web personnel avec React, Next.js et Tailwind CSS",
    url: "https://github.com/nelson-Tsa/Portfolio",
    },
    {
        Logo: FolderGit,
        title: "Projet2",
        description: "Description du projet 2",
        url: "https://github.com/nelson-Tsa/Portfolio",
    },
    {
        Logo: FolderGit,
        title: "Projet2",
        description: "Description du projet 2",
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

const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
}) => {
    return (
<Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
<div className="relative">
    <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
    <img src={props.mediumImage} alt={props.name} 
    className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain" />
</div>
    
    <div className="flex-1 ">
            <div className="min-w-0 flex items-center gap-2">
            <p className="text-md font-semibold truncate">{props.name}</p>
            
            </div>
            <p className="text-xs text-muted-foreground flex truncate">{props.description}</p>
        </div>
        <div className="flex-shrink-0 ">
            <ArrowUpRight size={16} className="group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform mr-4" />
        </div>

</Card>
    )
}


const SideProject = (props: SideProjectProps) => { 
return (
    <Link href={props.url} className="flex items-center gap-4 p-2 rounded transition-colors hover:bg-accent/50" target="_blank">
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


const WORK=[
    {
    image: "https://adatechschool.fr/app/uploads/2022/05/icn_logo_ada@2x.png",
    title: "Ada Tech School",
    role: "Formation intensive en développement web et mobile",
    date: "2023 - 2025",
    url: "https://adatechschool.fr/",
    freelance: true,
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
    freelance?: boolean;
};

const Work = (props: WorkProps) => { 
return (
    <Link href={props.url} className="flex grid grid-cols-[auto_1fr_auto] items-center gap-4 p-2 rounded transition-colors hover:bg-accent/50" target="_blank">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
            <img src={props.image} 
                alt={props.title} 
                className="w-8 h-8 object-contain" 
            />
        </div>
        <div className="flex-1 ">
            <div className="min-w-0 flex items-center gap-2">
            <p className="text-md font-semibold truncate">{props.title}</p>
            {props.freelance && <Badge variant="outline">En cours</Badge>}
            </div>
            <p className="text-xs text-muted-foreground flex truncate">{props.role}</p>
        </div>
        <div className="flex-shrink-0 ">
            <p className="text-xs text-end text-muted-foreground whitespace-nowrap break-words">{props.date}</p>
        </div>
    </Link>
)
}