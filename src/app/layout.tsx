import type { Metadata } from "next";
import "./globals.css";
import MainPage from "@/components/MainPage";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Tienda - La China Market",
  description: "LA CHINA MARKET - STORE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <MainPage>{children}</MainPage>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,          
            style: { background: "#eff6ff ", color: "#4B5563 " }, 
          }}
        />
      </body>
    </html>
  );
}
