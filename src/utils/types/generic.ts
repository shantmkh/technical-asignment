export type ObjectType = Record<string, string | number | boolean>;
export type ObjectGeneric<T> = Record<string, T>;
export type TableOption = {
  sortable: boolean;
  selector: string;
  width: string;
  title: string;
}