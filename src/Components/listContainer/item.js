export const Productos = [
    {id:1, 
    descripcion:"ensalada",
    nombre :'Ensalada cesar',
    precio: 250,
    stock: 5,
    img:"https://s1.eestatic.com/2016/10/11/cocinillas/cocinillas_162247460_116258364_1706x960.jpg",
},

    {id:2,
    descripcion:"ensalada",
    nombre:'Ensalada mix de hojas verdes', 
    precio: 180, 
    stock: 8,
    img:"https://s1.eestatic.com/2016/10/11/cocinillas/cocinillas_162247460_116258364_1706x960.jpg",
},

    {id:3,
    descripcion:"ensalada",
    nombre :'Ensalada mixta pollo',
    precio: 230, 
    stock: 20,
    img:"https://s1.eestatic.com/2016/10/11/cocinillas/cocinillas_162247460_116258364_1706x960.jpg",
},

    {id:4,
    descripcion:"ensalada",
    nombre :'Ensalada mixta con lomito de atun', 
    precio: 250, 
    stock: 15,
    img:"https://s1.eestatic.com/2016/10/11/cocinillas/cocinillas_162247460_116258364_1706x960.jpg",
},

    {id:5,
    descripcion:"ensalada",
    nombre :'Ensalada mixta con camarones', 
    precio: 315,
    stock: 10,
    img:"https://s1.eestatic.com/2016/10/11/cocinillas/cocinillas_162247460_116258364_1706x960.jpg",
},

    {id:6,
    descripcion:"ensalada",
    nombre :'Ensalada mixta con salmon', 
    precio: 300, 
    stock: 20,
    img:"https://s1.eestatic.com/2016/10/11/cocinillas/cocinillas_162247460_116258364_1706x960.jpg",
},

    {id:7,
    descripcion:"ensalada",
    nombre :'Ensalada tomate', 
    precio: 240, 
    stock: 5,
    img:"https://s1.eestatic.com/2016/10/11/cocinillas/cocinillas_162247460_116258364_1706x960.jpg",
},

    {id:8,
    descripcion:"ensalada",
    nombre :'Ensalada palta y mango',
    precio: 300, 
    stock: 2,
    img:"https://s1.eestatic.com/2016/10/11/cocinillas/cocinillas_162247460_116258364_1706x960.jpg",
},

    {id:9,
    descripcion:"ensalada",
    nombre :'Ensalada rusa',
    precio: 250,
    stock: 3,
    img:"https://s1.eestatic.com/2016/10/11/cocinillas/cocinillas_162247460_116258364_1706x960.jpg",
},

    {id:10,
    descripcion:"ensalada",
    nombre :'Ensalada waldorf',
    precio: 290,
    stock: 10,
    img:"https://s1.eestatic.com/2016/10/11/cocinillas/cocinillas_162247460_116258364_1706x960.jpg",
}
    ];

export const getFetch = new Promise((resolve)=>{
        let productos = true
        if (productos === true){
            setTimeout(() => {
            resolve(Productos)
            },2000);
        }
    })