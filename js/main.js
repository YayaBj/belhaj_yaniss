// Tabs avec effet de transition
document.addEventListener("DOMContentLoaded", () => {
    const tabTriggers = document.querySelectorAll(".tab-trigger")
    const tabContents = document.querySelectorAll(".tab-content")

    tabTriggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
            tabTriggers.forEach((t) => t.classList.remove("active"))
            tabContents.forEach((c) => {
                c.classList.remove("active")
                c.style.opacity = 0
            })

            trigger.classList.add("active")

            const tabId = trigger.getAttribute("data-tab")
            const target = document.getElementById(tabId)
            target.classList.add("active")

            // Effet fade-in
            setTimeout(() => {
                target.style.opacity = 1
                target.style.transition = "opacity 0.5s ease"
            }, 100)
        })
    })
})
