function setElements(content) {
    let testimonials = '';
    content.testimonials.map((testimonial) => {
        testimonials += `<ul class="space-y-8 ">
                            <li class="text-sm leading-6">
                                <div class="relative group">
                                    <div
                                        class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-orange-700 to-orange-600 dark:from-blue-600 dark:to-cyan-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                    </div><a target='_blank' href="${testimonial.href}"
                                        class="cursor-pointer">
                                        <div
                                            class="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-white dark:bg-slate-800 ring-1 dark:ring-gray-900/5">
                                            <div class="flex items-center space-x-4"><img src="${testimonial.img}"
                                                    class="w-12 h-12 bg-center bg-cover border rounded-full"
                                                    alt="Kanye West">
                                                <div>
                                                    <h3 class="text-lg font-semibold  text-blue-900 dark:text-white"><i
                                                            class="fa-brands fa-twitter"></i>${testimonial.name}</h3>
                                                    <p class="text-gray-500 text-md">${testimonial.handle}</p>
                                                    <p class="text-gray-500 text-md mt-2">${testimonial.role}</p>
                                                </div>
                                            </div>
                                            <p class="leading-normal  text-gray-900 dark:text-gray-300 text-md">${testimonial.content}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>`
    });
    document.getElementById("header").innerHTML = content.header;
    document.getElementById("applicants").innerHTML = content.summary[0];
    document.getElementById("mentors").innerHTML = content.summary[1];
    document.getElementById("hours").innerHTML = content.summary[2];
    document.getElementById("students").innerHTML = content.summary[3];
    document.getElementById("graduates").innerHTML = content.summary[4];
    document.getElementById("alliances1").innerHTML = content.summary[5];
    document.getElementById("mission").innerHTML = content.mission[0];
    document.getElementById("mission1").innerHTML = content.mission[1];
    document.getElementById("mission2").innerHTML = content.mission[2];
    document.getElementById("testimonials").innerHTML = content.testimonialssection[0];
    document.getElementById("testimonials1").innerHTML = content.testimonialssection[1];
    document.getElementById("testimonials2").innerHTML = content.testimonialssection[2];
    document.getElementById("testimonials3").innerHTML = testimonials;
}

document.addEventListener("DOMContentLoaded", (e) => {
    changeLanguage("index", localStorage.getItem("language") || "en", (content) => {
        setElements(content);
    });
});

enButton.addEventListener("click", (e) => {
    changeLanguage("index", "en", (content) => {
        setElements(content);
    });
});

esButton.addEventListener("click", (e) => {
    changeLanguage("index", "es", (content) => {
        setElements(content);
    });
});