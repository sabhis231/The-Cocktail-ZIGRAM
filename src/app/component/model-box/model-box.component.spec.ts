import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelBoxComponent } from './model-box.component';

describe('ModelBoxComponent', () => {
  let component: ModelBoxComponent;
  let fixture: ComponentFixture<ModelBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
