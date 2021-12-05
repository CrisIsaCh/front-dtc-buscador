
const url ='https://api-dtc-final.herokuapp.com/api/usuario/';
const contenedor = document.querySelector('tbody');
let resultados='';

const modalUsuarios= new bootstrap.Modal(document.getElementById('modalUsuarios'));
const formUsuarios=document.querySelector('form');
console.log(formUsuarios);
const apellidou=document.getElementById('apellidou');
const nombreu=document.getElementById('nombreu');
const direccionu=document.getElementById('direccionu');


let opcion='';


btnCrear.addEventListener('click',()=>{
    //limpia los imputs
  
    apellidou.value='';
    nombreu.value='';
    direccionu.value='';
   
    
    modalUsuarios.show();
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
                      <td>${atencion.apellidou}</td>
                      <td>${atencion.nombreu}</td>                      
                      <td>${atencion.direccionu}</td>                      
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
 
     const apellidouForm=fila.children[1].innerHTML;
     
     const nombreuForm=fila.children[2].innerHTML;
     
     const direccionuForm=fila.children[3].innerHTML;

     apellidou.value=apellidouForm;
     nombreu.value=nombreuForm
     direccionu.value=direccionuForm;   

     
     modalUsuarios.show();
     opcion='editar';

    
 
 })

 formUsuarios.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(opcion=='crear'){
       // console.log('Creado');
       fetch(url,{
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body: JSON.stringify({
               apellidou:apellidou.value,
               nombreu:nombreu.value,               
               direccionu:direccionu.value,
              
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
                 apellidou:apellidou.value,
                 nombreu:nombreu.value,                 
                 direccionu:direccionu.value,
                 
              })
            })
            .then(response=>response.json())
            .then(response=>location.reload())

    }
    modalAtenciones.hide();
})