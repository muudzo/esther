const story = [
  {
    title: "How We Met",
    text: "We first met 9 years ago. I was just a young boy...",
    emoji: "👦🏾👧🏾",
  },
  {
    title: "Reunion",
    text: "We met again when I had entered my manhood.",
    emoji: "👨🏾‍❤️‍👩🏾",
  },
  {
    title: "Food Adventures",
    text: "We love getting food together!",
    emoji: "👨🏾‍🍳👩🏾‍🍳",
  },
  {
    title: "Favorite Date",
    text: `Our favorite date? It has to be that coffee date before I flew back here.\nIt felt like a season finale—two souls lingering over warm cups,\ntrying to slow down time, holding onto every word, every smile.\nIn that little café, the world faded away, and it was just us,\nwriting a memory I'll replay forever.`,
    emoji: "☕💑🏾",
  },
  {
    title: "Her Favorite Picture",
    text: `<img src='favorite.jpg' alt='Mwao smiling in the sun' class='fav-pic' />\n<span class='fav-caption'>you love it so i love it too i guess lol you know me and how i am</span>`,
    emoji: "📸",
  },
  {
    title: "Playful Arguments",
    text: "We argue like brother and sister!",
    emoji: "👨🏾‍🦱👩🏾‍🦱",
  },
  {
    title: "To Mwao",
    text: `Mwao, thank you for holding it down for me while I figure out how to navigate this life thing for the both of us.\nI know I may not say it enough, but I really appreciate it.\nThank you for being patient and an understanding girlfriend (future tense lol, you'll get it).\nHope the Lord blesses you with many more years. Stay amazing, don't let anyone dim your light.\nLove you 4L.`,
    emoji: "❤️",
  },
];

let index = 0;

function renderStory() {
  const root = document.getElementById('love-story-root');
  root.innerHTML = `
    <div class="love-story-container">
      <h1>Happy Birthday, Mwao! 🎉</h1>
      <div class="story-section">
        <h2>${story[index].title}</h2>
        <div class="heart">${story[index].emoji}</div>
        <p style="white-space: pre-line">${story[index].text}</p>
      </div>
      <div>
        <button class="button" onclick="prevStory()" ${index === 0 ? 'disabled' : ''}>Previous</button>
        <button class="button" onclick="nextStory()" ${index === story.length - 1 ? 'disabled' : ''}>Next</button>
      </div>
    </div>
    <div class="hearts-bg" id="hearts-bg"></div>
  `;
  floatHearts();
}

window.prevStory = function() {
  if (index > 0) index--;
  renderStory();
};
window.nextStory = function() {
  if (index < story.length - 1) index++;
  renderStory();
};

function floatHearts() {
  const heartsBg = document.getElementById('hearts-bg');
  if (!heartsBg) return;
  heartsBg.innerHTML = '';
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart-float';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = (Math.random() * 6) + 's';
    heart.textContent = '💖';
    heartsBg.appendChild(heart);
  }
}

document.addEventListener('DOMContentLoaded', renderStory); 