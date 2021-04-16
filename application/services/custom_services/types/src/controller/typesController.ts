import { Request, Response } from 'express';
import { typesService } from '../service/typesService';
import { CustomLogger } from '../config/Logger'
let types = new typesService();

export class typesController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
types.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpDelete');
    })}
public GpUpdate(req: Request, res: Response) {
types.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpUpdate');
    })}
public GpSearch(req: Request, res: Response) {
types.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
types.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpSearchForUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
types.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
types.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpCreate');
    })}


}