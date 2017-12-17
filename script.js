
// var h_button = document.getElementById("show_for_helsinki");




// var h = document.getElementById("helsinki");
// var tu = document.getElementById("turku");
// var ta = document.getElementById("tampere");
// var ou = document.getElementById("oulu");
// var ro = document.getElementById("rovaniemi");

var md = document.getElementById("movie_description");

// var tm = document.getElementById("time");

// var tex = document.getElementById("text");

var small_room = document.getElementById("small_room");
var bigroom = document.getElementById("room2");
var mediumroom = document.getElementById("room3");
var cont = document.getElementById("content");



// var row = document.getElementByClassName('room_row');
// var sld = document.getElementById("slider");
// var spt = document.getElementById("spoth1");
// var sl = document.getElementByClassName("a");



// spot.length;




// var turku1 = document.getElementById("small_room_turku");
// turku1.innerHTML = small_room.innerHTML;


// window.onload = slide();




    // function show_for_helsinki() {
    //                 h.style.display = "block";

    //                 tex.style.display = "none";
    //                 tu.style.display = "none";
    //                 ta.style.display = "none";
    //                 ou.style.display = "none";
    //                 ro.style.display = "none"; }

    //  function show_for_turku() {
    //                 tu.style.display = "block";

    //                 tex.style.display = "none";
    //                 h.style.display = "none";
    //                 ta.style.display = "none";
    //                 ou.style.display = "none"; 
    //                 ro.style.display = "none"; }

    // function show_for_tampere(){

    //                 // ta.style.opacity = "1";
    //                 // ta.style.transition = "all 1s";

    //                 // tex.style.opacity = "0";
    //                 // h.style.opacity = "0";
    //                 // tu.style.opacity = "0";
    //                 // ou.style.opacity = "0";
    //                 // ro.style.opacity = "0"; }


    //                 ta.style.display = "block";

    //                 tex.style.display = "none";
    //                 h.style.display = "none";
    //                 tu.style.display = "none";
    //                 ou.style.display = "none";
    //                 ro.style.display = "none"; }

    // function show_for_oulu(){
    //                 // tex.style.opacity = "0";

    //                 // ou.style.opacity = "1";
    //                 // ou.style.transition = "all 1s";

    //                 // h.style.opacity = "0";
    //                 // tu.style.opacity = "0";
    //                 // ta.style.opacity = "0";
    //                 // ro.style.opacity = "0"; 



    //                 ou.style.display = "block";

    //                 tex.style.display = "none";
    //                 h.style.display = "none";
    //                 tu.style.display = "none";
    //                 ta.style.display = "none";
    //                 ro.style.display = "none";
    //             }

    // function show_for_rovaniemi(){
    //                 // tex.style.opacity = "0";

    //                 // ro.style.opacity = "1";
    //                 // ro.style.transition = "all 1s";

    //                 // h.style.opacity = "0";
    //                 // tu.style.opacity = "0";
    //                 // ta.style.opacity = "0";
    //                 // ou.style.opacity = "0";


    //                 ro.style.display = "block";

    //                 tex.style.display = "none";
    //                 h.style.display = "none";
    //                 tu.style.display = "none";
    //                 ou.style.display = "none";
    //                 ta.style.display = "none";

    //                 }



    function room1_helsinki(){

        window.open("room1.html", "_blank", "scrollbars=no,resizable=no,top=200,left=500,width=270,height=450");

        // small_room.style.display = "block";
        // small_room.style.opacity = "1";
        // small_room.style.transition = "all 1s";
   
        // spot.style.display = "block";
        // row.style.display = "block";
        // sld.style.display = "block";
        // sld.style.height = "400px";
        // sld.style.transition = "height 1s";
        // spot.style.background = "red";

    }

    // function close_h1() {
    //     // small_room.style.height = "0px";
    //     // small_room.style.transition = "height 1s";
    //     // var id = spot.id;

    //     small_room.style.display = "none";
    //     bigroom.style.display = "none";
    //     mediumroom.style.display = "none";

    //     for (var i = 0; i<= spots; i++) {
    //     document.getElementById("mesto"+i).classList.remove('selected');
    //     document.getElementById("mesto"+i).classList.add('spoth1'); 

    //     document.getElementById(id).removeEventListener("click", unselect);
    //     document.getElementById(id).addEventListener("click", select); 

    //     // var priceindex = sel.length;
    //     // var price = 13 * priceindex;
    //     // document.getElementById("pricespot").innerHTML = price + "€";
        

    // }    

    //  }


        // slide.style.height = "0px";
        // slide.style.transition = "height 1s";
        // bigroom.style.display = "none";
        //  mediumroom.style.display = "none";
         // spot.style.background = "#737373";
    

    function big_room(){
        window.open("room2.html", "_blank", "scrollbars=yes,resizable=no,top=200,left=500,width=570,height=430");

        // bigroom.style.display = "block";
    }

    function medium_room(){
        window.open("room3.html", "_blank", "scrollbars=yes,resizable=no,top=200,left=450,width=430,height=370");

        // mediumroom.style.display = "block";
    }



