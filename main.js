//console.log("connection check")
import menu from "./database.js";
//console.log(menu)

const menuContainer = document.getElementById("menu-container");
//console.log(menuContainer)
const filterButton = document.querySelectorAll(".filter-btn");
//console.log(filterButton)

document.addEventListener("DOMContentLoaded", () => {
  displayMenu(menu);
});

function displayMenu(menuItems) {
  //console.log(menuItems);
  let dispMenu = menuItems.map(
    (menuItem) => `
        <div
          class="d-flex align-items-center gap-3 flex-column flex-md-row my-2"
          id="card"
        >
          <img
            src="${menuItem.img}"
            alt=""
            id="image"
            class="rounded shadow"
          />
          <div>
            <div class="d-flex justify-content-between">
              <h5>${menuItem.title}</h5>
              <p>${menuItem.price} &#8378;</p>
            </div>
            <p class="lead">
              ${menuItem.desc}
            </p>
          </div>
        </div>
 `
  );
  //console.log(titles)
  dispMenu = dispMenu.join(" ");
  menuContainer.innerHTML = dispMenu;
}

filterButton.forEach((button) => {
  //console.log(button)
  button.addEventListener("click", (e) => {
    const category = e.target.dataset.id;
    //console.log(category);
    searchCategory(category);
  });
});

function searchCategory(categoryInfo) {
  //console.log(categoryInfo);
  const filteredMenu = menu.filter((menuItem) => {
    if (categoryInfo === menuItem.category) return menuItem;
  });
  //console.log(filteredMenu);

  if(categoryInfo==="all"){
    displayMenu(menu)
  }else{
    displayMenu(filteredMenu)
  }

}
