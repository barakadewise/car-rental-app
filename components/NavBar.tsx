"use client";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
    
    //handle sign in button click 
    const handleSignInButton=()=>{
        console.log("=====SIGN IN BUTTON PRESSED =====")
    }
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] flex justify-between mx-auto sm:px-16 px-6  py-4 items-center">
        <Link href="/" className="flex justify-center items-center">
          <Image
            className="object-contain"
            src="/hero_image.png"
            width={55}
            height={18}
            alt="car-rental-logo"
          />
          <span className="font-extrabold text-black px-2 text-xl">
            Carental
          </span>
        </Link>
        
        {/* signup button */}
        <CustomButton title="Sign in" buttonStyle="hover:bg-blue-600 hover:text-white  text-blue-600 max-w-[123px] rounded-full  py-1  px-2 "  btnType="button" handleOnclick={handleSignInButton} />
      </nav>
    </header>
  );
};

export default NavBar;


