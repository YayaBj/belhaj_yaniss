// Tab functionality
document.addEventListener("DOMContentLoaded", () => {
    const tabTriggers = document.querySelectorAll(".tab-trigger")
    const tabContents = document.querySelectorAll(".tab-content")

    tabTriggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
            // Remove active class from all triggers and contents
            tabTriggers.forEach((t) => t.classList.remove("active"))
            tabContents.forEach((c) => c.classList.remove("active"))

            // Add active class to clicked trigger
            trigger.classList.add("active")

            // Show corresponding content
            const tabId = trigger.getAttribute("data-tab")
            document.getElementById(tabId).classList.add("active")
        })
    })
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()

        const targetId = this.getAttribute("href")
        if (targetId === "#") return

        const targetElement = document.querySelector(targetId)
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
            })
        }
    })
})
