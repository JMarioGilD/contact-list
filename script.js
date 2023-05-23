/* Creando lista de contacto */
let id = 0
const misContactos = [
{
        id: id++,
        nombre: 'Wanda',
        apellido: 'Maximoff',
        teléfono: 5511618192,
        ubicacion: { ciudad: 'Westview', dirección: '195o Reality Street' }
},
{
        id: id++,
        nombre: 'Stephen Vincent',
        apellido: 'Strange',
        teléfono: 7181516420,
        ubicacion: {ciudad: 'Nueva York', dirección: '177A Bleecker Street en Greenwich Village'},
 
},
];

/* Crear nuevo contacto a la lista */

// const agregarContacto = (id, nombre, apellido, teléfono, ciudad, dirección) =>{
// let nuevoContacto = {
//     "id": id,
//     "nombre": nombre,
//     "apellido": apellido,
//     "teléfono": teléfono,
//     "ubicacion": {"ciudad": ciudad, "dirección": dirección}
// };
// misContactos.unshift(nuevoContacto);
// }

// agregarContacto("-1","John","Constantine","15150292200","Liverpool","Desconocida");


/* Eliminar un contacto de la lista */

// const  eliminaContactoId = (IdEliminar) => {
//         let indiceId = misContactos.findIndex(indiceId => indiceId.id == IdEliminar);
//             misContactos.splice(indiceId,1);
//             return misContactos;
//       }

//       console.log(eliminaContactoId(0));

/* actualizar un contacto */

      const editarLista =  (id, key, valor) => {
        let ConfigContacto = misContactos.findIndex(Contacts => Contacts.id == id);
         
        if(ConfigContacto !== -1){
                if(key === "ciudad" || key === "dirección") {
                        misContactos[ConfigContacto].ubicacion[key] = valor;
                        }else{
                                misContactos[ConfigContacto][key] = valor;
                        }
        }
}

      editarLista(1, "nombre", "clea");

      /* imprimo la lista de mis contactos */
        const imprimeLista = () => {
        console.log(misContactos);
      }
      imprimeLista(); 
