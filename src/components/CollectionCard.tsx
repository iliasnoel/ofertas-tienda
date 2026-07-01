'use client'
import React from "react";
import { CollectionModel } from "./definitions";


export default function CollectionCard({ item }: { item: CollectionModel }) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      {/* Imagen */}
      <div className="relative w-full h-48 bg-[#f6f1eb] flex items-center justify-center">
        {!imageError ? (
          <img src={item.imagen}
            alt={item.name || ""}
            className="w-auto h-full"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-amber-800">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} 
                   d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
      
      {/* Contenido */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex flex-row items-center w-full">
          <h3 className="text-lg font-bold text-amber-800 mb-2 flex-1">{item.name}</h3>
          <div className="relative inline-block  items-center justify-end">
              <h3 className="text-lg font-bold text-amber-800 mb-2 flex-1" hidden={!item.precio}>Precio: {item.precio}</h3>
          </div>            
        </div>       
      </div>
    </div>
  );
}
