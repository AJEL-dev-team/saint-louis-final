import Image from 'next/image';
import Logo from '../public/logo 2.png';

export default function HeroSection() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-8/12 mb-10">
        <div className="container mx-auto h-full sm:p-10">
          <nav className="flex px-4 justify-between items-center">
            <div className="text-4xl font-bold text-[#231f20]">
              Saint-Louis <span className="text-[#b59316]">.</span>
            </div>
            <div>
              <Image
                src={Logo} // Replace with your logo path
                alt="Parish Logo"
                width={32}
                height={32}
                className="w-8"
              />
            </div>
          </nav>
          <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
            <div className="w-full">
              <h1 className="text-4xl lg:text-6xl font-bold font-['Playfair Display'] text-[#2e3192]">
                Welcome to Our Parish Community
              </h1>
              <div className="w-20 h-2 bg-[#b59316] my-4"></div>
              <p className="text-xl mb-10 font-['Work Sans'] text-[#231f20]">
                Strengthening our faith together. Stay informed, participate in events, and support our mission through your generous donations.
              </p>
              <div className="space-x-4">
                <button className="bg-[#b59316] text-white text-2xl font-medium px-4 py-2 rounded shadow">
                  Donate Now
                </button>
                <button className="bg-[#2e3192] text-white text-2xl font-medium px-4 py-2 rounded shadow">
                  See Events
                </button>
              </div>
            </div>
          </header>
        </div>
      </div>
      <Image
        src="https://images.pexels.com/photos/5199797/pexels-photo-5199797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Leafs"
        className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
        width={634}
        height={900} // Adjusted to match the provided image ratio
      />
    </div>
  );
}
