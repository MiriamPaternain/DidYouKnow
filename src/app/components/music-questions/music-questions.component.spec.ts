import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicQuestionsComponent } from './music-questions.component';

describe('MusicQuestionsComponent', () => {
  let component: MusicQuestionsComponent;
  let fixture: ComponentFixture<MusicQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicQuestionsComponent]
    });
    fixture = TestBed.createComponent(MusicQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
