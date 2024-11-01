'use client';

import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Progress } from '@radix-ui/react-progress';
import { Button } from '../ui/button';

// Importing icons from Lucide
import { Rewind, Play, StopCircle } from 'lucide-react';

const WinningProduct = () => {
  const [progress, setProgress] = useState(70); // Countdown starts from 7 seconds (70% progress)
  const [isCounting, setIsCounting] = useState(true); // State to track if the countdown is running
  const [isStopped, setIsStopped] = useState(false); // State to track if the contest is stopped

  // Countdown logic
  useEffect(() => {
    if (isCounting && progress > 0 && !isStopped) {
      const timer = setInterval(() => {
        setProgress((prev) => Math.max(0, prev - 1)); // Decrease progress by 1% each second
      }, 100);

      return () => clearInterval(timer);
    }
  }, [isCounting, progress, isStopped]);

  // Restart the countdown
  // const handleRestart = () => {
  //   setIsStopped(false); // Ensure contest isn't stopped
  //   setIsCounting((prev) => !prev); // Toggle between pause and restart
  // };
  const handleRestart = () => {
    setIsStopped(false); // Ensure contest isn't stopped
    setProgress(70); // Reset progress to the initial value (70%)
    setIsCounting(true); // Ensure the countdown starts again
  };

  // Stop the countdown
  const handleStop = () => {
    setIsStopped(true); // Stop the contest completely
    setIsCounting(false); // Pause the countdown
    setProgress(0); // Set progress to 0
  };

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
            {(progress / 10).toFixed(0)} Secs
          </p>
        </div>

        {/* Buttons section */}
        <div className="flex justify-evenly mt-4">
          <Button onClick={handleStop}>
            <StopCircle className="mr-2 h-4 w-4" /> Stop
          </Button>
          <Button onClick={handleRestart}>
            {isCounting ? (
              <>
                <Rewind className="mr-2 h-4 w-4" /> Restart
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" /> Start
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WinningProduct;
