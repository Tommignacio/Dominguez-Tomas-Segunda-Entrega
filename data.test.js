const db = [
    {
        _id: 1,
        title: "producto 1"
    },
    {
        _id: 2,
        title: "producto 2"
    },
    {
        _id: 3,
        title: "producto 3"
    },
    {
        _id: 4,
        title: "producto 4"
    },
    {
        _id: 5,
        title: "producto 5"
    },
    {
        _id: 6,
        title: "producto 6"
    }
]
// console.log(Object.values)
// const hola = db.map(e => Object.values(e._id))
// console.log(hola)


const chau = db.map((propiedades) => propiedades._id);
console.log(chau)
