// components/CounterButtons.js
"use client"
import { useState } from 'react';

export default function CounterButtons() {
  const [likes, setLikes] = useState(0);
  const [subscribes, setSubscribes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleSubscribe = () => {
    setSubscribes(subscribes + 1);
  };

  return (
    <div>
      <button onClick={handleLike}>Like ({likes})</button>
      <button onClick={handleSubscribe}>Subscribe ({subscribes})</button>
    </div>
  );
}