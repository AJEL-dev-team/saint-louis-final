import Image from "next/image";
import Logo from "../public/logo 2.png";

export default function HeroSection() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        {/* Left Section (Text and Button) */}
        <div className="w-full md:w-1/2 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center">
              <div className="text-4xl font-bold text-[#231f20]">
                Saint-Louis <span className="text-[#b59316]">.</span>
              </div>
              <div>
                {/* Uncomment if you want to use the Logo Image */}
                {/* <Image
                  src={Logo}
                  alt="Parish Logo"
                  width={32}
                  height={32}
                  className="w-8"
                /> */}
              </div>
            </nav>
            <header className="container px-4 lg:flex items-center mt-16">
              <div className="w-full">
                <h1 className="text-4xl lg:text-5xl font-bold font-['Playfair Display'] text-[#2e3192]">
                  Welcome to Our Parish Community
                </h1>
                <div className="w-20 h-2 bg-[#b59316] my-4"></div>
                <p className="text-xl mb-10 font-['Work Sans'] text-[#231f20] w-3/4">
                  Strengthening our faith together. Stay informed, participate
                  in events, and support our mission through your generous
                  donations.
                </p>
                <div className="space-x-4">
                  <button className="bg-[#b59316] hover:bg-[#77631a] transition-all ease-in-out duration-200 text-[#ffffff] font-medium px-8 py-2 rounded shadow">
                    Donate Now
                  </button>
                  <button className="bg-[#2e3192] hover:bg-[#232574] transition-all ease-in-out duration-200 text-[#ffffff] font-medium px-8 py-2 rounded shadow">
                    See Events
                  </button>
                </div>
              </div>
            </header>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2">
          <Image
            src="https://images.pexels.com/photos/5199797/pexels-photo-5199797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Leafs"
            className="w-full h-[90vh] object-cover"
            width={634}
            height={900}
          />
        </div>
      </div>
    </div>
  );
}
