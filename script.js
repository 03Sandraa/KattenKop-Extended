// window.addEventListener('scroll', () => {
//     document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
//   }, false);

  const pupils = document.querySelectorAll(".oog .pupil");
  window.addEventListener("mousemove", (e) => {
    pupils.forEach((pupil) => {
      // get x and y postion of cursor
      var rect = pupil.getBoundingClientRect();
      var x = (e.pageX - rect.left) / 7 + "%";
      var y = (e.pageY - rect.top) / 12 + "%";
      pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
    });
  });