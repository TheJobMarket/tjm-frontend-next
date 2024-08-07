import NavbarComponent from "@/app/components/NavbarComponent";

export default function DashboardLayout({
    children, // will be a page or nested layout
    params
}: {
    children: React.ReactNode,
    params: any
}) {
    return (
        <section>
            <NavbarComponent lang={params.lang}/>
            <nav></nav>

            {children}
        </section>
    )
}