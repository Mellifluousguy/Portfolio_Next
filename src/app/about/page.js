import Image from "next/image";
import { Layout, Globe, AlertCircle, Bug, Zap, ArrowRight, Code, MonitorSmartphone, Folder, Users } from "lucide-react";

export default function AboutPage() {

  const skills = ['HTML', 'CSS', 'Javascript', 'React.js', 'Redux', 'Typescript', 'Supabase', 'Next.js', 'Hosting', 'Tailwind CSS', 'Framer Motion', 'Responsive Design', 'AOS', 'UI', 'GitHub', 'API Handling', 'React Router', 'Webflow', 'Wix', 'Figma', 'Git', 'Netlify', 'Vercel', 'Postman', 'Debugging', 'Performance Optimization', 'Collaboration', 'Project Showcasing'];

  return (
    <>
      <div className=" md:px-20 px-5 text-white pb-10">
        <h1 data-aos='fade-down' className="text-5xl pt-10 text-blue-chakra font-semibold">About <span className="text-white">Me</span></h1>
        <div className="grid md:grid-cols-2 py-10 w-full  gap-10   items-start ">
          <div data-aos='fade-up'>
            <h3 className="text-3xl font-semibold mb-2">{`Hey, I'm Mohit 👋`}</h3>
            <p className="font-Inter lg:text-xl">Hello! I’m <span className="text-green-glow">Mohit Gupta</span>, a web developer and tech enthusiast who has completed a <span className="text-saffron-glow">Bachelor’s in Computer Applications (BCA)</span>. I enjoy turning ideas into real-world web solutions through clean, responsive, and interactive designs.</p>
          </div>
          <div data-aos='zoom-in'>
            <Image src={'/profile.png'} width={300} className=" m-auto h-70 hover:scale-105  rounded-full border-green-glow border-l shadow-inner  shadow-green-glow  w-70" height={300} alt="Profile Picture" />
          </div>
        </div>

        {/* FIX APPLIED HERE: Added lg:grid-rows-2 and ensured h-full is used on child divs */}
        <section className="text-white grid lg:grid-cols-2 lg:grid-rows-2 gap-5">

          <div data-aos='flip-right' className="h-full">
            <div className="h-full border hover:scale-105 bg-[#ffffff23] rounded-xs  border-white-muted p-5 md:p-10">
              <h3 className="text-xl md:text-3xl text-white-muted mb-2">
                Skills
              </h3>
              <div className="flex text-sm md:text-base flex-wrap gap-2">
                {
                  skills.map((item, key) => (
                    <span className="p-1 text-green-glow px-2 border border-green-primary bg-[rgba(0,255,0,0.1)] }" key={key}>{item}</span>
                  ))
                }
              </div>
            </div>
          </div>

          <div data-aos='flip-right' className="h-full">
            <div className="h-full border bg-[#ffa0401e] rounded-xs hover:scale-105 border-white-muted p-5 md:p-10">
              <h3 className="text-xl md:text-3xl text-saffron-primary mb-2">
                Interests
              </h3>
              <ul className="flex text-sm md:text-base flex-col gap-2">
                <li className="flex items-center gap-2">
                  <Layout className="text-green-400" size={16} /> Building UI
                </li>

                <li className="flex items-center gap-2">
                  <Globe className="text-blue-400" size={16} /> Exploring Web
                </li>

                <li className="flex items-center gap-2">
                  <AlertCircle className="text-yellow-400" size={16} /> Problem Solving
                </li>

                <li className="flex items-center gap-2">
                  <Bug className="text-red-400" size={16} /> Debugging
                </li>

                <li className="flex items-center gap-2">
                  <Zap className="text-purple-400" size={16} /> Performance Optimization
                </li>
              </ul>
            </div>
          </div>

          <div data-aos='flip-right' className="h-full">
            <div className="h-full border rounded-xs hover:scale-105 bg-[#42a4f527] border-white-muted p-5 md:p-10">
              <h3 className="text-xl md:text-3xl text-blue-chakra mb-2">
                Tools & Technologies
              </h3>
              <ul className="flex text-sm md:text-base flex-col gap-1">
                <li className="flex items-center gap-2">
                  <ArrowRight className="text-orange-400" size={16} /> Vercel
                </li>

                <li className="flex items-center gap-2">
                  <ArrowRight className="text-orange-400" size={16} /> Git & GitHub
                </li>

                <li className="flex items-center gap-2">
                  <ArrowRight className="text-orange-400" size={16} /> Postman
                </li>

                <li className="flex items-center gap-2">
                  <ArrowRight className="text-orange-400" size={16} /> Netlify
                </li>
              </ul>
            </div>
          </div>

          <div data-aos='flip-right' className="h-full">
            <div className="h-full border rounded-xs hover:scale-105 bg-[#66ffb318] border-white-muted p-5 md:p-10">
              <h3 className="text-xl md:text-3xl text-green-primary mb-2">
                What I Offer
              </h3>

              <ul className="flex flex-col text-sm md:text-base gap-1">
                <li className="flex items-center gap-2">
                  <Code className="text-green-400" size={16} /> Frontend Development
                </li>

                <li className="flex items-center gap-2">
                  <MonitorSmartphone className="text-blue-400" size={16} /> Responsive UI Design
                </li>

                <li className="flex items-center gap-2">
                  <Folder className="text-yellow-400" size={16} /> Project Showcasing
                </li>

                <li className="flex items-center gap-2">
                  <Users className="text-purple-400" size={16} /> Collaboration Skills
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}