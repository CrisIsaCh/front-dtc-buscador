<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- CSS -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css"/>
    <!-- Default theme -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/default.min.css"/>

    <title>USUARIOS</title>
    <style>
      body{
        background-color:#f7f6f6;
      }
      table thead{
        background-color: #0a4f70;
        color:white;
      }
    </style>
  </head>
  <body>
    <nav class="navbar navbar-dark bg-dark">
      <a href="http://google.com" class="navbar-brand">USUARIOS </a>
    </nav>
    <div class=" shadow-lg p-3 mb-5 bg-body rounded">
     
      <button id="btnCrear" type="button" class="btn btn-primary" data-bs-toggle="modal"  >CREAR</button>
    
      <div class="btn-group" role="group">
        <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            ADMINISTRACION
        </button>
        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <li><a class="dropdown-item" href="./usuario.php">USUARIOS</a></li>
            <li><a class="dropdown-item" href="./profesionales.php">PROFESIONALES</a></li>
            <li><a class="dropdown-item" href="./motivo1.php">MOTIVOS 1</a></li>
            <li><a class="dropdown-item" href="./searticulo.php">SE ARTICULO</a></li>
          </ul>
      </div>
      <a class="btn btn-primary" href="./index.php" role="button">INICIO</a>
      
      <table id="tablaatenciones" class="table mt-2 table-bordered table-striped">
        <thead>
          <tr class="text-center">
            <th>ID</th>
            <th>NOMBRE</th>
            <th>APELLIDO</th>
            <th>DOMICILIO</th>            
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  
 <div id="modalUsuarios" class="modal fade"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content " >
      <div class="modal-header bg-primary text-white"  >
        <h5 class="modal-title" id="exampleModalLabel">Atencion</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">
        <form>              
                    
          <div class="mb-3 ">
            <label for="apellidou" class="col-form-label">APELLIDO</label>
            <input id="apellidou"type="text" class="form-control" autofocus>
          </div> 

          <div class="mb-3 ">
            <label for="nombreu" class="col-form-label">NOMBRE</label>
            <input id="nombreu"type="text" class="form-control" autofocus>
          </div> 

          <div class="mb-3 ">
            <label for="direccionu" class="col-form-label">DIRECCION</label>
            <input id="direccionu"type="text" class="form-control" autofocus>
          </div>          
        
      </div>
          <div class="modal-footer ">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Guardar</button>
          </div>
        </form>

    </div>
  </div>
 </div>
   

    
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- JavaScript -->
    <script src="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"></script>

    <script src=code1.js></script>

    
  </body>
</html>