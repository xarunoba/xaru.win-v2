import React, { useState, useEffect } from 'react';

const PHClock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const phTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Manila',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setTime(phTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span className="font-data text-accent font-bold">{time}</span>;
};

export default PHClock;
