import React from 'react'

const About = () => {
  return (
    <>
        <div className="flex items-center justify-center py-16">
            <div
                className="relative hover:text-red-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-red-700 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-red-700 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                <h2 className='text-3xl font-bold tracking-tight dark:text-white sm:text-4xl'>A propos</h2>
            </div>
        </div>

    <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-6">
                <h1
                    className="mb-8 text-3xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl dark:text-white">
                    L'église, epouse de Dieu<br/>
                    Lorem ipsum dolor sit amet.
                </h1>

                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 lg:pr-10">This
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi iure unde vitae, ipsa recusandae et reprehenderit commodi, illum aut necessitatibus iste eligendi quod id. Neque quibusdam voluptates officia cum dolorum!
                </p>
            </div>

            <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
                <img src="./images/119.jpg" alt="hero image" className='rounded-lg'/>
            </div>

        </div>
    </section>
    </>
  )
}

export default About