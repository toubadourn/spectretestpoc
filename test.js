document.addEventListener("click", eventHandler);
document.addEventListener("keydown", eventHandler);
document.addEventListener("mousemove", eventHandler);
document.addEventListener("scroll", eventHandler);
document.addEventListener("resize", eventHandler);

function eventHandler(event) {
    console.log(`Event triggered: ${event.type}`);
}

alert(domain);
