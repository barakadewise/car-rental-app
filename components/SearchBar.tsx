'use client'

import Image from "next/image";
import SearchManufacturer from "./SearchManufacturer ";
import { useState } from "react";


const SearchBar = () => {

  //submit  search manufacturer form
  const [manufacturer,setManufacturer]=useState('')

  const handleSearch = () => {};
  return (
    <form className="xl:w-[450px]">
      <div className="px-2 rounded-md flex flex-row ">
        <SearchManufacturer  manufacturer={manufacturer} setManufacturer={setManufacturer}/>
      </div>
    </form>
  );
};

export default SearchBar;
