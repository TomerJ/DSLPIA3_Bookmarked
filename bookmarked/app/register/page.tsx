import Navbar from "../components/nav";
import RegisterForm from "./form";

export default function RegisterPage() {
    return (
        <>
            <Navbar showUser={false} />
            <div
                className="dots flex items-center justify-center py-10"
                style={{ minHeight: "calc(100vh - 5rem)" }}
            >
                <div className="container bg-base-100 lg:w-2/5 w-full p-9 lg:h-fit drop-shadow-md mx-auto my-auto">
                    <RegisterForm />
                    
                </div>
            </div>
        </>
    );
}
