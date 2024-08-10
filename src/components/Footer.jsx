import TheFirm from "/images/home/TheFirm.jpg";
import fb from "/images/home/footer/fb.svg";
import yt from "/images/home/footer/yt.svg";
import twtr from "/images/home/footer/twtr.svg";
import lin from "/images/home/footer/lin.svg";
import pin from "/images/home/footer/pin.svg";
const navItems = [
  { href: "#", label: "Home" },
  { href: "#", label: "Solutions" },
  { href: "#", label: "Cases" },
  { href: "#", label: "About Us" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Contact Us" },
];

function Footer() {
  return (
    <>
      <div className=" ">
        <div className="sm:flex sm:justify-center ">
          <img src={TheFirm} alt="" className="mx-auto" />
        </div>
        <ul className="font-nunito font-bold text-gray-900  sm:gap-4 text-lg px-2 gap-10 cursor-pointer  sm:flex justify-center sm:mt-16 mt-7 text-center">
          <li></li>
          {navItems.map((item) => (
            <li
              key={item.label}
              href={item.href}
              className = "sm:hover:underline sm:hover:decoration-yellow-500 sm:  sm:hover:text-gray-900 hover:decoration-4 hover:text-yellow-500 hover:scale-110"
            >
              {item.label}
            </li>
          ))}
        </ul>
        <ul className=" space-x-8 items-center  px-2  cursor-pointer flex justify-center sm:mt-16 mt-8 ">
          <li></li>
          <li className="hover:scale-110">
            <a href="#">
              <img src={fb} alt="" />
            </a>
          </li>
          <li className="hover:scale-125">
            <a href="#">
              <img src={twtr} alt="" />
            </a>
          </li>
          <li className="hover:scale-125">
            <a href="#">
              <img src={yt} alt="" />
            </a>
          </li>
          <li className="hover:scale-125">
            <a href="#">
              <img src={lin} alt="" />
            </a>
          </li>
          <li className="hover:scale-125">
            <a href="#">
              <img src={pin} alt="" />
            </a>
          </li>
        </ul>

        <div className="font-nunito text-sm text-gray-500 text-center mt-8 mb-2">
          Copyrights ©2020 Thefirm. All Right Reserved
        </div>
      </div>
    </>
  );
}
export default Footer;
