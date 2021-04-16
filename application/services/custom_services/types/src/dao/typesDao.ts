import * as mongoose from 'mongoose';
import typesModel from '../models/types';
import { CustomLogger } from '../config/Logger'


export class typesDao {
    private types = typesModel;
    constructor() { }
public GpDelete(typesId, callback){
new CustomLogger().showLogger('info', 'Enter into typesDao.ts: GpDelete')

this.types.findByIdAndRemove(typesId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from typesDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(typesData, callback){
new CustomLogger().showLogger('info', 'Enter into typesDao.ts: GpUpdate')

this.types.findOneAndUpdate({ _id: typesData._id }, typesData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from typesDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(typesData, callback){
new CustomLogger().showLogger('info', 'Enter into typesDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(typesData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.types.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from typesDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(typesData, callback){
new CustomLogger().showLogger('info', 'Enter into typesDao.ts: GpSearchForUpdate')

this.types.findOneAndUpdate({ _id: typesData._id }, typesData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from typesDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into typesDao.ts: GpGetAllValues')

this.types.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from typesDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(typesData, callback){
new CustomLogger().showLogger('info', 'Enter into typesDao.ts: GpCreate')
let temp = new typesModel(typesData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from typesDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}