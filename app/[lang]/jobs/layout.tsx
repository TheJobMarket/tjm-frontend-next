import NavbarComponent from "@/app/components/NavbarComponent";

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <NavbarComponent/>
            <nav></nav>

            {children}
        </section>
    )
}