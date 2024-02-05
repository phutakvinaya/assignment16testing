import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleMethodsComponent } from './multiple-methods.component';

describe('MultipleMethodsComponent', () => {
  let component: MultipleMethodsComponent;
  let fixture: ComponentFixture<MultipleMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultipleMethodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find capital letters in the input string', () => {
    component.inputstring = 'Hello World';
    component.findcapitalletters();

    expect(component.capitalletters).toEqual(['H', 'W']);
  });


  it('should indicate that the password meets the criteria', () => {
    component.password = 'HelloWorld@12';
    component.checkPassword();

    expect(component.passwordStrengthMessage).toContain('meets the criteria');
  });

  it('should addition of numbers', () => {
    component.numbers = [10,20,30,40,50];
    component.ArrayAddition();

    expect(component.capitalletters).toEqual([]);
  });


});
