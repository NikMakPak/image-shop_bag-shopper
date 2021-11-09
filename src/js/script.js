let pasteZone=document.querySelector('.working-zone');

function imgPaste(input){
    let file=input.files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);

    reader.onload=function() {
        let pasteBtn=document.querySelector('.paste_img-btn');
        let img = document.createElement('img');
        pasteBtn.remove();
        pasteZone.appendChild(img);
        img.src=reader.result;
        img.className="user-img";
    };
};