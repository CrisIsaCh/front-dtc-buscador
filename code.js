const url5='http://localhost:3000/api/atenciones/';


const url ='http://localhost:3000/api/mostrar/';
const contenedor = document.querySelector('tbody');
let resultados='';

const selectUsuario=document.getElementById('usuario');
//console.log(selectUsuario);
const url1 ='http://localhost:3000/api/usuario/';
let resultados1='';

const selectProfesional=document.getElementById('profesional');
//console.log(selectProfesional);
const url2 ='http://localhost:3000/api/profesionales/';
let resultados2='';

const selectMotivo=document.getElementById('motivo');
//console.log(selectMotivo);
const url3 ='http://localhost:3000/api/motivo/';
let resultados3='';

const selectSearticulo=document.getElementById('seArticulo');
//console.log(selectMotivo);
const url4 ='http://localhost:3000/api/searticulo/';
let resultados4='';


const modalAtenciones= new bootstrap.Modal(document.getElementById('modalAtenciones'));
const formAtenciones=document.querySelector('form');
console.log(formAtenciones);
const fcarga=document.getElementById('fcarga');
const fatencion=document.getElementById('fatencion');
const usuario=document.getElementById('usuario');
const motivo=document.getElementById('motivo');
const motivo2=document.getElementById('motivo2');
const motivo3=document.getElementById('motivo3');
const motivo4=document.getElementById('motivo4');
const profesional=document.getElementById('profesional');
const seArticulo=document.getElementById('seArticulo');
const comentarios=document.getElementById('comentarios');

const formulario = document.querySelector('#formulario');

let opcion='';

btnCrear.addEventListener('click',()=>{
    //limpia los imputs
  /*  let opUsuario='Seleccione una opcion';
    let opMotivo='Seleccione una opcion';
    let opProfesional='Seleccione una opcion';
    let opSeArticulo='Seleccione una opcion';
    marca.value='';
    noviembre.value='';
    selectUsuario.innerHTML=`<option selected="selected" disabled>${opUsuario}</option>`+resultados1;
    //usuario.options[usuario.selectedIndex].text='Selecione una opcion';    
    //motivo.options[motivo.selectedIndex].text='Seleccione una opcion';
    selectMotivo.innerHTML=`<option selected="selected" disabled>${opMotivo}</option>`+resultados3;
    motivo2.value='';
    motivo3.value='';
    motivo4.value='';
    //profesional.options[profesional.selectedIndex].text='Seleccione una opcion';
    selectProfesional.innerHTML=`<option selected="selected" disabled>${opProfesional}</option>`+resultados2;
    //selectSearticulo.options[seArticulo.selectedIndex].text='Seleccione una opcion';
    selectSearticulo.innerHTML=`<option selected="selected" disabled>${opSeArticulo}</option>`+resultados4;
    comentarios.value='';      */
    
    modalAtenciones.show();
    opcion='crear';
})



const filtrar = ()=>{ 

//PROCEDIMIENTO PARA MOSTRAR
fetch(url)
    .then(response=>response.json())
    .then(data=>mostrar(data))
    .catch(error=>console.log(error));

  contenedor.innerHTML=''; 
  const texto =formulario.value.toLowerCase();     
  //console.log(texto);



//FUNCION PARA MOSTRAR RESULTADOS
const mostrar=(atenciones)=>{
    // console.log(atenciones);
     atenciones.forEach(atencion => {

        let apellidou=atencion.apellidou.toLowerCase();
        let nombreu =atencion.nombreu.toLowerCase();
        let apellidop=atencion.apellidop.toLowerCase();
        let nombrep=atencion.nombrep.toLowerCase();

        if(apellidou.indexOf(texto)!==-1|| nombreu.indexOf(texto) !== -1||apellidop.indexOf(texto)!==-1||nombrep.indexOf(texto)!==-1){ 
        
        contenedor.innerHTML+=`<tr>
                          <td>${atencion.id}</td>
                          <td>${atencion.diaCarga}</td>
                          <td>${atencion.diaAtencion}</td>
                          <td>${atencion.apellidou} ${atencion.nombreu}</td>
                          <td>${atencion.motivo}</td>
                          <td>${atencion.motivoConsulta2}</td>
                          <td>${atencion.motivoConsulta3}</td>
                          <td>${atencion.motivoConsulta4}</td>
                          <td>${atencion.apellidop} ${atencion.nombrep}</td>
                          <td>${atencion.descripcion}</td>
                          <td>${atencion.observaciones}</td>
                          <td class"text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
                     </tr>`
        }
                    
                     
     });
 
     
     
     console.log(contenedor);
 }  
}
formulario.addEventListener('keyup',filtrar);
filtrar();

 fetch(url1)
    .then(response=>response.json())
    .then(data=>mostrarSelectUsuarios(data))
    .catch(error=>console.log(error));


 let opUsuario='Seleccione una opcion';
console.log(opUsuario)
const mostrarSelectUsuarios=(usuarios)=>{
  //  console.log(usuarios);
    usuarios.forEach(nombre=> {
       
        resultados1+=`<option value=${nombre.id}>${nombre.apellidou} ${nombre.nombreu}</option>`        
        
    });
    console.log(resultados1)
    selectUsuario.innerHTML=`<option selected = "selected" disabled = "disabled" value = "">${opUsuario}</option>`+resultados1;
    console.log(selectUsuario)
    
}  


fetch(url2)
    .then(response=>response.json())
    .then(datos=>mostrarSelectProfesionales(datos))
    .catch(error=>console.log(error));

 
 //funcion para mostrar select Profesionales

let opProfesional='Seleccione una opcion';
const mostrarSelectProfesionales=(profesionales)=>{
   // console.log(profesionales);
    profesionales.forEach(nomb=> {
        resultados2+=`<option value=${nomb.id}>${nomb.apellidop} ${nomb.nombrep}</option>`
        
        
    });
    selectProfesional.innerHTML=`<option selected = "selected" disabled = "disabled" value = "">${opProfesional}</option>`+resultados2;
    
} 


fetch(url3)
    .then(response=>response.json())
    .then(data=>mostrarSelectMotivo(data))
    .catch(error=>console.log(error));


//funcion para mostrar select Motivo de consulta

let opMotivo='Seleccione una opcion';
const mostrarSelectMotivo=(motivos)=>{
   // console.log(motivos);
    motivos.forEach(nomb=> {
        resultados3+=`<option value=${nomb.id}>${nomb.motivo}</option>`
        
    });
    selectMotivo.innerHTML=`<option selected = "selected" disabled = "disabled" value = "">${opMotivo}</option>`+resultados3;
}   


fetch(url4)
    .then(response=>response.json())
    .then(data=>mostrarSelectSeArticulo(data))
    .catch(error=>console.log(error));


    //funcion para mostrar select seArticulo con

let opSeArticulo='Seleccione una opcion';
const mostrarSelectSeArticulo=(seArticulo)=>{
    // console.log(motivos);
     seArticulo.forEach(nomb=> {
         resultados4+=`<option value=${nomb.id}>${nomb.descripcion}</option>`
         
     });
     selectSearticulo.innerHTML=`<option selected = "selected" disabled = "disabled" value = "">${opSeArticulo}</option>`+resultados4;
};


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
         fetch(url5+id,{
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
 
     const fcargaForm=fila.children[1].innerHTML;
     
     const fatencionForm=fila.children[2].innerHTML;
     
     const usuarioForm=fila.children[3].innerHTML;
     console.log(usuarioForm)
     //opUsuario=usuarioForm;
     console.log(opUsuario)
     const motivoForm=fila.children[4].innerHTML;
     //opMotivo=motivoForm;     
     const motivoCon2Form=fila.children[5].innerHTML;
     
     const motivoCon3Form=fila.children[6].innerHTML;
     
     const motivoCon4Form=fila.children[7].innerHTML;
     
     const profesionalForm=fila.children[8].innerHTML;
     //opProfesional=profesionalForm;
     const seArticulolForm=fila.children[9].innerHTML;
     //opSeArticulo=seArticulolForm;
     const comentariosForm=fila.children[10].innerHTML;
     
     
 
     fcarga.value=fcargaForm;   
     fatencion.value=fatencionForm;   
     //usuario.options[usuario.selectedIndex].text=usuarioForm;   
     //motivo.options[motivo.selectedIndex].text=motivoForm;   
     motivo2.value=motivoCon2Form;   
     motivo3.value=motivoCon3Form;
     motivo4.value=motivoCon4Form;
     //profesional.options[profesional.selectedIndex].text=profesionalForm;     
     //seArticulo.options[seArticulo.selectedIndex].text=seArticulolForm;
     comentarios.value=comentariosForm;
     modalAtenciones.show();
     opcion='editar';

     console.log(selectUsuario);
     //selectUsuario.innerHTML=`<option selected="selected" disabled>${opUsuario}</option>`+resultados1;
     //selectMotivo.innerHTML=`<option selected="selected" disabled>${opMotivo}</option>`+resultados3;
     //selectProfesional.innerHTML=`<option selected="selected" disabled>${opProfesional}</option>`+resultados2;
     //selectSearticulo.innerHTML=`<option selected="selected" disabled>${opSeArticulo}</option>`+resultados4;
     //motivo.innerHTML=resultados3;
     //profesional.innerHTML=resultados2;
     //selectSearticulo.innerHTML=resultados4;
     
 
 })

 formAtenciones.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(opcion=='crear'){
       // console.log('Creado');
       fetch(url5,{
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body: JSON.stringify({
               diaCarga:fcarga.value,
               diaAtencion:fatencion.value,
               //usuario:usuario.options[usuario.selectedIndex].text, 
               idusuario:parseInt(usuario.value), 
                                                      
               //motivoConsulta1:motivo.options[motivo.selectedIndex].text,
               idmotivo:parseInt(motivo.value),
               motivoConsulta2:motivo2.value,
               motivoConsulta3:motivo3.value,
               motivoConsulta4:motivo4.value,
               //profesional:profesional.options[profesional.selectedIndex].text,
               idprofesional:parseInt(profesional.value),
               //seArticulo:seArticulo.options[seArticulo.selectedIndex].text,
               idsearticulo:parseInt(seArticulo.value),
               observaciones:comentarios.value
           })
           
           
       })
      
       
       .then(response=>response.json())
       .then(data=>{

           //console.log(idusuario);
           const nuevaAtencion=[];
           nuevaAtencion.push(data);        
           mostrar(nuevaAtencion);
       })
       .then(response=>location.reload())



    }
    if(opcion=='editar'){
       // console.log('Editado');
             fetch(url5+idForm,{
                method:'PUT',
                 headers:{
                'Content-Type':'application/json'

             },
              body: JSON.stringify({
                // descripcion:descripcion.value,
                 //precio:precio.value,
                 //stock:stock.value
                 diaCarga:fcarga.value,
                 diaAtencion:fatencion.value,
                 idusuario:usuario.value,
                 //usuario:usuario.options[usuario.selectedIndex].text,
                 idmotivo:parseInt(motivo.value),                                         
                 //motivoConsulta1:motivo.options[motivo.selectedIndex].text,
                 motivoConsulta2:motivo2.value,
                 motivoConsulta3:motivo3.value,
                 motivoConsulta4:motivo4.value,
                 //profesional:profesional.options[profesional.selectedIndex].text,
                 idprofesional:profesional.value,
                //seArticulo:seArticulo.options[seArticulo.selectedIndex].text,
                idsearticulo:seArticulo.value,
                 observaciones:comentarios.value
              })
            })
            .then(response=>response.json())
            .then(response=>location.reload())
            

    }
    modalAtenciones.hide();
})


