// PoscaDevLabs — macOS High Sierra Cursors
// Website interactions

document.addEventListener("DOMContentLoaded", () => {

    // Mobile navigation
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("active");

            menuButton.setAttribute("aria-expanded", String(isOpen));
        });
    }

    // Close mobile navigation after selecting a link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navigation?.classList.remove("active");
            menuButton?.setAttribute("aria-expanded", "false");
        });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", event => {
            const targetId = anchor.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Reveal animations
    const revealElements = document.querySelectorAll(
        ".reveal, .showcase-card, .feature-card"
    );

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12
        });

        revealElements.forEach(element => {
            observer.observe(element);
        });
    } else {
        revealElements.forEach(element => {
            element.classList.add("visible");
        });
    }

    // Current year in footer
    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Download button feedback
    document.querySelectorAll("[data-download]").forEach(button => {
        button.addEventListener("click", () => {
            const originalText = button.textContent;

            button.textContent = "Opening download...";

            setTimeout(() => {
                button.textContent = originalText;
            }, 2000);
        });
    });

    // Back to top button
    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {
        window.addEventListener("scroll", () => {
            backToTop.classList.toggle(
                "visible",
                window.scrollY > 400
            );
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Cursor preview hover effects
    document.querySelectorAll(".cursor-preview").forEach(preview => {
        preview.addEventListener("mouseenter", () => {
            preview.classList.add("hovered");
        });

        preview.addEventListener("mouseleave", () => {
            preview.classList.remove("hovered");
        });
    });

    console.log(
        "PoscaDevLabs | macOS High Sierra Cursors website loaded successfully."
    );

});
