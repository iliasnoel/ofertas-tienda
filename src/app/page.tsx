'use client'

import React, { useEffect, useState } from "react";
import CollectionGrid from "@/components/CollectionGrid";
import { CollectionModel } from "@/components/definitions";


export default function ColeccionesPage() {
 
  const [collections, setCollections] = useState<CollectionModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch('/api/images');
        
        if (!response.ok) {
          const errorData = await response.json();
          console.error('❌ Error de API:', errorData);
          throw new Error(errorData.error || `Error ${response.status}`);
        }
        
        const data = await response.json();
        console.log('✅ Datos recibidos:', data);
        
        // Si la respuesta es un array vacío o no es array
        if (!Array.isArray(data)) {
          console.warn('⚠️ La respuesta no es un array:', data);
          setCollections([]);
        } else {
          setCollections(data);
        }
      } catch (err) {
        console.error("❌ Error al cargar colecciones:", err);
        setError(err instanceof Error ? err.message : "No es posible atender su solicitud.");
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-200 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-amber-800 border-t-transparent"></div>
            <p className="mt-4 text-orange-800">Cargando colecciones...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-200 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-200 py-12 px-4 mt-1">
      <div className="text-center mb-10">     
        <div className="relative flex items-center justify-center py-3">
          <div className="flex-1 flex justify-center">
            <h1 className="text-[18px] sm:text-[24px] font-serif text-orange-800 font-bold mb-4">
              Le ofertamos 
            </h1>
          </div>  
        </div>

        <CollectionGrid collections={collections} />
      </div>
    </div>
  );
}
