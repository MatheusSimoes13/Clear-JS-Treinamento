class WhatsAppController{

    constructor(){

        console.log('whatsappcontroller ok');

        this.loadElements();


    }


// Gets all the IDS from the index html
    loadElements(){

        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {

            this.el[Format.getCamelCase(element.id)] = element;

        });
    }

}