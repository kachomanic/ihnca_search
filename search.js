
function clear(){
  document.getElementById('result').innerHTML = "";
}

function busqueda(data){
   var e = document.getElementById("busq");
   var strUser = e.options[e.selectedIndex].value;
   console.log(arr[strUser]);

document.getElementById('result').innerHTML = "";
var select = document.getElementById("result"); 
var options = arr[strUser];

  for(var key in options)
  {
    var opt = key;
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  }	
}

function search(){
  var e = document.getElementById("busq");
  var strUser = e.options[e.selectedIndex].value;
   
  var en = document.getElementById("result");
  var strUse = en.options[en.selectedIndex].value;

  document.getElementById('res').innerHTML = "";
  var select = document.getElementById("result"); 
  var optn = arr[strUser][strUse];
  var div = document.getElementById('res');
div.innerHTML += 'Mostrando resulados por colección, año y mes...<br><br>';
for (var key in optn) {
       var value =  optn[key];
       first = key;
       div.innerHTML += key + '<br>';

       if(typeof value === 'object'){ 
            for(var key in value){
              secound = key;
              var val = value[key];
              div.innerHTML += key + '<br>';

              if(typeof val === 'object'){

                for(var key in val){
                  third = val[key];
                  var vals = val[key];

                  if(isNaN(key)){
                  div.innerHTML += key + '<br>';
                    div.innerHTML += '<a target="_blank" href="' + 'Diarios' + '/' + strUser + '/' + strUse + '/' + first + '/' + secound + '/' + key + '/' + vals +'">' + vals + '<br>';
                    div.innerHTML += '<br>';
                  }else{
                    div.innerHTML += '<a target="_blank" href="' + 'Diarios' + '/' + strUser + '/' + strUse + '/' + first + '/' + secound + '/' + vals +'">' + vals + '<br>';
                    div.innerHTML += '<br>';
                  }
                }

              }else{
                third = val;
                div.innerHTML += '<a target="_blank" href="' + 'Diarios' + '/' + strUser + '/' + strUse + '/' + first + '/' + val +'">' +  val + '<br>';
              }
              
            }
       }else{
          div.innerHTML += value + '<br>'; 
       }
       div.innerHTML += '<hr style="height:3px;style:solid;background-color:#ccc;">';
}


}
