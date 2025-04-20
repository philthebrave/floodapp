import { Component, OnInit } from '@angular/core';
import { FloodService } from './services/flood.service';
import { FloodidService } from './services/floodid.service';
import { Flood } from './interfaces/flood';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'floodapp';
  floods: any = [];
  flood: any = [];
  floodItems: any = [];
  message: string = "";
  long!: number;
  lat!: number;

  constructor(private floodService: FloodService, private floodidService: FloodidService) {}

  ngOnInit(): void {
    this.onGetFloods();
  }

  // GET request for all floods.
  onGetFloods(): void {
    this.floodService.getFloods().subscribe(
      (response) => {
        this.floods = response;
        this.floodItems = this.floods.items
      }
    );
  }

  // GET request for selected (clicked) flood.
  onGetFlood(): void {
    this.floodidService.getFlood().subscribe(
      (response) => {
        this.flood.items = response;
        this.message = this.flood.items.items.message;
        this.lat = this.flood.items.items.floodArea.lat;
        this.long = this.flood.items.items.floodArea.long;
      }
    );
  }

  // Pulls floodAreaID from selected flood and passes to onGetFlood (above) to create URL for new GET request.
  selectFlood(floodItem: Flood) {
    this.floodidService.ext = floodItem.floodAreaID;
    this.onGetFlood();
  }

  // See ngIf in HTML file.
  goBack() {
    this.message = "";
  }

}
