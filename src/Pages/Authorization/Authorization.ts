import { BaseComponent } from "../../Abstract/BaseComponent";
import { TServices } from "../../Interfaces/Types";

export class Authorization {
  constructor(private readonly parent: HTMLElement, private readonly services: TServices) {}

  render(): void {
    this.parent.innerHTML = '';

    const container = new BaseComponent('div', ['authorization']).element;
    container.innerHTML = `<h1>Page Authorization</h1>`;

    this.parent.appendChild(container);
  }
}