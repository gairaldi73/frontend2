import { Component } from '@angular/core';
import { ReunionService } from '../reunion.service';

@Component({
  selector: 'app-reunion-list',
  templateUrl: './reunion-list.component.html',
  styleUrls: ['./reunion-list.component.css'],
})
export class ReunionListComponent {
  reuniones: any[] = [];
  constructor(private service: ReunionService) {}

  ngOnInit() {
    this.reuniones = this.service.getReuniones();
  }
}
