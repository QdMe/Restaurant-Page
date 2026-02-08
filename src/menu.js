import nuggets from "./menu_pics/nuggets.jpg";
import chicken from "./menu_pics/chicken.jpg";
import big from "./menu_pics/big.jpg";
import double from "./menu_pics/double.jpeg";
import fries from "./menu_pics/fries.jpg";
import corn from "./menu_pics/corn.jpeg";
console.log(nuggets);
export function loadMenu() {
  return `
      <div class="menu">
        <div class="title"><h1>Menu</h1></div>
        <div class="main">
          <div class="section">
            <div class="sect_title">Chicken meals</div>
            <div class="details">
              <div class="item">
                <div class="pic"><img src="${nuggets}" alt=""></div>
                <div class="about_item">
                  <div class="name">10 piece chicken Nuggets Meal</div>
                </div>
                <div class="price">18.00 AED</div>
              </div>

              <div class="item">
                <div class="pic"><img src="${chicken}" alt=""></div>
                <div class="about_item">
                  <div class="name">Albaik 4 Piece Chicken Meal</div>
                </div>
                <div class="price">18.00 AED</div>
              </div>
            </div>
          </div>
          <div class="section">
            <div class="sect_title">Sandwitches</div>
            <div class="details">
              <div class="item">
                <div class="pic"><img src="${big}" alt=""></div>
                <div class="about_item">
                  <div class="name">Big Baik</div>
                </div>
                <div class="price">14.50 AED</div>
              </div>

              <div class="item">
                <div class="pic"><img src="${double}" alt=""></div>
                <div class="about_item">
                  <div class="name">Double Baik</div>
                </div>
                <div class="price">9.00 AED</div>
              </div>
            </div>
          </div>
          <div class="section">
            <div class="sect_title">Sides</div>
            <div class="details">
              <div class="item">
                <div class="pic"><img src="${fries}" alt=""></div>
                <div class="about_item">
                  <div class="name">Crispy French Fries</div>
                </div>
                <div class="price">5.00 AED</div>
              </div>
              <div class="item">
                <div class="pic"><img src="${corn}" alt=""></div>
                <div class="about_item">
                  <div class="name">Corn in a cup</div>
                </div>
                <div class="price">6.00 AED</div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
}
