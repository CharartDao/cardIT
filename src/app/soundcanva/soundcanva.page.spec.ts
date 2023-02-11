import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { soundcanvaPage } from './soundcanva.page';

describe('soundcanvaPage', () => {
  let component: soundcanvaPage;
  let fixture: ComponentFixture<soundcanvaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [soundcanvaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(soundcanvaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
