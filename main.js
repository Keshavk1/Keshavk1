import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";

const app = document.getElementById("app");

app.append(Navbar(), Hero(), About(), Projects(), Contact());

function createStars() {
  const starsContainer = document.getElementById("stars");
  const starCount = 100;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    starsContainer.appendChild(star);
  }
}

createStars();