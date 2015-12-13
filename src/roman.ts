import {getKana} from "./table";


export function toKana(str: string): string {
    let result = "";
    let temp = "";
    const len = str.length;

    for (let i = 0; i < len; i++) {
        const c = str[i];

        temp += c;

        const k = getKana(temp);

        if (k) {
            result += k;
        }
    }


    return result;
}



export function toRomans(str: string): string[] {
    return [];
}
