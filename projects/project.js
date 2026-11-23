(function(){
  document.documentElement.classList.add("js");

  /* 이미지 확대 */
  var lb=document.getElementById("lb");
  if(lb){
    var lbImg=lb.querySelector("img"), lbCap=lb.querySelector(".cap");
    document.querySelectorAll(".shot button").forEach(function(b){
      b.addEventListener("click",function(){
        var im=b.querySelector("img");
        lbImg.src=im.currentSrc||im.src; lbImg.alt=im.alt; lbCap.textContent=b.getAttribute("data-cap")||im.alt;
        if(lb.showModal) lb.showModal(); else lb.setAttribute("open","");
      });
    });
    lb.querySelector(".h button").addEventListener("click",function(){lb.close();});
    lb.addEventListener("click",function(e){if(e.target===lb)lb.close();});
  }

  /* 시연 영상 */
  var dm=document.getElementById("demo");
  if(dm){
    var body=dm.querySelector(".vbody");
    document.querySelectorAll("[data-video]").forEach(function(b){
      b.addEventListener("click",function(){
        var v=document.createElement("video");
        v.src=b.getAttribute("data-video"); v.controls=true; v.autoplay=true; v.playsInline=true;
        body.innerHTML=""; body.appendChild(v);
        if(dm.showModal) dm.showModal(); else dm.setAttribute("open","");
      });
    });
    var close=function(){body.innerHTML="";if(dm.open)dm.close();};
    dm.querySelector(".h button").addEventListener("click",close);
    dm.addEventListener("click",function(e){if(e.target===dm)close();});
    dm.addEventListener("close",function(){body.innerHTML="";});
  }

  /* 나타나기 */
  var items=document.querySelectorAll(".rv");
  if(!("IntersectionObserver" in window)){items.forEach(function(el){el.classList.add("in");});return;}
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}});
  },{rootMargin:"0px 0px -6% 0px",threshold:.05});
  items.forEach(function(el){io.observe(el);});
})();
