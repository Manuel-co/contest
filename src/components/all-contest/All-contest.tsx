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
import { Bot, } from 'lucide-react';

import 'react-datepicker/dist/react-datepicker.css';
import { NotificationBing, Lock, Unlock, UsdCoin, Profile2User  } from 'iconsax-react';

export default function AllContest() {
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
    {
      id: 5,
      title: 'Farm Contest',
      description: 'Farm Contest',
      imgSrc: '/coinflip.gif',
      locked: true,
    },
    {
      id: 6,
      title: 'Farm Contest',
      description: 'Farm Contest',
      imgSrc: '/coinflip.gif',
      locked: true,
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
    <div className="container mx-auto px-4 py-8">
      {/* Center the card container */}
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-6 max-w-screen-lg">
          {/* Map over the cards array to render each card */}
          {cards.map((card) => (
            <div key={card.id} className="w-full max-w-xs mb-6">
              <Card className="shadow-lg rounded-lg border">
                <CardHeader>
                  <div className="flex items-center">
                    <div className="w-1/4">
                      <img
                        src={card.imgSrc}
                        alt={card.title}
                        className="w-full h-auto rounded-md"
                      />
                    </div>
                    <div className="ml-4 w-3/4">
                      <CardTitle className="font-poppins text-xl font-semibold">
                        {card.title}
                      </CardTitle>
                      <CardDescription>
                        <button className=" transition-colors">
                          {card.description}
                        </button>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Bot className="" />
                    <span className="ml-2 text-sm ">
                      <strong>0/10</strong> Players
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Profile2User className="" />
                    <span className="ml-2 text-sm ">
                      <strong>0/10</strong> Bots
                    </span>
                  </div>
                  <div className="flex items-center">
                    <UsdCoin className="" />
                    <span className="ml-2 text-sm ">
                      <strong>0/10</strong> Receipts
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <NotificationBing className="" />
                      <span className="ml-2 text-sm ">
                        <strong>0/10</strong> Subscribed
                      </span>
                    </div>
                    <span className="text-sm ">Starting soon</span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-3 sm:space-y-0">
                  <button
                    className={`w-full flex items-center justify-center border-2 rounded-lg ${
                      card.locked ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                    } hover:opacity-90 px-5 py-2 transition-all duration-200 ease-in-out`}
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
                  <button className="w-full flex items-center justify-center border-2  rounded-lg  px-5 py-2  transition-all duration-200 ease-in-out">
                    Notify <NotificationBing className="ml-2" />
                  </button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
