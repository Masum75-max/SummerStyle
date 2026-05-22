import { Edit } from "@/Components/Edit";
import { auth} from "../../../lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const ProfilePage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    })
    const user = session?.user;
    
    return (
        <div className="p-8 bg-gray-100 rounded-lg shadow-md w-full md:w-1/2 mx-auto my-8">
            <h1 className="text-2xl font-bold mb-4 text-center">My Profile</h1>
            {user && (
                <div>
                    <Image
                        src={user.image}
                        alt={user.name}
                            width={96}
                            height={96}
                        className="w-24 h-24 rounded-full mx-auto mb-4"
                    />  
                    <p className="mb-2 text-center"><strong>Name:</strong> {user.name}</p>
                    <p className="text-center"><strong>Email:</strong> {user.email}</p>

                    <Edit/>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;