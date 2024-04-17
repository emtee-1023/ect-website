function openMenu() {
    const btnOpen = document.querySelector("#open");
    btnOpen.style.display = 'none';

    const btnClose = document.getElementById("close");
    btnClose.style.display = 'block';

    const nav = document.querySelector('.mobile-nav');
    nav.classList.add("active");
}

function closeMenu() {
    const btnOpen = document.getElementById("open");
    btnOpen.style.display = 'block';

    const btnClose = document.getElementById("close");
    btnClose.style.display = 'none';

    const nav = document.querySelector('.mobile-nav');
    nav.classList.remove("active");

}