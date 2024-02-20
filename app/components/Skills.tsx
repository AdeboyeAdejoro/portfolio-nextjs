import Image from "next/image"
import Skillcard from "./Skillcard"

export default function Skills() {
    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
            <h2 className="py-4">What I Can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* This is what you need */}
                    <Skillcard imageURL={"/assets/skills/html.png"} skillName="HTML"></Skillcard>
                    <Skillcard imageURL={"/assets/skills/css.png"} skillName="CSS"></Skillcard>
                    <Skillcard imageURL={"/assets/skills/javascript.png"} skillName="Javascript"></Skillcard>
                    <Skillcard imageURL={"/assets/skills/python.png"} skillName="Python"></Skillcard>
                    <Skillcard imageURL={"/assets/skills/typescript.png"} skillName="Typescript"></Skillcard>
                    <Skillcard imageURL={"/assets/skills/nextjs.png"} skillName="Nextjs"></Skillcard>
                    <Skillcard imageURL={"/assets/skills/node.png"} skillName="Node"></Skillcard>
                    <Skillcard imageURL={"/assets/skills/react.png"} skillName="React"></Skillcard>
                    <Skillcard imageURL={"/assets/skills/r.png"} skillName="R"></Skillcard>
                    <Skillcard imageURL={"/assets/skills/tailwind.png"} skillName="Tailwind"></Skillcard>
                    <Skillcard imageURL={"/assets/skills/github1.png"} skillName="Git"></Skillcard>
                    <Skillcard imageURL={"/assets/skills/postgresql.png"} skillName="PostgreSQL"></Skillcard>                                        
                </div>
            </div>
        </div>
    )
}