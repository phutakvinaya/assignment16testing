import { pipe } from 'rxjs';
import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  let pipe: MyAddPipe;

  beforeEach(() => {
    pipe = new MyAddPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should add two numbers', () => {
    const result = pipe.transform(5, 3);
    expect(result).toBe(8);
  });
});
