import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  let pipe: MyMultPipe;

  beforeEach(() => {
    pipe = new MyMultPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should multiple two numbers', () => {
    const result = pipe.transform(5, 3);
    expect(result).toBe(15);
  });
});
