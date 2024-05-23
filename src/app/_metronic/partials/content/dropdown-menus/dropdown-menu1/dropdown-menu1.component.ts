import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu1',
  templateUrl: './dropdown-menu1.component.html',
})
export class DropdownMenu1Component implements OnInit {
  @HostBinding('class') class =
    'menu menu-sub menu-sub-dropdown w-250px w-md-300px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';

  mcValue: string;
  marqueValue: string;
  constructor(private http: HttpClient) { }
  onSubmit() {
    const url = `http://localhost:8080/api/data?mc=${this.mcValue}&marque=${this.marqueValue}`;
    this.http.get(url)
      .subscribe(data => {
        // Faire quelque chose avec les données retournées par le backend
        console.log(data);
      }, error => {
        console.error('Error fetching data:', error);
      });
  }
  ngOnInit(): void {}
}
