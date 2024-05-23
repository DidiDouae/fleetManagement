import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownMenu1Component } from './dropdown-menu1/dropdown-menu1.component';
import { DropdownMenu2Component } from './dropdown-menu2/dropdown-menu2.component';
import { DropdownMenu3Component } from './dropdown-menu3/dropdown-menu3.component';
import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported

@NgModule({
  declarations: [
    DropdownMenu1Component,
    DropdownMenu2Component,
    DropdownMenu3Component,
  ],
  imports: [CommonModule,FormsModule],
  exports: [
    DropdownMenu1Component,
    DropdownMenu2Component,
    DropdownMenu3Component,
  ],
})
export class DropdownMenusModule {}
