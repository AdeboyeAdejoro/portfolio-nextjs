import Image from "next/image"

export default function About() {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5651e5] m-0">About</p>
                    <p className="m-0 py-2 text-gray-600">I started programming before long before I went to med school. 
                       As a kid, I was attracted any field that tickled my imagination, be it Biology, Computer Science, Maths. 
                       In med school, programming became my reprieve from long rotations through different hospital units. 
                       When I graduated, I sought to continue my studies in a field that would allow me combine my interests in both medicine and computer science. 
                       Bioinformatics seemed tailor-made for me, and when I got the chance to move to Germany to study for a master's degree in Bioinformatics, 
                       I took it.</p>
                    <p className="py-2 text-gray-600 cursor-pointer">Check out some of my projects</p>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image src="/assets/adeboye-adejoro.jpeg" alt="my profile picture" width={640} height={800} className="rounded-xl" />
                </div>
            </div>
        </div>
    )
}