
var loader = document.querySelector("#loaderr")
setTimeout(function () {
    loader.style.top = "-120%"
}, 3700)
var loader1 = document.querySelector("#loader1")
setTimeout(function () {
    loader1.style.top = "-120%"
}, 3900)

document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('unique-checkbox');
    const menu = document.querySelector('.unique-menu');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    });

    document.querySelectorAll('.unique-menu ul li a').forEach(link => {
        link.addEventListener('click', () => {
            checkbox.checked = false;
            menu.style.display = 'none';
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const switchElement = document.getElementById("switch");

    // Check if dark mode is saved in local storage
    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark-mode");
        switchElement.checked = true;
    }

    switchElement.addEventListener("change", function () {
        if (switchElement.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "true");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "false");
        }
    });
});

gsap.from(" .whitey ", {
    scrollTrigger: {
        trigger: ".whitey",
        start: "top 80%",  // When the top of .abtme enters 80% of the viewport height
        end: "bottom 20%", // When the bottom of .abtme enters 20% of the viewport height
        toggleActions: "play none none none"
    },
    duration: 1.5,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from(" .proj ", {
    scrollTrigger: {
        trigger: ".proj",
        start: "top 80%",  // When the top of .abtme enters 80% of the viewport height
        end: "bottom 20%", // When the bottom of .abtme enters 20% of the viewport height
        toggleActions: "play none none none"
    },
    duration: 1.5,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
});
gsap.from(" .contacting ", {
    scrollTrigger: {
        trigger: ".contacting",
        start: "top 80%",  // When the top of .abtme enters 80% of the viewport height
        end: "bottom 20%", // When the bottom of .abtme enters 20% of the viewport height
        toggleActions: "play none none none"
    },
    duration: 1.5,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
});
gsap.from(" .abtme ", {
    scrollTrigger: {
        trigger: ".abtme",
        start: "top 80%",  // When the top of .abtme enters 80% of the viewport height
        end: "bottom 20%", // When the bottom of .abtme enters 20% of the viewport height
        toggleActions: "play none none none"
    },
    duration: 1.5,
    delay:0.4,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from(" .meabt ", {
    scrollTrigger: {
        trigger: ".meabt ",
        start: "top 80%",  // When the top of .abtme enters 80% of the viewport height
        end: "bottom 20%", // When the bottom of .abtme enters 20% of the viewport height
        toggleActions: "play none none none"
    },
    duration: 1.5,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
}); 
gsap.from(" .hi", {
    scrollTrigger: {
        trigger: ".hi ",
        start: "top 80%",  // When the top of .abtme enters 80% of the viewport height
        end: "bottom 20%", // When the bottom of .abtme enters 20% of the viewport height
        toggleActions: "play none none none"
    },
    duration: 2.5,
    y:50,
    opacity: 0,
    stagger: 0.5,
    ease: "power3.out"
}); 

gsap.from(" .col2 ", {
    scrollTrigger: {
        trigger: ".me",
        start: "top 80%",  // When the top of .abtme enters 80% of the viewport height
        end: "bottom 20%", // When the bottom of .abtme enters 20% of the viewport height
        toggleActions: "play none none none"
    },
    duration: 1.5,
    opacity: 0,
    scale: 0.9,
    stagger: 0.2,
    ease: "power3.out"
});
gsap.from(" .creative ", {
    scrollTrigger: {
        trigger: ".creative",
        start: "top 80%",  // When the top of .abtme enters 80% of the viewport height
        end: "bottom 20%", // When the bottom of .abtme enters 20% of the viewport height
        toggleActions: "play none none none"
    },
    duration: 1.5,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from(" .rightside h1 ", {
    scrollTrigger: {
        trigger: ".rightside",
        start: "top 80%",  // When the top of .abtme enters 80% of the viewport height
        end: "bottom 20%", // When the bottom of .abtme enters 20% of the viewport height
        toggleActions: "play none none none"
    },
    duration: 1.5,
    opacity: 0,
    x: 20,
    delay:0.6,
    stagger: 0.2,
    ease: "power3.out"
});
gsap.from(" .leftside ", {
    scrollTrigger: {
        trigger: ".leftside",
        start: "top 80%",  // When the top of .abtme enters 80% of the viewport height
        end: "bottom 20%", // When the bottom of .abtme enters 20% of the viewport height
        toggleActions: "play none none none"
    },
    duration: 1.5,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: "power3.out"
});
