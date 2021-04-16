import { Component, OnInit } from '@angular/core';
import { CreategetallService } from './creategetall.service';

@Component({
  selector: 'app-creategetall',
  templateUrl: './creategetall.component.html',
  styleUrls: ['./creategetall.component.scss'],
})

export class CreategetallComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Path_route', field: 'path'  },{ headerName: 'Route_Number', field: 'route'  },];
    public types = {
        path: '',
        route: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private creategetallService: CreategetallService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpCreate() {
        this.creategetallService.GpCreate(this.types).subscribe(data => {
            this.types.path = ''
 	 	this.types.route = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetAllValues() {
        this.creategetallService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}