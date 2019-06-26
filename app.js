const model = require('./model');

let Pet = model.pets;

console.log('hello');

 (async () => {

/*    var pet = await Pet.create({
        name:'miaomiao',
        gender:'1',
        birth:'2000'
    });*/
    var pets = await Pet.findAll({
        where:{name:'miaomiao'}
    });

    pets.forEach(p => {
        console.log(JSON.stringify(p))
    })

})();
