// JavaScript para manejar el evento de clic en el botón de menú
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    var navbar = document.getElementById('navbar-default');
    navbar.classList.toggle('hidden');
});

var themeToggleDarkIcon = document.getElementById(
    "theme-toggle-dark-icon"
  );
  var themeToggleLightIcon = document.getElementById(
    "theme-toggle-light-icon"
  );

  // Change the icons inside the button based on previous settings
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleLightIcon.classList.remove("hidden");
  } else {
    themeToggleDarkIcon.classList.remove("hidden");
  }

  var themeToggleBtn = document.getElementById("theme-toggle");

  themeToggleBtn.addEventListener("click", function () {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");

    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });

var esButton = document.getElementById("es-button");
var enButton = document.getElementById("en-button");

function setElementsNavbarAndFooter(content) {
  document.getElementById("about").innerHTML = content.navbar[0];
  document.getElementById("dropdownNavbarLink").innerHTML = content.navbar[1];
  document.getElementById("documentary").innerHTML = content.navbar[2];
  document.getElementById("journey").innerHTML = content.navbar[3];
  document.getElementById("alliances").innerHTML = content.navbar[4];
  document.getElementById("sponsors").innerHTML = content.navbar[5];
  document.getElementById("contact").innerHTML = content.footer[0];
  document.getElementById("follow").innerHTML = content.footer[1];
  document.getElementById("links").innerHTML = content.footer[2];
  document.getElementById("rights").innerHTML = content.footer[3];
}

//function to set the 
async function changeLanguage(page, language, callback) {
  //validates localStorage is not already settled before with a language non-declarated
  //language == "en" || "es"
  //if NOT language = "en"
  if (language != "en" && language != "es") language = "en";

  localStorage.setItem("language", language);

  const response = await fetch(`./content/${page}-${language}.json`);
  const content = await response.json();

  setElementsNavbarAndFooter(content);

  callback(content);
}