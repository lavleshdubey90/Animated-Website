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
    images/frames/0001.png
    images/frames/0002.png
    images/frames/0003.png
    images/frames/0004.png
    images/frames/0005.png
    images/frames/0006.png
    images/frames/0007.png
    images/frames/0008.png
    images/frames/0009.png
    images/frames/0010.png
    images/frames/0011.png
    images/frames/0012.png
    images/frames/0013.png
    images/frames/0014.png
    images/frames/0015.png
    images/frames/0016.png
    images/frames/0017.png
    images/frames/0018.png
    images/frames/0019.png
    images/frames/0020.png
    images/frames/0021.png
    images/frames/0022.png
    images/frames/0023.png
    images/frames/0024.png
    images/frames/0025.png
    images/frames/0026.png
    images/frames/0027.png
    images/frames/0028.png
    images/frames/0029.png
    images/frames/0030.png
    images/frames/0031.png
    images/frames/0032.png
    images/frames/0033.png
    images/frames/0034.png
    images/frames/0035.png
    images/frames/0036.png
    images/frames/0037.png
    images/frames/0038.png
    images/frames/0039.png
    images/frames/0040.png
    images/frames/0041.png
    images/frames/0042.png
    images/frames/0043.png
    images/frames/0044.png
    images/frames/0045.png
    images/frames/0046.png
    images/frames/0047.png
    images/frames/0048.png
    images/frames/0049.png
    images/frames/0050.png
    images/frames/0051.png
    images/frames/0052.png
    images/frames/0053.png
    images/frames/0054.png
    images/frames/0055.png
    images/frames/0056.png
    images/frames/0057.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0166.png
    images/frames/0165.png
    images/frames/0164.png
    images/frames/0163.png
    images/frames/0162.png
    images/frames/0161.png
    images/frames/0160.png
    images/frames/0159.png
    images/frames/0158.png
    images/frames/0157.png
    images/frames/0156.png
    images/frames/0155.png
    images/frames/0154.png
    images/frames/0153.png
    images/frames/0152.png
    images/frames/0151.png
    images/frames/0150.png
    images/frames/0149.png
    images/frames/0148.png
    images/frames/0147.png
    images/frames/0146.png
    images/frames/0145.png
    images/frames/0144.png
    images/frames/0143.png
    images/frames/0142.png
    images/frames/0141.png
    images/frames/0140.png
    images/frames/0139.png
    images/frames/0138.png
    images/frames/0137.png
    images/frames/0136.png
    images/frames/0135.png
    images/frames/0134.png
    images/frames/0133.png
    images/frames/0132.png
    images/frames/0131.png
    images/frames/0130.png
    images/frames/0129.png
    images/frames/0128.png
    images/frames/0127.png
    images/frames/0126.png
    images/frames/0125.png
    images/frames/0124.png
    images/frames/0123.png
    images/frames/0122.png
    images/frames/0121.png
    images/frames/0120.png
    images/frames/0119.png
    images/frames/0118.png
    images/frames/0117.png
    images/frames/0116.png
    images/frames/0115.png
    images/frames/0114.png
    images/frames/0113.png
    images/frames/0112.png
    images/frames/0111.png
    images/frames/0110.png
    images/frames/0109.png
    images/frames/0108.png
    images/frames/0107.png
    images/frames/0106.png
    images/frames/0105.png
    images/frames/0104.png
    images/frames/0103.png
    images/frames/0102.png
    images/frames/0101.png
    images/frames/0100.png
    images/frames/0099.png
    images/frames/0098.png
    images/frames/0097.png
    images/frames/0096.png
    images/frames/0095.png
    images/frames/0094.png
    images/frames/0093.png
    images/frames/0092.png
    images/frames/0091.png
    images/frames/0090.png
    images/frames/0089.png
    images/frames/0088.png
    images/frames/0087.png
    images/frames/0086.png
    images/frames/0085.png
    images/frames/0084.png
    images/frames/0083.png
    images/frames/0082.png
    images/frames/0081.png
    images/frames/0080.png
    images/frames/0079.png
    images/frames/0078.png
    images/frames/0077.png
    images/frames/0076.png
    images/frames/0075.png
    images/frames/0074.png
    images/frames/0073.png
    images/frames/0072.png
    images/frames/0071.png
    images/frames/0070.png
    images/frames/0069.png
    images/frames/0068.png
    images/frames/0067.png
    images/frames/0066.png
    images/frames/0166.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0059.png
    images/frames/0060.png
    images/frames/0061.png
    images/frames/0062.png
    images/frames/0063.png
    images/frames/0064.png
    images/frames/0065.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0165.png
    images/frames/0164.png
    images/frames/0163.png
    images/frames/0162.png
    images/frames/0161.png
    images/frames/0160.png
    images/frames/0159.png
    images/frames/0158.png
    images/frames/0157.png
    images/frames/0156.png
    images/frames/0155.png
    images/frames/0154.png
    images/frames/0153.png
    images/frames/0152.png
    images/frames/0151.png
    images/frames/0150.png
    images/frames/0149.png
    images/frames/0148.png
    images/frames/0147.png
    images/frames/0146.png
    images/frames/0145.png
    images/frames/0144.png
    images/frames/0143.png
    images/frames/0142.png
    images/frames/0141.png
    images/frames/0140.png
    images/frames/0139.png
    images/frames/0138.png
    images/frames/0137.png
    images/frames/0136.png
    images/frames/0135.png
    images/frames/0134.png
    images/frames/0133.png
    images/frames/0132.png
    images/frames/0131.png
    images/frames/0130.png
    images/frames/0129.png
    images/frames/0128.png
    images/frames/0127.png
    images/frames/0126.png
    images/frames/0125.png
    images/frames/0124.png
    images/frames/0123.png
    images/frames/0122.png
    images/frames/0121.png
    images/frames/0120.png
    images/frames/0119.png
    images/frames/0118.png
    images/frames/0117.png
    images/frames/0116.png
    images/frames/0115.png
    images/frames/0114.png
    images/frames/0113.png
    images/frames/0112.png
    images/frames/0111.png
    images/frames/0110.png
    images/frames/0109.png
    images/frames/0108.png
    images/frames/0107.png
    images/frames/0106.png
    images/frames/0105.png
    images/frames/0104.png
    images/frames/0103.png
    images/frames/0102.png
    images/frames/0101.png
    images/frames/0100.png
    images/frames/0099.png
    images/frames/0098.png
    images/frames/0097.png
    images/frames/0096.png
    images/frames/0095.png
    images/frames/0094.png
    images/frames/0093.png
    images/frames/0092.png
    images/frames/0091.png
    images/frames/0090.png
    images/frames/0089.png
    images/frames/0088.png
    images/frames/0087.png
    images/frames/0086.png
    images/frames/0085.png
    images/frames/0084.png
    images/frames/0083.png
    images/frames/0082.png
    images/frames/0081.png
    images/frames/0080.png
    images/frames/0079.png
    images/frames/0078.png
    images/frames/0077.png
    images/frames/0076.png
    images/frames/0075.png
    images/frames/0074.png
    images/frames/0073.png
    images/frames/0072.png
    images/frames/0071.png
    images/frames/0070.png
    images/frames/0069.png
    images/frames/0068.png
    images/frames/0067.png
    images/frames/0066.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0166.png
    images/frames/0165.png
    images/frames/0164.png
    images/frames/0163.png
    images/frames/0162.png
    images/frames/0161.png
    images/frames/0160.png
    images/frames/0159.png
    images/frames/0158.png
    images/frames/0157.png
    images/frames/0156.png
    images/frames/0155.png
    images/frames/0154.png
    images/frames/0153.png
    images/frames/0152.png
    images/frames/0151.png
    images/frames/0150.png
    images/frames/0149.png
    images/frames/0148.png
    images/frames/0147.png
    images/frames/0146.png
    images/frames/0145.png
    images/frames/0144.png
    images/frames/0143.png
    images/frames/0142.png
    images/frames/0141.png
    images/frames/0140.png
    images/frames/0139.png
    images/frames/0138.png
    images/frames/0137.png
    images/frames/0136.png
    images/frames/0135.png
    images/frames/0134.png
    images/frames/0133.png
    images/frames/0132.png
    images/frames/0131.png
    images/frames/0130.png
    images/frames/0129.png
    images/frames/0128.png
    images/frames/0127.png
    images/frames/0126.png
    images/frames/0125.png
    images/frames/0124.png
    images/frames/0123.png
    images/frames/0122.png
    images/frames/0121.png
    images/frames/0120.png
    images/frames/0119.png
    images/frames/0118.png
    images/frames/0117.png
    images/frames/0116.png
    images/frames/0115.png
    images/frames/0114.png
    images/frames/0113.png
    images/frames/0112.png
    images/frames/0111.png
    images/frames/0110.png
    images/frames/0109.png
    images/frames/0108.png
    images/frames/0107.png
    images/frames/0106.png
    images/frames/0105.png
    images/frames/0104.png
    images/frames/0103.png
    images/frames/0102.png
    images/frames/0101.png
    images/frames/0100.png
    images/frames/0099.png
    images/frames/0098.png
    images/frames/0097.png
    images/frames/0096.png
    images/frames/0095.png
    images/frames/0094.png
    images/frames/0093.png
    images/frames/0092.png
    images/frames/0091.png
    images/frames/0090.png
    images/frames/0089.png
    images/frames/0088.png
    images/frames/0087.png
    images/frames/0086.png
    images/frames/0085.png
    images/frames/0084.png
    images/frames/0083.png
    images/frames/0082.png
    images/frames/0081.png
    images/frames/0080.png
    images/frames/0079.png
    images/frames/0078.png
    images/frames/0077.png
    images/frames/0076.png
    images/frames/0075.png
    images/frames/0074.png
    images/frames/0073.png
    images/frames/0072.png
    images/frames/0071.png
    images/frames/0070.png
    images/frames/0069.png
    images/frames/0068.png
    images/frames/0067.png
    images/frames/0066.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0058.png
    images/frames/0057.png
    images/frames/0056.png
    images/frames/0055.png
    images/frames/0054.png
    images/frames/0053.png
    images/frames/0052.png
    images/frames/0051.png
    images/frames/0050.png
    images/frames/0049.png
    images/frames/0048.png
    images/frames/0047.png
    images/frames/0046.png
    images/frames/0045.png
    images/frames/0044.png
    images/frames/0043.png
    images/frames/0042.png
    images/frames/0041.png
    images/frames/0040.png
    images/frames/0039.png
    images/frames/0038.png
    images/frames/0037.png
    images/frames/0036.png
    images/frames/0035.png
    images/frames/0034.png
    images/frames/0033.png
    images/frames/0032.png
    images/frames/0031.png
    images/frames/0030.png
    images/frames/0029.png
    images/frames/0028.png
    images/frames/0027.png
    images/frames/0026.png
    images/frames/0025.png
    images/frames/0024.png
    images/frames/0023.png
    images/frames/0022.png
    images/frames/0021.png
    images/frames/0020.png
    images/frames/0019.png
    images/frames/0018.png
    images/frames/0017.png
    images/frames/0016.png
    images/frames/0015.png
    images/frames/0014.png
    images/frames/0013.png
    images/frames/0012.png
    images/frames/0011.png
    images/frames/0010.png
    images/frames/0009.png
    images/frames/0008.png
    images/frames/0007.png
    images/frames/0006.png
    images/frames/0005.png
    images/frames/0004.png
    images/frames/0003.png
    images/frames/0002.png
    images/frames/0001.png
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
        end: `+=50% top`,
        markers: false,
        pin: false,
        scroller: `#main`
    }
})
