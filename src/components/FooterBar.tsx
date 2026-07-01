export default function Footer() {
  return (
    <footer className="w-full bg-gray-700 py-4 px-6 text-center text-sm text-gray-200 mt-auto">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-gray-200">
          Los mejores precios. Calidad garantizada.
        </p>
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}