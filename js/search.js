
function clear(){
  document.getElementById('result').innerHTML = "";
}

/*funcion busqueda que se invoca al clicar el primer boton de busqueda, esta funcion
muestra el primer nivel del arbol en el segundo select*/
function busqueda(){
  var e = document.getElementById("busq");
  //capturamos lo que esta seleccionado en el primer select
  var strUser = e.options[e.selectedIndex].value;
  console.log(arr[strUser]);
  
  document.getElementById('result').innerHTML = "";
  var select = document.getElementById("result"); 
  //a variable options se le asigna el arreglo del primer nivel del arbol
  var options = arr[strUser];

  //Recorremos el arreglo del primer nivel y creamos un option en el select con cada uno de ellos
  for(var key in options)
  {
    var opt = key;
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  }	
}

/*Funcion que se ejecuta en el segundo boton de busqueda y scanea todos los niveles de la seleccion para mostrar el contenido 
completo en pantalla con sus enlaces */
function search(){
  //capturamos la opcion seleccionada del primer select
  var e = document.getElementById("busq");
  var strUser = e.options[e.selectedIndex].value;
   
  //capturamos la opcion seleccionada del segundo select
  var en = document.getElementById("result");
  var strUse = en.options[en.selectedIndex].value;

  document.getElementById('res').innerHTML = "";
  var select = document.getElementById("result"); 
  //accedemos al arreglo y le pasamos los indices que corresponden con la seleccion en cada select
  var optn = arr[strUser][strUse];
  var div = document.getElementById('res');
  div.innerHTML += 'Mostrando resulados por colección, año y mes...<br><br>';

  //Ciclo para recorrer el arreglo y sus niveles
  for (var key in optn) {
         var value =  optn[key];
         first = key;
         //Agregamos el key del arreglo al div para mostrarlo en pantalla
         div.innerHTML += key + '<br>';

         //Si el value del elemento es object significa que es un arreglo y debemos recorrerlo tambien
         if(typeof value === 'object'){ 
              for(var key in value){
                secound = key;
                var val = value[key];
                div.innerHTML += key + '<br>';

                //Si val es object siginifica que es una arreglo y debemos recorrerlo
                if(typeof val === 'object'){

                  for(var key in val){
                    third = val[key];
                    var vals = val[key];

                    //Evaluamos si el key es un numero para agregarlo a la ruta
                    if(isNaN(key)){
                      div.innerHTML += key + '<br>';
                      code = key;
                      //div.innerHTML += '<a target="_blank" href="' + 'Diarios' + '/' + strUser + '/' + strUse + '/' + first + '/' + secound + '/' + key + '/' + vals +'">' + vals + '<br>';
                      //div.innerHTML += '<br>';

                      if(typeof vals === 'object'){
                        for(var key in vals){
                          fourth = vals[key];
                          var vat = vals[key];

                          if(isNaN(key)){
                            div.innerHTML += '<a target="_blank" href="' + 'Diarios' + '/' + strUser + '/' + strUse + '/' + first + '/' + secound + '/' + code + '/' + vat +'">' + vat + '<br>';
                            div.innerHTML += '<br>';
                          }else{
                            div.innerHTML += '<a target="_blank" href="' + 'Diarios' + '/' + strUser + '/' + strUse + '/' + first + '/' + secound + '/'+ code + '/' + vat +'">' + vat + '<br>';
                            div.innerHTML += '<br>';
                          }
                        }

                      }else{
                        div.innerHTML += '<a target="_blank" href="' + 'Diarios' + '/' + strUser + '/' + strUse + '/' + first + '/' + secound + '/' + key + '/' + vals +'">' + vals + '<br>';
                        div.innerHTML += '<br>';
                      }

                    }else{
                      //Si el key no es numero agregamos a la ruta el vals
                      div.innerHTML += '<a target="_blank" href="' + 'Diarios' + '/' + strUser + '/' + strUse + '/' + first + '/' + secound + '/' + vals +'">' + vals + '<br>';
                      div.innerHTML += '<br>';
                    }
                  }

                }else{
                  third = val;
                  //Si no es un objeto solo mostramos el value y construimos el enlace
                  div.innerHTML += '<a target="_blank" href="' + 'Diarios' + '/' + strUser + '/' + strUse + '/' + first + '/' + val +'">' +  val + '<br>';
                }
                
              }
         }else{
            //Si no es un objeto solo mostramos el value y construimos el enlace
            div.innerHTML += '<a target="_blank" href="' + 'Diarios' + '/' + strUser + '/' + strUse + '/' + value +'">' +  value + '<br>';
         }
         div.innerHTML += '<hr style="height:3px;style:solid;background-color:#ccc;">';
  }


}
