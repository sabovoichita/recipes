// function $(selector) {
//   return document.querySelector(selector);
// }

let allRecepies = [];

function createHeader() {
  return `
     <!-- Header -->
  <header id="portfolio">
    <a href="#"><img src="images/logo.png" style="width:65px; height:65px;" class="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"></a>
    <span class="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onclick="w3_open()"><i class="fa fa-bars"></i></span>
    <div class="w3-container">
    <h1><b>Voichița's Recepies</b></h1>
    <div class="w3-section w3-bottombar w3-padding-16">
      🔎 <input type="search" name="Search" id="search" placeholder="Searching..." /> <label for="search"></label>
      <span class="w3-margin-right">Filter:</span> 
      <button class="w3-button w3-black" id="all">ALL</button>
      <button class="w3-button w3-white" id="cakes">🎂 Cakes</button>
      <button class="w3-button w3-white" id="iceCreams">🍨 Ice creams</button>
      <button class="w3-button w3-white" id="mains">🍽 Main</button>
      <button class="w3-button w3-white" id="mixed">🍴 Mixed</button>
    </div>
    </div>
  </header>
    `;
}

function createSidebar() {
  return `
    <!-- Sidebar/menu -->
<nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index:3;width:300px;" id="mySidebar"><br>
  <div class="w3-container">
    <a href="#" onclick="w3_close()" class="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
      <i class="fa fa-remove"></i>
    </a>
    <img src="images/logo.png" style="width:90%;width:65px; height:65px;" class="w3-circle"><br><br>
    
  </div>
  <div class="w3-bar-block">
    <a href="#portfolio" onclick="w3_close()" class="w3-bar-item w3-button w3-padding w3-text-teal"><i class="fa fa-th-large fa-fw w3-margin-right"></i>RECEPIES
    
    <ul class="w3-text-grey">
    <li id="all1">ALL</li>
    <li id="cakes1">🎂 Cakes</li>
    <li id="iceCreams1">🍨 IceCreams</li>
    <li id="mains1">🍽 Main</li>
    <li id="mixed1">🍴Mixed</li>
    </ul></a> 
    <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button w3-padding"><i class="fa fa-user fa-fw w3-margin-right"></i>ABOUT</a> 
    <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button w3-padding"><i class="fa fa-envelope fa-fw w3-margin-right"></i>CONTACT</a>
  </div>
  <div class="w3-panel w3-large">
    <i class="fa fa-facebook-official w3-hover-opacity"></i>
    <i class="fa fa-instagram w3-hover-opacity"></i>
    <i class="fa fa-linkedin w3-hover-opacity"></i>
  </div>
</nav>
    `;
}

function createOverlay() {
  return `
    <div class="w3 w3-content" style="max-width: 1600px">
    <!-- Overlay effect when opening sidebar on small screens -->
    <div
      class="w3-overlay w3-hide-large w3-animate-opacity"
      onclick="w3_close()"
      style="cursor: pointer"
      title="close side menu"
      id="myOverlay"
    >
    </div>
    </div>`;
}

function createContent() {
  return `
     <!-- !PAGE CONTENT! -->
     <div class="main" >
    <div class="w3-main" style="margin-left: 300px">
         <div class="w3-row-padding">
        <!-- content will be injected here -->
         </div>
    </div>
    </div>
    `;
}

function createPagination() {
  return `
     <!-- Pagination -->
      <div class="w3-center w3-padding-32">
        <div class="w3-bar">
          <a href="#" class="w3-bar-item w3-button w3-hover-black">«</a>
          <a href="#" class="w3-bar-item w3-black w3-button">1</a>
          <a href="#" class="w3-bar-item w3-button w3-hover-black">2</a>
          <a href="#" class="w3-bar-item w3-button w3-hover-black">3</a>
          <a href="#" class="w3-bar-item w3-button w3-hover-black">4</a>
          <a href="#" class="w3-bar-item w3-button w3-hover-black">»</a>
        </div>
      </div>
    `;
}

function aboutMe() {
  return `
    <div class="w3-container w3-padding-large" >
        <h4><b>About Me & Recepies</b></h4>
        <p>
          Just me, myself and I, exploring the universe of unknownment. I have a
          heart of love and an interest of exploring new tastes. These are my
          most cooked recepies I have. Help me add some more...
        </p>
        <hr />

        <h4>Technical Skills</h4>
        <!-- Progress bars / Skills -->
        <p>Photography</p>
        <div class="w3-grey">
          <div
            class="w3-container w3-dark-grey w3-padding w3-center"
            style="width: 95%"
          >
            95%
          </div>
        </div>
        <p>Web Design</p>
        <div class="w3-grey">
          <div
            class="w3-container w3-dark-grey w3-padding w3-center"
            style="width: 85%"
          >
            85%
          </div>
        </div>
        <p>Cooking</p>
        <div class="w3-grey">
          <div
            class="w3-container w3-dark-grey w3-padding w3-center"
            style="width: 80%"
          >
            80%
          </div>
        </div>
        <hr />
      </div>
    `;
}

function contactSection() {
  return `
    <!-- Contact Section -->
    <div class="w3-container w3-padding-large w3-grey">
      <h4 id="contact"><b>Contact Me</b></h4>
      <div
        class="w3-row-padding w3-center w3-padding-24"
        style="margin: 0 -16px"
      >
        <div class="w3-third w3-dark-grey">
          <p><i class="fa fa-envelope w3-xxlarge w3-text-light-grey"></i></p>
          <p>truscai_voichita@yahoo.com</p>
        </div>
        <div class="w3-third w3-teal">
          <p><i class="fa fa-map-marker w3-xxlarge w3-text-light-grey"></i></p>
          <p>Torreblanca, Spain</p>
        </div>
        <div class="w3-third w3-dark-grey">
          <p><i class="fa fa-phone w3-xxlarge w3-text-light-grey"></i></p>
          <p>123456789</p>
        </div>
      </div>
      <hr class="w3-opacity" />
      <form action="/action_page.php" target="_blank">
        <div class="w3-section">
          <label>Name</label>
          <input class="w3-input w3-border" type="text" name="Name" required />
        </div>
        <div class="w3-section">
          <label>Email</label>
          <input class="w3-input w3-border" type="text" name="Email" required />
        </div>
        <div class="w3-section">
          <label>Message</label>
          <input
            class="w3-input w3-border"
            type="text"
            name="Message"
            required
          />
        </div>
        <button type="submit" class="w3-button w3-black w3-margin-bottom">
          <i class="fa fa-paper-plane w3-margin-right"></i>Send Message
        </button>
      </form>
    </div>
    <!-- End page content -->
    `;
}

function createFooter() {
  return `
    <!-- Footer -->
  <footer class="w3-container w3-padding-32 w3-dark-grey">
      <div class="w3-row-padding">
        <div class="w3-third">
          <h3>FOOTER</h3>
          <p>Contains recepies from Tatiana</p>
          <p>
            Powered by
            <a href="https://github.com/sabovoichita/" target="_blank"
              >Voichița</a
            >
          </p>
        </div>

        <div class="w3-third">
          <h3>BLOG POSTS</h3>
          <ul class="w3-ul w3-hoverable">
            <li class="w3-padding-16">
              <img
                src="images/s-1.jpg"
                class="w3-left w3-margin-right"
                style="width: 50px; height: 50px"
              />
              <span class="w3-large">Newest recepies</span><br />
              <span>2024</span>
            </li>
            <li class="w3-padding-16">
              <img
                src="images/s-1.jpg"
                class="w3-left w3-margin-right"
                style="width: 50px; height: 50px"
              />
              <span class="w3-large">...</span><br />
              <span>...</span>
            </li>
          </ul>
        </div>

        <div class="w3-third">
          <h3>POPULAR TAGS</h3>
          <p>
            <span class="w3-tag w3-black w3-margin-bottom">Travel</span>
            <span class="w3-tag w3-grey w3-small w3-margin-bottom"
              >New York</span
            >
            <span class="w3-tag w3-grey w3-small w3-margin-bottom">London</span>
            <span class="w3-tag w3-grey w3-small w3-margin-bottom">Bake</span>
            <span class="w3-tag w3-grey w3-small w3-margin-bottom"
              >Tatiana</span
            >
            <span class="w3-tag w3-grey w3-small w3-margin-bottom">DIY</span>
            <span class="w3-tag w3-grey w3-small w3-margin-bottom">Ideas</span>
            <span class="w3-tag w3-grey w3-small w3-margin-bottom">Baby</span>
            <span class="w3-tag w3-grey w3-small w3-margin-bottom">Family</span>
            <span class="w3-tag w3-grey w3-small w3-margin-bottom">News</span>
            <span class="w3-tag w3-grey w3-small w3-margin-bottom"
              >Clothing</span
            >
            <span class="w3-tag w3-grey w3-small w3-margin-bottom"
              >Shopping</span
            >
            <span class="w3-tag w3-grey w3-small w3-margin-bottom">Sports</span>
            <span class="w3-tag w3-grey w3-small w3-margin-bottom">Games</span>
          </p>
        </div>
      </div>
    </footer>
  <div class="w3-black w3-center w3-padding-24">Designed by <a href="https://github.com/sabovoichita/" title="W3.CSS" target="_blank" class="w3-hover-opacity">Voichița</a></div>

      `;
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

async function loadImages() {
  try {
    const response = await fetch("content.json");
    const images = await response.json();
    allRecepies = images;
    injectImages(images);
    addEventListeners();
  } catch (error) {
    console.error("Error fetching", error);
  }
}

function injectImages(images, type = null, search = "") {
  const content = document.querySelector(".w3-row-padding");

  // Clear existing content
  content.innerHTML = "";

  search = search.toLowerCase();

  const filteredImages = images.filter((image) => {
    const matchesType = type ? image.type === type : true;
    const matchesSearch =
      image.src.toLowerCase().includes(search) ||
      image.alt.toLowerCase().includes(search) ||
      image.title.toLowerCase().includes(search) ||
      image.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(search)
      );
    return matchesType && matchesSearch;
  });

  // Loop through the filtered images array and create HTML for each image
  filteredImages.forEach((image) => {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add(
      "w3-third",
      "w3-container",
      "w3-margin-bottom"
    );

    imageContainer.innerHTML = `
          <img src="${image.src}" alt="${
      image.alt
    }" style="width: 100%" class="w3-hover-opacity"/>
                <div class="w3-container w3-white">
                    <p><b>${image.title}</b></p>
                    <details>
                    <summary><b>Ingredients</b></summary>
                    <ul>
                    </br> 
                        ${image.ingredients
                          .map((ingredient) => `<li>${ingredient}</li>`)
                          .join("")}
                        </br> 
                    </ul>
                    </details>
                </div>
                `;

    content.appendChild(imageContainer);
  });
}

function addEventListeners() {
  let currentType = null;
  let currentSearch = "";

  document.querySelector("#search").addEventListener("input", (e) => {
    const search = e.target.value;
    console.log("search", search);
    let currentSearch = search;

    injectImages(allRecepies, currentType, currentSearch);
  });

  document
    .querySelectorAll("#all, #cakes, #iceCreams, #mains, #mixed")
    .forEach((button) => {
      button.addEventListener("click", (e) => {
        currentType = e.target.id === "all" ? null : e.target.id;
        injectImages(allRecepies, currentType, currentSearch);
      });
    });

  document
    .querySelectorAll("#all1, #cakes1, #iceCreams1, #mains1, #mixed1")
    .forEach((button) => {
      button.addEventListener("click", (e) => {
        currentType =
          e.target.id === "all1" ? null : e.target.id.replace("1", "");
        injectImages(allRecepies, currentType, currentSearch);
      });
    });

  // Initial load of all recipes
  injectImages(allRecepies);
}

function createPhotoBook() {
  return `
    <div id="magazine">
      <div style="background-image: url(images/logo.png)"><h3>Start</h3></div>
      <div style="background-image: url(images/1.jpg)"><h3>Golda's cookies</h3></div>
      <div style="background-image: url(images/2.jpg)"><h3>Clafoutis</h3></div>
      <div style="background-image: url(images/3.jpg)"><h3>Cupcakes-Tăvălită</h3></div>
      <div style="background-image: url(images/4.jpg)"><h3>Biscuits Cake</h3></div>
      <div style="background-image: url(images/5.jpg)"><h3>Carrot Cake</h3></div>
      <div style="background-image: url(images/6.jpg)"><h3>Brânzoici</h3></div>
      <div style="background-image: url(images/logo.png)"><h3>End</h3></div>
    </div>
    `;
}

function turnFoto() {
  $("#magazine").turn({
    display: "double",
    acceleration: true,
    gradients: !$.isTouch,
    elevation: 50,
    when: {
      turned: function (e, page) {
        // console.log("Current view: ", $(this).turn("view"));
      },
    },
  });

  $(window).bind("keydown", function (e) {
    if (e.keyCode == 37) $("#magazine").turn("previous");
    else if (e.keyCode == 39) $("#magazine").turn("next");
  });
}

function initEvents() {
  document.body.innerHTML =
    createHeader() +
    createSidebar() +
    createOverlay() +
    createContent() +
    createPhotoBook() +
    createPagination() +
    aboutMe() +
    contactSection() +
    createFooter();

  loadImages();
  turnFoto();
}

// initEvents();
document.addEventListener("DOMContentLoaded", (event) => {
  initEvents();
});
