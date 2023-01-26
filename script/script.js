window.onload=function(){

    // Cuando haga click en cualquier elemento de la lista el menu se cierre
    
    // let anclas = document.querySelectorAll(".lista__texto");
    // var pulsado = false;
    // for (let ancla of anclas) {
    //     ancla.addEventListener("click",cierraMenu);
    //     function cierraMenu(){
          
    //         if(!pulsado){
    //             ancla.parentNode.parentNode.style.display="none";
    //             pulsado=true;
    //             document.querySelector("menu__display").click();
               
    //         }else{
    //             ancla.parentNode.parentNode.style.display="block";
    //             pulsado=false;
                
    //         }
            
    //     }
    // }

    //Cuando haga click sobre el recuadro de experiencia, que se borre contenido y se añada el nombre del lugar  arriba y debajo de tal año a tal. Y debajo funciones
 
        let experiencias = document.querySelectorAll(".cuadrados__cuadrado");
    for (let experiencia of experiencias) {
        experiencia.addEventListener("click",cambiaExperiencia);
        function cambiaExperiencia(){
            let nombre = experiencia.textContent.trim();
            let texto ="";
            switch(nombre){
                case "Booking":
                experiencia.innerHTML += `<br> <span>2022- <br> Gestión Viviendas</span>`;
                break;
                case "LIUJO":
                experiencia.innerHTML += `<br> <span>2020-2022 <br> Dependienta </span>`;
                break;
                case "Springfield":
                experiencia.innerHTML += `<br> <span>2019-2020 <br> Dependienta </span>`;
                break;
                case "Coconut":
                experiencia.innerHTML += `<br> <span>2018-2018 <br> Dependienta </span>`;
                break;
                case "Stradivarius":
                experiencia.innerHTML += `<br> <span>2016-2017 <br> Dependienta </span>`;
                break;
                case "ZARA":
                experiencia.innerHTML += `<br> <span>2015-2016 <br> Dependienta </span>`;
                break;

            }
        }
    } 
/*Cuando haga click en la flecha suba hasta arriba del todo*/
let flecha = document.querySelector(".pie__icono").addEventListener("click",subeArriba);

function subeArriba(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    });
}

}