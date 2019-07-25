//プレイヤー表示//
function selectboxChange() {
    const name = document.getElementById('name');
    const target = document.getElementById('target');
    const selindex = target.selectedIndex;
    const RANK = document.getElementById('RANK');

    const MeMo = '<input type="text" maxlength="8" class="textarea" placeholder="プレイヤー名">';
    const one = '<span class="font-number">01</span>' + MeMo;
    const two = '<span class="font-number">02</span>' + MeMo;
    const three = '<span class="font-number">03</span>' + MeMo;
    const four = '<br><span class="font-number">04</span>' + MeMo;
    const five = '<span class="font-number">05</span>' + MeMo;
    const six = '<span class="font-number">06</span>' + MeMo;
    const seven = '<br><span class="font-number">07</span>' + MeMo;
    const eight = '<span class="font-number">08</span>' + MeMo;
    const nine = '<span class="font-number">09</span>' + MeMo;
    const ten = '<br><span class="font-number">10</span>' + MeMo;
    const eleven = '<span class="font-number">11</span>' + MeMo;
    const twelve = '<span class="font-number">12</span>' + MeMo;
    const thrteen = '<br><span class="font-number">13</span>' + MeMo;
    const forteen = '<span class="font-number">14</span>' + MeMo;
    const fifteen = '<span class="font-number">15</span>' + MeMo;
  
    switch (selindex) {
      case 1:
        name.innerHTML = one;
        break;
      case 2:
        name.innerHTML = one + two;
        break;
      case 3:
        name.innerHTML = one + two + three;
        break;
      case 4:
        name.innerHTML = one + two + three + four;
        break;
      case 5:
        name.innerHTML = one + two + three + four + five;
        break;
      case 6:
        name.innerHTML = one + two + three + four + five + six;
        break;
      case 7:
        name.innerHTML = one + two + three + four + five + six + seven;
        break;
      case 8:
        name.innerHTML = one + two + three + four + five + six + seven + eight;
        break;
      case 9:
        name.innerHTML = one + two + three + four + five + six + seven + eight + nine;
        break;
      case 10:
        name.innerHTML = one + two + three + four + five + six + seven + eight + nine + ten;
        break;
      case 11:
        name.innerHTML = one + two + three + four + five + six + seven + eight + nine + ten + eleven;
        break;
      case 12:
        name.innerHTML = one + two + three + four + five + six + seven + eight + nine + ten +  eleven + twelve;
        break;
      case 13:
        name.innerHTML = one + two + three + four + five + six + seven + eight + nine + ten + eleven + twelve + thrteen;
        break;
      case 14:
        name.innerHTML = one + two + three + four + five + six + seven + eight + nine + ten +  eleven + twelve + thrteen + forteen;
        break;
      case 15:
        name.innerHTML = one + two + three + four + five + six + seven + eight + nine + ten +  eleven + twelve + thrteen + forteen + fifteen;
        break;
      default:
        name.textContent = '';
        RANK.textContent = '';
    }
  }

//クリックカラー　ドラッグ&ドロップ//
(function(){

  //クリックカラー//
    var col1 = document.getElementById("col1");
    col1.addEventListener('click', function(){
    
        if(document.defaultView.getComputedStyle(col1, null).backgroundColor == "rgb(0, 0, 255)") {
            col1.style.backgroundColor = "#ff0000";
            }
            else if(document.defaultView.getComputedStyle(col1, null).backgroundColor == "rgb(255, 0, 0)"){
            col1.style.backgroundColor = "#cca11f"
            }
            else if(document.defaultView.getComputedStyle(col1, null).backgroundColor == "rgb(204, 161, 31)"){
            col1.style.backgroundColor = "#008000";
            } 
            else if(document.defaultView.getComputedStyle(col1, null).backgroundColor == "rgb(0, 128, 0)"){
            col1.style.backgroundColor = "#800080";
            }
            else if(document.defaultView.getComputedStyle(col1, null).backgroundColor == "rgb(128, 0, 128)"){
            col1.style.backgroundColor = "#FF4F02";
            }
            else{
            col1.style.backgroundColor = "#0000ff";
            }
    } );

    var col2 = document.getElementById("col2");
    col2.addEventListener('click', function(){
    
        if(document.defaultView.getComputedStyle(col2, null).backgroundColor == "rgb(0, 0, 255)") {
            col2.style.backgroundColor = "#ff0000";
            }
            else if(document.defaultView.getComputedStyle(col2, null).backgroundColor == "rgb(255, 0, 0)"){
            col2.style.backgroundColor = "#cca11f"
            }
            else if(document.defaultView.getComputedStyle(col2, null).backgroundColor == "rgb(204, 161, 31)"){
            col2.style.backgroundColor = "#008000";
            } 
            else if(document.defaultView.getComputedStyle(col2, null).backgroundColor == "rgb(0, 128, 0)"){
            col2.style.backgroundColor = "#800080";
            }
            else if(document.defaultView.getComputedStyle(col2, null).backgroundColor == "rgb(128, 0, 128)"){
            col2.style.backgroundColor = "#FF4F02";
            }
            else{
            col2.style.backgroundColor = "#0000ff";
            }
    } );

    var col3 = document.getElementById("col3");
    col3.addEventListener('click', function(){
    
        if(document.defaultView.getComputedStyle(col3, null).backgroundColor == "rgb(0, 0, 255)") {
            col3.style.backgroundColor = "#ff0000";
            }
            else if(document.defaultView.getComputedStyle(col3, null).backgroundColor == "rgb(255, 0, 0)"){
            col3.style.backgroundColor = "#cca11f"
            }
            else if(document.defaultView.getComputedStyle(col3, null).backgroundColor == "rgb(204, 161, 31)"){
            col3.style.backgroundColor = "#008000";
            } 
            else if(document.defaultView.getComputedStyle(col3, null).backgroundColor == "rgb(0, 128, 0)"){
            col3.style.backgroundColor = "#800080";
            }
            else if(document.defaultView.getComputedStyle(col3, null).backgroundColor == "rgb(128, 0, 128)"){
            col3.style.backgroundColor = "#FF4F02";
            }
            else{
            col3.style.backgroundColor = "#0000ff";
            }
    } );

    var col4 = document.getElementById("col4");
    col4.addEventListener('click', function(){
    
        if(document.defaultView.getComputedStyle(col4, null).backgroundColor == "rgb(0, 0, 255)") {
            col4.style.backgroundColor = "#ff0000";
            }
            else if(document.defaultView.getComputedStyle(col4, null).backgroundColor == "rgb(255, 0, 0)"){
            col4.style.backgroundColor = "#cca11f"
            }
            else if(document.defaultView.getComputedStyle(col4, null).backgroundColor == "rgb(204, 161, 31)"){
            col4.style.backgroundColor = "#008000";
            } 
            else if(document.defaultView.getComputedStyle(col4, null).backgroundColor == "rgb(0, 128, 0)"){
            col4.style.backgroundColor = "#800080";
            }
            else if(document.defaultView.getComputedStyle(col4, null).backgroundColor == "rgb(128, 0, 128)"){
            col4.style.backgroundColor = "#FF4F02";
            }
            else{
            col4.style.backgroundColor = "#0000ff";
            }
    } );

    var col5 = document.getElementById("col5");
    col5.addEventListener('click', function(){
    
        if(document.defaultView.getComputedStyle(col5, null).backgroundColor == "rgb(0, 0, 255)") {
            col5.style.backgroundColor = "#ff0000";
            }
            else if(document.defaultView.getComputedStyle(col5, null).backgroundColor == "rgb(255, 0, 0)"){
            col5.style.backgroundColor = "#cca11f"
            }
            else if(document.defaultView.getComputedStyle(col5, null).backgroundColor == "rgb(204, 161, 31)"){
            col5.style.backgroundColor = "#008000";
            } 
            else if(document.defaultView.getComputedStyle(col5, null).backgroundColor == "rgb(0, 128, 0)"){
            col5.style.backgroundColor = "#800080";
            }
            else if(document.defaultView.getComputedStyle(col5, null).backgroundColor == "rgb(128, 0, 128)"){
            col5.style.backgroundColor = "#FF4F02";
            }
            else{
            col5.style.backgroundColor = "#0000ff";
            }
    } );

    var col6 = document.getElementById("col6");
    col6.addEventListener('click', function(){
    
        if(document.defaultView.getComputedStyle(col6, null).backgroundColor == "rgb(0, 0, 255)") {
            col6.style.backgroundColor = "#ff0000";
            }
            else if(document.defaultView.getComputedStyle(col6, null).backgroundColor == "rgb(255, 0, 0)"){
            col6.style.backgroundColor = "#cca11f"
            }
            else if(document.defaultView.getComputedStyle(col6, null).backgroundColor == "rgb(204, 161, 31)"){
            col6.style.backgroundColor = "#008000";
            } 
            else if(document.defaultView.getComputedStyle(col6, null).backgroundColor == "rgb(0, 128, 0)"){
            col6.style.backgroundColor = "#800080";
            }
            else if(document.defaultView.getComputedStyle(col6, null).backgroundColor == "rgb(128, 0, 128)"){
            col6.style.backgroundColor = "#FF4F02";
            }
            else{
            col6.style.backgroundColor = "#0000ff";
            }
    } );

    var col7 = document.getElementById("col7");
    col7.addEventListener('click', function(){
    
        if(document.defaultView.getComputedStyle(col7, null).backgroundColor == "rgb(0, 0, 255)") {
            col7.style.backgroundColor = "#ff0000";
            }
            else if(document.defaultView.getComputedStyle(col7, null).backgroundColor == "rgb(255, 0, 0)"){
            col7.style.backgroundColor = "#cca11f"
            }
            else if(document.defaultView.getComputedStyle(col7, null).backgroundColor == "rgb(204, 161, 31)"){
            col7.style.backgroundColor = "#008000";
            } 
            else if(document.defaultView.getComputedStyle(col7, null).backgroundColor == "rgb(0, 128, 0)"){
            col7.style.backgroundColor = "#800080";
            }
            else if(document.defaultView.getComputedStyle(col7, null).backgroundColor == "rgb(128, 0, 128)"){
            col7.style.backgroundColor = "#FF4F02";
            }
            else{
            col7.style.backgroundColor = "#0000ff";
            }
    } );

    var col8 = document.getElementById("col8");
    col8.addEventListener('click', function(){
    
        if(document.defaultView.getComputedStyle(col8, null).backgroundColor == "rgb(0, 0, 255)") {
            col8.style.backgroundColor = "#ff0000";
            }
            else if(document.defaultView.getComputedStyle(col8, null).backgroundColor == "rgb(255, 0, 0)"){
            col8.style.backgroundColor = "#cca11f"
            }
            else if(document.defaultView.getComputedStyle(col8, null).backgroundColor == "rgb(204, 161, 31)"){
            col8.style.backgroundColor = "#008000";
            } 
            else if(document.defaultView.getComputedStyle(col8, null).backgroundColor == "rgb(0, 128, 0)"){
            col8.style.backgroundColor = "#800080";
            }
            else if(document.defaultView.getComputedStyle(col8, null).backgroundColor == "rgb(128, 0, 128)"){
            col8.style.backgroundColor = "#FF4F02";
            }
            else{
            col8.style.backgroundColor = "#0000ff";
            }
    } );

    var col9 = document.getElementById("col9");
    col9.addEventListener('click', function(){
    
        if(document.defaultView.getComputedStyle(col9, null).backgroundColor == "rgb(0, 0, 255)") {
            col9.style.backgroundColor = "#ff0000";
            }
            else if(document.defaultView.getComputedStyle(col9, null).backgroundColor == "rgb(255, 0, 0)"){
            col9.style.backgroundColor = "#cca11f"
            }
            else if(document.defaultView.getComputedStyle(col9, null).backgroundColor == "rgb(204, 161, 31)"){
            col9.style.backgroundColor = "#008000";
            } 
            else if(document.defaultView.getComputedStyle(col9, null).backgroundColor == "rgb(0, 128, 0)"){
            col9.style.backgroundColor = "#800080";
            }
            else if(document.defaultView.getComputedStyle(col9, null).backgroundColor == "rgb(128, 0, 128)"){
            col9.style.backgroundColor = "#FF4F02";
            }
            else{
            col9.style.backgroundColor = "#0000ff";
            }
    } );

    var col10 = document.getElementById("col10");
    col10.addEventListener('click', function(){
    
        if(document.defaultView.getComputedStyle(col10, null).backgroundColor == "rgb(0, 0, 255)") {
            col10.style.backgroundColor = "#ff0000";
            }
            else if(document.defaultView.getComputedStyle(col10, null).backgroundColor == "rgb(255, 0, 0)"){
            col10.style.backgroundColor = "#cca11f"
            }
            else if(document.defaultView.getComputedStyle(col10, null).backgroundColor == "rgb(204, 161, 31)"){
            col10.style.backgroundColor = "#008000";
            } 
            else if(document.defaultView.getComputedStyle(col10, null).backgroundColor == "rgb(0, 128, 0)"){
            col10.style.backgroundColor = "#800080";
            }
            else if(document.defaultView.getComputedStyle(col10, null).backgroundColor == "rgb(128, 0, 128)"){
            col10.style.backgroundColor = "#FF4F02";
            }
            else{
            col10.style.backgroundColor = "#0000ff";
            }
    } );

    var col11 = document.getElementById("col11");
    col11.addEventListener('click', function(){
    
        if(document.defaultView.getComputedStyle(col11, null).backgroundColor == "rgb(0, 0, 255)") {
            col11.style.backgroundColor = "#ff0000";
            }
            else if(document.defaultView.getComputedStyle(col11, null).backgroundColor == "rgb(255, 0, 0)"){
            col11.style.backgroundColor = "#cca11f"
            }
            else if(document.defaultView.getComputedStyle(col11, null).backgroundColor == "rgb(204, 161, 31)"){
            col11.style.backgroundColor = "#008000";
            } 
            else if(document.defaultView.getComputedStyle(col11, null).backgroundColor == "rgb(0, 128, 0)"){
            col11.style.backgroundColor = "#800080";
            }
            else if(document.defaultView.getComputedStyle(col11, null).backgroundColor == "rgb(128, 0, 128)"){
            col11.style.backgroundColor = "#FF4F02";
            }
            else{
            col11.style.backgroundColor = "#0000ff";
            }
    } );

    var col12 = document.getElementById("col12");
    col12.addEventListener('click', function(){
    
        if(document.defaultView.getComputedStyle(col12, null).backgroundColor == "rgb(0, 0, 255)") {
            col12.style.backgroundColor = "#ff0000";
            }
            else if(document.defaultView.getComputedStyle(col12, null).backgroundColor == "rgb(255, 0, 0)"){
            col12.style.backgroundColor = "#cca11f"
            }
            else if(document.defaultView.getComputedStyle(col12, null).backgroundColor == "rgb(204, 161, 31)"){
            col12.style.backgroundColor = "#008000";
            } 
            else if(document.defaultView.getComputedStyle(col12, null).backgroundColor == "rgb(0, 128, 0)"){
            col12.style.backgroundColor = "#800080";
            }
            else if(document.defaultView.getComputedStyle(col12, null).backgroundColor == "rgb(128, 0, 128)"){
            col12.style.backgroundColor = "#FF4F02";
            }
            else{
            col12.style.backgroundColor = "#0000ff";
            }
    } );

    var col13 = document.getElementById("col13");
    col13.addEventListener('click', function(){
    
        if(document.defaultView.getComputedStyle(col13, null).backgroundColor == "rgb(0, 0, 255)") {
            col13.style.backgroundColor = "#ff0000";
            }
            else if(document.defaultView.getComputedStyle(col13, null).backgroundColor == "rgb(255, 0, 0)"){
            col13.style.backgroundColor = "#cca11f"
            }
            else if(document.defaultView.getComputedStyle(col13, null).backgroundColor == "rgb(204, 161, 31)"){
            col13.style.backgroundColor = "#008000";
            } 
            else if(document.defaultView.getComputedStyle(col13, null).backgroundColor == "rgb(0, 128, 0)"){
            col13.style.backgroundColor = "#800080";
            }
            else if(document.defaultView.getComputedStyle(col13, null).backgroundColor == "rgb(128, 0, 128)"){
            col13.style.backgroundColor = "#FF4F02";
            }
            else{
            col13.style.backgroundColor = "#0000ff";
            }
    } );

    var col14 = document.getElementById("col14");
    col14.addEventListener('click', function(){
    
        if(document.defaultView.getComputedStyle(col14, null).backgroundColor == "rgb(0, 0, 255)") {
            col14.style.backgroundColor = "#ff0000";
            }
            else if(document.defaultView.getComputedStyle(col14, null).backgroundColor == "rgb(255, 0, 0)"){
            col14.style.backgroundColor = "#cca11f"
            }
            else if(document.defaultView.getComputedStyle(col14, null).backgroundColor == "rgb(204, 161, 31)"){
            col14.style.backgroundColor = "#008000";
            } 
            else if(document.defaultView.getComputedStyle(col14, null).backgroundColor == "rgb(0, 128, 0)"){
            col14.style.backgroundColor = "#800080";
            }
            else if(document.defaultView.getComputedStyle(col14, null).backgroundColor == "rgb(128, 0, 128)"){
            col14.style.backgroundColor = "#FF4F02";
            }
            else{
            col14.style.backgroundColor = "#0000ff";
            }
    } );

    var col15 = document.getElementById("col15");
    col15.addEventListener('click', function(){

            if(document.defaultView.getComputedStyle(col15, null).backgroundColor == "rgb(0, 0, 255)") {
            col15.style.backgroundColor = "#ff0000";
            }
            else if(document.defaultView.getComputedStyle(col15, null).backgroundColor == "rgb(255, 0, 0)"){
            col15.style.backgroundColor = "#cca11f"
            }
            else if(document.defaultView.getComputedStyle(col15, null).backgroundColor == "rgb(204, 161, 31)"){
            col15.style.backgroundColor = "#008000";
            } 
            else if(document.defaultView.getComputedStyle(col15, null).backgroundColor == "rgb(0, 128, 0)"){
            col15.style.backgroundColor = "#800080";
            }
            else if(document.defaultView.getComputedStyle(col15, null).backgroundColor == "rgb(128, 0, 128)"){
            col15.style.backgroundColor = "#FF4F02";
            }
            else{
            col15.style.backgroundColor = "#0000ff";
            }
    } );


    //ドラッグ&ドロップ（class=drag-and-drop）//
    var elements = document.getElementsByClassName("drag-and-drop");

    var x;
    var y;

    for(var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mousedown", mdown, false);
        elements[i].addEventListener("touchstart", mdown, false);
    }

    function mdown(e) {

        this.classList.add("drag");

        if(e.type === "mousedown") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        x = event.pageX - this.offsetLeft;
        y = event.pageY - this.offsetTop;

        document.body.addEventListener("mousemove", mmove, false);
        document.body.addEventListener("touchmove", mmove, false);
    }

    function mmove(e) {

        var drag = document.getElementsByClassName("drag")[0];

        if(e.type === "mousemove") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        e.preventDefault();

        drag.style.top = event.pageY - y + "px";
        drag.style.left = event.pageX - x + "px";

        drag.addEventListener("mouseup", mup, false);
        document.body.addEventListener("mouseleave", mup, false);
        drag.addEventListener("touchend", mup, false);
        document.body.addEventListener("touchleave", mup, false);

    }

    function mup(e) {
        var drag = document.getElementsByClassName("drag")[0];

        document.body.removeEventListener("mousemove", mmove, false);
        drag.removeEventListener("mouseup", mup, false);
        document.body.removeEventListener("touchmove", mmove, false);
        drag.removeEventListener("touchend", mup, false);

        drag.classList.remove("drag");
    }


    //ドラッグ&ドロップ（class=shield）//
    var elements = document.getElementsByClassName("shield");

    var x;
    var y;

    for(var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mousedown", mdown, false);
        elements[i].addEventListener("touchstart", mdown, false);
    }

    function mdown(e) {

        this.classList.add("drag");

        if(e.type === "mousedown") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        x = event.pageX - this.offsetLeft;
        y = event.pageY - this.offsetTop;

        document.body.addEventListener("mousemove", mmove, false);
        document.body.addEventListener("touchmove", mmove, false);
    }

    function mmove(e) {

        var drag = document.getElementsByClassName("drag")[0];

        if(e.type === "mousemove") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        e.preventDefault();

        drag.style.top = event.pageY - y + "px";
        drag.style.left = event.pageX - x + "px";

        drag.addEventListener("mouseup", mup, false);
        document.body.addEventListener("mouseleave", mup, false);
        drag.addEventListener("touchend", mup, false);
        document.body.addEventListener("touchleave", mup, false);

    }

    function mup(e) {
        var drag = document.getElementsByClassName("drag")[0];

        document.body.removeEventListener("mousemove", mmove, false);
        drag.removeEventListener("mouseup", mup, false);
        document.body.removeEventListener("touchmove", mmove, false);
        drag.removeEventListener("touchend", mup, false);

        drag.classList.remove("drag");
    }

})()