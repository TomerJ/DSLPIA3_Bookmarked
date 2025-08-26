export default function MainContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex-grow p-9 bg-base-200 font-rubik w-full overflow-y-auto justify-center items-center flex">
            <div className="container bg-base-100 w-full drop-shadow-md h-fit p-9 overflow-y-auto">
                {children}
            </div>
        </main>
    );
}
