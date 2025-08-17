import Button from '@/components/atoms/Button';

export const metadata = {
  title: 'Seleccionar Inspiración',
};

export default function SelectPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-8 text-center">¿Qué tipo de inspiración buscas?</h1>
      <div className="flex flex-col gap-4 w-full max-w-sm sm:flex-row sm:justify-center">
        <Button variant="category" label="Imágenes" href="/search?type=images" />
        <Button variant="category" label="Frases" href="/search?type=phrases" />
        <Button variant="category" label="Videos" href="/search?type=videos" />
      </div>
    </main>
  );
}
