export default class Utils {
  static getInputValue(elementID: string): string {
    const element: HTMLInputElement =
      (document.getElementById(elementID) as HTMLInputElement);
    return element.value;
  }
}
