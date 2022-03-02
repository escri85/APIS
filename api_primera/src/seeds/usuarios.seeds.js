const mongoose = require('mongoose');
const {
    DB_URL,
    CONFIG_DB
} = require('../config/db');
const userModel = require('../models/user');



const userArray= [
    {
        "email": "pepe@pepe.com",
        "password": "123456",
        "description": "lorem ip",
        
    },{
        "email": "carlos@carlos.com",
        "password": "8987987",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sunt dignissimos quisquam perspiciatis, quia hic eius laborum? Architecto consequatur reiciendis illum veritatis, debitis iste doloremque laudantium sint necessitatibus laboriosam assumenda?",
        
    },{
        "email": "juan@juan.com",
        "password": "123456",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sunt dignissimos quisquam perspiciatis, quia hic eius laborum? Architecto consequatur reiciendis illum veritatis, debitis iste doloremque laudantium sint necessitatibus laboriosam assumenda?",
        
    },{
        "email": "roberto@roberto.com",
        "password": "srgsrg",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sunt dignissimos quisquam perspiciatis, quia hic eius laborum? Architecto consequatur reiciendis illum veritatis, debitis iste doloremque laudantium sint necessitatibus laboriosam assumenda?",
        
    },{
        "email": "laura@laura.com",
        "password": "utjkryilk",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sunt dignissimos quisquam perspiciatis, quia hic eius laborum? Architecto consequatur reiciendis illum veritatis, debitis iste doloremque laudantium sint necessitatibus laboriosam assumenda?",
        
    },{
        "email": "cris@cris.com",
        "password": "fghsryj",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sunt dignissimos quisquam perspiciatis, quia hic eius laborum? Architecto consequatur reiciendis illum veritatis, debitis iste doloremque laudantium sint necessitatibus laboriosam assumenda?",
        
    },{
        "email": "jose@josse.com",
        "password": "ukduyk78",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sunt dignissimos quisquam perspiciatis, quia hic eius laborum? Architecto consequatur reiciendis illum veritatis, debitis iste doloremque laudantium sint necessitatibus laboriosam assumenda?",
        
    },{
        "email": "sergio@sergio.com",
        "password": "dgukmduyk",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sunt dignissimos quisquam perspiciatis, quia hic eius laborum? Architecto consequatur reiciendis illum veritatis, debitis iste doloremque laudantium sint necessitatibus laboriosam assumenda?",
        
    },{
        "email": "hecto@hector.com",
        "password": "stukmstumks",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sunt dignissimos quisquam perspiciatis, quia hic eius laborum? Architecto consequatur reiciendis illum veritatis, debitis iste doloremque laudantium sint necessitatibus laboriosam assumenda?",
        
    },{
        "email": "luis@luis.com",
        "password": "dghmdtgumdtgujmk",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sunt dignissimos quisquam perspiciatis, quia hic eius laborum? Architecto consequatur reiciendis illum veritatis, debitis iste doloremque laudantium sint necessitatibus laboriosam assumenda?",
        
    },
]

const URL = "mongodb://localhost:27017/usuarios";

mongoose.connect(URL, CONFIG_DB)
    .then(async () => {
        console.log('Se está ejecutando el seed de los productos, todo va bien :D');

        //Aqui va a devolver todos los personajes de la coleccion
        const productsArray = await userModel.find();
        console.log(productsArray);

        //Si tiene elementos, borra todo
        if (productsArray.length) {
            await userModel.collection.drop();
            console.log('Colección products eliminada, para volver a llenar');
        }
    })
    .catch(error => console.log("Error buscando en la DB", error))
    .then(async () => {
        //Añadir el array a la base de datos
        console.log(userArray);
        await userModel.insertMany(userArray);
        console.log("Añadidas los nuevos productos")
    })
    .catch(error => console.log("Error añadiendo los productos"))
    .finally(() => mongoose.disconnect());