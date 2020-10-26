import {Mobile} from "./mobile"
export class MobileLibrary
{
    private name:string ;
    private location : string ;
    private mobiles : Mobile [];
    private totalPrice : number; 

    constructor(name : string, location: string, mobiles : Mobile[], )
    {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        
    }
    getName():string
    {
        return this.name ;
    }
    getLocation():string
    {
        return this.location ;
    }
    getMobiles():Mobile []
    {
        return this.mobiles;
    }
    setName(nombre :string)
    {
        this.name = nombre ;
    }
    setLocation(lugar : string)
    {
        this.location =  lugar ;
    }
    setMobiles (terminal : Mobile[])
    {
        this.mobiles = terminal;
    }
    getPrice (): number
    {
        this.totalPriceCalculation()
        return this.totalPrice;
    }
    totalPriceCalculation()
    {
        let precio = 0;
        for (let i = 0 ; i< this.mobiles.length; i++)
        {
            precio += this.mobiles[i].getprice()
        }
        this.totalPrice = precio;
    }
    printLibrary():string{
        let texto: string = 'This are all my mobiles: \n';
        for (let i=0; i<this.mobiles.length;i++){
            texto +=this.mobiles[i].tostring() + "\n";
        }
        texto += "\nOverall Price :"+ this.getPrice();
               
        return texto;
    }
}