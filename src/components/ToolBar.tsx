"use client";
import React from "react";
export default function ToolBars() {

  return (
    <>
      <div className="w-full bg-orange-800 lg:px-6 sm:px-6 px-3 shadow-md fixed z-50 h-20">
        <div className="flex py-3 justify-between items-center h-full">
          <div className="flex items-center min-w-0">
            <div className="flex-shrink-0 sm:block text-right ml-20">
              <img
                className="flex-1 justify-end mr-6 h-16 min-w-16 sm:h-20 sm:w-20  inline-block"
                src="/logo-negativo.png"
                alt="Logo secundario"/> 
            </div>
          </div>
          <div className="flex-1 flex justify-center px-6">
            <h1 className="text-1xl sm:text-3xl text-gray-200  font-bold text-center max-w-[90vw] sm:max-w-[60vw]">
              TIENDA - LA CHINA MARKET
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
