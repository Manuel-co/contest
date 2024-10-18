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

export function PremiumSection() {
  // Initial state for cards
  const initialCards = [
    {
      id: 1,
      title: 'Bicycle',
      description: 'Win a bicycle',
      imgSrc: '/bicycle.png',
    },
    {
      id: 2,
      title: 'Earbuds',
      description: 'Win an earbud',
      imgSrc: '/earbuds.png',
    },
    {
      id: 3,
      title: 'Z-flip Samsung',
      description: 'Win a z-flip phone',
      imgSrc: '/phone.png',
    },
    {
      id: 4,
      title: 'PS5',
      description: 'Win a PS5',
      imgSrc: '/PS5.png',
    },
    {
      id: 5,
      title: 'Watch',
      description: 'Win a watch',
      imgSrc: '/watch.png',
    },
  ];

  // Use state to store card data
  const [cards] = useState(initialCards);

  return (
    <div className="container mx-auto p-2">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-poppins text-2xl">
                {card.title}
              </CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex justify-center items-center">
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-[300px] object-cover rounded-md" // Enforcing consistent image size and object-cover
              />
            </CardContent>
            <CardContent>
              <div className="flex items-center justify-between">
                <Receipt className="mr-2" />
                <span>
                  <strong>USD 100</strong> Price
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/edit" className="w-full">
                <Button className="w-full justify-center">
                  Edit <SquarePen className="ml-2" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
