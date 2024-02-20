import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Main() {
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">Let's build something together</p>
                    <h1 className="py-4 text-gray-700">Hi, I'm <span className="text-[#5651e5]">Adeboye</span></h1>
                    <p className="py-2 text-gray-700">Bioinformatician | Software Engineer | Medical Doctor</p>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">Adejoro Adeboye George is currently studying for a master's degree in Bioinformatics. 
                       He has a bacherlor's degree in Medicine and Surgery. 
                       He is also a software engineer with experience building products for healtech companies.</p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaLinkedinIn />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <BsPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}