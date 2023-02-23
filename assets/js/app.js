
for (let i = 0; i < 3; i++) {
    let saludo=alert("Bienvenido al sitio web del curso de JavaScript de CODER HOUSE");
    
    var accion=prompt('Que desea hacer? \n Ver \n Comprar \n Saludar').toLowerCase();
    
    while(accion !== 'comprar'){
        alert('Te recomiendo que compres algo');
        var accion=prompt('Que desea hacer? \n Ver \n Comprar \n Saludar').toLowerCase();

    }
    
    if (accion=='comprar'){
        let compra=prompt('Que desea comprar? \n Herramientas \n Comida \n Ropa').toLowerCase();
        switch(compra){
            case 'herramientas': 
                alert('Espero que puedas arreglar lo que rompiste');
                break;
                
            case 'comida': 
                alert('al fin pagaste la cena');
                break;
    
            case 'ropa': 
                alert('Abrigate que se viene el frío');
                break;

            default:
                alert('Elegí bien, vago')
        }
    }
    
}
