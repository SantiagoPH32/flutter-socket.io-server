const {io} =require('../index');
const Banda = require('../models/bandas');
const Bandas = require('../models/bandas');
const Bands = require('../models/bandasColeccion')

const bans=new Bands();


bans.addBand(new Bandas('Queen'))
bans.addBand(new Bandas('Heroes del silencio'))
bans.addBand(new Bandas('Nirvana'))
bans.addBand(new Bandas('Diomedes'))



//Mensajes de sockets
io.on('connection', client => {
    console.log('Cliente Conectado')

    client.emit('active-bands',bans.getBandas())

    client.on('disconnect', () => { 
        console.log('Cliente desconectado')
     });


    client.on('mensaje',(payload)=>{
        console.log('Mensaje!!',payload)

        io.emit('mensaje',{admin:'Nuevo mensaje'})
    }) 



    client.on('emitir-mensaje',(payload)=>{
        console.log(payload)
        client.broadcast.emit('Escuchando',payload) 
    })


    client.on('vote-band',(payload)=>{
        bans.voteBand(payload.id);
        io.emit('active-bands',bans.getBandas())
    })


    //Escuchar add-band notificar a todos los clientes conectados

    client.on('add-band',(payload)=>{
        console.log(payload.name)
        bans.addBand(new Bandas(payload.name))
        io.emit('active-bands',bans.getBandas())
    })


    client.on('delete-band',(payload)=>{
        console.log('banda borrada'+payload.id)
        bans.deleteBand(payload.id)
        io.emit('active-bands',bans.getBandas())
    })
  });