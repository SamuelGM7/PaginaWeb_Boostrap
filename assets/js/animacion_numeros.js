document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    const animateCounter = (counter) => {
        const target = +counter.getAttribute("data-num");
        let current = 0;
        const increment = Math.ceil(target /100 ); 

        const updateCounter = () => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
            } else {
                counter.textContent = current;
                requestAnimationFrame(updateCounter);
            }
        };
        updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
});
