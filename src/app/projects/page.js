import Image from "next/image";

export default function ProjectPage() {
  return (
    <div className="md:p-10 p-5 w-full overflow-hidden text-white-muted">


      <h1 data-aos='fade-right' className="text-5xl font-semibold mb-10">
        Work <span className="text-accent-green">Showcase</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <Project
          title="Social Media Platform"
          desc="A fully featured Social Media Platform with Unique Connectivity, Chat, Admin Panel, Edit Profile and many more."
          tech={["MERN", "Framer Motion", "Socket.io", "Tailwind CSS"]}
          img="/projects/social.png"
          live="https://portxnect.onrender.com"
          code="https://github.com/Mellifluousguy/PortXnectCode"
        />
        <Project
          title="Blog Page"
          desc="A animated Blog Page based on latest designing and animation with functionality of filtering blogs based on tags and time period."
          tech={["React", "Framer Motion", "Tailwind CSS"]}
          img="/projects/blog.png"
          live="https://blogpage-qcee.onrender.com/"
          code="https://github.com/Mellifluousguy/BlogPage"
        />
        <Project
          title="Software License Page"
          desc="SoftSell is a modern, responsive, and user-friendly front-end project for a marketplace platform that helps users buy and sell unused software licenses."
          tech={["React", "Tailwind CSS", "Framer Motion"]}
          img="/projects/softsell.png"
          live="https://softsell-5ydr.onrender.com/#"
          code="https://github.com/Mellifluousguy/SoftSell"
        />
        <Project
          title="WSI Viewer"
          desc="This project is a React-based Whole Slide Image (WSI) Viewer with zoom, pan, bounding boxes, and a mini-map."
          tech={["React", "Tailwind CSS", "React Tooltip"]}
          img="/projects/wsi.png"
          live="https://wsiviewer.netlify.app/"
          code="https://github.com/Mellifluousguy/WSIViewer"
        />
        <Project
          title="Search Engine"
          desc=" SearchXM is a sleek and responsive search engine that delivers web, image, and news results in a fast, user-friendly interface."
          tech={["React", "Tailwind CSS", "React Router"]}
          img="/projects/search.png"
          live="https://searchxm.netlify.app/"
          code="https://github.com/Mellifluousguy/SearchxM"
        />
        <Project
          title="Service Page"
          desc=" Mecode is a service-based website developed using React and React Routing. This project features multiple pages including Home."
          tech={["React", "CSS", "React Router"]}
          img="/projects/mecode.png"
          live="https://mecode.netlify.app/"
          code="https://github.com/Mellifluousguy/MeCode_Hub"
        />
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
          height={100}
          width={100}
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
          <a
            href={live}
            target="_blank"
            className="px-4 py-2 hover:bg-saffron-glow rounded bg-saffron-primary text-white text-sm hover:bg-opacity-80 transition"
          >
            View Live
          </a>
          <a
            href={code}
            target="_blank"
            className="px-4 py-2 rounded bg-blue-chakra/10 text-blue-glow text-sm border border-blue-chakra hover:bg-blue-chakra hover:text-white transition"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
