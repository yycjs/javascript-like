declare var $: any;

class ContactManager {
    constructor() {
        var cm = this;
        $('#new-contact').click(function () {
            cm.newContact();
        });
    };

    newContact() {
        var div$ = $('<div></div>')
                .css({
                    position:'absolute',
                    left:100,
                    top:100,
                    width:500,
                    height:300,
                    border: 'solid 1px black'
                });
        div$.appendTo(document.body);
    };
}