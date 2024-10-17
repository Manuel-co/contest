// import React, { useState, useEffect } from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// // Countdown Timer Hook
// const useCountdown = (targetDate) => {
//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft(calculateTimeLeft(targetDate));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [targetDate]);

//   return timeLeft;
// };

// // Helper function to calculate time left
// const calculateTimeLeft = (targetDate) => {
//   const difference = +new Date(targetDate) - +new Date();
//   let timeLeft = {};

//   if (difference > 0) {
//     timeLeft = {
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((difference / 1000 / 60) % 60),
//       seconds: Math.floor((difference / 1000) % 60),
//     };
//   }

//   return timeLeft;
// };

// export function Contestcard({ contestTitle, contestDescription, startDate }) {
//   const countdown = useCountdown(startDate);

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>{contestTitle}</CardTitle>
//         <CardDescription>{contestDescription}</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <p>Contest starts in:</p>
//         <div className="countdown">
//           {countdown.days !== undefined ? (
//             <>
//               <span>{countdown.days}d</span>{" "}
//               <span>{countdown.hours}h</span>{" "}
//               <span>{countdown.minutes}m</span>{" "}
//               <span>{countdown.seconds}s</span>
//             </>
//           ) : (
//             <p>Contest has started!</p>
//           )}
//         </div>
//       </CardContent>
//       <CardFooter>
//         <p>Prepare for the contest!</p>
//       </CardFooter>
//     </Card>
//   );
// }


import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Contestcard() {
    
    
      return (
        <Card>
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
           
          </CardContent>
          <CardFooter>
            <p>Prepare for the contest!</p>
          </CardFooter>
        </Card>
      );
    }
    