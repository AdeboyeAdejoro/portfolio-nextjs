import { RiRadioButtonFill } from "react-icons/ri"
import Navbar from "../components/Navbar"
import Image from "next/image"
import Link from "next/link"
export default function Page() {
    return(
        <div className="w-full h-screen">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <Navbar></Navbar>
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
                <Image src="/assets/projects/motoring_nigeria.png" alt="/" className="absolute z-1" layout="fill" objectFit="cover" />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Motoring Nigeria</h2>
                    <h3>React | Tailwind | Javascript</h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>This project is a website for a small business company based out of Lagos, Nigeria.
                       It's a functional website built with React and Tailwind css that allows customers to reach out to
                       the trucking company when they need their vehicles moved.
                    </p>
                    <button className="px-8 py-2 mt-4 mr-8 ">Demo</button>
                    <button className="px-8 py-2 mt-4">Code</button>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Technologies</p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center"> <RiRadioButtonFill className="pr-1" /> React </p>
                            <p className="text-gray-600 py-2 flex items-center"> <RiRadioButtonFill className="pr-1" /> NextJS </p>
                            <p className="text-gray-600 py-2 flex items-center"> <RiRadioButtonFill className="pr-1" /> Tailwind </p>
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="underline cursor-pointer">Back</p>
                </Link>
            </div>
        </div>
    )
}