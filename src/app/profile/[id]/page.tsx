"use client"
import { useParams } from "next/navigation"

export default function Profile(){
    const params=useParams();
    console.log(params.id)
    return(
        <div>My Id profile page. </div>
    )
}