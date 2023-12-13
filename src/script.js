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
  document.getElementById("program").innerHTML = content.navbar[1];
  document.getElementById("sponsors").innerHTML = content.navbar[2];
  document.getElementById("contact").innerHTML = content.footer[0];
  document.getElementById("follow").innerHTML = content.footer[1];
  document.getElementById("links").innerHTML = content.footer[2];
  document.getElementById("rights").innerHTML = content.footer[3];
}

//function to set the language in page
async function changeLanguage(page, language, callback) {
  //validates localStorage is not already settled before with a language non-declarated
  //language == "en" || "es"
  //if NOT language = "en"
  if (language !== "en" && language !== "es") language = "en";
  
  //sets language defined
  localStorage.setItem("language", language);

  // Check if content exists in localStorage and has a valid 'secret' property
  const storedContent = localStorage.getItem(`content-${language}`);

  

  try {
    const content = JSON.parse(storedContent);
    if (content && (content.secret == "es-cuboplus" || content.secret == "en-cuboplus")) {
      // Content is valid, proceed with the callback
      setElementsNavbarAndFooter(content.layout);
      callback(content[page]);
      return;
    }
  } catch (error) {
    // Handle the error, e.g., clear localStorage and fetch content again
    localStorage.removeItem(`content-${language}`);
  }

  let res = "";

  // If content does not exist or does not have a valid 'secret', fetch and store it
  if (window.location.pathname != "/src/index.html") {
      res = await fetch(`../content/content-${language}.json`);
  } else {
      res = await fetch(`./content/content-${language}.json`);
  }
  const res1 = await res.json();

  localStorage.setItem(`content-${language}`, JSON.stringify(res1));

  setElementsNavbarAndFooter(res1.layout);
  callback(res1[page]);
}