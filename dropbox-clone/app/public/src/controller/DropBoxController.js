class DropBoxController {

    constructor(){

        this.btnSendFileEl = document.querySelector('#btn-send-file');
        this.inputFilesEl = document.querySelector('#files');
        //sending file - time remaining bar
        this.snackModalEl = document.querySelector("#react-snackbar-root");
        this.initEvents();
    }

    initEvents(){
        this.btnSendFileEl.addEventListener('click', event =>{
            this.inputFilesEl.click();
        });

        this.inputFilesEl.addEventListener('change', event=>{
            this.snackModalEl.style.display = 'block';
        });
    }
}