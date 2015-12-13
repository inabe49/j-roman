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

    na: { kana: "な", next: "" },
    ni: { kana: "に", next: "" },
    nu: { kana: "ぬ", next: "" },
    ne: { kana: "ね", next: "" },
    no: { kana: "の", next: "" },

    ha: { kana: "は", next: "" },
    hi: { kana: "ひ", next: "" },
    hu: { kana: "ふ", next: "" },
    he: { kana: "へ", next: "" },
    ho: { kana: "ほ", next: "" },

    ma: { kana: "ま", next: "" },
    mi: { kana: "み", next: "" },
    mu: { kana: "む", next: "" },
    me: { kana: "め", next: "" },
    mo: { kana: "も", next: "" },

    ya: { kana: "や", next: "" },
    yu: { kana: "ゆ", next: "" },
    yo: { kana: "よ", next: "" },

    ra: { kana: "ら", next: "" },
    ri: { kana: "り", next: "" },
    ru: { kana: "る", next: "" },
    re: { kana: "れ", next: "" },
    ro: { kana: "ろ", next: "" },

    wa: { kana: "わ", next: "" },
    wi: { kana: "うぃ", next: "" },
    wu: { kana: "う", next: "" },
    we: { kana: "うぇ", next: "" },
    wo: { kana: "を", next: "" },


    ga: { kana: "が", next: "" },
    gi: { kana: "ぎ", next: "" },
    gu: { kana: "ぐ", next: "" },
    ge: { kana: "げ", next: "" },
    go: { kana: "ご", next: "" },

    za: { kana: "ざ", next: "" },
    zi: { kana: "じ", next: "" },
    zu: { kana: "ず", next: "" },
    ze: { kana: "ぜ", next: "" },
    zo: { kana: "ぞ", next: "" },

    da: { kana: "だ", next: "" },
    di: { kana: "ぢ", next: "" },
    du: { kana: "づ", next: "" },
    de: { kana: "で", next: "" },
    "do": { kana: "ど", next: "" },

    ba: { kana: "ば", next: "" },
    bi: { kana: "び", next: "" },
    bu: { kana: "ぶ", next: "" },
    be: { kana: "べ", next: "" },
    bo: { kana: "ぼ", next: "" },

    pa: { kana: "ぱ", next: "" },
    pi: { kana: "ぴ", next: "" },
    pu: { kana: "ぷ", next: "" },
    pe: { kana: "ぺ", next: "" },
    po: { kana: "ぽ", next: "" },

};


export function getKana(roman: string): RomanToken {
    return table[roman] || null;
}
