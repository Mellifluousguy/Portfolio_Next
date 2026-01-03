import Image from "next/image";
import projects from "../data/project.json";


export default function ProjectPage() {
  return (
    <div className="md:p-10 p-5 w-full overflow-hidden text-white-muted">


      <h1 data-aos='fade-right' className="text-5xl font-semibold mb-10">
        Work <span className="text-accent-green">Showcase</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
  <Project key={index} {...project} />
))}

      </div>
    </div>
  );
}
export function Project({ title, desc, tech, img, live, code }) {
  return (
    <div data-aos='fade-up'  className="w-auto h-auto">

      <div className=" border border-white/10 rounded-xl p-5 backdrop-blur-xs shadow-md hover:backdrop-blur-sm hover:scale-105 ">
        <Image
          src={img}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
          height={400}
          width={400}
        />
        <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-sm text-white-muted mb-3">{desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-accent-green/10 text-green-glow border border-accent-green/20 rounded"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {live? 
          <a
          href={live}
          target="_blank"
          className="px-4 py-2 hover:bg-saffron-glow rounded bg-saffron-primary text-white text-sm hover:bg-opacity-80 transition"
          >
            View Live
          </a> : ''
        }
        {code?
          <a
          href={code}
          target="_blank"
          className="px-4 py-2 rounded bg-blue-chakra/10 text-blue-glow text-sm border border-blue-chakra hover:bg-blue-chakra hover:text-white transition"
          >
            Code
          </a>
        : ''  
        }
        </div>
      </div>
    </div>
  );
}
