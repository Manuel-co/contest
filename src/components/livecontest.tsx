import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Users, Gamepad2 } from 'lucide-react';
import { Game, Profile2User  } from 'iconsax-react';
// Sample data for the cards
const cardData = [
  {
    title: "Active Users",
    icon: <Profile2User size="30" />,
    count: "15,000",
  },
  {
    title: "Today’s Contest",
    icon: <Game size="32" />,
    count: "20",
  },
  {
    title: "Monthly Signup",
    icon: <Profile2User size={30} />,
    count: "+1300",
  },
  {
    title: "Total Users",
    icon: <Profile2User size={30} />,
    count: "50,000",
  },
];

export function Contestcard() {
  return (
    <div className="grid grid-cols-2 gap-6 mt-4">
      {cardData.map((card, index) => (
        <Card key={index} className="w-full">
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center space-x-4">
            {card.icon}
            <span>{card.count}</span>
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>
      ))}
    </div>
  );
}
