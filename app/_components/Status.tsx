import { Card } from "@/components/ui/card";
import {Section} from "./Section";
import {Brain, Gamepad2, Rocket, Briefcase, Calculator, Clock10, ListTodo, Contact, Languages, TrainFront, ThermometerSun, HeartHandshake, Clapperboard} from "lucide-react"
//import Link from "next/link";, SideProjectProps 
//import { Badge } from "@/components/ui/badge"; Code, ArrowUpRight, Home, LucideIcon, Laptop, FolderGit, 
import { SideProject} from "./SideProjectProps";
import { Work } from "./WorkProps";
import { ContactCard } from "./ContactCard";
import profilImage from '../image/PhotoProfil.png';

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-stretch gap-6">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4" style={{ height: '433px' }}>
                    <div className="flex items-center gap-2 mb-4">
                        <Rocket size={16} />
                        <p className="text-lg text-muted-foreground">Side, Fun Projects</p>
                    </div>
                    <div className="h-[calc(100%-2.5rem)] overflow-y-auto pr-2">
                        {SIDE_PROJECTS.map((project,index) => 
                            <SideProject
                                key={index}
                                Logo={project.Logo} 
                                title={project.title} 
                                description={project.description} 
                                url={project.url} 
                                freelance={project.freelance}
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
                        url="https://x.com/nelson_tsa"
                        name="nelson_tsa" 
                        description="1 follower" 
                        image={profilImage.src} 
                        mediumImage="https://upload.wikimedia.org/wikipedia/commons/e/e6/Twitter-new-logo.jpg"
                        />
                         <ContactCard 
                        url="https://www.linkedin.com/in/nelson-tsa-4b1b4a1b9/"
                        name="Nelson Tsamen" 
                        description="71 relations" 
                        image={profilImage.src} 
                        mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png"
                        />
                    </Card>
                </div>
        </Section>
    )
}

const SIDE_PROJECTS=[
    {
        Logo: HeartHandshake,
        title: "Association & Volontaires",
        description: "Le backend met 2 min a démarrer ( projet SpringBoot & Angular ) pour collecter des déchets",
        url: "https://adactionapp.vercel.app/association-list",
        freelance: true,
    },
    {
        Logo: Clapperboard,
        title: "Location de film",
        description: "BDD NoSql firebase et app JS avec une api pour récuperer les affiches de film",
        url: "https://baselocfilm.web.app/",
        freelance: true,
    },
    {
        Logo: ThermometerSun,
        title: "Météo & Photo",
        description: "Application de météo, qui affiche une photo de la ville avec JavaScript",
        url: "https://nelson-tsa.github.io/kata-mini-station-meteo/",
        freelance: false,
    },
    {
        Logo: ThermometerSun,
        title: "Météo",
        description: "Application de météo avec JavaScript",
        url: "https://nelson-tsa.github.io/meteo/",
        freelance: false,
    },
    {
        Logo: Brain,
        title: "Quizz",
        description: "Quiz créé dans le cadre d'un projet de groupe",
        url: "https://nelson-tsa.github.io/Quiz-Groupe/",
        freelance: false,
    },
    {
        Logo: Languages,
        title: "Morse",
        description: "Traducteur Morse avec JavaScript",
        url: "https://nelson-tsa.github.io/Morse/",
    },
    {
        Logo: TrainFront,
        title: "SNCF App",
        description: "Recherche de trajet en train avec JavaScript",
        url: "https://nelson-tsa.github.io/SncfApp/",
    },
    {
        Logo: Gamepad2,
        title: "Motus",
        description: "Jeux ou il faut deviner un mot avec JavaScript",
        url: "https://nelson-tsa.github.io/Motus/",
    },
    {
        Logo: Gamepad2,
        title: "MasterMind",
        description: "Jeux ou il faut deviner les couleurs avec JavaScript",
        url: "https://nelson-tsa.github.io/MasterMind-Anime/",
    },
    {
        Logo: Gamepad2,
        title: "Jeux des allumettes",
        description: "Jeux avec JavaScript",
        url: "https://nelson-tsa.github.io/Jeu-allumettes/",
    },
    {
        Logo: Gamepad2,
        title: "Guess Number",
        description: "Jeux ou il faut deviner un nombre avec JavaScript",
        url: "https://nelson-tsa.github.io/devineLeNombre.io/",
    },   
    {
        Logo: Clock10,
        title: "Horloge",
        description: "Horloge avec JavaScript",
        url: "https://nelson-tsa.github.io/horloge.io/",
    },
    {
        Logo: Calculator,
        title: "Calculette",
        description: "Calculette avec Bootstrap et JavaScript",
        url: "https://nelson-tsa.github.io/calculetteBootstrap/",
    },
    {
        Logo: ListTodo,
        title: "Todo List",
        description: "Todo List avec JavaScript",
        url: "https://nelson-tsa.github.io/todo-list.io/",
    },  
];

const WORK=[
    {
    image: "https://adatechschool.fr/app/uploads/2022/05/icn_logo_ada@2x.png",
    title: "Ada Tech School",
    role: "Formation developpeur full-stack",
    date: "2025",
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
