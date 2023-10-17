const Banda = require("./bandas");





class BandasColeccion {
    constructor(){
        this.bands=[];
    }



    addBand(band=new Banda()){
        this.bands.push(band);
    }

    getBandas(){
        return this.bands;
    }

    deleteBand(id=''){
        this.bands=this.bands.filter(banda=>banda.id != id)
        return this.bands;
    }


    voteBand(id=''){
        this.bands=this.bands.map( band=>{
                if(band.id===id){
                    band.vote++;
                    return band
                }else{
                    return band
                }
            }
        )
    }
}

module.exports=BandasColeccion