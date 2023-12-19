document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
                navLinks.forEach(function (el) {
                    el.classList.remove('active');
                });
                link.classList.add('active');
            }
        });
    });
});

function toggleNav() {
    var navList = document.querySelector('nav ul');
    navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
}

var currentYear = new Date().getFullYear();
        document.getElementById('currentYear').textContent = currentYear;