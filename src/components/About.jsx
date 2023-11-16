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
                I am an aspiring software engineer with a passion for problem solving and using technology to make a positive impact on the world. 
                I have experience in test analysis, web development, and support, 
                and I am proficient in a variety of programming languages, frameworks, databases, and testing tools. I am also a quick learner and I am eager to contribute to the success of your team.
                <br/>
                I'm currently looking for a full time position
                </p>
                <div className='flex justify-center'>
                    <a href='#contact' className='inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'>Work With Me</a>
                    <a href='#projects' className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'>See My Past Work</a>
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