let isim=prompt("Adınız nedir?");

let info=document.querySelector('#myname');
info.innerHTML=`${isim.toUpperCase()}`

function saatiGoster(){
    let info1 = document.querySelector('#myClock');
    let tarih = new Date();
    let gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    info1.innerHTML = `${tarih.getHours() +" : "+ tarih.getMinutes() + " : " + tarih.getSeconds() + " "} ${gunler[tarih.getDay()]} `
}
setInterval(saatiGoster, 1000); 