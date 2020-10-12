import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegiterPage } from './regiter.page';

describe('RegiterPage', () => {
  let component: RegiterPage;
  let fixture: ComponentFixture<RegiterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegiterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
