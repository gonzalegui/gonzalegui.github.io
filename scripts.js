document.addEventListener("DOMContentLoaded", function() {
    const formularioAfiliacion = document.getElementById("formularioAfiliacion");
    const formularioModificacion = document.getElementById("formularioModificacion");
    const formularioPago = document.getElementById("formularioPago");
    const formularioAcceso = document.getElementById("formularioAcceso");
    const sociosList = document.getElementById("sociosList");
  
    formularioAfiliacion.addEventListener("submit", function(event) {
      event.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const categoria = document.getElementById("categoria").value;
      afiliarSocio(nombre, categoria);
      formularioAfiliacion.reset();
    });
  
    formularioModificacion.addEventListener("submit", function(event) {
      event.preventDefault();
      const nombreMod = document.getElementById("nombreMod").value;
      const categoriaMod = document.getElementById("categoriaMod").value;
      modificarSocio(nombreMod, categoriaMod);
      formularioModificacion.reset();
    });
  
    formularioPago.addEventListener("submit", function(event) {
      event.preventDefault();
      const nombrePago = document.getElementById("nombrePago").value;
      cargarPagoCuota(nombrePago);
      formularioPago.reset();
    });
  
    formularioAcceso.addEventListener("submit", function(event) {
      event.preventDefault();
      const nombreAcceso = document.getElementById("nombreAcceso").value;
      autorizarAcceso(nombreAcceso);
      formularioAcceso.reset();
    });
  
    function afiliarSocio(nombre, categoria) {
      const socio = {
        nombre: nombre,
        categoria: categoria
      };
      const socios = obtenerSocios();
      socios.push(socio);
      guardarSocios(socios);
      mostrarSocios();
    }
  
    function modificarSocio(nombre, categoria) {
      const socios = obtenerSocios();
      const socio = socios.find(s => s.nombre === nombre);
  
      if (socio) {
        socio.categoria = categoria;
  
        guardarSocios(socios);
  
        mostrarSocios();
      } else {
        console.log("No se encontró ningún socio con ese nombre.");
      }
    }
  
    function cargarPagoCuota(nombre) {
      const socios = obtenerSocios();
      const socio = socios.find(s => s.nombre === nombre);
  
      if (socio) {
        socio.pagoCuota = true;
        guardarSocios(socios);
        mostrarSocios();
      } else {
        console.log("No se encontró ningún socio con ese nombre.");
      }
    }
  
    function autorizarAcceso(nombre) {
  
      const socios = obtenerSocios();
  

      const socio = socios.find(s => s.nombre === nombre);
  
      if (socio) {
        if (socio.pagoCuota) {
          console.log(`Acceso autorizado para ${socio.nombre}.`);
        } else {
          console.log(`Acceso denegado para ${socio.nombre}. Debe realizar el pago de la cuota.`);
        }
      } else {
        console.log("No se encontró ningún socio con ese nombre.");
      }
    }
  
    function obtenerSocios() {
      const sociosString = localStorage.getItem("socios");
      if (!sociosString) {
        return [];
      }
      return JSON.parse(sociosString);
    }
  
    function guardarSocios(socios) {
      const sociosString = JSON.stringify(socios);
  
      localStorage.setItem("socios", sociosString);
    }
  
    function mostrarSocios() {
      const socios = obtenerSocios();
      sociosList.innerHTML = "";
  
      socios.forEach(socio => {
        const li = document.createElement("li");
        li.textContent = `Nombre: ${socio.nombre}, Categoría: ${socio.categoria}, Pago de Cuota: ${socio.pagoCuota ? "Sí" : "No"}`;
        sociosList.appendChild(li);
      });
    }
  
  
    mostrarSocios()
  });
  
  