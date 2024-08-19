import Head from "@/components/others/Head"
import Navbar from "@/components/others/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <Head/>
      <Navbar/>
      <main className="flex-1">{children}</main>
    </div>
  )
}