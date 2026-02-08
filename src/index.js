import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";
import "./styles.css";

const content = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

// init load
content.innerHTML = loadHome();
homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.innerHTML = loadHome();
});
menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.innerHTML = loadMenu();
});
contactBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.innerHTML = loadContact();
});
