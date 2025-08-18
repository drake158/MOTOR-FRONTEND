import { Metadata } from 'next';
import Button from '@/components/atoms/Button';
import SearchClient from './search-client';
import { InspirationType, getInspirationStrategy } from '@/lib/inspirationStrategies';

export const metadata: Metadata = {
  title: 'Buscar Inspiración',
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { type?: string; q?: string; tokens?: string };
}) {
  const sp = searchParams;

  const typeParam = sp?.type as InspirationType | undefined;
  const inspirationType: InspirationType =
    typeParam === 'images' || typeParam === 'phrases' || typeParam === 'videos'
      ? typeParam
      : 'images';

  const strategy = getInspirationStrategy(inspirationType);

  const tokensParam = typeof sp?.tokens === 'string' ? sp.tokens : undefined;
  const qParam = typeof sp?.q === 'string' ? sp.q : undefined;

  const initialTokens =
    (tokensParam ? tokensParam.split(',').filter(Boolean) : undefined) ??
    (qParam ? [qParam] : []);

  return (
    <div className="min-h-screen flex bg-dark-bg text-dark-text">
      <aside className="w-64 bg-dark-surface p-6 flex flex-col rounded-r-xl shadow-lg shadow-black/30">
        <div className="mb-8 text-2xl font-bold text-accent-cyan">
          TuLogo
        </div>
        <nav className="flex-grow">
          <ul>
            <li className="mb-4">
              <a href="#" className="flex items-center p-3 text-dark-text hover:bg-gray-700 rounded-lg transition-colors duration-200">
                <i className="fas fa-home mr-3 text-lg"></i>
                <span>Inicio</span>
                <span className="ml-auto bg-accent-blue text-white text-xs font-semibold px-2 py-1 rounded-full">54</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center p-3 text-dark-text-secondary hover:bg-gray-700 rounded-lg transition-colors duration-200">
                <i className="fas fa-compass mr-3 text-lg"></i>
                <span>Explorar</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center p-3 text-dark-text-secondary hover:bg-gray-700 rounded-lg transition-colors duration-200">
                <i className="fas fa-users mr-3 text-lg"></i>
                <span>Comunidades</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center p-3 text-dark-text-secondary hover:bg-gray-700 rounded-lg transition-colors duration-200">
                <i className="fas fa-bell mr-3 text-lg"></i>
                <span>Actividad</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center p-3 text-dark-text-secondary hover:bg-gray-700 rounded-lg transition-colors duration-200">
                <i className="fas fa-envelope mr-3 text-lg"></i>
                <span>Mensajes</span>
                <span className="ml-auto bg-accent-blue text-white text-xs font-semibold px-2 py-1 rounded-full">1</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center p-3 text-dark-text-secondary hover:bg-gray-700 rounded-lg transition-colors duration-200">
                <i className="fas fa-inbox mr-3 text-lg"></i>
                <span>Bandeja de Entrada</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center p-3 text-dark-text-secondary hover:bg-gray-700 rounded-lg transition-colors duration-200">
                <i className="fas fa-user-circle mr-3 text-lg"></i>
                <span>Cuenta</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center p-3 text-dark-text-secondary hover:bg-gray-700 rounded-lg transition-colors duration-200">
                <i className="fas fa-cog mr-3 text-lg"></i>
                <span>Configuración</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-8">
          <a href="#" className="flex items-center p-3 text-dark-text-secondary hover:bg-gray-700 rounded-lg transition-colors duration-200">
            <i className="fas fa-shopping-bag mr-3 text-lg"></i>
            <span>Tienda</span>
          </a>
        </div>
      </aside>

      <main className="flex-grow p-8">
        <div className="absolute top-4 left-4">
          <Button
            href="/"
            label="← Volver"
            variant="default"
            className="bg-gray-700 text-white hover:bg-gray-800"
          />
        </div>

        <section className="mb-8 p-6 bg-dark-card rounded-xl shadow-custom">
          <h1 className="text-2xl font-bold mb-6 text-center text-dark-text">
            Buscando en{' '}
            {inspirationType === 'images'
              ? 'Imágenes'
              : inspirationType === 'phrases'
              ? 'Frases'
              : 'Videos'}
          </h1>
          <div className="w-[640px] max-w-full mx-auto">
            <SearchClient
              type={inspirationType}
              placeholder={strategy.getPlaceholder()}
              keywords={strategy.getKeywords()}
              initialTokens={initialTokens}
            />
          </div>
        </section>

        <section>
  <h2 className="text-2xl font-semibold mb-4 text-dark-text">Contenido para inspirarte</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    
    <div className="bg-dark-card rounded-xl overflow-hidden shadow-custom">
      <img src="https://placehold.co/400x300/591B26/FFFFFF?text=Imagen+Inspiracion+1" alt="Imagen de inspiración 1" className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-dark-text mb-2">Diseño Minimalista</h3>
        <p className="text-dark-text-secondary text-sm">Explora ideas de diseño limpio y moderno para tus proyectos.</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-xs text-dark-text-secondary"><i className="fas fa-heart mr-1"></i> 1.2K</span>
          <a href="#" className="text-accent-cyan text-sm hover:underline">Ver más</a>
        </div>
      </div>
    </div>

    <div className="bg-dark-card rounded-xl overflow-hidden shadow-custom">
      <img src="https://placehold.co/400x300/1D2126/FFFFFF?text=Imagen+Inspiracion+2" alt="Imagen de inspiración 2" className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-dark-text mb-2">Fotografía Urbana</h3>
        <p className="text-dark-text-secondary text-sm">Captura la esencia de la ciudad con estas técnicas.</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-xs text-dark-text-secondary"><i className="fas fa-heart mr-1"></i> 800</span>
          <a href="#" className="text-accent-cyan text-sm hover:underline">Ver más</a>
        </div>
      </div>
    </div>

    <div className="bg-dark-card rounded-xl overflow-hidden shadow-custom">
      <img src="https://placehold.co/400x300/164040/FFFFFF?text=Imagen+Inspiracion+3" alt="Imagen de inspiración 3" className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-dark-text mb-2">Arte Abstracto</h3>
        <p className="text-dark-text-secondary text-sm">Sumérgete en el mundo del arte sin límites.</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-xs text-dark-text-secondary"><i className="fas fa-heart mr-1"></i> 950</span>
          <a href="#" className="text-accent-cyan text-sm hover:underline">Ver más</a>
        </div>
      </div>
    </div>

    <div className="bg-dark-card rounded-xl overflow-hidden shadow-custom">
      <img src="https://placehold.co/400x300/736C58/FFFFFF?text=Imagen+Inspiracion+4" alt="Imagen de inspiración 4" className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-dark-text mb-2">Ilustración Digital</h3>
        <p className="text-dark-text-secondary text-sm">Técnicas y estilos para crear ilustraciones.</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-xs text-dark-text-secondary"><i className="fas fa-heart mr-1"></i> 1.5K</span>
          <a href="#" className="text-accent-cyan text-sm hover:underline">Ver más</a>
        </div>
      </div>
    </div>

  </div>
</section>

      </main>
    </div>
  );
}

