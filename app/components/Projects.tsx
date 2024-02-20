import Image from "next/image";
import artGalleryImg from '../../public/assets/projects/art_gallery.png';
import Projectsitem from "./Projectsitem";

export default function Projects() {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
                <h2 className="py-4">Here are some projects I've built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <Projectsitem title="Art Gallery Website" projectURL={"/art-gallery"} imgURL={"/assets/projects/art_gallery.png"}></Projectsitem>
                    <Projectsitem title="Dashboard app" projectURL={"/dashboard"} imgURL={"/assets/projects/dashboard_app.png"}></Projectsitem>
                    <Projectsitem title="Motoring nigeria website" projectURL={"/motoring"} imgURL={"/assets/projects/motoring_nigeria.png"}></Projectsitem>
                    <Projectsitem title="Simple blog" projectURL={"/blog"} imgURL={"/assets/projects/blog.png"}></Projectsitem>
                </div>
            </div>
        </div>
    )
}