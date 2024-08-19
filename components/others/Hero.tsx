import React from 'react'

const Hero = () => {
  return (
    <div className="h-screen flex items-center bg-red-500">

    <div className="px-4 mx-auto mt-16 mb-16 max-w-7xl sm:mt-24">
        <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl md:text-6xl font-title">
                <span className="block">Lorem ipsum dolor sit amet</span>
                <span className="block pt-2">Lorem ipsum dolor</span>
            </h1>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, ex expedita facere porro tenetur quaerat veritatis cumque aliquam vitae harum.
            </p>
            {/* <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">

                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <a href=""
                        className="block shadow-lg w-full px-8 py-3 text-base font-medium text-gray-200 hover:text-gray-100 bg-gray-100/10 hover:bg-gray-200/30 hover:backdrop-blur-xl backdrop-blur-lg rounded-md md:py-4 md:text-lg md:px-10">
                        Pre-Book
                    </a>
                </div>
            </div> */}
        </div>
    </div>

</div>
  )
}

export default Hero