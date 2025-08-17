export type InspirationType = 'images' | 'phrases' | 'videos';

export interface InspirationStrategy {
  getPlaceholder: () => string;
  getKeywords: () => string[];
}

export class ImagesStrategy implements InspirationStrategy {
  getPlaceholder(): string {
    return "Buscar imágenes inspiradoras...";
  }
  getKeywords(): string[] {
    return ["Naturaleza", "Arte", "Viajes", "Animales"];
  }
}

export class PhrasesStrategy implements InspirationStrategy {
  getPlaceholder(): string {
    return "Buscar frases inspiradoras...";
  }
  getKeywords(): string[] {
    return ["Motivación", "Amor", "Vida", "Éxito"];
  }
}

export class VideosStrategy implements InspirationStrategy {
  getPlaceholder(): string {
    return "Buscar videos inspiradores...";
  }
  getKeywords(): string[] {
    return ["Documental", "Música", "Tutorial", "Cortos"];
  }
}

export function getInspirationStrategy(type: InspirationType): InspirationStrategy {
  switch (type) {
    case 'images':
      return new ImagesStrategy();
    case 'phrases':
      return new PhrasesStrategy();
    case 'videos':
      return new VideosStrategy();
    default:
      // Por defecto, devolvemos estrategia de imágenes
      return new ImagesStrategy();
  }
}
