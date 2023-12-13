const setElements = (content) => {
    document.getElementById("sponsors-title").innerHTML = content.titles[0];
    document.getElementById("alliances").innerHTML = content.titles[1];
    document.getElementById("des-sponsors").innerHTML = content.descriptions[0];
    document.getElementById("des-alliances").innerHTML = content.descriptions[1];
}

document.addEventListener("DOMContentLoaded", (e) => {
    changeLanguage("sponsors", localStorage.getItem("language") || "en", (content) => {
        setElements(content);
    });
});

enButton.addEventListener("click", (e) => {
    changeLanguage("sponsors", "en", (content) => {
        setElements(content);
    });
});

esButton.addEventListener("click", (e) => {
    changeLanguage("sponsors", "es", (content) => {
        setElements(content);
    });
});