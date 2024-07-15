import React from 'react'

const skills = [
  "React",
  "Next.js",
  "Node",
  "MongoDB",
  "Express",
  "Spring Boot",
  "MySQL",
  "PostgreSQL",
  "Bootstrap",
  "Tailwind CSS",
  "Pandas",
  "Numpy",
  "Excel",
  "Bash",
  "Linux",
  "flask",
  "Django",
  "Docker",
];
function Skills() {
  return (
    <section id='skills'>
        <div className='container px-5 py-10 mx-auto'>
            <div className='text-center mb-20'>
              <h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-4'>
                Skills &amp; Technologies
              </h1>
              <p></p>
            </div>
            <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
              {skills.map((skill) => (
                <div key={skill} className='p-2 sm:w-1/4 w-full'>
                  <div className='bg-blue-800 rounded flex p-4 h-full items-center'>
                  <span className='title-font font-medium text-white'>
                    {skill}
                    </span>
                </div>
              </div>
              )
              )}
            </div>
        </div>

    </section>
  )
}

export default Skills
