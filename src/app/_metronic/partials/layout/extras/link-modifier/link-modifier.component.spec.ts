import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkModifierComponent } from './link-modifier.component';

describe('LinkModifierComponent', () => {
  let component: LinkModifierComponent;
  let fixture: ComponentFixture<LinkModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
