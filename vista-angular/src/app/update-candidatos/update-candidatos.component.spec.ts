import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCandidatosComponent } from './update-candidatos.component';

describe('UpdateCandidatosComponent', () => {
  let component: UpdateCandidatosComponent;
  let fixture: ComponentFixture<UpdateCandidatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCandidatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
