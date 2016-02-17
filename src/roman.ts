import { getKana, isKanaInit } from "./table";


export function toKana(str: string): string {
    let result = "";
    let temp = "";
    const len = str.length;

    for (let i = 0; i < len; i++) {
        // 3文字までバッファー
        temp = temp + str[i];

        const k = getKana(temp);
        if (k) {
            result = result + k.kana;
            temp = k.next;
        } else {
            if (!isKanaInit(temp)) {
                result = result + temp.charAt(0);
                temp = temp.substring(1);
            }
        }
    }


    return result;
}



export function toRomans(str: string): string[] {
    return [];
}
