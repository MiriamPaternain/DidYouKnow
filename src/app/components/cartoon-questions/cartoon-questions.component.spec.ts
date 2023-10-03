import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonQuestionsComponent } from './cartoon-questions.component';

describe('CartoonQuestionsComponent', () => {
  let component: CartoonQuestionsComponent;
  let fixture: ComponentFixture<CartoonQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartoonQuestionsComponent]
    });
    fixture = TestBed.createComponent(CartoonQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
