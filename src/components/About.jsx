import React from 'react'

function About() {
  return (
    <section id='about'>
        <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
            <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start 
            md:text-left mb-16 mb:mb-0 items-center text-center'>
                Hi, I'm Marlvin.
                <b className='mb-8 leading-relaxed'/>
                <p className='mb-8 leading-relaxed'>
                I am a passionate full-stack software developer dedicated to solving problems and making a positive impact through technology.
                With a robust background in test analysis, web development, and technical support, I bring a diverse skill set to the table. 
                My proficiency spans multiple programming languages, frameworks, databases, and testing tools. 
                <br/>
                I pride myself on being a quick learner, always eager to embrace new challenges and contribute to the success of my team. Currently, I am on the lookout for a full-time position where I can leverage my skills and enthusiasm to drive innovation and excellence.
                </p>
                <div className='flex justify-center'>
                    <a href='#contact' className='inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'>Work With Me</a>
                    <a href='#projects' className='text-white ml-4 inline-flex bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 hover:text-white rounded text-lg'>See My Past Work</a>
                </div>
            </div>
             <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                    <img className='object-cover object-center rounded' alt='hero' src='./coding.svg' />
            </div>
        </div>
    </section>
  )
}

export default About