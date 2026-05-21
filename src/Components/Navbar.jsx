

import Link from "next/link";
import MyLink from "./MyLink";


const Navbar = () => {
    
      const Links = [
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "Profile", path: "/myprofile" },
        ];
    
    return (
        <div className="flex items-center justify-between p-4 w-11/12 mx-auto shadow-md rounded-lg bg-white">
            <div className=" text-3xl text-green-600">
                  Summer Style
            </div>
             <div className="flex space-x-2 font-medium">
                {
                    Links.map((link) => (
                        <MyLink key={link.name} href={link.path} className="hover:text-green-500 transition-colors duration-300">
                            {link.name}
                        </MyLink>
                    ))
                }
                
            </div>
             <div className="flex space-x-2">
                 <Link href="/signup" className="btn btn-outline btn-success">Sign Up</Link>
                    <Link href="/login" className="btn btn-outline btn-success">Login</Link>    
            </div>
            
        </div>
    );
};

export default Navbar;