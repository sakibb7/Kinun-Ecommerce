import { Link } from "react-router-dom";
import { logo } from "../assets";
import { navLinks } from "../constants";

//icons
import { HiOutlineSearch } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center max-w-screen-xl mx-auto py-[20px]">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="">
          <ul className="flex justify-start intems-center gap-10 font-[500] text-[16px]">
            {navLinks.map(({ _id, title, link }) => (
              <li className="cursor-pointer" key={_id}>
                <Link to={link}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-4">
          <HiOutlineSearch />
          <FaRegUser />
          <FcLike />
          <AiOutlineShoppingCart />
        </div>
      </div>
    </nav>
  );
};
