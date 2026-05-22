'use client'

import Link from "next/link";
import MyLink from "./MyLink";
import { authClient } from "../lib/auth-client";
import Image from "next/image";


const Navbar = () => {

    const user = authClient.useSession()?.data?.user;

    console.log(user);
    
      const Links = [
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "Profile", path: "/myprofile" },
        ];
    
    return (
        <div className="flex flex-wrap items-center justify-between gap-y-3 p-4 w-11/12 mx-auto shadow-md rounded-lg bg-white">
            <div className="text-2xl sm:text-3xl text-green-600">
                  Summer Style
            </div>
             <div className="flex flex-wrap gap-x-2 gap-y-1 font-medium order-3 w-full sm:w-auto sm:order-2">
                {
                    Links.map((link) => (
                        <MyLink key={link.name} href={link.path} className="hover:text-green-500 transition-colors duration-300 text-sm sm:text-base">
                            {link.name}
                        </MyLink>
                    ))
                }
                
            </div>

            { 
                user ? (
                    <div className="flex items-center space-x-2 order-2 sm:order-3">
                        <Image src={user.image} alt="Profile" width={50} height={50} className="w-8 h-8 rounded-full inline-block mr-2" />
                        <span className="text-gray-700 font-medium text-sm sm:text-base">{user.name}</span>

                        <button onClick={() => authClient.signOut()} className="ml-2 sm:ml-4 px-2 sm:px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors duration-300">
                            Sign Out
                        </button>
                    </div>

                ):
                (
                  <div className="flex space-x-2 order-2 sm:order-3">
                 <Link href="/signup" className="btn btn-outline btn-success btn-sm sm:btn">Sign Up</Link>
                    <Link href="/signin" className="btn btn-outline btn-success btn-sm sm:btn">Login</Link>    
            </div>
                )

            }  
        </div>
    );
};

export default Navbar;