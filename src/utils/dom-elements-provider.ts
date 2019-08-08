export function createButton(name: string): HTMLElement {
  const button = document.createElement('BUTTON');
  button.setAttribute('type', 'button');
  button.textContent = name;
  return button;
}
