/* Creando lista de contacto */
let misContactos = [
    {
            "id": 110071963,
            "nombre": 'Stephen Vincent',
            "apellido": 'Strange',
            "celular": 7181516420,
            "ubicacion": {"ciudad": 'Nueva York', "dirección": '177A Bleecker Street en Greenwich Village'},
     
    },
    {
            "id": 10535693,
            "nombre": 'Wanda',
            "apellido": 'Maximoff',
            "celular": 5511618192,
            "ubicacion": { "ciudad": 'Westview', 'dirección': '195o Reality Street' }
    }
    ];
    
    /* Crear nuevo contacto a la lista */
    const agregarContacto = (id, nombre, apellido, celular, ciudad, dirección) =>{
    let nuevoContacto = {
        "id": id,
        "nombre": nombre,
        "apellido": apellido,
        "celular": celular,
        "ubicacion": {"ciudad": ciudad, "dirección": dirección}
    };
    misContactos.unshift(nuevoContacto);
    }
    
    agregarContacto("371985988","John","Constantine","15150292200","Liverpool","Desconocida");
    
    /* Eliminar un contacto de la lista */
    const  eliminaContactoId = (IdEliminar) => {
            let indiceId = misContactos.findIndex(indiceId => indiceId.id == IdEliminar);
                misContactos.splice(indiceId,1);
                return misContactos;
          }
    
          console.log(eliminaContactoId(10535693));
    
    /* imprimo la lista de mis contaactos */
          const imprimeLista = () => {
            console.log(misContactos);
          }
    
          imprimeLista();