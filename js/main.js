const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

const nav_home = document.getElementById("nav-home");
const nav_projects = document.getElementById("nav-projects");
const nav_contact = document.getElementById("nav-contact");

const nav__all = [nav_home, nav_projects, nav_contact];

let selected = "nav-home";

function onPageChange(newSelected) {
    if(selected === newSelected)
        return;
    selected = newSelected;

    nav__all.forEach(it => it.classList.remove("nav-item--current"));
    const item = nav__all.find(it => it.id === newSelected);
    if(item)
        item.classList.add("nav-item--current");
}

document.addEventListener("scroll", () => {
    if(window.pageYOffset >= contact.offsetTop - contact.offsetHeight / 4) {
        onPageChange("nav-contact");
    } else if(window.pageYOffset >= projects.offsetTop - projects.offsetHeight / 4) {
        onPageChange("nav-projects");
    } else {
        onPageChange("nav-home");
    }
});