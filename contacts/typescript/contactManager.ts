declare var $: any;

class ContactManager {
    constructor() {
        $('li').each(function (index, elem) {
            console.log(elem);
        });
    };
}