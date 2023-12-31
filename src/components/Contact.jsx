import React, {useState} from 'react'


const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    
    function encode(data) {
        return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join('&')
    }
    const handleSubmit = e => {
        e.preventDefault();
        
        fetch("/", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: encode({"form-name": "contact", name, email, message})
        })
        .then(() => alert("Message sent!"))
        .catch(error => alert(error));
    }
  return (
    <section id="contact" className='relative'>
        <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
            <div className='lg:w-2/3 md:w-1/2 bg-blue-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
                <iframe 
                width="100%"
                height="100%"
                title="map"
                className='absolute inset-0'
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                style={{ filter: "opacity(0.7)"}}
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7164.601797421441!2d27.972706038666338!3d-26.12173035850945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1700661389125!5m2!1sen!2sza" 
                />
                <div className='bg-blue-900 relative flex flex-wrap py-6 rounded shadow-md'>
                    <div className='lg:w-1/2 px-6'>
                        <h2>Address</h2>
                        <p className='mt-1'>Randburg South Africa</p>
                    </div>
                <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
                    <h2 className='title-font font-semibold text-white tracking-widest text-xs'>Email</h2>
                    <a className='text-indigo-400 leading-relaxed'>vinnywalker96@gmail.com</a>
                    <h2 className='title-font font-semibold text-white tracking-widest text-xs mt-4'>Phone</h2>
                    <p className='leading-relaxed'>+27786559151</p>
                </div>
                </div>
            </div>
            <form
            netlify
            name='contact'
            onSubmit={handleSubmit}
            method='POST'
            className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
                <input type='hidden' name='form-name' value='contact' />
                <h2 className='text-white sm:text-4xl text-3xl mb-1 font-medium title-font'>
                    Contact Me
                </h2>
                <p className='leading-relaxed mb-5'></p>
                <div className='relative mb-4'>
                    <label htmlFor='name' className='leading-7 text-sm text-blue-400'>Name</label>
                    <input 
                    type='text'
                    id='name'
                    name='name'
                    
                    placeholder='Your name'
                    className='w-full bg-blue-600 rounded border border-blue-700 focus:border-indigo-500 
                    focus:ring-indigo-900 text-base outline-none text-blue-100 py-1 px-3 leading-8
                    transition-colors duration-200 ease-in-out'
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='relative mb-4'>
                     <label htmlFor='name' className='leading-7 text-sm text-blue-400'>Email</label>
                     <input 
                     type='email'
                     id='email'
                     name='email'
                     placeholder='Your email'
                     className='w-full bg-blue-600 rounded border border-blue-700 focus:border-indigo-500 
                    focus:ring-indigo-900 text-base outline-none text-blue-100 py-1 px-3 leading-8
                    transition-colors duration-200 ease-in-out'
                     onChange={(e) => setEmail(e.target.value)}
                     />
                </div>
                <div className='relative mb-4'>
                    <label htmlFor='name' className='leading-7 text-sm text-blue-400'>Message</label>
                    <textarea 
                    id='message'
                    name='message'
                    
                    placeholder='Your message'
                    className='w-full bg-blue-600 rounded border border-blue-700
                    focus:border-indigo-500 focus:ring-2 focus:ring-indigo-800 h-32 
                    text-base outline-none text-blue-100 py-1 px-3 resize-none
                    leading-6 transition-colors duration-200 ease-in-out'
                    onChange={(e) => setMessage(e.target.value)}/>

                </div>
                <button
                type='submit'
                className='text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg'>Submit</button>

            </form>
        </div>
    </section>
  )
}

export default Contact
