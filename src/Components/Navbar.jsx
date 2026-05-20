import Link from "next/link";


const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4 w-11/12 mx-auto">
            <div className=" text-3xl text-green-600">
                  Summer Style
            </div>
             <div className="flex space-x-2 font-medium">
                <Link href='/'>Home</Link>
                <Link href='/products'>Products</Link>
                <Link href='/myprofile'>Profile</Link>
                
            </div>
             <div className="flex space-x-2">
                  <button className="btn btn-accent">Sign Up</button>
                  <button className="btn btn-info">Sign In</button>
            </div>
            
        </div>
    );
};

export default Navbar;