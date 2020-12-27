import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbComponent } from './verbs.component';

describe('VerbsComponent', () => {
  let component: VerbComponent;
  let fixture: ComponentFixture<VerbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
