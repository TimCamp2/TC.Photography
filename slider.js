function Slider(container, nav) {
    this.container = container;
    this.nav = nav.show();

    this.imgs = this.container.find('img');
    this.imgWidth = this.imgs[0].width; // 600
    this.imgsLen = this.imgs.length;

    this.current = 0;
}

Slider.prototype.transition = function (coords) {
    this.container.animate({
        'margin-left': coords || -(this.current * this.imgWidth)
    });
};


//with dir from HTML, it will now be set to next or prev
Slider.prototype.setCurrent = function (dir) {
    var pos = this.current;

    pos += (~~(dir === 'next') || -1);
    this.current = (pos < 0) ? this.imgsLen - 1 : pos % this.imgsLen;

    return pos;
};


