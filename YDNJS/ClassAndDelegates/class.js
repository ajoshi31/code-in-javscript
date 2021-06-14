
// Parent Class
class Widget {
    constructor(width, height) {
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    }
    render($where) {
        if (this.$elem) {
            this.$elem.css({
                width: this.width + 'px',
                height: this.height + 'px'
            }).appendTo($where);
        }
    }
}


// Child class

class Button extends Widget {
    constructor(width, height, label) {

        super(width, height)
        this.label = label || 'Default';
        this.$elem = $('"<button>').text(this.label);
    }
    //override base inherited render
    render($where) {
        // super call
        super.render($where)
        this.$elem.click(this.onClick.bind(this));
    }
    onClick(evt) {
        console.log("Button" + this.label + " is clicked");
    }
}

// Make button inherit from Widget
Button.prototype = Object.create(Widget.prototype);



$(document).ready(function () {
    var $body = $(document.body);
    var btn1 = new Button(120, 34, "Primary");
    var btn2 = new Button(120, 34, "Secondary");

    btn1.render($body);
    btn2.render($body);
})


