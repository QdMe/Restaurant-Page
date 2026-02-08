import { initLoad } from "./init_load";
import { menu } from "./menu";
import { contact } from "./contact";
import "./styles.css";
const content = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

// init load
content.innerHTML = initLoad();
homeBtn.addEventListener("click", load_tab);

menuBtn.addEventListener("click", load_tab);

contactBtn.addEventListener("click", load_tab);

function load_tab(e) {
  content.innerHTML = "";
  switch (e.target.id) {
    case "home":
      content.innerHTML = initLoad();
      break;
    case "menu":
      content.innerHTML = menu();
      break;
    case "contact":
      content.innerHTML = contact();
      break;
  }
  console.log(e.target.id);
}
