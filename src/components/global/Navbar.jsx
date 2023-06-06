import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { navLinks } from "../../constants";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

//icons
import { HiOutlineSearch } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Navbar = () => {
  const { cartItem, getTotalCartItem } = useContext(ShopContext);
  const totalItem = getTotalCartItem();
  return (
    <nav className="sticky top-0 z-10 bg-white">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto py-[20px] block">
        <Link to="/">
          <div className="cursor-pointer">
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className="">
          <ul className="flex justify-start intems-center gap-10 font-[500] text-[16px]">
            {navLinks.map(({ _id, title, link }) => (
              <li className="cursor-pointer" key={_id}>
                <Link to={link}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-4 text-[22px]">
          <HiOutlineSearch />
          <FaRegUser />
          <FcLike />
          <Link to="/cart">
            <p className="relative">
              <span className="bg-slate-100">
                <AiOutlineShoppingCart />
              </span>
              <span className="absolute right-[-10px] top-[-10px] bg-mainColor text-white px-[5px] rounded-full text-[14px]">
                {totalItem}
              </span>
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};
