import {ReactNode} from "react";
import "./globals.css";

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <html lang="en">
        <body>
            <nav>
                <ul>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Library</a></li>
                    <li><a href="">Dashboard</a></li>
                </ul>
            </nav>
            {children}
        </body>
        </html>
    )
}