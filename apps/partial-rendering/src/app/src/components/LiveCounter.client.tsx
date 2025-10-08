"use client";
import React, { useEffect, useState } from "react";


const LiveCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);


  useEffect(() => {
    const id = setInterval(() => setCount((c) => c + 1), 1000);
    return () => clearInterval(id);
  }, []);


  return (
    <div className="p-4 rounded border bg-indigo-50">
      <div className="text-sm">Live counter (client):</div>
      <div className="text-2xl font-mono mt-1">{count}</div>
    </div>
  );
};


export default LiveCounter;