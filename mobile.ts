export class Mobile 
{
    public name : string;
    public model : string;
    public trademark : string;
    public sdSize : string;
    public color : string;
    public is5G : boolean;
    public cameraNumber : number;
    public price : number;

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

}