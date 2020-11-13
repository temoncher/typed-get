import { Leaves } from "./types/leaves.type";
import { OutputType } from "./types/output-type.type";

export const get = <T extends object, P extends Leaves<T>>(obj: T, path: P): OutputType<T, P> => {
  const segments = path.split('/');

  let result = obj;

  segments.forEach((segment) => result = result[segment]);

  return result as OutputType<T, P>;
}