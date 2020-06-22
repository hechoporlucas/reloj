//setTimeout: ejecutar una funcion dsp de transcurrido un tiempo...
//dentro del parentesis va: (funcion, tiempo en milisegundos);
window.setTimeout(saludar,4000);

function saludar(){
    alert('Hola comisioN!!');
};

//crear un contador
let contador = 1;
let tiempo = window.setInterval(contar,1000);
function contar(){
    document.write(contador + '<br>');
    
    if(contador == 10){
        window.clearInterval(tiempo);
    };
    
    contador ++
};
contar();