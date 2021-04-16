import { Component, OnInit } from '@angular/core';
import { CreateticketService } from './createticket.service';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.scss'],
})

export class CreateticketComponent implements OnInit {
    typesitemArray: any = [];
    public ticket = {
        name: '',
        description: '',
        types: '',
        start_destination: '',
        end_destination: '',
    }

    constructor (
        private createticketService: CreateticketService,
    ) { }

    ngOnInit() {
    }
    typesGpGetAllValues() {
        this.createticketService.typesGpGetAllValues().subscribe(data => {
            this.typesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.createticketService.GpCreate(this.ticket).subscribe(data => {
            this.ticket.name = ''
 	 	this.ticket.description = ''
 	 	this.ticket.types = ''
 	 	this.ticket.start_destination = ''
 	 	this.ticket.end_destination = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}