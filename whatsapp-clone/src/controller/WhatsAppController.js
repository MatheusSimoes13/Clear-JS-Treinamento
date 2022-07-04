class WhatsAppController{

    constructor(){

        console.log('whatsappcontroller ok');

        this.elementsPrototype();
        this.loadElements();
        this.initEvents();

    }


// Gets all the IDS from the index html
    loadElements(){

        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {

            this.el[Format.getCamelCase(element.id)] = element;

        });
    }

    elementsPrototype(){

        Element.prototype.hide = function(){

            this.style.display = 'none';
            return this;
        }

        Element.prototype.show = function(){

            this.style.display = 'block';
            return this;
        }

        Element.prototype.toggle = function(){

            this.style.display = function(){
                this.style.display = (this.style.display = 'none') ? 'block' : 'none';
                return this;
            }

        }

        // Adds multiple events to an element
        Element.prototype.on = function(events, fn){
            events.split(' ').forEach(event=>{
                this.addEventListener(event, fn);
            });
            return this;
        }

        Element.prototype.css = function(styles){
            for (let name in styles){
                this.style[name] = styles[name];
            }
            return this;
        }

        Element.prototype.addClass = function(name){
            this.classList.add(name);
            return this;
        }

        Element.prototype.removeClass = function(name){
            this.classList.remove(name);
            return this;
        }

        Element.prototype.toggleClass = function(name){
            this.classList.toggle(name);
            return this;
        }

        Element.prototype.hasClass = function(name){
            return this.classList.contains(name);
        }
        
        HTMLFormElement.prototype.getForm = function (){
            return new FormData(this);
        }

        HTMLFormElement.prototype.toJSON = function (){
            
            let json = {};

            this.getForm().forEach((value,key)=>{

                json[key] = value;

            });

            return json;

        }


    }

    initEvents(){

        this.el.myPhoto.on('click',e=>{

            this.closeAllLeftPanel();
            this.el.panelEditProfile.show();
            // Fixing the transition
            setTimeout(()=>{
                this.el.panelEditProfile.addClass('open');
            }, 300);

        });

        this.el.btnNewContact.on('click', e=>{

            this.closeAllLeftPanel();
            this.el.panelAddContact.show();
            // Fixing the transition
            setTimeout(()=>{
                this.el.panelAddContact.addClass('open');
            }, 300);
            

        });

        this.el.btnClosePanelEditProfile.on('click', e=>{

            this.el.panelEditProfile.removeClass('open');

        });

        this.el.btnClosePanelAddContact.on('click', e=>{

            this.el.panelAddContact.removeClass('open');

        });

        // creates a click in the input
        this.el.photoContainerEditProfile.on('click', e=>{

            this.el.inputProfilePhoto.click();

        });

        this.el.inputNamePanelEditProfile.on('keypress', e=>{

            if(e.key === 'Enter'){
                e.preventDefault();
                this.el.btnSavePanelEditProfile.click();
            }

        });

        this.el.btnSavePanelEditProfile.on('click', e=>{

        });

        this.el.formPanelAddContact.on('submit', e=>{

            e.preventDefault();

            let formData = new FormData(this.el.formPanelAddContact);

        });

    }

    // hides contact and profile panels
    closeAllLeftPanel(){

        this.el.panelAddContact.hide();
        this.el.panelEditProfile.hide();

    }


}