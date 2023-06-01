import { Component } from '@angular/core';
import { CartoService } from '../../services/carto.service';

@Component({
  selector: 'app-carto',
  templateUrl: './carto.component.html',
  styleUrls: ['./carto.component.css']
})
export class CartoComponent {

  constructor(private cartoService:CartoService) {

  }

}
