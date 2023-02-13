import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { applyThemePage } from './applyTheme.page';

describe('applyThemePage', () => {
  let component: applyThemePage;
  let fixture: ComponentFixture<applyThemePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [applyThemePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(applyThemePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
