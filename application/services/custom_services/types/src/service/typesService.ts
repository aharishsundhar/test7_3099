import { Request, Response } from 'express';
import {typesDao} from '../dao/typesDao';
import { CustomLogger } from '../config/Logger'
let types = new typesDao();

export class typesService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: GpDelete')
     const  typesId = req.params.id;
     types.GpDelete(typesId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: GpDelete')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: GpUpdate')
     const  typesData = req.body;
     types.GpUpdate(typesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: GpUpdate')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: GpSearch')
     const  typesData = req.query;
     types.GpSearch(typesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: GpSearchForUpdate')
     const  typesData = req.body;
     types.GpSearchForUpdate(typesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: GpGetAllValues')
     
     types.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: GpCreate')
     const  typesData = req.body;
     types.GpCreate(typesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: GpCreate')
         callback(response);
         });
    }


}