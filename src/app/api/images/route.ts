import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const imagesDir = path.join(process.cwd(), 'public', 'imagenes');   
    // Verificar si la carpeta existe
    if (!fs.existsSync(imagesDir)) {
      console.warn('⚠️ La carpeta no existe:', imagesDir);
      return NextResponse.json([]);
    }
    
    const files = fs.readdirSync(imagesDir);
    
    // Si no hay archivos, devolver array vacío
    if (files.length === 0) {
      console.warn('⚠️ No hay archivos en la carpeta');
      return NextResponse.json([]);
    }

    files.forEach(file => {
      console.log('📄 Archivo:', file, 'Extensión:', path.extname(file).toLowerCase());
    });

    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const imageFiles = files.filter(file => 
      imageExtensions.includes(path.extname(file).toLowerCase())
    );
    
    if (imageFiles.length === 0) {
      console.warn('⚠️ No se encontraron imágenes válidas');
      return NextResponse.json([]);
    }
    
    const images = imageFiles.map((file, index) => ({
      id: index + 1,
      name: file.replace(/\.[^/.]+$/, ''),
      imagen: `/imagenes/${file}`
    }));
    
    console.log('✅ Imágenes cargadas:', images);
    return NextResponse.json(images);
    
  } catch (error) {
    console.error('❌ Error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}