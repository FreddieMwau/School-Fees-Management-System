import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearedComponentComponent } from './cleared-component.component';

describe('ClearedComponentComponent', () => {
  let component: ClearedComponentComponent;
  let fixture: ComponentFixture<ClearedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearedComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
