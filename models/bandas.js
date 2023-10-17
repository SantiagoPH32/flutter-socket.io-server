const {v4:uuidV4}=require('uuid');


class Banda{
    constructor(name='no-name'){

        this.id=uuidV4(); // identificador unico
        this.name=name;
        this.vote=0;

    }
}

module.exports=Banda;