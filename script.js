/* 1. Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido 
      como una sola cadena de caracteres. */
      let contactos = ['Steven Strange', 'Wanda Maximoff', 'Zatanna Zatara', 'Kent Nelson', 'Willow Rosenberg'];

      /* 2. Crea una función para añadir un nuevo contacto a una lista */
      function agregarContacto(contacto){
          contactos.push(contacto);
      }
      
      agregarContacto('Rachel Roth');
      
      /* 3. Crea una función para borrar un contacto existente de la lista */
      let eliminarContacto = function(contacto){
        contactos = contactos.filter((persona)=> persona !== contacto);
    }
      
      eliminarContacto('Kent Nelson')
      
      console.log(contactos)
      
      /* 4. Crea una función para imprimir en consola los contactos presentes en la lista */
      let mostrarContactos = () => {
          contactos.sort();
          for (let i = 0; i < contactos.length; i++) {
              console.log(contactos[i]);
          }
      }
      
      mostrarContactos()