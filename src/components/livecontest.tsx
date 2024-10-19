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

// Sample data for the cards
const cardData = [
  {
    title: "Daily Active Users",
    icon: <Users size={30} />,
    count: "25,000",
  },
  {
    title: "Today’s Contest",
    icon: <Gamepad2 size={30} />,
    count: "20",
  },
  {
    title: "New Users",
    icon: <Users size={30} />,
    count: "+1300",
  },
  {
    title: "Total Users",
    icon: <Users size={30} />,
    count: "15,000",
  },
];

export function Contestcard() {
  return (
    <div className="grid grid-cols-2 gap-6">
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
