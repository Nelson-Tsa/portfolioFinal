import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
// import { ReactIcon } from "./icons/ReactIcon";
// import { Code } from "./Code";
// import { TailwindIcon } from "./icons/TailwindIcon";
// import { ClaudeIcon } from "./icons/ClaudeIcon";
// import { OpenAIIcon } from "./icons/OpenAIIcon";
// import { MistralIcon } from "./icons/MistralIcon";
import { ContactCard } from "./ContactCard";
import profilImage from '../image/PhotoProfil.png';


export const Contact = () => {
    return (
        <Section className="flex flex-col gap-4 items-start">
            <Badge variant="outline">Contact me</Badge>
            <h2 className="pb-2 text-3xl text-primary font-semibold tracking-tight first:mt-0">
                Je serai heureux de travailler avec vous</h2>
            <div className="flex max-md:flex-col w-full gap-4">
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
                    <ContactCard 
                        url="mailto:nelson.tsa@outlook.com"
                        name="Mail" 
                        description="envoyez-moi un email pour toute demande" 
                        image={profilImage.src} 
                        mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRK87NmyYkOaLyQeW_0QsfdSnWSZYvPeqhBw&s"
                    />
            </div>
        </Section>
    )
}