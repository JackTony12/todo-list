import "./globals.css"
import { Poppins } from "next/font/google"
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata = {
  title: "TODO List",
  description: "A simple todo list app",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
