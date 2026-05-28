import Image from "next/image";

export default function Home() {
  // Array simples para facilitar a criação dos cards (você pode adicionar mais conforme o número de fotos)
  const produtos = [
    { id: 1, nome: "Buquê Clássico", imagem: "/fotos/IMG-20260527-WA0022.jpg" },
    { id: 2, nome: "Arranjo Tropical", imagem: "/fotos/IMG-20260527-WA0023.jpg" },
    { id: 3, nome: "Cesta Romântica", imagem: "/fotos/IMG-20260527-WA0024.jpg" },
  ];

  return (
    <main className="flex-1 flex flex-col items-center justify-center py-20 px-6 bg-zinc-50">
      
      {/* Seção Hero (A que fizemos no passo 3) */}
      <section className="max-w-3xl mx-auto flex flex-col items-center text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6 leading-tight">
          Os mais belos arranjos para quem você ama
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl">
          Eternize momentos especiais com nossas flores frescas e selecionadas. 
          Atendimento personalizado e entregas em toda a região de Alcobaça.
        </p>
        <a 
          href="https://wa.me/5521974342861" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
          Falar com Atendente
        </a>
      </section>

      {/* Nova Seção: Galeria de Produtos */}
      <section className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          Conheça nosso Portfólio
        </h2>
        
        {/* Grid Responsivo: 1 coluna no mobile, 2 no tablet, 3 no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtos.map((produto) => (
            <div key={produto.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-zinc-100">
              {/* Container da imagem com position relative exigido pelo Next Image com fill */}
              <div className="relative w-full h-72 bg-zinc-200">
                <Image 
                  src={produto.imagem} 
                  alt={`Foto de ${produto.nome}`} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-zinc-800 mb-4">{produto.nome}</h3>
                <a 
                  href={`https://wa.me/5521974342861?text=Olá, gostaria de saber mais sobre o ${produto.nome}!`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-semibold py-2 px-6 rounded-full transition-colors"
                >
                  Encomendar Este
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}