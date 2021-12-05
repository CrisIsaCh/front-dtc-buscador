
const url ='https://api-dtc-final.herokuapp.com/api/motivo/';
const contenedor = document.querySelector('tbody');
let resultados='';

    //PROCEDIMIENTO PARA MOSTRAR
fetch(url)
.then(response=>response.json())
.then(data=>mostrar(data))
.catch(error=>console.log(error));



//FUNCION PARA MOSTRAR RESULTADOS
const mostrar=(atenciones)=>{
// console.log(atenciones);
 atenciones.forEach(atencion => {
     resultados+=`<tr>
                      <td>${atencion.id}</td>
                      <td>${atencion.motivo}</td>                                         
                      <td class"text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
                 </tr>`
                
                 
 });

 
 contenedor.innerHTML=resultados;
 console.log(contenedor);
} 