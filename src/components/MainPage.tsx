"use client";
import React, { useState, useEffect } from "react";
import ToolBars from "./ToolBar";
import Footer from "./FooterBar";

const MainPage = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {

    async function pruebaSemilla() {
    }

    pruebaSemilla();
    setIsClient(true);
  }, []);



  if (!isClient) {
    return null; // No renderizar en el servidor
  }


  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ToolBars/>
      <div
        className={`flex-1 p-4 bg-white`} style={{ marginTop: "20px" }}>
        <main style={{ marginTop: "20px" }}>{children}</main>
      </div>
      <Footer/>       
    </div>
  );
}

export default MainPage;
