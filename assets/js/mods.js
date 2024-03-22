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

document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', event => {
      const url = item.getAttribute('data-url');
      window.open(url);
    });
  });

function about_ric() {
    alert("Your friends try and hunt you down and kill you in minecraft. Every 2 minutes each of you gets a completely different random item and you can't get items anywhere else. You have to try and use these random items the best that you can to kill or survive. You each get one life but it's <n> players versus you can you take out them with completely random items or you will be stopped.\n\n/function start -> to start\n/function stop -> to stop")
}

function about_ds() {
    alert("Every 5 minutes you switch places. Your goal is to kill other player withouth attacking them. If either of you dies one time, the other player wins. There is traps there is trickery... This is minecraft death swap.\n\n/function start/2p -> to start with 2 players\n/function start/3p -> to start with 3 players\n/function start/4p -> to start with 4 players\n/funcion stop -> to stop")
}

function about_jbc() {
    alert("This mod doesn't need to run a command or nothing. Just activate the mod into your world and everything will works fine. It's mechanic is to make you lag in the air after placing the boat so you have a bit enough time to get on the boat.")
}

function about_pnt() {
    alert("This mod doesn't need to run a command or anything. Just activate the mod into your world and everything will works fine. It's mechanic is to give you the ability to use nametag on players.")
}