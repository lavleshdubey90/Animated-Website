(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))f(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&f(g)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function f(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();function c(){gsap.registerPlugin(ScrollTrigger);const e=new LocomotiveScroll({el:document.querySelector("#main"),smooth:!0});e.on("scroll",ScrollTrigger.update),ScrollTrigger.scrollerProxy("#main",{scrollTop(n){return arguments.length?e.scrollTo(n,0,0):e.scroll.instance.scroll.y},getBoundingClientRect(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}},pinType:document.querySelector("#main").style.transform?"transform":"fixed"}),ScrollTrigger.addEventListener("refresh",()=>e.update()),ScrollTrigger.refresh()}c();const p=document.querySelector("canvas"),d=p.getContext("2d");p.width=1920;p.height=1080;window.addEventListener("resize",function(){p.width=window.innerWidth,p.height=window.innerHeight,t()});function u(e){var n=`
    /frames/0001.png
    /frames/0002.png
    /frames/0003.png
    /frames/0004.png
    /frames/0005.png
    /frames/0006.png
    /frames/0007.png
    /frames/0008.png
    /frames/0009.png
    /frames/0010.png
    /frames/0011.png
    /frames/0012.png
    /frames/0013.png
    /frames/0014.png
    /frames/0015.png
    /frames/0016.png
    /frames/0017.png
    /frames/0018.png
    /frames/0019.png
    /frames/0020.png
    /frames/0021.png
    /frames/0022.png
    /frames/0023.png
    /frames/0024.png
    /frames/0025.png
    /frames/0026.png
    /frames/0027.png
    /frames/0028.png
    /frames/0029.png
    /frames/0030.png
    /frames/0031.png
    /frames/0032.png
    /frames/0033.png
    /frames/0034.png
    /frames/0035.png
    /frames/0036.png
    /frames/0037.png
    /frames/0038.png
    /frames/0039.png
    /frames/0040.png
    /frames/0041.png
    /frames/0042.png
    /frames/0043.png
    /frames/0044.png
    /frames/0045.png
    /frames/0046.png
    /frames/0047.png
    /frames/0048.png
    /frames/0049.png
    /frames/0050.png
    /frames/0051.png
    /frames/0052.png
    /frames/0053.png
    /frames/0054.png
    /frames/0055.png
    /frames/0056.png
    /frames/0057.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0166.png
    /frames/0165.png
    /frames/0164.png
    /frames/0163.png
    /frames/0162.png
    /frames/0161.png
    /frames/0160.png
    /frames/0159.png
    /frames/0158.png
    /frames/0157.png
    /frames/0156.png
    /frames/0155.png
    /frames/0154.png
    /frames/0153.png
    /frames/0152.png
    /frames/0151.png
    /frames/0150.png
    /frames/0149.png
    /frames/0148.png
    /frames/0147.png
    /frames/0146.png
    /frames/0145.png
    /frames/0144.png
    /frames/0143.png
    /frames/0142.png
    /frames/0141.png
    /frames/0140.png
    /frames/0139.png
    /frames/0138.png
    /frames/0137.png
    /frames/0136.png
    /frames/0135.png
    /frames/0134.png
    /frames/0133.png
    /frames/0132.png
    /frames/0131.png
    /frames/0130.png
    /frames/0129.png
    /frames/0128.png
    /frames/0127.png
    /frames/0126.png
    /frames/0125.png
    /frames/0124.png
    /frames/0123.png
    /frames/0122.png
    /frames/0121.png
    /frames/0120.png
    /frames/0119.png
    /frames/0118.png
    /frames/0117.png
    /frames/0116.png
    /frames/0115.png
    /frames/0114.png
    /frames/0113.png
    /frames/0112.png
    /frames/0111.png
    /frames/0110.png
    /frames/0109.png
    /frames/0108.png
    /frames/0107.png
    /frames/0106.png
    /frames/0105.png
    /frames/0104.png
    /frames/0103.png
    /frames/0102.png
    /frames/0101.png
    /frames/0100.png
    /frames/0099.png
    /frames/0098.png
    /frames/0097.png
    /frames/0096.png
    /frames/0095.png
    /frames/0094.png
    /frames/0093.png
    /frames/0092.png
    /frames/0091.png
    /frames/0090.png
    /frames/0089.png
    /frames/0088.png
    /frames/0087.png
    /frames/0086.png
    /frames/0085.png
    /frames/0084.png
    /frames/0083.png
    /frames/0082.png
    /frames/0081.png
    /frames/0080.png
    /frames/0079.png
    /frames/0078.png
    /frames/0077.png
    /frames/0076.png
    /frames/0075.png
    /frames/0074.png
    /frames/0073.png
    /frames/0072.png
    /frames/0071.png
    /frames/0070.png
    /frames/0069.png
    /frames/0068.png
    /frames/0067.png
    /frames/0066.png
    /frames/0166.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0059.png
    /frames/0060.png
    /frames/0061.png
    /frames/0062.png
    /frames/0063.png
    /frames/0064.png
    /frames/0065.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0165.png
    /frames/0164.png
    /frames/0163.png
    /frames/0162.png
    /frames/0161.png
    /frames/0160.png
    /frames/0159.png
    /frames/0158.png
    /frames/0157.png
    /frames/0156.png
    /frames/0155.png
    /frames/0154.png
    /frames/0153.png
    /frames/0152.png
    /frames/0151.png
    /frames/0150.png
    /frames/0149.png
    /frames/0148.png
    /frames/0147.png
    /frames/0146.png
    /frames/0145.png
    /frames/0144.png
    /frames/0143.png
    /frames/0142.png
    /frames/0141.png
    /frames/0140.png
    /frames/0139.png
    /frames/0138.png
    /frames/0137.png
    /frames/0136.png
    /frames/0135.png
    /frames/0134.png
    /frames/0133.png
    /frames/0132.png
    /frames/0131.png
    /frames/0130.png
    /frames/0129.png
    /frames/0128.png
    /frames/0127.png
    /frames/0126.png
    /frames/0125.png
    /frames/0124.png
    /frames/0123.png
    /frames/0122.png
    /frames/0121.png
    /frames/0120.png
    /frames/0119.png
    /frames/0118.png
    /frames/0117.png
    /frames/0116.png
    /frames/0115.png
    /frames/0114.png
    /frames/0113.png
    /frames/0112.png
    /frames/0111.png
    /frames/0110.png
    /frames/0109.png
    /frames/0108.png
    /frames/0107.png
    /frames/0106.png
    /frames/0105.png
    /frames/0104.png
    /frames/0103.png
    /frames/0102.png
    /frames/0101.png
    /frames/0100.png
    /frames/0099.png
    /frames/0098.png
    /frames/0097.png
    /frames/0096.png
    /frames/0095.png
    /frames/0094.png
    /frames/0093.png
    /frames/0092.png
    /frames/0091.png
    /frames/0090.png
    /frames/0089.png
    /frames/0088.png
    /frames/0087.png
    /frames/0086.png
    /frames/0085.png
    /frames/0084.png
    /frames/0083.png
    /frames/0082.png
    /frames/0081.png
    /frames/0080.png
    /frames/0079.png
    /frames/0078.png
    /frames/0077.png
    /frames/0076.png
    /frames/0075.png
    /frames/0074.png
    /frames/0073.png
    /frames/0072.png
    /frames/0071.png
    /frames/0070.png
    /frames/0069.png
    /frames/0068.png
    /frames/0067.png
    /frames/0066.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0166.png
    /frames/0165.png
    /frames/0164.png
    /frames/0163.png
    /frames/0162.png
    /frames/0161.png
    /frames/0160.png
    /frames/0159.png
    /frames/0158.png
    /frames/0157.png
    /frames/0156.png
    /frames/0155.png
    /frames/0154.png
    /frames/0153.png
    /frames/0152.png
    /frames/0151.png
    /frames/0150.png
    /frames/0149.png
    /frames/0148.png
    /frames/0147.png
    /frames/0146.png
    /frames/0145.png
    /frames/0144.png
    /frames/0143.png
    /frames/0142.png
    /frames/0141.png
    /frames/0140.png
    /frames/0139.png
    /frames/0138.png
    /frames/0137.png
    /frames/0136.png
    /frames/0135.png
    /frames/0134.png
    /frames/0133.png
    /frames/0132.png
    /frames/0131.png
    /frames/0130.png
    /frames/0129.png
    /frames/0128.png
    /frames/0127.png
    /frames/0126.png
    /frames/0125.png
    /frames/0124.png
    /frames/0123.png
    /frames/0122.png
    /frames/0121.png
    /frames/0120.png
    /frames/0119.png
    /frames/0118.png
    /frames/0117.png
    /frames/0116.png
    /frames/0115.png
    /frames/0114.png
    /frames/0113.png
    /frames/0112.png
    /frames/0111.png
    /frames/0110.png
    /frames/0109.png
    /frames/0108.png
    /frames/0107.png
    /frames/0106.png
    /frames/0105.png
    /frames/0104.png
    /frames/0103.png
    /frames/0102.png
    /frames/0101.png
    /frames/0100.png
    /frames/0099.png
    /frames/0098.png
    /frames/0097.png
    /frames/0096.png
    /frames/0095.png
    /frames/0094.png
    /frames/0093.png
    /frames/0092.png
    /frames/0091.png
    /frames/0090.png
    /frames/0089.png
    /frames/0088.png
    /frames/0087.png
    /frames/0086.png
    /frames/0085.png
    /frames/0084.png
    /frames/0083.png
    /frames/0082.png
    /frames/0081.png
    /frames/0080.png
    /frames/0079.png
    /frames/0078.png
    /frames/0077.png
    /frames/0076.png
    /frames/0075.png
    /frames/0074.png
    /frames/0073.png
    /frames/0072.png
    /frames/0071.png
    /frames/0070.png
    /frames/0069.png
    /frames/0068.png
    /frames/0067.png
    /frames/0066.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0058.png
    /frames/0057.png
    /frames/0056.png
    /frames/0055.png
    /frames/0054.png
    /frames/0053.png
    /frames/0052.png
    /frames/0051.png
    /frames/0050.png
    /frames/0049.png
    /frames/0048.png
    /frames/0047.png
    /frames/0046.png
    /frames/0045.png
    /frames/0044.png
    /frames/0043.png
    /frames/0042.png
    /frames/0041.png
    /frames/0040.png
    /frames/0039.png
    /frames/0038.png
    /frames/0037.png
    /frames/0036.png
    /frames/0035.png
    /frames/0034.png
    /frames/0033.png
    /frames/0032.png
    /frames/0031.png
    /frames/0030.png
    /frames/0029.png
    /frames/0028.png
    /frames/0027.png
    /frames/0026.png
    /frames/0025.png
    /frames/0024.png
    /frames/0023.png
    /frames/0022.png
    /frames/0021.png
    /frames/0020.png
    /frames/0019.png
    /frames/0018.png
    /frames/0017.png
    /frames/0016.png
    /frames/0015.png
    /frames/0014.png
    /frames/0013.png
    /frames/0012.png
    /frames/0011.png
    /frames/0010.png
    /frames/0009.png
    /frames/0008.png
    /frames/0007.png
    /frames/0006.png
    /frames/0005.png
    /frames/0004.png
    /frames/0003.png
    /frames/0002.png
    /frames/0001.png
   `;return n.split(`
`)[e]}const o=525,m=[],i={frame:1};for(let e=0;e<=o;e++){const n=new Image;n.src=u(e),m.push(n)}gsap.to(i,{frame:o-1,snap:"frame",ease:"none",scrollTrigger:{scrub:.15,trigger:"#page>canvas",start:"top top",end:"1700% top",scroller:"#main"},onUpdate:t});m[1].onload=t;function t(){h(m[i.frame],d)}function h(e,n){var s=n.canvas,f=s.width/e.width,r=s.height/e.height,a=Math.max(f,r),g=(s.width-e.width*a)/2,l=(s.height-e.height*a)/2;n.clearRect(0,0,s.width,s.height),n.drawImage(e,0,0,e.width,e.height,g,l,e.width*a,e.height*a),console.log(e)}ScrollTrigger.create({trigger:"#page>canvas",pin:!0,markers:!1,scroller:"#main",start:"top top",end:"1700% top"});gsap.to("#page1",{scrollTrigger:{trigger:"#page1",start:"top top",end:"+=90% top",markers:!1,pin:!0,scroller:"#main"}});gsap.to("#page2",{scrollTrigger:{trigger:"#page2",start:"top top",end:"+=50% top",markers:!1,pin:!0,scroller:"#main"}});gsap.to("#page3",{scrollTrigger:{trigger:"#page3",start:"top top",end:"+=130% top",markers:!1,pin:!0,scroller:"#main"}});gsap.to("#page4",{scrollTrigger:{trigger:"#page4",start:"top top",end:"+=100% top",markers:!1,pin:!0,scroller:"#main"}});gsap.to("#page5",{scrollTrigger:{trigger:"#page5",start:"top top",end:"+=50% top",markers:!1,pin:!0,scroller:"#main"}});gsap.to("#page6",{scrollTrigger:{trigger:"#page6",start:"top top",end:"+=90% top",markers:!1,pin:!0,scroller:"#main"}});gsap.to("#page7",{scrollTrigger:{trigger:"#page7",start:"top top",end:"+=100% top",markers:!1,pin:!0,scroller:"#main"}});gsap.to("#page9",{scrollTrigger:{trigger:"#page9",start:"top top",end:"+=50% top",markers:!1,pin:!1,scroller:"#main"}});
