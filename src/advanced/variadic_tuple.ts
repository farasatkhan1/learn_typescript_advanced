type Color = [number, number, number];

enum Sandwich {
  Ham,
  Veg,
  Grilled,
  BLT,
}

type SandwichOrder = [number, Sandwich, ...string[]];

const order1: SandwichOrder = [1, Sandwich.Grilled, "lettuce"];
const order2: SandwichOrder = [2, Sandwich.BLT, "lettuce", "cheese"];

type myTuple<T> = [number, ...T[]];

const x1: myTuple<string> = [1, "hello"];
const x2: myTuple<boolean> = [2, true];

type newTup<T extends any[]> = [number, ...T];

const x3: newTup<boolean[]> = [2, true];

function tail<T extends any[]>(arg: readonly [number, ...T]) {
  const [_ignored, ...rest] = arg;
  return rest;
}

const orders = tail(x3);

function returnArray<T extends any[]>(arg: T): T {
  return arg;
}

const arr: SandwichOrder = [12.99, Sandwich.Ham, "lettuce"] as const;

const res = tail(arr);

// Class Property Inference from Constructors

class ColorClass {
  red: number;
  blue: number;
  green: number;

  constructor(c: [number, number, number]) {
    this.red = c[0];
    this.blue = c[1];
    this.green = c[2];
  }
}

const color = new ColorClass([1, 2, 3]);
color.green;

function somethingRisky(): void {}

try {
  somethingRisky();
} catch (err: unknown) {
  if (err instanceof Error) throw err;
  else throw new Error(`${err}`);
}

// Template literal types

type Statistics = {
  [K in `${"median" | "mean"}Value`]?: number;
};

const stats: Statistics = {};
stats.meanValue;

let winFns: Extract<keyof Window, `set${any}`> = "" as any;

type t1 = `send${Capitalize<"mouse" | "keyboard">}Event`;

// Key remapping in mapped types
type Colors = "red" | "green" | "blue";
type ColorsSelector = {
  [K in Colors as `select${Capitalize<K>}`]: () => void;
};
const cs: ColorsSelector = {} as any;
cs.selectBlue();

// Checked index access
type Dict<T> = { [K: string]: T | undefined };
const d: Dict<string[]> = {
  dict: ["a", "b"],
};
