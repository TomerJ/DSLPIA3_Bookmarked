
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MainContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex-grow p-9 bg-base-200 font-rubik w-full overflow-y-auto">
            <div className="container bg-base-100 w-full drop-shadow-md h-full p-7 overflow-y-auto">
                {children}
            </div>
        </main>
    );
}

