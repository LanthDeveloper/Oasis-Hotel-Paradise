document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box_animate");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.35,
        }
    );

    boxes.forEach((box) => {
        observer.observe(box);
    });
});
