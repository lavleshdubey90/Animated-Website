function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },

        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

canvas.width = 1920;
canvas.height = 1080;


window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
});

function files(index) {
    var data = `
    images/0001.png
    images/0002.png
    images/0003.png
    images/0004.png
    images/0005.png
    images/0006.png
    images/0007.png
    images/0008.png
    images/0009.png
    images/0010.png
    images/0011.png
    images/0012.png
    images/0013.png
    images/0014.png
    images/0015.png
    images/0016.png
    images/0017.png
    images/0018.png
    images/0019.png
    images/0020.png
    images/0021.png
    images/0022.png
    images/0023.png
    images/0024.png
    images/0025.png
    images/0026.png
    images/0027.png
    images/0028.png
    images/0029.png
    images/0030.png
    images/0031.png
    images/0032.png
    images/0033.png
    images/0034.png
    images/0035.png
    images/0036.png
    images/0037.png
    images/0038.png
    images/0039.png
    images/0040.png
    images/0041.png
    images/0042.png
    images/0043.png
    images/0044.png
    images/0045.png
    images/0046.png
    images/0047.png
    images/0048.png
    images/0049.png
    images/0050.png
    images/0051.png
    images/0052.png
    images/0053.png
    images/0054.png
    images/0055.png
    images/0056.png
    images/0057.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0166.png
    images/0165.png
    images/0164.png
    images/0163.png
    images/0162.png
    images/0161.png
    images/0160.png
    images/0159.png
    images/0158.png
    images/0157.png
    images/0156.png
    images/0155.png
    images/0154.png
    images/0153.png
    images/0152.png
    images/0151.png
    images/0150.png
    images/0149.png
    images/0148.png
    images/0147.png
    images/0146.png
    images/0145.png
    images/0144.png
    images/0143.png
    images/0142.png
    images/0141.png
    images/0140.png
    images/0139.png
    images/0138.png
    images/0137.png
    images/0136.png
    images/0135.png
    images/0134.png
    images/0133.png
    images/0132.png
    images/0131.png
    images/0130.png
    images/0129.png
    images/0128.png
    images/0127.png
    images/0126.png
    images/0125.png
    images/0124.png
    images/0123.png
    images/0122.png
    images/0121.png
    images/0120.png
    images/0119.png
    images/0118.png
    images/0117.png
    images/0116.png
    images/0115.png
    images/0114.png
    images/0113.png
    images/0112.png
    images/0111.png
    images/0110.png
    images/0109.png
    images/0108.png
    images/0107.png
    images/0106.png
    images/0105.png
    images/0104.png
    images/0103.png
    images/0102.png
    images/0101.png
    images/0100.png
    images/0099.png
    images/0098.png
    images/0097.png
    images/0096.png
    images/0095.png
    images/0094.png
    images/0093.png
    images/0092.png
    images/0091.png
    images/0090.png
    images/0089.png
    images/0088.png
    images/0087.png
    images/0086.png
    images/0085.png
    images/0084.png
    images/0083.png
    images/0082.png
    images/0081.png
    images/0080.png
    images/0079.png
    images/0078.png
    images/0077.png
    images/0076.png
    images/0075.png
    images/0074.png
    images/0073.png
    images/0072.png
    images/0071.png
    images/0070.png
    images/0069.png
    images/0068.png
    images/0067.png
    images/0066.png
    images/0166.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0059.png
    images/0060.png
    images/0061.png
    images/0062.png
    images/0063.png
    images/0064.png
    images/0065.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0165.png
    images/0164.png
    images/0163.png
    images/0162.png
    images/0161.png
    images/0160.png
    images/0159.png
    images/0158.png
    images/0157.png
    images/0156.png
    images/0155.png
    images/0154.png
    images/0153.png
    images/0152.png
    images/0151.png
    images/0150.png
    images/0149.png
    images/0148.png
    images/0147.png
    images/0146.png
    images/0145.png
    images/0144.png
    images/0143.png
    images/0142.png
    images/0141.png
    images/0140.png
    images/0139.png
    images/0138.png
    images/0137.png
    images/0136.png
    images/0135.png
    images/0134.png
    images/0133.png
    images/0132.png
    images/0131.png
    images/0130.png
    images/0129.png
    images/0128.png
    images/0127.png
    images/0126.png
    images/0125.png
    images/0124.png
    images/0123.png
    images/0122.png
    images/0121.png
    images/0120.png
    images/0119.png
    images/0118.png
    images/0117.png
    images/0116.png
    images/0115.png
    images/0114.png
    images/0113.png
    images/0112.png
    images/0111.png
    images/0110.png
    images/0109.png
    images/0108.png
    images/0107.png
    images/0106.png
    images/0105.png
    images/0104.png
    images/0103.png
    images/0102.png
    images/0101.png
    images/0100.png
    images/0099.png
    images/0098.png
    images/0097.png
    images/0096.png
    images/0095.png
    images/0094.png
    images/0093.png
    images/0092.png
    images/0091.png
    images/0090.png
    images/0089.png
    images/0088.png
    images/0087.png
    images/0086.png
    images/0085.png
    images/0084.png
    images/0083.png
    images/0082.png
    images/0081.png
    images/0080.png
    images/0079.png
    images/0078.png
    images/0077.png
    images/0076.png
    images/0075.png
    images/0074.png
    images/0073.png
    images/0072.png
    images/0071.png
    images/0070.png
    images/0069.png
    images/0068.png
    images/0067.png
    images/0066.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0166.png
    images/0165.png
    images/0164.png
    images/0163.png
    images/0162.png
    images/0161.png
    images/0160.png
    images/0159.png
    images/0158.png
    images/0157.png
    images/0156.png
    images/0155.png
    images/0154.png
    images/0153.png
    images/0152.png
    images/0151.png
    images/0150.png
    images/0149.png
    images/0148.png
    images/0147.png
    images/0146.png
    images/0145.png
    images/0144.png
    images/0143.png
    images/0142.png
    images/0141.png
    images/0140.png
    images/0139.png
    images/0138.png
    images/0137.png
    images/0136.png
    images/0135.png
    images/0134.png
    images/0133.png
    images/0132.png
    images/0131.png
    images/0130.png
    images/0129.png
    images/0128.png
    images/0127.png
    images/0126.png
    images/0125.png
    images/0124.png
    images/0123.png
    images/0122.png
    images/0121.png
    images/0120.png
    images/0119.png
    images/0118.png
    images/0117.png
    images/0116.png
    images/0115.png
    images/0114.png
    images/0113.png
    images/0112.png
    images/0111.png
    images/0110.png
    images/0109.png
    images/0108.png
    images/0107.png
    images/0106.png
    images/0105.png
    images/0104.png
    images/0103.png
    images/0102.png
    images/0101.png
    images/0100.png
    images/0099.png
    images/0098.png
    images/0097.png
    images/0096.png
    images/0095.png
    images/0094.png
    images/0093.png
    images/0092.png
    images/0091.png
    images/0090.png
    images/0089.png
    images/0088.png
    images/0087.png
    images/0086.png
    images/0085.png
    images/0084.png
    images/0083.png
    images/0082.png
    images/0081.png
    images/0080.png
    images/0079.png
    images/0078.png
    images/0077.png
    images/0076.png
    images/0075.png
    images/0074.png
    images/0073.png
    images/0072.png
    images/0071.png
    images/0070.png
    images/0069.png
    images/0068.png
    images/0067.png
    images/0066.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0058.png
    images/0057.png
    images/0056.png
    images/0055.png
    images/0054.png
    images/0053.png
    images/0052.png
    images/0051.png
    images/0050.png
    images/0049.png
    images/0048.png
    images/0047.png
    images/0046.png
    images/0045.png
    images/0044.png
    images/0043.png
    images/0042.png
    images/0041.png
    images/0040.png
    images/0039.png
    images/0038.png
    images/0037.png
    images/0036.png
    images/0035.png
    images/0034.png
    images/0033.png
    images/0032.png
    images/0031.png
    images/0030.png
    images/0029.png
    images/0028.png
    images/0027.png
    images/0026.png
    images/0025.png
    images/0024.png
    images/0023.png
    images/0022.png
    images/0021.png
    images/0020.png
    images/0019.png
    images/0018.png
    images/0017.png
    images/0016.png
    images/0015.png
    images/0014.png
    images/0013.png
    images/0012.png
    images/0011.png
    images/0010.png
    images/0009.png
    images/0008.png
    images/0007.png
    images/0006.png
    images/0005.png
    images/0004.png
    images/0003.png
    images/0002.png
    images/0001.png
   `;
    return data.split("\n")[index];
}

const frameCount = 525;

const images = [];
const imageSeq = {
    frame: 1,
};

for (let i = 0; i <= frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
}

gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
        scrub: 0.15,
        trigger: `#page>canvas`,
        start: `top top`,
        end: `1700% top`,
        scroller: `#main`,
    },
    onUpdate: render,
});

images[1].onload = render;

function render() {
    scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );

    console.log(img);
}
ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    markers: false,
    scroller: `#main`,
    start: `top top`,
    end: `1700% top`,
});


gsap.to("#page1", {
    scrollTrigger:
    {
        trigger: `#page1`,
        start: `top top`,
        end: `+=90% top`,
        markers: false,
        pin: true,
        scroller: `#main`
    }
})

gsap.to("#page2", {
    scrollTrigger:
    {
        trigger: `#page2`,
        start: `top top`,
        end: `+=50% top`,
        markers: false,
        pin: true,
        scroller: `#main`
    }
})

gsap.to("#page3", {
    scrollTrigger:
    {
        trigger: `#page3`,
        start: `top top`,
        end: `+=130% top`,
        markers: false,
        pin: true,
        scroller: `#main`
    }
})

gsap.to("#page4", {
    scrollTrigger:
    {
        trigger: `#page4`,
        start: `top top`,
        end: `+=100% top`,
        markers: false,
        pin: true,
        scroller: `#main`
    }
})

gsap.to("#page5", {
    scrollTrigger:
    {
        trigger: `#page5`,
        start: `top top`,
        end: `+=50% top`,
        markers: false,
        pin: true,
        scroller: `#main`
    }
})

gsap.to("#page6", {
    scrollTrigger:
    {
        trigger: `#page6`,
        start: `top top`,
        end: `+=90% top`,
        markers: false,
        pin: true,
        scroller: `#main`
    }
})

gsap.to("#page7", {
    scrollTrigger:
    {
        trigger: `#page7`,
        start: `top top`,
        end: `+=100% top`,
        markers: false,
        pin: true,
        scroller: `#main`
    }
})

gsap.to("#page9", {
    scrollTrigger:
    {
        trigger: `#page9`,
        start: `top top`,
        end: `bottom top`,
        markers: false,
        pin: true,
        scroller: `#main`
    }
})
