import React, { useState } from "react";

const story = [
  {
    title: "How We Met",
    text: "We first met 7 years ago. I was just a young boy...",
    emoji: "👦🏾👧🏾",
  },
  {
    title: "Reunion",
    text: "We met again when I had entered my manhood.",
    emoji: "🧑🏾‍🤝‍🧑🏾",
  },
  {
    title: "Food Adventures",
    text: "We love getting food together!",
    emoji: "🍔🍕🍟",
  },
  {
    title: "Playful Arguments",
    text: "We argue like brother and sister!",
    emoji: "😆🤪",
  },
  {
    title: "To Esther",
    text: `Esther, thank you for holding it down for me while I figure out how to navigate this life thing for the both of us.\nI know I may not say it enough, but I really appreciate it.\nThank you for being patient and an understanding girlfriend (future tense lol, you'll get it).\nHope the Lord blesses you with many more years. Stay amazing, don't let anyone dim your light.\nLove you 4L.`,
    emoji: "❤️",
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => Math.min(i + 1, story.length - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <div className="love-story-container">
      <h1>Happy Birthday, Esther! 🎉</h1>
      <div className="story-section">
        <h2>{story[index].title}</h2>
        <div className="heart">{story[index].emoji}</div>
        <p style={{ whiteSpace: "pre-line" }}>{story[index].text}</p>
      </div>
      <div>
        <button className="button" onClick={prev} disabled={index === 0}>
          Previous
        </button>
        <button className="button" onClick={next} disabled={index === story.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
} 