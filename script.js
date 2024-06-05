
var typed = new Typed('#element', {
    strings: ['CSE Student', 'Web Developer', 'Software Engineer', 'Web Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });

  var loader = document.querySelector("#loader")
  setTimeout(function(){
      loader.style.top = "-100%"
  }, 3000)