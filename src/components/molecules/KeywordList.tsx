"use client";
import { FC } from 'react';
import { Button } from '@/components/atoms/button';
import { InspirationType } from '@/lib/inspirationStrategies';

interface KeywordListProps {
  keywords: string[];
  type: InspirationType;
  onAdd: (word: string) => void;
}

const KeywordList: FC<KeywordListProps> = ({ keywords, type, onAdd }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {keywords.map((keyword) => (
        <div
          key={keyword}
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData("text/plain", keyword);
            // hint visual en algunos navegadores
            e.dataTransfer.effectAllowed = "copy";
          }}
          className="inline-block"
          // click sigue funcionando
          onClick={() => onAdd(keyword)}
        >
          <Button
            variant="keyword"
            label={keyword}
          />
        </div>
      ))}
    </div>
  );
};

export default KeywordList;
