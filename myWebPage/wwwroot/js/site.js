document.addEventListener('DOMContentLoaded', function () {
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Theme toggle: applies immediately on <html>, then persists
    var root = document.documentElement;
    var themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            if (root.hasAttribute('data-theme')) {
                root.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            } else {
                root.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // Navbar: transparent at top, frosted glass once scrolled (rAF-throttled)
    var navbar = document.querySelector('.navbar');
    if (navbar) {
        var ticking = false;
        var update = function () {
            navbar.classList.toggle('navbar-scrolled', window.scrollY > 10);
            ticking = false;
        };
        window.addEventListener('scroll', function () {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        }, { passive: true });
        update();
    }

    // Scroll reveal: fade-in + translateY, using IntersectionObserver
    if (!reduceMotion && 'IntersectionObserver' in window) {
        var revealEls = document.querySelectorAll('.card, .section-title, section:not(#hero) .lead');
        if (revealEls.length) {
            revealEls.forEach(function (el) { el.classList.add('reveal'); });

            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var el = entry.target;
                        el.classList.add('is-visible');
                        observer.unobserve(el);
                        setTimeout(function () {
                            el.classList.remove('reveal', 'is-visible');
                        }, 800);
                    }
                });
            }, { threshold: 0.12 });

            revealEls.forEach(function (el) { observer.observe(el); });
        }
    }

    // Navbar dropdowns: tap/keyboard toggle (mobile accordion); desktop hover is CSS
    document.querySelectorAll('.nav-dropdown').forEach(function (dd) {
        var toggle = dd.querySelector('.nav-dropdown-toggle');
        if (!toggle) return;
        toggle.addEventListener('click', function () {
            var isOpen = dd.classList.toggle('open');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            if (isOpen) {
                document.querySelectorAll('.nav-dropdown.open').forEach(function (other) {
                    if (other !== dd) {
                        other.classList.remove('open');
                        var t = other.querySelector('.nav-dropdown-toggle');
                        if (t) t.setAttribute('aria-expanded', 'false');
                    }
                });
            }
        });
        dd.addEventListener('mouseleave', function () {
            dd.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close the hamburger menu after picking a section (mobile)
    document.querySelectorAll('.nav-dropdown-item').forEach(function (item) {
        item.addEventListener('click', function () {
            var collapse = document.querySelector('.navbar-collapse.show');
            if (collapse) {
                collapse.classList.remove('show');
                var toggler = document.querySelector('.navbar-toggler');
                if (toggler) toggler.setAttribute('aria-expanded', 'false');
            }
        });
    });
});
