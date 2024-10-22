'use client';

// Ensure this component is a client component
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Receipt, SquarePen } from 'lucide-react';
import Link from 'next/link';
import { Edit, UsdCoin } from 'iconsax-react';

export function FreeSection() {
  // Initial state for cards
  const initialCards = [
    {
      id: 1,
      title: 'Farm Contest 1',
      description: 'Farm Contest',
      imgSrc: '/coinflip.gif',
    },
    {
      id: 2,
      title: 'Farm Contest 2',
      description: 'Farm Contest',
      imgSrc: '/coinflip.gif',
    },
    {
      id: 3,
      title: 'Farm Contest 3',
      description: 'Farm Contest',
      imgSrc: '/coinflip.gif',
    },
    {
      id: 4,
      title: 'Farm Contest 4',
      description: 'Farm Contest',
      imgSrc: '/coinflip.gif',
    },
  ];

  // Use state to store card data
  const [cards] = useState(initialCards);

  return (
    <div className="container mx-auto p-2">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.id}>
            <CardHeader>
              <CardTitle className="font-poppins text-2xl">
                {card.title}
              </CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="flex items-center">
                <UsdCoin className="mr-2" />
                
                <span>
                  <strong>USD 100</strong>Price
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/edit" className='justify-center w-full'>
                <Button className="w-full justify-center">
                  Edit{' '}
                  <span>
                    <Edit />
                  </span>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
