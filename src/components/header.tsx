import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/?action=logout");
  };

  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className=" dark:bg-gray-800 shadow-lg py-5 px-7">
        <nav className="flex justify-between">
          <div className="flex items-center space-x-3 lg:pr-16 pr-6">
            <h2 className="font-normal text-2xl leading-6 text-gray-800 dark:text-white">
              Ed-Tech
            </h2>
          </div>
          <div className="flex space-x-5 justify-center items-center pl-2">
            <div className="relative rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
              <button className="text-white " onClick={handleLogout}>
                Logout
              </button>
              <div className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto duration-200"></div>
              <div className="w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto shadow-lg"></div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
