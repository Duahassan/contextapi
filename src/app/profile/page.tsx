"use client"
import { useRouter } from "next/navigation";

export default function Profile(){
    const router=useRouter();
    return(
        <div>
            <h1>List of profile</h1>
            <div>
                <ul>
                    <li onClick={()=>router.push("/profile/1")}>Profile 1</li>
                    <li onClick={()=>router.push("/profile/2")}>Profile 1</li>
                    <li onClick={()=>router.push("/profile/3")}>Profile 1</li>
                   
                </ul>
            </div>
        </div>
    )
}