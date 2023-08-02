const mode = document.getElementById("mode_icon");

mode.addEventListener('click', () => {
    const form = document.getElementById('login-form');
    const cont = document.getElementById('container');
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');

        cont.classList.add('dark');
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
    cont.classList.remove('dark');

});