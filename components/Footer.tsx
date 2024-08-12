import Image from "next/image";
import { footerLinks } from "@/constants/constatnts";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col border-t border-gray-100 mt-3 text-black -100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-5">
          <Image
            src="/hero_image.png"
            height={150}
            width={40}
            alt="logo"
            className="object-contain"
          ></Image>

          <p className="text-base text-gray-700 font-thin">
            Carental
            <br />
            All Rights Reserved &copy; 2024
          </p>
        </div>

        {/* footer links start Here */}
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((link) => (
            <div key={link.title} className="flex flex-col px-3 gap-1" >
              <h3 className="text-gray-700">{link.title}</h3>
              {link.links.map((linkItem,index) => (
                <Link href={linkItem.url} key={index} className="text-gray-500 font-thin">{linkItem.title}</Link>
              ))}
            </div>
          ))}
        </div>
        {/* end footer links */}
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-200 sm:px-16 px-6 py-10 ">
        <p className="text-gray-500 text-[15px] font-thin ">@2024 Carental.All Rights Reserved</p>
        <div className="justify-between gap-2 flex">
            <Link href="/" className="text-gray-500 text-[15px] font-thin ">
            Privacy Policy 
            </Link>
            <Link href="/" className="text-gray-500 text-[15px] font-thin">
            Terms of Use
            </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
