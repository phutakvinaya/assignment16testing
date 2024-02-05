import { MarvellouschkPipe } from './marvellouschk.pipe';

describe('MarvellouschkPipe', () => {
  let pipe: MarvellouschkPipe;

  beforeEach(() => {
    pipe = new MarvellouschkPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should identify prime numbers', () => {
    expect(pipe.transform(7)).toBe('Prime');
    expect(pipe.transform(13)).toBe('Prime');
  });

  it('should identify perfect numbers', () => {
    expect(pipe.transform(28)).toBe('Perfect');
    expect(pipe.transform(6)).toBe('Perfect');
  });

  it('should identify odd numbers', () => {
    expect(pipe.transform(9)).toBe('Odd');
    expect(pipe.transform(15)).toBe('Odd');
  });

 

});
