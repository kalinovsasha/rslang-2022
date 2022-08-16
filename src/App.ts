import { BaseComponent } from "./Abstract/BaseComponent";
import { Router } from "./Components/Router";
import { TServices } from "./Interfaces/Types";
import { LangService } from "./Services/LangService";
import { RouterService } from "./Services/RouterService";

interface IApp {
  render: () => void;
}

export class App implements IApp {
  private readonly services: TServices;

  constructor(private readonly root: HTMLElement) {
    this.services = {
      lang: new LangService,
      router: new RouterService
    };
  }

  render(): void {
    const h1 = new BaseComponent('h1');
    h1.element.innerText = 'Hello, RSlang';

    const p = new BaseComponent('p');

    this.root.appendChild(h1.element);
    this.root.appendChild(p.element);

    this.services.lang.getWordsOfBD().then(words => {
      const firstWord = words[0].word;
      p.element.innerText = `Первое слово в БД - ${firstWord}`;
    })

    const main = new BaseComponent('main').element;
    this.root.appendChild(main);

    new Router(main, this.services).render();
  }
}