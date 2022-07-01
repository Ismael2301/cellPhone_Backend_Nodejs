import  mongoose, { Schema ,  model } from "mongoose";

//Interface
export interface ICellPhone {
    name : string , 
    color : string , 
    releaseDate : Date  , 
    operatingSystem : string |null,
    weight : number | null ; 
}

//Schema 
const cellPhoneSchema = new Schema<ICellPhone>({
    name : {type : String} , 
    color : {type:String }, 
    releaseDate :{type:Date} , 
    operatingSystem : {type:String }, 
    weight : {type:Number }
});

//Model

const CellPhone = model<ICellPhone>('CellPhone' , cellPhoneSchema );
//const Product = mongoose.model('Product' , productSchema );

export {CellPhone} 