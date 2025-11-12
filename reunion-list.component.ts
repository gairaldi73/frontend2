import { Component } from '@angular/core';
import { ReunionService } from '../reunion.service';
import { Reunion } from '../reunion';

@Component({
  selector: 'app-reunion-list',
  templateUrl: './reunion-list.component.html',
  styleUrls: ['./reunion-list.component.css'],
})
export class ReunionListComponent {
  reuniones: Reunion[] = [];
  constructor(private service: ReunionService) {}

  ngOnInit() {
    this.service.getReuniones().subscribe((reuniones) =>{
      this.reuniones= reuniones;
       });
      }
}
