var imgCount = 10; // 23
var imgLocation = "";

var gallery = $("#gallery");
var showcase = $("#showcase");
var showcase_img = showcase.find("img");
var current_img = 1;
var next_img = false;
showcase_img.on("click", NextImg);
showcase.toggle();
showcase.on("click", HideShowcase);

function SetImgCountAndLocation(cnt, loc) {
    imgCount = cnt;
    imgLocation = loc;
    for (let i = 1; i < imgCount+1; i++) {
        var gallery_item = $('<div class="gallery_container"><div class="gallery_content"><img src="' + imgLocation + i + '.png"></div></div>');
        gallery_item.on("click", { index: i }, OpenShowcase);
        gallery.append(gallery_item);
    }
}

function OpenShowcase(event) {
    current_img = event.data.index;
    showcase_img.attr("src", "" + imgLocation + current_img + ".png");
    showcase.toggle();
}

function HideShowcase() {
    if (next_img == false) {
        showcase.toggle();
    }
    next_img = false;
}

function NextImg() {
    next_img = true;
    current_img++;
    if (current_img > imgCount) { current_img = 1; }
    showcase_img.attr("src", "" + imgLocation + current_img + ".png");
}