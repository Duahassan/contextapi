"use client"
import { useParams, useRouter } from "next/navigation";

export default function ProfileId(){
    const params=useParams();
    const router=useRouter();
   
    return(
        <div><h1>My  profile page Id {params.id}</h1> 
        <div onClick={()=> router.push("/profile")}>back to profile page</div>
        </div>
    )
}