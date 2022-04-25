let i = 0;
let image = [];
let interval = 3500;

image [0] = "url('img/Creative.jpg')";
image [1] = "url('img/Creative_1.jpg')";
image [2] = "url('img/Creative_2.jpg')";
image [3] = "url('img/Creative_3.jpg')";

function slideshow(){
    document.getElementById("bg_img").style.backgroundImage = image[i];
        if (i < image.length - 1) {
            i++;
        }else{
            i = 0;
        }
        setTimeout('slideshow()', interval);
}
window.onload = slideshow;

//for clock

function real_time() {
let clock = document.getElementById('clock');

    let time = new Date();
    let h = time.getHours().toString();
    let m = time.getMinutes().toString();
    let s = time.getSeconds().toString();

    if (h.length < 2){
        h = '0' + h;
    }
    if (m.length < 2){
        m = '0' + m;
    }
    if (s.length < 2){
        s = '0' + s;
    }

    let clock_string = h + ':' + m + ':' + s;
    clock.textContent = clock_string;
}

setInterval(real_time, 1000);

//download file

function download(filename ) {
    let all_param = "Akademia Finansow i Biznesu Vistula\nPrzedmiot: Wprowadzenie do technik internetowych\nAutory projektu: Oliinyk Dmytro 51064, Lazarenko Denys 51064\n " ;
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,'  + encodeURIComponent(all_param));// окуратно при объявлении
    element.setAttribute('download', filename);

    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

//menu for small display

/*let sidebar = document.getElementById('sidebar');

function name() {
    let display = document.documentElement.clientWidth;
    if (display < 768) {  //768 - параметр длины окна
        sidebar.classList.add('small__display');
    }
}
name();

*/
//for reviews

let show_reviews = document.getElementById('show_reviews');

function add_reviews(){
     let text = document.getElementById('text');
     let your_text = prompt('zmień komentarz', "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu leo quam...");
     text.textContent = your_text;
     let autor = document.getElementById('autor');
     let your_name = prompt("kim jesteś?", "Susan Sims, Interaction Designer at XYZ");
     autor.textContent = your_name;
}

