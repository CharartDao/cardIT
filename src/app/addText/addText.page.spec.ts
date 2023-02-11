import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { addTextPage } from './addText.page';

describe('addTextPage', () => {
  let component: addTextPage;
  let fixture: ComponentFixture<addTextPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [addTextPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(addTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
