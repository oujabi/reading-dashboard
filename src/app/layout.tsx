import {ReactNode} from "react";
import "./globals.css";
import {lusitana} from "@/src/components/ui/fonts";
import Image from "next/image";

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <html lang="en">
        <body className={`${lusitana.className}`}>
            <main className="flex flex-col p-6 w-full">
                <div className="flex h-20 w-full">

                    <h1 className={"flex items-end p-3 rounded-xl bg-sky-800 text-2xl text-gray-50 w-full"}>
                         Reading Books
                    </h1>
                </div>
                <div className="flex flex-col bg-sky-800 text-gray-50 text-lg opacity-90 w-1/3 mt-2 rounded-lg p-5 h-80">                    <nav className="flex justify-start">
                        <ul>
                            <li className={"hover:text-xl hover:font-bold"}><a href="#">Wishlist</a></li>
                            <li className={"hover:text-xl hover:font-bold"}><a href="#">Library</a></li>
                            <li className={"hover:text-xl hover:font-bold"}><a href="">Dashboard</a></li>
                        </ul>
                    </nav>
                </div>

                {children}
            </main>

        </body>
        </html>
    )
}