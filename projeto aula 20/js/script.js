
var box = document.getElementsByClassName("color-1")



function muda_cor(){

    let cor = document.getElementById("i_cor").value;

    switch(cor){

        case "1":
         
    for(let index = 0; index < box.length ; index++ ){
    box[index].style = "background-color: blue;"
         }
         break;

        case "2":
          for(let index = 0; index < box.length ; index++ ){
    box[index].style = "background-color: red;"
         }
         break;

        case "3":
            for(let index = 0; index < box.length ; index++ ){
                box[index].style = "background-color: green;"
                     }
            break;

        default:
            for(let index = 0; index < box.length ; index++ ){
                box[index].style = "background-color: pink;"
                     }
                     
    }
}