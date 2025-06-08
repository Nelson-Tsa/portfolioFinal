import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactIcon";
import { Code } from "./Code";
import { TailwindIcon } from "./icons/TailwindIcon";
import { ClaudeIcon } from "./icons/ClaudeIcon";
import { OpenAIIcon } from "./icons/OpenAIIcon";
import { MistralIcon } from "./icons/MistralIcon";
import { JavaIcon } from "./icons/JavaIcon";
import { AngularIcon } from "./icons/AngularIcon";
import { HtmlIcon } from "./icons/HtmlIcon";
import { CSSIcon } from "./icons/CSSIcon";
import { JavascriptIcon } from "./icons/JavascriptIcon";

export const Skills = () => {
    return (
        <Section className="flex flex-col gap-4 items-start">
            <Badge variant="outline">Skills</Badge>
            <h2 className="pb-2 text-3xl text-primary font-semibold tracking-tight first:mt-0">
                J&apos;aime travailler avec</h2>
                <div className="flex max-md:flex-col gap-4">
              <div className="flex flex-col gap-2 flex-1">
              <div className="flex gap-4 ">
                  <ReactIcon 
                  size={42} 
                  className="animate-spin" 
                  style={{animationDuration: "10s"}} 
                  />  
                  <TailwindIcon 
                  size={42} 
                  className="animate-spin" 
                  style={{animationDuration: "10s"}} 
                  /> 
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-sm text-muted-foreground">React & Tailwind</h3>
              <p className="text-gray-500 dark:text-gray-400">Mon portfolio est le seul projet que j&apos;ai mis en place avec <Code>React</Code>, <Code>Next.js</Code>, <Code>TypeScript</Code> et <Code>TailwindCSS</Code>.</p>
              </div>
              <div className="flex flex-col gap-2 flex-1">
              <div className="flex gap-4 ">
                  <HtmlIcon
                  size={42} 
                  className="animate-spin" 
                  style={{animationDuration: "10s"}} 
                  /> 
                  <CSSIcon
                  size={42} 
                  className="animate-spin" 
                  style={{animationDuration: "10s"}} 
                  /> 
                  <JavascriptIcon
                  size={42} 
                  className="animate-spin" 
                  style={{animationDuration: "10s"}} 
                  />  
                  
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-sm text-muted-foreground">HTML, CSS & JavaScript</h3>
              <p className="text-gray-500 dark:text-gray-400"> Je progresse en <Code>HTML</Code>, <Code>CSS</Code> et <Code>JavaScript</Code> grâce à mes projets perso et en groupe. J&apos;évolue en créant des applications web simples mais responsives, en ajoutant des logiques de plus en plus complexes pour des solutions intuitives et ergonomiques.</p>
              </div><div className="flex flex-col gap-2 flex-1">
              <div className="flex gap-4 ">
                    <JavaIcon
                    size={42} 
                    className="animate-spin" 
                    style={{animationDuration: "10s"}} 
                    />
                    <AngularIcon
                    size={42} 
                    className="animate-spin" 
                    style={{animationDuration: "10s"}} 
                    />
                  </div>
              <h3 className="text-2xl font-semibold tracking-tight text-sm text-muted-foreground">Java & Angular</h3>
              <p className="text-gray-500 dark:text-gray-400">Je débute avec <Code>Java </Code> (Spring Boot) pour le backend et TypeScript avec <Code>Angular</Code> pour le frontend, et j&apos;adore ces stacks ! Spring Boot simplifie les API REST, et Angular offre une structure claire avec un typage strict. En utilisant des ressources pédagogiques, je clarifie les concepts complexes pour progresser vite et créer des apps web modernes.</p>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                  <div className="flex gap-4 ">
                    <ClaudeIcon
                    size={42} 
                    className="animate-spin" 
                    style={{animationDuration: "10s"}} 
                    />
                    <OpenAIIcon
                    size={42} 
                    className="animate-spin" 
                    style={{animationDuration: "10s"}} 
                    />
                    <MistralIcon
                    size={42} 
                    className="animate-spin" 
                    style={{animationDuration: "10s"}} 
                    />
                  </div>
              <h3 className="text-2xl font-semibold tracking-tight text-sm text-muted-foreground">IA Générative</h3>
              <p className="text-gray-500 dark:text-gray-400"> <Code>Claude</Code> est un assistant d&apos;apprentissage et de développement qui utilise des technologies comme <Code>OpenAI</Code> et <Code>Mistral</Code> pour expliquer des concepts complexes de manière claire et concise. Il fournit des ressources pédagogiques et des outils pratiques, synthétisant les cours en ligne et clarifiant les étapes ambiguës pour accélérer la compréhension et la progression.</p>
              </div>
            </div>
        </Section>
    )
}