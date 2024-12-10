function toggleMenu() {
    const links = document.getElementById('top-menu a');
    if (links.style.display == 'flex') {
        links.style.display = 'none'
    } else {
        links.style.display = 'flex'
    }
}