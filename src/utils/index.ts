import { PAGES_COUNT } from "../config";

export function logError(message: string, error: unknown) {
  const errMessage = (error instanceof Error) ? error.message : 'Unknown Error';
  console.error(`[${message}]: ${errMessage}`);
}

// Функция перемешивания массивов https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
export function shuffle<T>(arr: Array<T>) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

export function getRandomNumber(max: number) {
  return Math.floor(Math.random() * max);
}

export function createDate(): string {
  return new Date().toLocaleString().split(',')[0];
}

// генерация случайного массива n элементов
export function generateRandomNums(count:number): number[] {
  const arr: number[] = [];
  while (arr.length < count) {
    const num = getRandomNumber(PAGES_COUNT);
    if (!arr.includes(num)) {
      arr.push(num);
    }
  }
  return arr;
}
