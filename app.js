// var Drive = "OneDrive";
// console.log(Drive);
let api = "https://script.google.com/macros/s/AKfycbxWi5jMDxQLt6tgDP2ijb5ktAE3gk9BBeND9AlELsEu4C5AAK5dJj-qevTpyhLjnQVwlg/exec";
let msg = document.querySelector(".message");
let file = document.querySelector(".file");
let btn = document.querySelector(".btn");
let text = document.querySelector(".text");
btn.addEventListener('click',()=>{
    msg.innerHTML=`Loading..`;
    let fr = new FileReader();
    fr.readAsDataURL(file.files[0])
    fr.onload=()=>{
        let res = fr.result;
        let b64 = res.split("base64,")[1];
        fetch(api,{
            method:"POST",
            body:JSON.stringify({
                file:b64,
                type:file.files[0].type,
                name:file.files[0].name
            })
        })
          .then(res => res.text())
          .then(data => {
            text.innerHTML=data;
            msg.innerHTML=``;
          });
    }
})