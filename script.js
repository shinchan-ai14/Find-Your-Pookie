// Vanilla JavaScript: choose one of the three pookie images for each search.
(() => {
  const matches = [
    { src: "pookie-nilgai.png", alt: "A nilgai decorated with cute pink bows", title: "Your pookie neelgai has arrived 💗", description: "Iconic energy, pink bows, and absolutely unmatched rizz." },
    { src: "pookie-dog.jpg", alt: "A dog wearing glasses", title: "Your intellectual pookie has arrived 💗", description: "Smart, slightly chaotic, and probably judging your playlist." },
    { src: "pookie-tn-singh.png", alt: "T. N. Singh with pink bows and blush", title: "Pookie T. N. Singh has arrived 💗", description: "A certified main-character entrance. The algorithm has spoken." }
  ];
  const image = document.getElementById("matchImage");
  const title = document.querySelector(".result-card h2");
  const description = document.querySelector(".match-description");
  const searchLink = document.querySelectorAll('a[href="#search"]');
  let lastChoice = -1;
  searchLink.forEach(link => link.addEventListener("click", () => {
    let choice;
    do { choice = Math.floor(Math.random() * matches.length); } while (matches.length > 1 && choice === lastChoice);
    lastChoice = choice;
    const match = matches[choice];
    image.src = match.src;
    image.alt = match.alt;
    title.textContent = match.title;
    description.textContent = match.description;
  }));
})();
