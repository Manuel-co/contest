import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Gamepad2, Users } from 'lucide-react';

// Data for the cards
const cardData = [
  {
    title: "Today’s User",
    icon: <Users size={30} />,
    count: "25,000",
  },
  {
    title: "Today’s Contest",
    icon: <Gamepad2 size={30} />,
    count: "300",
  },
  {
    title: "New Users",
    icon: <Users size={30} />,
    count: "+1300",
  },
];

export function Analyticscard() {
  return (
    <div className="flex flex-wrap justify-evenly space-y-6 md:space-y-0 md:space-x-6">
      {cardData.map((card, index) => (
        <div key={index} className="flex-1 min-w-[250px] max-w-[350px]">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
              {card.icon}
              <span>{card.count}</span>
            </CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}
