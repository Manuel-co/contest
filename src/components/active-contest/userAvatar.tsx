'use client';

import { useEffect, useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Progress } from '@radix-ui/react-progress';

import { Button } from '../ui/button';

const WinningProduct = () => {
  const [progress, setProgress] = useState(80); // Example progress value, 80%

  // Simulate countdown for demo purposes
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" w-[80%] h-[80%] flex flex-col items-center justify-center">
      <div className="rounded-lg p-6 text-center shadow-lg">
        {/* Avatar section */}
        <div className="flex flex-col items-center">
          <Avatar className="w-24 h-24 rounded-full">
            <AvatarImage
              src="https://github.com/Manuel-co.png" // Replace with the real image URL
              alt="Avatar"
              className="rounded-full"
            />
            <AvatarFallback className="rounded-full flex items-center justify-center ">
              Clone
            </AvatarFallback>
          </Avatar>
          <span className="mt-4 text-lg font-semibold">Clone</span>
        </div>

        {/* Winning message */}
        <p className="text-sm mt-2">Winning the product in</p>

        {/* Progress section */}
        <div className="mt-4">
          <Progress
            value={progress}
            className="relative w-40 h-2  rounded-full"
          >
            <div
              className="absolute h-2 bg-gradient-to-r to-red-500 from-green-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </Progress>
          <p className="mt-2 text-lg font-semibold">
            {Math.max(0, (100 - progress) / 10).toFixed(0)} Secs
          </p>
        </div>
        <div className='flex justify-evenly'>
          <Button>Stop</Button>
          <Button>Restart</Button>
        </div>
      </div>
    </div>
  );
};

export default WinningProduct;
