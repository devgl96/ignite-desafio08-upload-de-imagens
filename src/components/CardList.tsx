import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [imageURL, setImageURL] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleViewImage(imageUrl: string): void {
    onOpen();
    setImageURL(imageUrl);
  }

  return (
    <>
      <SimpleGrid columns={3} spacing={10}>
        {cards.map(card => {
          return <Card key={card.id} data={card} viewImage={handleViewImage} />;
        })}

        <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imageURL} />
      </SimpleGrid>
    </>
  );
}
