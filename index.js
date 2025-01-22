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

const burgerToggle = document.getElementById('burger-toggle');
const overlay = document.getElementById('overlay');
const body = document.getElementById('body')

burgerToggle.addEventListener('change', () => {
    if (burgerToggle.checked) {
        overlay.classList.remove('hidden');
        body.classList.add('body-scroll')
    } else {
        overlay.classList.add('hidden');
        body.classList.remove('body-scroll')
    }
});

const buttons = document.querySelectorAll('.q');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id;

        buttons.forEach(btn => {
            if (btn !== button) { 
                const otherSpan = btn.querySelector('.span');
                if (otherSpan) {
                    otherSpan.classList.remove('span-anim');
                }
            }
        });
        const span = button.querySelector('.span');
        if (span) {
            span.classList.toggle('span-anim');

        }
    });
});

document.querySelectorAll('.q').forEach((el) => {
    el.addEventListener('click', () => {

        let content = el.nextElementSibling;
        let q = el.nextElementSibling;

        if (content.style.maxHeight) {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })
});