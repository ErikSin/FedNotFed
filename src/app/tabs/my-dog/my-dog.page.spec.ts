import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyDogPage } from './my-dog.page';

describe('MyDogPage', () => {
  let component: MyDogPage;
  let fixture: ComponentFixture<MyDogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyDogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
