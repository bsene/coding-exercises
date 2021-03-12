export default class Utils {
    static getInputValue(elementID) {
        const element = document.getElementById(elementID);
        return element.value;
    }
}
