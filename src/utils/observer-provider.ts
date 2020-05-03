import { Observer } from 'rxjs/internal/types';

export function getObserver(name: string): Observer<any> {
  return {
    next: (value: any) => console.log(`${name}. Next: ${value}`),
    error: (error: Error) => console.log(`${name}. Error: ${error}`),
    complete: () => console.log(`${name}. Completed!`),
  };
}
