export interface RomanToken {
    kana: string;
    next: string;
}


const table: {[roman: string]: RomanToken} = {
    a: { kana: "あ", next: "" },
    i: { kana: "い", next: "" },
    u: { kana: "う", next: "" },
    e: { kana: "え", next: "" },
    o: { kana: "お", next: "" },

    ka: { kana: "か", next: "" },
    ki: { kana: "き", next: "" },
    ku: { kana: "く", next: "" },
    ke: { kana: "け", next: "" },
    ko: { kana: "こ", next: "" },

    sa: { kana: "さ", next: "" },
    si: { kana: "し", next: "" },
    su: { kana: "す", next: "" },
    se: { kana: "せ", next: "" },
    so: { kana: "そ", next: "" },

    ta: { kana: "た", next: "" },
    ti: { kana: "ち", next: "" },
    tu: { kana: "つ", next: "" },
    te: { kana: "て", next: "" },
    to: { kana: "と", next: "" },
};


export function getKana(roman: string): RomanToken {
    return null;
}
