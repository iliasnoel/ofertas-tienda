'use client'
import React from "react";
import CollectionCard from "./CollectionCard";
import { CollectionModel } from "./definitions";


export default function CollectionGrid({ collections }: {collections: CollectionModel[]}) {
  if (!collections || collections.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-amber-800 text-lg">No hay colecciones disponibles</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {collections.map((collection, idx) => (
        <CollectionCard
          key={idx}
          item={collection}
        />
      ))}
    </div>
  );
}