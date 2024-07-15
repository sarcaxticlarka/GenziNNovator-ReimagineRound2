document.addEventListener('DOMContentLoaded', function () {
    function loading() {
        var tl = gsap.timeline();

        tl.from(".img-cont img", {
            top: 100,
            delay: 0.5,
            duration: 0.5,
            stagger: 0.4,
        });
        tl.to(".img-cont img", {
            top: "-100%",
            delay: 0.5,
            duration: 0.5,
        });

        tl.to("#loader", {
            top: "-100%",
            delay: 0.6,
            duration: 0.7,
            ease: "expo.out"
        });
    }
    loading();

    function scrollAnim() {
        const nav = document.querySelector('.nav');
        const scrollHeight = window.innerHeight * 0.05;

        window.addEventListener('scroll', function () {
            if (window.scrollY > scrollHeight) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }
    scrollAnim();

    function cusrorAnimation() {
        var main = document.querySelector(".main");
        var crsr = document.querySelector(".crsr");

        main.addEventListener("mousemove", function (dets) {
            gsap.to(crsr, {
                x: dets.x,
                y: dets.y,
                duration: 0.5,
            });
        });
    }
    cusrorAnimation();

    function bgAnim() {
        document.querySelectorAll(".section")
            .forEach(function (e) {
                ScrollTrigger.create({
                    trigger: e,
                    start: "top 50%",
                    end: "bottom 50%",
                    onEnter: function () {
                        document.body.setAttribute("theme", e.dataset.color);
                    },
                    onEnterBack: function () {
                        document.body.setAttribute("theme", e.dataset.color);
                    }
                });
            });
    }
    bgAnim();

    function page2ImgAnim() {
        const page2 = document.querySelector(".page2");
        const imgs = document.querySelectorAll(".page2 .img");

        page2.addEventListener("mousemove", e => {
            const rect = page2.getBoundingClientRect();
            const topValue = (e.clientY - rect.top - 225) + "px";
            const leftValue = (e.clientX - rect.left - 200) + "px";

            imgs.forEach(img => {
                img.style.top = topValue;
                img.style.left = leftValue;
            });
        });

        page2.addEventListener("mouseenter", () => {
            imgs.forEach(img => {
                img.style.opacity = 1;
                img.style.transform = "scale(1)";
            });
        });

        page2.addEventListener("mouseleave", () => {
            imgs.forEach(img => {
                img.style.opacity = 0;
                img.style.transform = "scale(0.8)";
            });
        });
    }
    page2ImgAnim();

    function page2textAnim() {
        var tlp2 = gsap.timeline();
        tlp2.from(".page2 h1", {
            y: -40,
            stagger: 0.2,
            opacity: 0.8,
            duration: 0.2,

            scrollTrigger: {
                trigger: ".page2 h1",
                scroll: ".main",
                start: "top 5",
                end: "bottom -50",
                scrub: 0.8,
            }
        });

        tlp2.to(".page2 p", {
            x: -200,
            y: 40,
            scale: 2,
            stagger: 0.2,
            opacity: 0.8,
            duration: 0.2,

            scrollTrigger: {
                trigger: ".page2 p",
                scroll: ".main",
                start: "top 250",
                end: "bottom -150",
                scrub: 0.8,
            }
        });
    }
    page2textAnim();

    function page5textAnim() {
        var tlp5 = gsap.timeline();
        tlp5.from(".page5 h2", {
            y: -80,
            stagger: 0.2,
            duration: 0.2,

            scrollTrigger: {
                trigger: ".page5 h2",
                scroll: ".main",
                start: "top 5",
                end: "bottom -50",
                scrub: 0.8,
            }
        });
        tlp5.to(".hotel-garden .left img", {
            scale: 0.8,
            stagger: 0.2,
            duration: 0.2,

            scrollTrigger: {
                trigger: ".hotel-garden .left img",
                scroll: ".main",
                start: "top 5",
                end: "top -120",
                scrub: 0.8,
            }
        });

        tlp5.from(".street img", {
            scale: 0.8,
            stagger: 0.2,
            duration: 0.2,

            scrollTrigger: {
                trigger: ".street img",
                scroll: ".main",
                start: "top 5",
                end: "bottom -50",
                scrub: 0.8,
            }
        });
        tlp5.from(".book img", {
            scale: 0.8,
            stagger: 0.2,
            duration: 0.2,

            scrollTrigger: {
                trigger: ".book img",
                scroll: ".main",
                start: "top 5",
                end: "bottom -50",
                scrub: 0.8,
            }
        });
    }
    page5textAnim();

    function page6textAnim() {
        var tlp6 = gsap.timeline();
        tlp6.from(".page6 h4", {
            y: -30,
            stagger: 0.2,
            duration: 0.2,

            scrollTrigger: {
                trigger: ".page6 h4",
                scroll: ".main",
                start: "top 5",
                end: "bottom -50",
                scrub: 0.8,
            }
        });
    }
    page6textAnim();

    function stickAnim() {
        gsap.from(".text img", {
            scale: 0.2,
            stagger: 0.5,
            delay: 1,
            duration: 0.6,

            scrollTrigger: {
                trigger: ".slide",
                scroll: ".main",
                start: "top 0%",
                end: "bottom -190%",
                scrub: 0.3,
            }
        });
    }
    stickAnim();

    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);
});
