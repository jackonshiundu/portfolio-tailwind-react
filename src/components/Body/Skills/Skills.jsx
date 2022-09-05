import React from 'react'

const Skills = () => {
  return (
    <div className='flex flex-col mx-4 items-center lg:flex-row lg:justify-center'>
        <div>
            <h3 className='text-2xl font-bold bold text-center mb-4 dark:text-slate-600 transition duration-400'>Frontend Developer</h3>
            <div className='grid grid-cols-3 gap-6'>
                <div>
                    <h4 className='font-semibold text-xl dark:text-slate-100 transition duration-400'>HTML</h4>
                    <p className='text-sm text-gray-900 dark:text-slate-300 transition duration-400'>Advance</p>
                </div>
                <div>
                    <h4 className='font-semibold text-xl dark:text-slate-100 transition duration-400'>React JS</h4>
                    <p className='text-sm text-gray-900 dark:text-slate-300 transition duration-400'>Intermideate</p>
                </div>
                <div>
                    <h4 className='font-semibold text-xl dark:text-slate-100 transition duration-400'>Vanilla JS</h4>
                    <p className='text-sm text-gray-900 dark:text-slate-300 transition duration-400'>Intermideate</p>
                </div>
                <div>
                    <h4 className='font-semibold text-xl dark:text-slate-100 transition duration-400'>Styled Components</h4>
                    <p className='text-sm text-gray-900 dark:text-slate-300 transition duration-400'>Intermideate</p>
                </div>
                <div>
                    <h4 className='font-semibold text-xl dark:text-slate-100 transition duration-400'>Tailwind Css</h4>
                    <p className='text-sm text-gray-900 dark:text-slate-300 transition duration-400'>Intermideate</p>
                </div>
                <div>
                    <h4 className='font-semibold text-xl dark:text-slate-100 transition duration-400'>Sass</h4>
                    <p className='text-sm text-gray-900 dark:text-slate-300 transition duration-400'>Intermideate</p>
                </div>
                <div>
                    <h4 className='font-semibold text-xl dark:text-slate-100 transition duration-400'>Next JS</h4>
                    <p className='text-sm text-gray-900 dark:text-slate-300 transition duration-400'>Intermideate</p>
                </div>
                <div>
                    <h4 className='font-semibold text-xl dark:text-slate-100 transition duration-400'>Redux</h4>
                    <p className='text-sm text-gray-900 dark:text-slate-300 transition duration-400'>Intermideate</p>
                </div>
                <div>
                    <h4 className='font-semibold text-xl dark:text-slate-100 transition duration-400'>Css</h4>
                    <p className='text-sm text-gray-900 dark:text-slate-300 transition duration-400'>Advance</p>
                </div>
            </div>
        </div>
        <div>
            <h3 className='text-2xl font-bold bold mb-4 dark:text-slate-600 transition duration-400  text-center rea top-0'>Backend Developer</h3>
            <div className='grid grid-cols-2 gap-6'>
                <div>
                    <h4 className='font-semibold text-xl dark:text-slate-100 transition duration-400'>Express</h4>
                    <p className='text-sm text-gray-900 dark:text-slate-300 transition duration-400'>Intermideate</p>
                </div>
                <div>
                    <h4 className='font-semibold text-xl dark:text-slate-100 transition duration-400'>Node Js</h4>
                    <p className='text-sm text-gray-900 dark:text-slate-300 transition duration-400'>Intermideate</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills