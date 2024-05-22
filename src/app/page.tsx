import Image from "next/image";
import User from "./User";

export default function Home() {
  return (
    <main>
      <User name="Dua"/>
      <User name="Ali"/>
      <User name="Dani"/>
      <div>Hello Contextapi</div>
    </main>
  );
}
