import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographyQuestionsComponent } from './geography-questions.component';

describe('GeographyQuestionsComponent', () => {
  let component: GeographyQuestionsComponent;
  let fixture: ComponentFixture<GeographyQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeographyQuestionsComponent]
    });
    fixture = TestBed.createComponent(GeographyQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
