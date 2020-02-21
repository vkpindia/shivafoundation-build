import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfFormsComponent } from './sf-forms.component';

describe('SfFormsComponent', () => {
  let component: SfFormsComponent;
  let fixture: ComponentFixture<SfFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
