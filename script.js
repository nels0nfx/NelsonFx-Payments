// FAQ Toggle Function
document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach((btn) => {
        btn.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });

    // Auto-Rotating Testimonials
    const testimonials = document.querySelectorAll(".testimonial");
    let current = 0;

    function rotateTestimonials() {
        testimonials.forEach((t, i) => {
            t.style.display = i === current ? "block" : "none";
        });
        current = (current + 1) % testimonials.length;
    }

    if (testimonials.length > 0) {
        rotateTestimonials();
        setInterval(rotateTestimonials, 4000);
    }
});
