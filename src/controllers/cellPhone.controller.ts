import { Request , Response } from "express";
import { ICellPhone , CellPhone } from "../models/cellPhone.models";
import { IResponse } from "../models/response.models";


export const createCellPhone = async (req: Request, res: Response)=> {           
    const {  name  ,color , releaseDate , operatingSystem, weight } : ICellPhone = req.body;
    const response = await new CellPhoneController().create({name  ,color , releaseDate , operatingSystem, weight });         
    return res.status(response.status).json(response);   
}

export const retrieveCellPhone = async (req: Request , res :Response ) =>{
    const docId : String = req.params.id; 
    const response = await new CellPhoneController().retrieve(docId); 
    return res.status(response.status).json(response);
}

export const updateCellPhone  = async (req: Request , res :Response ) =>{
    const {  name  ,color , releaseDate , operatingSystem, weight } : ICellPhone = req.body;
    const docId : String = req.params.id; 
    const response = await new CellPhoneController().update(docId , {  name  ,color , releaseDate , operatingSystem, weight });
    return res.status(response.status).json(response);
}

export const listCellPhone  = async (req: Request , res :Response ) =>{
    const response = await new CellPhoneController().list();
    return res.status(response.status).json(response);
}
export const deleteCellPhone  = async (req: Request , res :Response ) =>{
    const docId : String =  req.params.id; 
    const response = await new CellPhoneController().delete(docId);
    return res.status(response.status).json(response);
}



class CellPhoneController {

    //Create a new CellPhone in the database (save)
    public async create (cellPhone : ICellPhone) : Promise<IResponse>{
        const product = new CellPhone(cellPhone) ;
        return product.save().then (data => {
            return {
                message: "CREATED: CellPhone added to database",
                status: 201,
                content : data
            }
        }).catch(err => {
               return { message: "Error on create CellPhone",
                status: 500,
                content : err
            }
        });
    }
    //Retrive a cellPhone from the database
    public async retrieve(docId: String) : Promise<IResponse> {        
        return CellPhone.findOne({_id: docId}).then(data => {
            if(data === null) {
                return {
                    message: "NOT FOUND: CellPhone not found",
                    status: 404,
                    content : data
                };
            }
            return {
                message: "OK: CellPhone retrieve",
                status: 200,
                content : data
            };
        }).catch(err => {
            return {
                message: "INTERNAL SERVER ERROR: " + err.name ,
                status: 500,
                content : err
            };
        });        
    }
    //Update a cellPhone in the database
    public async update(docId: String, payload : ICellPhone) : Promise<IResponse>{
        return CellPhone.updateOne({_id: docId} , { $set: { 
            name: payload.name, 
            color : payload.color,
            releaseDate :payload.releaseDate , 
            operatingSystem :payload.operatingSystem,
            weight :payload.weight      
            } }).then(data => {            
            return {
                message: "OK: CellPhone updated",
                status: 200,
                content : data
            }
        }).catch(err => {
            return {
                message: "INTERNAL SERVER ERROR: CellPhone not updated",
                status: 500,
                content : err
            }
        });
    }
    


    //Delete a cellPhone from the database
    public async delete(docId: String) : Promise<IResponse> {
        return CellPhone.deleteOne({_id: docId}).then(data => {
            if (data.deletedCount == 0) {
                return {
                    message: "NOT FOUND: CellPhone not found",
                    status: 404,
                    content : data
                };
            }
            return {
                message: "OK: CellPhone deleted",
                status: 200,
                content : data
            }
        }).catch(err => {
            return {
                message: "INTERNAL SERVER ERROR: " + err.name,
                status: 500,
                content : err
            }
        });
    }

    //List all CellPhone from the database
    public async list() : Promise<IResponse> {
        return CellPhone.find({}).then(data => {
                return {
                    message: "OK: All CellPhone retrieve",
                    status: 200,
                    content : data
                };
            }).catch(err => {
                return { message: "Error on retrieve CellPhone", status: 500, content : err }
        });       
    }

    
}