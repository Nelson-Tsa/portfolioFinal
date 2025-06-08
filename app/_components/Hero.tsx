//import { ComponentPropsWithoutRef } from "react";
import {Section} from "./Section";
// import { Spacing } from "./Spacing";
// import { cn } from "@/lib/utils";
import { YoutubeIcon } from "./icons/YoutubeIcon";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
// import { LinkedinIcon } from "./icons/LinkedinIcon";
import { Code } from "./Code";
//import Image from "next/image";
import profilImage from '../image/PhotoProfil.png';

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-stretch gap-4 justify-between">
            <div className="flex-[3] w-full flex flex-col gap-2 ">
                <h2 className="text-4xl font-caption text-primary">Nelson Tsamen</h2>
                <h3 className="text-3xl font-bold">Developer Full-Stack</h3>
                <p className="text-base">



                Salut, je suis Nelson, ancien cuisinier en reconversion vers le développement 
                full stack à <br/> <Link href="https://adatechschool.fr/" target="_blank"><Code><img src="https://cdn.welcometothejungle.co/uploads/website/logo/4277/155112/ada-tech-school.png" style={{width: 18 , height: 10}} alt="Logo Ada Tech School" className="inline"/> Ada Tech School</Code></Link> 
                en <Link href="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/langfr-450px-Flag_of_France.svg.png" target="_blank">
                    <Code><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/langfr-450px-Flag_of_France.svg.png" style={{width: 18 , height: "auto"}} alt="Drapeau de France" className="inline"/> France</Code>
                </Link>. Passionné par l&apos;innovation, je me forme aux dernières
                 technologies ( <Link href="https://www.youtube.com/@Underscore_" target="_blank">
                <Code className="inline-flex items-center gap-1">
                <YoutubeIcon size={15} className="inline"/>  
                YouTube Underscore
                    </Code>
                </Link>) et partage mes projets sur<Link href="https://github.com/nelson-Tsa" target="_blank">
                <Code className="inline-flex items-center gap-1">
                <GithubIcon size={15} className="inline"/>
                    Github
                    </Code>
                </Link> . Après avoir géré des défis en cuisine,
                  je mets aujourd&apos;hui mes compétences au service du code pour créer des solutions numériques.
                   Je recherche une alternance à partir d&apos;octobre 2025 pour contribuer à des projets stimulants. 
                   Envie d&apos;en savoir plus ? Contactez-moi !

                </p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto flex items-center justify-center h-full">
                {/* <img src="https://avatars.githubusercontent.com/u/55012641?v=4" 
                alt="Photo de profil" className="w-full h-auto max-w-xs rounded-lg"/> */}
                <img src={profilImage.src}
                alt="Photo de profil" className="w-full h-auto max-w-xs rounded-lg"/>
            </div>  
        </Section>
    )
}