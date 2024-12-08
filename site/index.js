(function () {
    var ul = document.querySelector('.ul-result3-4');

    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                entry.target.classList.add('ul-result3-4-anim');
            }
        });
    });

    observer.observe(ul);
})();
(function () {
    var ul2 = document.querySelector('.ul-result11-12');

    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                entry.target.classList.add('ul-result11-12-anim');
            }
        });
    });

    observer.observe(ul2);
})();
(function () {
    var ul2 = document.querySelector('.ul-result6-8');

    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                entry.target.classList.add('ul-result6-8-anim');
            }
        });
    });

    observer.observe(ul2);
})();
(function () {
    var an = document.querySelector('.posties-card1');

    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                entry.target.classList.add('posties-card1-anim');

            }
        });
    });

    observer.observe(an);
})();
(function () {
    var an = document.querySelector('.posties-card2');

    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                entry.target.classList.add('posties-card2-anim');

            }
        });
    });

    observer.observe(an);
})();
(function () {
    var an = document.querySelector('.posties-card3');

    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                entry.target.classList.add('posties-card3-anim');

            }
        });
    });

    observer.observe(an);
})();