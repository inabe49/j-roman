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


    kya: { kana: "きゃ", next: ""},
    kyi: { kana: "きぃ", next: ""},
    kyu: { kana: "きゅ", next: ""},
    kye: { kana: "きぇ", next: ""},
    kyo: { kana: "きょ", next: ""},


    sya: { kana: "しゃ", next: "" },
    syi: { kana: "しぃ", next: "" },
    syu: { kana: "しゅ", next: "" },
    sye: { kana: "しぇ", next: "" },
    syo: { kana: "しょ", next: "" },

    tya: { kana: "ちゃ", next: "" },
    tyi: { kana: "ちぃ", next: "" },
    tyu: { kana: "ちゅ", next: "" },
    tye: { kana: "ちぇ", next: "" },
    tyo: { kana: "ちょ", next: "" },

    nya: { kana: "にゃ", next: "" },
    nyi: { kana: "にぃ", next: "" },
    nyu: { kana: "にゅ", next: "" },
    nye: { kana: "にぇ", next: "" },
    nyo: { kana: "にょ", next: "" },

    hya: { kana: "ひゃ", next: "" },
    hyi: { kana: "ひぃ", next: "" },
    hyu: { kana: "ひゅ", next: "" },
    hye: { kana: "ひぇ", next: "" },
    hyo: { kana: "ひょ", next: "" },

    mya: { kana: "みゃ", next: "" },
    myi: { kana: "みぃ", next: "" },
    myu: { kana: "みゅ", next: "" },
    mye: { kana: "みぇ", next: "" },
    myo: { kana: "みょ", next: "" },

    rya: { kana: "りゃ", next: "" },
    ryi: { kana: "りぃ", next: "" },
    ryu: { kana: "りゅ", next: "" },
    rye: { kana: "りぇ", next: "" },
    ryo: { kana: "りょ", next: "" },

    gya: { kana: "ぎゃ", next: "" },
    gyi: { kana: "ぎぃ", next: "" },
    gyu: { kana: "ぎゅ", next: "" },
    gye: { kana: "ぎぇ", next: "" },
    gyo: { kana: "ぎょ", next: "" },

    zya: { kana: "じゃ", next: "" },
    zyi: { kana: "じぃ", next: "" },
    zyu: { kana: "じゅ", next: "" },
    zye: { kana: "じぇ", next: "" },
    zyo: { kana: "じょ", next: "" },

    bya: { kana: "びゃ", next: "" },
    byi: { kana: "びぃ", next: "" },
    byu: { kana: "びゅ", next: "" },
    bye: { kana: "びぇ", next: "" },
    byo: { kana: "びょ", next: "" },

    pya: { kana: "ぴゃ", next: "" },
    pyi: { kana: "ぴぃ", next: "" },
    pyu: { kana: "ぴゅ", next: "" },
    pye: { kana: "ぴぇ", next: "" },
    pyo: { kana: "ぴょ", next: "" },


    fa: { kana: "ふぁ", next: "" },
    fi: { kana: "ふぃ", next: "" },
    fu: { kana: "ふ", next: "" },
    fe: { kana: "ふぇ", next: "" },
    fo: { kana: "ふぉ", next: "" },

    tsa: { kana: "つぁ", next: "" },
    tsi: { kana: "つぃ", next: "" },
    tsu: { kana: "つ", next: "" },
    tse: { kana: "つぇ", next: "" },
    tso: { kana: "つぉ", next: "" },

    cha: { kana: "ちゃ", next: "" },
    chi: { kana: "ち", next: "" },
    chu: { kana: "ちゅ", next: "" },
    che: { kana: "ちぇ", next: "" },
    cho: { kana: "ちょ", next: "" },


    la: { kana: "ぁ", next: "" },
    li: { kana: "ぃ", next: "" },
    lu: { kana: "ぅ", next: "" },
    le: { kana: "ぇ", next: "" },
    lo: { kana: "ぉ", next: "" },

    xa: { kana: "ぁ", next: "" },
    xi: { kana: "ぃ", next: "" },
    xu: { kana: "ぅ", next: "" },
    xe: { kana: "ぇ", next: "" },
    xo: { kana: "ぉ", next: "" },

    ltu: { kana: "っ", next: "" },
    xtu: { kana: "っ", next: "" },

    lya: { kana: "ゃ", next: "" },
    lyu: { kana: "ゅ", next: "" },
    lyo: { kana: "ょ", next: "" },

    xya: { kana: "ゃ", next: "" },
    xyu: { kana: "ゅ", next: "" },
    xyo: { kana: "ょ", next: "" },

    kk: { kana: "っ", next: "k" },
    ss: { kana: "っ", next: "s" },
    tt: { kana: "っ", next: "t" },
    nn: { kana: "ん", next: "" },
    hh: { kana: "っ", next: "h" },
    mm: { kana: "っ", next: "m" },
    yy: { kana: "っ", next: "y" },
    rr: { kana: "っ", next: "r" },
    ww: { kana: "っ", next: "w" },
    gg: { kana: "っ", next: "g" },
    zz: { kana: "っ", next: "z" },
    dd: { kana: "っ", next: "d" },
    bb: { kana: "っ", next: "b" },
    pp: { kana: "っ", next: "p" },


    "-": { kana: "ー", next: ""},
};


function add(result: string[], r: string) {
    if (result.indexOf(r) < 0) {
        result.push(r);
    }
}


function init(roman: string): string[] {
    const inits: string[] = [];

    if (0 < roman.length) {
        inits.push(roman[0]);

        if (1 < roman.length) {
            inits.push(roman[0] + roman[1]);

            if (2 < roman.length) {
                inits.push(roman[0] + roman[1] + roman[2]);

                if (3 < roman.length) {
                    inits.push(roman[0] + roman[1] + roman[2] + roman[3]);
                }
            }
        }
    }

    return inits;
}

const kanaInits: string[] = (function() {
    const result: string[] = [];


    for (let roman in table) {
        const inits = init(roman);

        for (let i = 0; i < inits.length; i++) {
            add(result, inits[i]);
        }
    }

    return result;
})();


export function getKana(roman: string): RomanToken {
    return table[roman] || null;
}


export function isKanaInit(roman: string): boolean {
    return 0 <= kanaInits.indexOf(roman);
}
