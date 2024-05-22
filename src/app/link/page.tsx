"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function link(){
    const router=useRouter();
    return(
        <div>
            <h1>List of profile</h1>
            <div>
                <ul>
                    <Link href="/profile/1">Profile 1</Link>
                    <Link href="/profile/2">Profile 2</Link>
                    <Link href="/profile/3">Profile 3</Link>
            href
                </ul>
            </div>
        </div>
    )
}