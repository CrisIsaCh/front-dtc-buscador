
const url ='https://api-dtc-final.herokuapp.com/api/profesionales/';
const contenedor = document.querySelector('tbody');
let resultados='';

const modalProfesionales= new bootstrap.Modal(document.getElementById('modalProfesionales'));
const formProfesionales=document.querySelector('form');
console.log(formProfesionales);
const apellidop=document.getElementById('apellidop');
const nombrep=document.getElementById('nombrep');
const categoriap=document.getElementById('categoriap');


let opcion='';

btnCrear.addEventListener('click',()=>{
    //limpia los imputs
  
    apellidop.value='';
    nombrep.value='';
    categoriap.value='';
   
    
    modalProfesionales.show();
    opcion='crear';
});


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
                      <td>${atencion.apellidop}</td>
                      <td>${atencion.nombrep}</td>                      
                      <td>${atencion.categoriap}</td>                      
                      <td class"text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
                 </tr>`
                
                 
 });

 
 contenedor.innerHTML=resultados;
 console.log(contenedor);
} 

const on=(element,event,selector,handler)=>{

    //console.log(element)
    //onsole.log(event)
    //console.log(selector)
    //console.log(handler)
    element.addEventListener(event,e=>{
        if(e.target.closest(selector)){
                handler(e)
        }
        
    })
}


//BORRAR
on(document,'click','.btnBorrar',e=>{
    const fila= e.target.parentNode.parentNode;

    console.log(fila)
    const id= fila.firstElementChild.innerHTML;
   
    alertify.confirm("This is a confirm dialog.",
     function(){
         fetch(url+id,{
             method:'DELETE'
         })
         .then(res=>res.json())
         .then(()=>location.reload())


        alertify.success('Ok');
    },
     function(){
    alertify.error('Cancel');
     });    
});

//EDITAR

let idForm= 0;
on(document,'click','.btnEditar',e=>{
    console.log('EDITADO')
    const fila = e.target.parentNode.parentNode;
    console.log(fila);
    /*const id= fila.firstElementChild.innerHTML;
    console.log(id);*/

    //OTRA FORMA DE CAPTURAR ID

    idForm=fila.children[0].innerHTML;
    console.log(fila.children[0]);

    const apellidopForm=fila.children[1].innerHTML;
    
    const nombrepForm=fila.children[2].innerHTML;
    
    const categoriapForm=fila.children[3].innerHTML;

    apellidop.value=apellidopForm;
    nombrep.value=nombrepForm
    categoriap.value=categoriapForm;   

    
    modalProfesionales.show();
    opcion='editar';

   

})

formProfesionales.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(opcion=='crear'){
       // console.log('Creado');
       fetch(url,{
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body: JSON.stringify({
               apellidop:apellidop.value,
               nombrep:nombrep.value,               
               categoriap:categoriap.value,
              
           })
           
       })
      
       
       .then(response=>response.json())
       .then(data=>{
         
           const nuevaAtencion=[];
           nuevaAtencion.push(data);        
           mostrar(nuevaAtencion);
       })
       .then(response=>location.reload())



    }
    if(opcion=='editar'){
       // console.log('Editado');
             fetch(url+idForm,{
                method:'PUT',
                 headers:{
                'Content-Type':'application/json'

             },
              body: JSON.stringify({
                // descripcion:descripcion.value,
                 //precio:precio.value,
                 //stock:stock.value
                 apellidop:apellidop.value,
                 nombrep:nombrep.value,                 
                 categoriap:categoriap.value,
                 
              })
            })
            .then(response=>response.json())
            .then(response=>location.reload())

    }
    modalProfesionales.hide();
})