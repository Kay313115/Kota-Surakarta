// Animasi muncul pas scroll
const reveals = document.querySelectorAll('.card');

reveals.forEach((el) => {
    el.classList.add('reveal');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

reveals.forEach((el) => {
    observer.observe(el);
});