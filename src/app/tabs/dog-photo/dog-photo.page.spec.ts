import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DogPhotoPage } from './dog-photo.page';

describe('DogPhotoPage', () => {
  let component: DogPhotoPage;
  let fixture: ComponentFixture<DogPhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogPhotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DogPhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
