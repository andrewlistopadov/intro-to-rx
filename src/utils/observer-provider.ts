import { Observer } from 'rxjs/internal/types';

export function getObserver(): Observer<any> {
  return {
    next: (value: any) => console.log(`Next: ${value}`),
    error: (error: Error) => console.log(`Error: ${error}`),
    complete: () => console.log(`Completed!`)
  };
}
