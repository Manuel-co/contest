'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Bot, User, Gamepad2, Receipt, Bell, Lock, Unlock } from 'lucide-react';

import 'react-datepicker/dist/react-datepicker.css';

export default function Allcontest() {
  // Initial state for cards
  const initialCards = [
    {
      id: 1,
      title: 'Farm Contest',
      description: 'Farm Contest',
      imgSrc: '/coinflip.gif',
      locked: true,
    },
    {
      id: 2,
      title: 'Farm Contest',
      description: 'Farm Contest',
      imgSrc: '/coinflip.gif',
      locked: true,
    },
    {
      id: 3,
      title: 'Farm Contest',
      description: 'Farm Contest',
      imgSrc: '/coinflip.gif',
      locked: true,
    },
    {
      id: 4,
      title: 'Farm Contest',
      description: 'Farm Contest',
      imgSrc: '/coinflip.gif',
      locked: false,
    },
  ];

  // Use state to store card data, with lock/unlock state
  const [cards, setCards] = useState(initialCards);

  // Handler to toggle the lock/unlock state for a card
  const toggleLock = (id: number) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, locked: !card.locked } : card
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      {/* Adjust the grid for 1 card in mobile, 3 cards in desktop */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {/* Map over the cards array to render each card */}
        {cards.map((card) => (
          <Card key={card.id} className="w-full">
            <CardHeader>
              <div className="flex items-center">
                <div className="w-1/4">
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="w-full h-auto"
                  />
                </div>
                <div className="ml-4 w-3/4">
                  <CardTitle className="font-poppins text-2xl">
                    {card.title}
                  </CardTitle>
                  <CardDescription>
                    <button className="rounded-md outline-1">
                      {card.description}
                    </button>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex mb-2">
                <Bot />
                <span className="ml-2">
                  {' '}
                  <strong>0/10 </strong>players
                </span>
              </div>
              <div className="flex mb-2">
                <User />
                <span className="ml-2">
                  {' '}
                  <strong>0/10 </strong>Bots
                </span>
              </div>
              <div className="flex mb-2">
                <Receipt />
                <span className="ml-2">
                  {' '}
                  <strong>0/10 </strong>players
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex">
                  <Bell />
                  <span className="ml-2">
                    {' '}
                    <strong>0/10 </strong>Subscribed
                  </span>
                </div>
                <span className="flex justify-end">Starting: </span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between mx-auto">
              <button
                className={`flex items-center border-2 rounded-md ${
                  card.locked ? 'bg-red-500' : 'bg-green-500'
                } hover:border-red-500 px-5 py-3`}
                onClick={() => toggleLock(card.id)}
              >
                {card.locked ? (
                  <>
                    <Unlock className="mr-2" /> Unlock
                  </>
                ) : (
                  <>
                    <Lock className="mr-2" /> Lock
                  </>
                )}
              </button>
              <button className="flex items-center border-2 rounded-md hover:border-red-500 px-5 py-3">
                Notify <Bell className="ml-2" />
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
