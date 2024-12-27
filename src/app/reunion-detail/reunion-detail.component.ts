import { Component } from '@angular/core';
import { ReunionService } from '../reunion.service';
import { ActivatedRoute } from '@angular/router';
import { Reunion } from '../reunion';

@Component({
  selector: 'app-reunion-detail',
  templateUrl: './reunion-detail.component.html',
  styleUrls: ['./reunion-detail.component.css'],
})
export class ReunionDetailComponent {
  reunion!: Reunion | undefined;
  constructor(private route: ActivatedRoute, private service: ReunionService) {}

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.reunion = data.reunion;
    });
  }
}
