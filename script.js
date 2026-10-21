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
  const progress = document.getElementById("loadingProgress");
  const percent = document.getElementById("progressPercent");
  const progressLabel = document.getElementById("progressLabel");
  const consoleMessage = document.getElementById("consoleMessage");
  const steps = Array.from(document.querySelectorAll(".research-step"));
  const statuses = ["SCANNING", "ANALYSING", "CROSS-CHECK", "VERIFYING"];
  const stageLabels = ["SCANNING CAMPUS PROFILES", "MAPPING PERSONALITY VIBES", "CROSS-CHECKING COMPATIBILITY", "RUNNING FINAL AUDIT"];
  let lastChoice = -1;
  let scanTimer = null;
  searchLink.forEach(link => link.addEventListener("click", () => {
    let choice;
    do { choice = Math.floor(Math.random() * matches.length); } while (matches.length > 1 && choice === lastChoice);
    lastChoice = choice;
    const match = matches[choice];
    image.src = match.src;
    image.alt = match.alt;
    title.textContent = match.title;
    description.textContent = match.description;
    if (scanTimer) clearInterval(scanTimer);
    let started = Date.now();
    progress.style.width = "0%";
    percent.textContent = "00%";
    progressLabel.textContent = stageLabels[0];
    consoleMessage.textContent = "QUERY ID: PK-07-LOVE · INITIALISING";
    steps.forEach((step, i) => {
      step.classList.remove("is-active", "is-done");
      step.querySelector("em").textContent = statuses[i];
    });
    steps[0]?.classList.add("is-active");
    scanTimer = setInterval(() => {
      const elapsed = Date.now() - started;
      const pct = Math.min(100, Math.floor((elapsed / 6400) * 100));
      progress.style.width = pct + "%";
      percent.textContent = String(pct).padStart(2, "0") + "%";
      const stage = Math.min(3, Math.floor(pct / 25));
      progressLabel.textContent = pct >= 100 ? "MATCH CONFIRMED" : stageLabels[stage];
      steps.forEach((step, i) => {
        step.classList.toggle("is-active", i === stage && pct < 100);
        step.classList.toggle("is-done", i < stage || pct >= 100);
        if (i < stage || pct >= 100) step.querySelector("em").textContent = "COMPLETE";
        else step.querySelector("em").textContent = statuses[i];
      });
      consoleMessage.textContent = pct >= 100 ? "MATCH FOUND · PK-07-LOVE" : "QUERY ID: PK-07-LOVE · SCAN " + String(pct).padStart(2, "0") + "%";
      if (pct >= 100) clearInterval(scanTimer);
    }, 80);
  }));
})();
