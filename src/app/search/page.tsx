import { Metadata } from 'next';
import Button from '@/components/atoms/Button';
import SearchClient from './search-client';
import { InspirationType, getInspirationStrategy } from '@/lib/inspirationStrategies';

type SP = { type?: string; q?: string; tokens?: string };

export const metadata: Metadata = { title: 'Buscar Inspiración' };

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SP>;
}) {
  const sp = await searchParams;

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
    <main className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      {/* Botón VOLVER fijo en la esquina superior izquierda */}
      <div className="absolute top-4 left-4">
        <Button
          href="/"         // 🔙 apunta a la página de origen
          label="← Volver"
          variant="default"
          className="bg-gray-700 text-white hover:bg-gray-800"
        />
      </div>

      {/* Contenido centrado */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Buscando en{' '}
          {inspirationType === 'images'
            ? 'Imágenes'
            : inspirationType === 'phrases'
            ? 'Frases'
            : 'Videos'}
        </h1>

        <div className="w-[640px] max-w-full">
          <SearchClient
            type={inspirationType}
            placeholder={strategy.getPlaceholder()}
            keywords={strategy.getKeywords()}
            initialTokens={initialTokens}
          />
        </div>
      </div>
    </main>
  );
}

