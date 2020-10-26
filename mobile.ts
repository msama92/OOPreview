export class Mobile 
{
    private name : string;
    private model : string;
    private trademark : string;
    private sdSize : number;
    private color : string;
    private is5G : boolean;
    private cameraNumber : number;
    private price : number;

    constructor(name, model, trademark, sdSize,color, is5G, cameraNumber, price)
    {
        this.name = name;
        this.model = model,
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    public getname():string
    {
        return this.name;
    }
    public getmodel():string
    {
        return this.model;
    }
    public gettrademark():string
    {return this.trademark;}

    public getsdSize():number
    {
        return this.sdSize;
    }
    public getcolor():string
    {
        return this.color;
    }
    public getis5G(): boolean
    {
        return this.is5G;
    }
    public getcameraNumber():number
    {
        return this.cameraNumber;
    }
    public getprice():number
    {
        return this.price;
    }
    public setname(name:string)
    {
        this.name = name;
    }
    public setmode(model:string)
    {
        this.model = model;
    }
    public settrademark(trademark:string)
    {
        this.trademark = trademark;
    }
    public setsdSize(size : number)
    {
        this.sdSize = size;
    }
    public setcolor (color : string)
    {
        this.color = color;
    }
    public setis5G (G : boolean)
    {
        this.is5G = G;
    }
    public setcameraNumber(number : number)
    {
        this.cameraNumber = number;
    }
    public setprecio(price: number)
    {
        this.price = price;
    }
    public tostring():string
    {
        let prof: string = '';
        prof  =`The characteristics of the ${this.name} are :
                Name :${this.name}
                Model :${this.model}                
                Trademark :${this.trademark}
                SD Size :${this.sdSize}
                Color :${this.color}
                5G :${this.is5G}
                Number of Cameras :${this.cameraNumber}`
        return prof;
    }

}