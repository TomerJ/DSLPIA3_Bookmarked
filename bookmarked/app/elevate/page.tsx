import Navbar from "../components/nav";
import LoginForm from "./form";

export default function LoginPage() {
    return (
        <>
            <Navbar showUser={false} />
            <div
                className="dots flex items-center justify-center py-10"
                style={{ minHeight: "calc(100vh - 5rem)" }}
            >
                <div className="container bg-base-100 lg:w-2/5 w-full p-9 lg:h-fit drop-shadow-md mx-auto my-auto">
                    <LoginForm />
                </div>
            </div>
        </>
    );
}
