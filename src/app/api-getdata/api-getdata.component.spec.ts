import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGetdataComponent } from './api-getdata.component';

describe('ApiGetdataComponent', () => {
  let component: ApiGetdataComponent;
  let fixture: ComponentFixture<ApiGetdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiGetdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiGetdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
