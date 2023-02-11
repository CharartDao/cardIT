import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { recordSoundPage } from './recordSound.page';

describe('recordSoundPage', () => {
  let component: recordSoundPage;
  let fixture: ComponentFixture<recordSoundPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [recordSoundPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(recordSoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
