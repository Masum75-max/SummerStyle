import React from 'react';


import { Geist, Geist_Mono } from "next/font/google";
import "../(main)/globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



const layout = ({ children }) => {
    return (
          <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex items-center justify-center">
        
        <main>
          {children}
        </main>
        
      </body>
    </html>
        
    );
};

export default layout;