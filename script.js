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
