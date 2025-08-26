import { SecurePage } from "../util/securepage";

export default async function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    await SecurePage(true);
    return <div className="text-zinc-700">{children}</div>;
}
