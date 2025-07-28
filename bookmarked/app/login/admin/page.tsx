import Image from "next/image";
import Navbar from "../../components/nav"

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="dots flex items-center justify-center" style={{ height: "calc(100vh - 5rem)" }}>
        <div className="container bg-base-100 w-1/3 h-3/4 drop-shadow-md">
          <div className="ml-9 mt-7  font-rubik">
            <h1 className=" text-2xl font-black">Welcome Back</h1>
            <p className="text-sm italic font-poppins">Please enter your Bookmark'd login details...</p>
          </div>
        </div>
      </div>
    </>
  );
}
