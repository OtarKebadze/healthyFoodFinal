export const Productos = [
    {id:"1", 
    nombre :'Ensalada Cesar',
    precio: 250,
    descripcion:"Es una ensalada de lechuga y croutons, con jugo de limón, aceite de oliva, huevo, salsa Worcestershire, anchoas, ajo, mostaza de dijon, queso parmesano y pimienta negra.",
    stock: 5,
    categoria:"Omnivora",
    img:"https://www.recetasconpollo.org/wp-content/uploads/2019/11/Receta-de-ensalada-Cesar-1.jpg",
},

    {id:"2",
    nombre:'Ensalada Mix De Hojas Verdes', 
    precio: 200, 
    descripcion:"Ensalada a base de hojas de lechuga, mostaza, mizuna, rucula y achicoria completamente orgánicos con una aderezo de yogur y ajo,y parmesano rallado.",
    stock: 8,
    categoria:"Vegetariana",
    img:"https://www.lovemysalad.com/sites/default/files/styles/home_carousel_item_768/public/dxx_g4waaimdye.jpg?itok=xI_bwRJ5",
},

    {id:"3",
    nombre :'Ensalada Mixta Pollo',
    precio: 300, 
    descripcion:"Ensalada con una base de lechuga, tomates cherry, cubos de queso cabra, aceitunas negras y pollo grillado.",
    stock: 20,
    categoria:"Omnivora",
    img:"https://rojoynegro.com.ar/pedidos/wp-content/uploads/2020/10/caesar.jpg",
},

    {id:"4",
    nombre :'Ensalada Mixta Con Lomito De Atun', 
    precio: 400, 
    descripcion:"Cuenta con un mix de hojas verdes, con aceite de sesamo, cherry, cebolla, choclo, y un carpaccio de atun.",
    stock: 15,
    categoria:"Omnivora",
    img:"https://lacocinadegisele.com/wp-content/uploads/2015/09/lomo-de-atun.jpg",
},

    {id:"5",
    nombre :'Ensalada Mixta De Mariscos', 
    precio: 370,
    descripcion:"Platillo frío elaborado con pulpo, langostino, anillos de calamar, ostiones, camarón, tomate, cebolla y chile verde.",
    stock: 10,
    categoria:"Omnivora",
    img:"https://camaroneros.info/wp-content/uploads/ensalada-mariscos.jpg",
},

    {id:"6",
    nombre :'Ensalada Mixta Con Salmon', 
    precio: 500, 
    descripcion:"Misma base que la ensalada de atun, pero en vez de atun lleva un lomo de salmon grillado y ahumado de 200 gr, crutonesy bombitas de queso crema.",
    stock: 20,
    categoria:"Omnivora",
    img:"https://assets.tmecosys.cn/image/upload/t_web767x639/img/recipe/ras/Assets/352A1B0E-34CB-4428-ABB0-47AF9EC94E34/Derivates/fef4e88a-3397-447f-8800-5e664102d365.jpg",
},

    {id:"7",
    nombre :'Ensalada Capresse', 
    precio: 200, 
    descripcion:"Ensalada preparada con mozzarella fresca, tomates maduros, albahaca fresca, y rociada con aceite de oliva y vinagre balsámico.",
    stock: 5,
    categoria:"Vegetariana",
    img:"https://www.deliciosi.com/images/1800/1868/ensalada-caprese-665.webp",
},

    {id:"8",
    nombre :'Ensalada Palta & Mango',
    precio: 300, 
    descripcion:"Ensalada de rúcula, también conocida como arúgula, con mango, aguacate y cebolla con vinagreta de naranja, y un poco de menta picada para completar su frescura.",
    stock: 2,
    categoria:"Vegetariana",
    img:"https://www.wikichef.net/content/uploads/recipes/af9a0f_ensalada-de-mango-aguacate-y-rucula_w1000.jpg",
},

    {id:"9",
    nombre :'Ensalada Rusa',
    precio: 250,
    descripcion:"Ensalada conocida por llevar papa, zanahoria, huevo, aceitunas, guisantes y una mayonesa casera.",
    stock: 3,
    categoria:"Vegetariana",
    img:"https://comidasparaguayas.com/wp-content/uploads/2019/12/ensalada-rusa_700x465.jpg",
},

    {id:"10",
    nombre :'Ensalada Waldorf',
    precio: 290,
    descripcion:"Consiste en trozos de manzanas verdes, mix de frutos secos, juliana de repollo blanco y troncos del apio picada junto a una mayonesa .",
    stock: 10,
    categoria:"Vegetariana",
    img:"https://cdn1.cocina-familiar.com/recetas/ensalada-waldorf.JPG",
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