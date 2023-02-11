import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { addImagePage } from './addImage.page';

describe('addImagePage', () => {
  let component: addImagePage;
  let fixture: ComponentFixture<addImagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [addImagePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(addImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
