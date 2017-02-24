// 移动的控制器

export function start(joing: (p: boolean) => void, initDone: () => void) {
    const p1 = {
        upDown: 0,
        downDown: 0,
        leftDown: 0,
        rightDown: 0,
        itemDown: 0,
        itemPress: false,
        leftPress: false,
        rightPress: false,
        upPress: false,
        downPress: false,
    };
    $("body").on("touchmove", e => {
        e.preventDefault();
    });
    $(".notice").hide();
    $(".mobileController").show();

    $(".mobileController .moreBtn").on("touchstart", e => {
        const t = $(e.currentTarget).data("act");
        if (t === "a") {
            if (!p1.itemDown) {
                p1.itemPress = true;
            }
            p1.itemDown = 20000;
        } else if (t === "l") {
            if (!p1.leftDown) {
                p1.leftPress = true;
            }
            p1.leftDown = 20000;
        } else if (t === "r") {
            if (!p1.rightDown) {
                p1.rightPress = true;
            }
            p1.rightDown = 20000;
        } else if (t === "u") {
            if (!p1.upDown) {
                p1.upPress = true;
            }
            p1.upDown = 20000;
        } else if (t === "d") {
            if (!p1.downDown) {
                p1.downPress = true;
            }
            p1.downDown = 20000;
        }
    });

    $(".mobileController .moreBtn").on("touchend", e => {
        const t = $(e.currentTarget).data("act");
        if (t === "a") {
            p1.itemDown = 0;
        } else if (t === "l") {
            p1.leftDown = 0;
        } else if (t === "r") {
            p1.rightDown = 0;
        } else if (t === "u") {
            p1.upDown = 0;
        } else if (t === "d") {
            p1.downDown = 0;
        }
    });

    $(".joining .joinBtn").click(() => { joing(true); });
    $(".joining .dismissBtn").click(() => {
        $(".joining").hide();
    });

    function checkDisplay() {
        if (600 > window.innerHeight) {
            const h = window.innerHeight;
            const w = Math.floor(h / 600 * 1100);
            $(".middle").css("width", w).css("height", h);
        } else {
            $(".middle").css("width", "").css("height", "");
        }
    }
    checkDisplay();
    $(window).resize(checkDisplay);

    if (initDone) {
        initDone();
    }
    return p1;
}
