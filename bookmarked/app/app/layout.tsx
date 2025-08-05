import { SecurePage } from "../util/securepage";

export default async function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
   // await SecurePage();
    return <>{children}</>;
}
