import { Component, OnInit } from '@angular/core';
import { GetallticketsService } from './getalltickets.service';

@Component({
  selector: 'app-getalltickets',
  templateUrl: './getalltickets.component.html',
  styleUrls: ['./getalltickets.component.scss'],
})

export class GetallticketsComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Description', field: 'description'  },{ headerName: 'Types', field: 'types'  },{ headerName: 'Start_destination', field: 'start_destination'  },{ headerName: 'End_destination', field: 'end_destination'  },];
    public ticket = {
        name: '',
        description: '',
        types: '',
        start_destination: '',
        end_destination: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private getallticketsService: GetallticketsService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.getallticketsService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}