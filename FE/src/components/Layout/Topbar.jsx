import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-rabbit-red text-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="flex items-center spa">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 b-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 b-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-5 b-5" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>We ship worldwide - Fast and reliable shipping!</span>
        </div>
        <div className="text-sm">
          <a href="tel:+1234567890" className="hover:text-gray-300">
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
