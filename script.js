const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    const body = document.querySelector("body");
    body.classList.toggle("light");
})