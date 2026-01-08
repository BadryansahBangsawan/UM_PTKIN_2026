"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownProps {
  targetDate: Date;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="min-w-[60px] px-3 py-2 bg-primary text-primary-foreground rounded-lg text-2xl font-bold">
        {String(value).padStart(2, "0")}
      </div>
      <span className="text-xs mt-1 text-muted-foreground uppercase">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Clock className="h-4 w-4" />
        <span className="text-sm font-medium">PENDAFTARAN BERAKHIR DALAM:</span>
      </div>
      <div className="flex gap-3 md:gap-4">
        <TimeBlock value={timeLeft.days} label="Hari" />
        <TimeBlock value={timeLeft.hours} label="Jam" />
        <TimeBlock value={timeLeft.minutes} label="Menit" />
        <TimeBlock value={timeLeft.seconds} label="Detik" />
      </div>
    </div>
  );
}
