import Image from "next/image";
import Navbar from "../components/nav"

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="dots flex items-center justify-center" style={{ height: "calc(100vh - 5rem)" }}>
        <div className="container text-center bg-base-100 w-1/3 h-4/5 drop-shadow-md">
          <div className="m-8"><h1 className=" text-3xl font-poppins font-black">Login to Bookmark'd</h1></div>
        </div>
      </div>
    </>
  );
}
