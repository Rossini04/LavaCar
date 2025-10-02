import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdadeComponent } from './idade.component';

describe('IdadeComponent', () => {
  let component: IdadeComponent;
  let fixture: ComponentFixture<IdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
