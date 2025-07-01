import { ComponentFixture, TestBed } from '@angular/core/testing';

import { catalogo } from './catalogo.component';

describe('Catalogo', () => {
  let component: catalogo;
  let fixture: ComponentFixture<catalogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [catalogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(catalogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
