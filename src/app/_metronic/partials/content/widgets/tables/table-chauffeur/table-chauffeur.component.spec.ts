import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableChauffeurComponent } from './table-chauffeur.component';

describe('TableChauffeurComponent', () => {
  let component: TableChauffeurComponent;
  let fixture: ComponentFixture<TableChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableChauffeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
