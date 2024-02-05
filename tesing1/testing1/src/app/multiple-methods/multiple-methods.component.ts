import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-methods',
  templateUrl: './multiple-methods.component.html',
  styleUrl: './multiple-methods.component.css'
})
export class MultipleMethodsComponent {
inputstring:string = "Hello World";
capitalletters:string[] = [];
password: string = 'HelloWorld@12';
passwordStrengthMessage: string = '';
numbers:any[] = [10,20,30,40,50];
findcapitalletters(){
  const capitalLettersRegex = /[A-Z]/g;
this.capitalletters = this.inputstring.match(capitalLettersRegex) || [];
console.log(this.capitalletters);
}


checkPassword() {
  const hasMinTwoCapital = (this.password.match(/[A-Z]/g) || []).length >= 2;
  const hasMinThreeSmall = (this.password.match(/[a-z]/g) || []).length >= 3;
  const hasMinTwoDigits = (this.password.match(/\d/g) || []).length >= 2;
  const hasOneSpecialSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

  if (hasMinTwoCapital && hasMinThreeSmall && hasMinTwoDigits && hasOneSpecialSymbol) {
    this.passwordStrengthMessage = 'Password meets the criteria!';
  } else {
    this.passwordStrengthMessage = 'Password does not meet the criteria. Please check again.';
  }
}
ArrayAddition(): number {
  let sum = 0;

  for (let index = 0; index < this.numbers.length; index++) {
    const element = this.numbers[index];
    sum += element;
  }

  return sum;
}
}
