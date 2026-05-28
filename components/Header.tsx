export default function Header() {
  return (
    <header className="w-full bg-emerald-800 text-white p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Floricultura Alcobaça</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-emerald-200">Início</a></li>
            <li><a href="#catalogo" className="hover:text-emerald-200">Catálogo</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}