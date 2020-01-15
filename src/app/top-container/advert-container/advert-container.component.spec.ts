import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertContainerComponent } from './advert-container.component';

describe('AdvertContainerComponent', () => {
  let component: AdvertContainerComponent;
  let fixture: ComponentFixture<AdvertContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
