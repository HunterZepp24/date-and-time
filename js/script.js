//Working on getting hours, minutes, and seconds to flash separately versus every second.

/*const timeNow = new Date();

let gotHours = timeNow.getHours();
let gotMinutes = timeNow.getMinutes();
let gotSeconds = timeNow.getSeconds();

const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");*/

gsap.from(".seconds", {
    opacity: 0,
    duration: 0.25,
    repeat: -1,
    repeatDelay: 0.75,
    ease: "power1.inOut"
})
gsap.to(".seconds", {
    opacity: 0,
    duration: 0.25,
    delay: 0.75,
    repeat: -1,
    repeatDelay: 0.75,
    ease: "power1.inOut"
})
gsap.from(".minutes", {
    opacity: 0,
    duration: 0.25,
    repeat: -1,
    repeatDelay: 0.75,
    ease: "power1.inOut"
})
gsap.to(".minutes", {
    opacity: 0,
    duration: 0.25,
    delay: 0.75,
    repeat: -1,
    repeatDelay: 0.75,
    ease: "power1.inOut"
})
gsap.from(".hours", {
    opacity: 0,
    duration: 0.25,
    repeat: -1,
    repeatDelay: 0.75,
    ease: "power1.inOut"
})
gsap.to(".hours", {
    opacity: 0,
    duration: 0.25,
    delay: 0.75,
    repeat: -1,
    repeatDelay: 0.75,
    ease: "power1.inOut"
})

gsap.to("body", {
    backgroundColor: "#0096FF",
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  })