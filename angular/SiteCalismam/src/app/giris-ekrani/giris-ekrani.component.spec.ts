import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirisEkraniComponent } from './giris-ekrani.component';

describe('GirisEkraniComponent', () => {
  let component: GirisEkraniComponent;
  let fixture: ComponentFixture<GirisEkraniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirisEkraniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GirisEkraniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
