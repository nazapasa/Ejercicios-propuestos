/*Ejercicios:
Ejercicio 01
En un instituto existen dos salones de clase, en cada uno hay un total de 5 alumnos[id,nombre,correo,promedio,estado], cada alumno solo lleva un curso[id,nombre,precio].
Se desea ingresar datos para los dos salones como json y mostrarlos en la pagina web en una tabla.
*/



const salones = [{
    id: 1,
    "alumnos": [
        {
            "id": 1,
            "nombre": "juan",
            "correo": "juan@gmail.com",
            "promedio": 12,
            "estado": "activo",
            "curso": {
                "id": 1,
                "nombre": "ciencias naturales",
                "precio": 115
            }
        },
        {
            "id": 2,
            "nombre": "María",
            "correo": "maria@gmail.com",
            "promedio": 16,
            "estado": "activo",
            "curso": {
                "id": 1,
                "nombre": "física",
                "precio": 110
            }
        },
        {
            "id": 3,
            "nombre": "Juana",
            "correo": "juana@gmail.com",
            "promedio": 19,
            "estado": "activo",
            "curso": {
                "id": 1,
                "nombre": "química",
                "precio": 125
            }
        },
        {
            "id": 4,
            "nombre": "Johana",
            "correo": "johana@gmail.com",
            "promedio": 18,
            "estado": "activo",
            "curso": {
                "id": 1,
                "nombre": "matemática",
                "precio": 120
            }
        },
        {
            "id": 5,
            "nombre": "Nazareth",
            "correo": "naza@gmail.com",
            "promedio": 19,
            "estado": "activo",
            "curso": {
                "id": 1,
                "nombre": "biología",
                "precio": 100
            }
        },

    ]},

    {
        id:2,
        "alumnos":[
        {
            "id": 6,
            "nombre": "Antonella",
            "correo": "anto@gmail.com",
            "promedio": 12,
            "estado": "activo",
            "curso": {
                "id": 1,
                "nombre": "ciencias naturales",
                "precio": 200
            }
        },
        {
            "id": 7,
            "nombre": "María",
            "correo": "maria@gmail.com",
            "promedio": 16,
            "estado": "activo",
            "curso": {
                "id": 1,
                "nombre": "física",
                "precio": 150
            }
        },
        {
            "id": 8,
            "nombre": "Luisa",
            "correo": "lulu@gmail.com",
            "promedio": 19,
            "estado": "activo",
            "curso": {
                "id": 1,
                "nombre": "química",
                "precio": 80
            }
        },
        {
            "id": 9,
            "nombre": "Ana",
            "correo": "anita@gmail.com",
            "promedio": 18,
            "estado": "activo",
            "curso": {
                "id": 1,
                "nombre": "matemática",
                "precio": 120
            }
        },
        {
            "id": 10,
            "nombre": "Flor",
            "correo": "flor@gmail.com",
            "promedio": 19,
            "estado": "activo",
            "curso": {
                "id": 1,
                "nombre": "biología",
                "precio": 100
            }
        }

    ]
}
]

let tabla = document.getElementById("alumnos-data");
let contador = 0;
for (let salon of salones) {
    for (let alumno of salon.alumnos){
        tabla.innerHTML +=`
            <tr>
                <td>${++contador}</td>
                <td>${salon.id}</td>
                <td>${alumno.id}</td>
                <td>${alumno.nombre}</td>
                <td>${alumno.correo}</td>
                <td>${alumno.promedio}</td>
                <td>${alumno.estado}</td>
                <td>${alumno.curso.id}</td>
                <td>${alumno.curso.nombre}</td>
                <td>S/.${alumno.curso.precio}</td>
            </tr>
        `;
    }
}