const projects = [
     {
        "title": "TNM",
        "subtitle": "Sustainability Governance and Risk",
        "description": "TNM Sustainability Governance and Risk Solutions (TNM SGR)\
         is a niche advisory firm, focusing on impact focused entities across Sub-Saharan Africa.",
         "image":"./tnm.png",
         "url":"https://tnmrisk.com/"
    },
    {
        "title": "Vent House",
        "subtitle": "You safe with us",
        "description": "The Vent House. Independant , \
        reputable 100% Black owned Non Profit Organisation \
        Recognised as a competent organisation in the mental related field",
         "image":"./project1.png",
         "url":"https://www.venthouse.co.za/"
    },
     {
        "title": "Trackwise",
        "subtitle": "Streamline and optimize your inventory operations",
        "description": "TrackWise, you can effortlessly track, \
        manage, and control your inventory, ensuring smooth and \
        efficient business operations.",
         "image":"./trackwise.png",
         "url":"https://trackwise-kaz8.onrender.com/"
    },
    
    
    
]

export default function Projects() {
  return (
    <>
    <section id="projects" className='text-gray-400 bg-blue-800 body-font'>
        <div className='container  px-5 py-10 mx-auto text-center lg:px-40'>
            <div className='flex flex-col w-full mb-20'>
                <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>Projects</h1>
                <p className='lg:w-2/3 mx-auto leading-relaxed text-base'></p>
            </div>
            <div className='flex flex-wrap -m-4'>
               {projects.map((project, index) => (
                <a
                href={project.url}
                key={project.image}
                className="sm:w-1/2 w-100 p-4">
                    <div className="flex relative">
                        <img 
                        alt="gallery"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src={project.image}/>
                        <div className=" px-8 py-10  relative z-10 w-full border-4
                         border-blue-800 bg-blue-900 opacity-0 hover:opacity-100">
                            <h2 className=" tracking-widest text-sm title-font font-medium text-white-300 mb-1">
                                {project.subtitle}
                            </h2>
                            <h3 className=" title-font text-lg font-medium text-white mb-3">
                                {project.title}
                            </h3>
                            <p className="leading-relaxed">{project.description}</p>

                        </div>

                    </div>
                </a>
               ))}
            </div>

        </div>

    </section>
    </>
  )
}