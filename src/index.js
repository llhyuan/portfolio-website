window.addEventListener('load', () => {
  let options = {
    root: null,
    rootMargin: '150px 0px 50px 0px',
    threshold: [0.5],
  };

  function intersectCallback(entries, ){
    entries.forEach((entry)=>{
      if (entry.isIntersecting){
        let element = document.getElementById(("nav_" + entry.target.id));
        let event = new Event("click", {bubbles: "true"});
        element.dispatchEvent(event);
      }
    })
  }

  let observer = new IntersectionObserver(intersectCallback, options);
  let elements = document.getElementsByTagName('section');
  for (let ele of elements) {
    observer.observe(ele);
  }
});
