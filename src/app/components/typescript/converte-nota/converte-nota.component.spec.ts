import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverteNotaComponent } from './converte-nota.component';

describe('ConverteNotaComponent', () => {
  let component: ConverteNotaComponent;
  let fixture: ComponentFixture<ConverteNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConverteNotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConverteNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
