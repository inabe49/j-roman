var to_kana_table: {[key: string]: string} = {
    a: "あ", i: "い", u: "う", e: "え", o: "お",
    ka: "か", ki: "き", ku: "く", ke: "け", ko: "こ",
    sa: "さ", si: "し", su: "す", se: "せ", so: "そ",
    ta: "た", ti: "ち", tu: "つ", te: "て", to: "と",
    na: "な", ni: "に", nu: "ぬ", ne: "ね", no: "の",
    ha: "は", hi: "ひ", hu: "ふ", he: "へ", ho: "ほ",
    ma: "ま", mi: "み", mu: "む", me: "め", mo: "も",
    ya: "や", yu: "ゆ", yo: "よ",
    ra: "ら", ri: "り", ru: "る", re: "れ", ro: "ろ",
    wa: "わ", wi: "うぃ", wu: "う", we: "うぇ", wo: "を",


    ga: "が", gi: "ぎ", gu: "ぐ", ge: "げ", go: "ご",
    za: "ざ", zi: "じ", zu: "ず", ze: "ぜ", zo: "ぞ",
    da: "だ", di: "ぢ", du: "づ", de: "で", "do": "ど",
    ba: "ば", bi: "び", bu: "ぶ", be: "べ", bo: "ぼ",
    pa: "ぱ", pi: "ぴ", pu: "ぷ", pe: "ぺ", po: "ぽ",


    kya: "きゃ", kyi: "きぃ", kyu: "きゅ", kye: "きぇ", kyo: "きょ",
    sya: "しゃ", syi: "しぃ", syu: "しゅ", sye: "しぇ", syo: "しょ",
    tya: "ちゃ", tyi: "ちぃ", tyu: "ちゅ", tye: "ちぇ", tyo: "ちょ",
    nya: "にゃ", nyi: "にぃ", nyu: "にゅ", nye: "にぇ", nyo: "にょ",
    hya: "ひゃ", hyi: "ひぃ", hyu: "ひゅ", hye: "ひぇ", hyo: "ひょ",
    mya: "みゃ", myi: "みぃ", myu: "みゅ", mye: "みぇ", myo: "みょ",
    rya: "りゃ", ryi: "りぃ", ryu: "りゅ", rye: "りぇ", ryo: "りょ",
    gya: "ぎゃ", gyi: "ぎぃ", gyu: "ぎゅ", gye: "ぎぇ", gyo: "ぎょ",
    zya: "じゃ", zyi: "じぃ", zyu: "じゅ", zye: "じぇ", zyo: "じょ",
    bya: "びゃ", byi: "びぃ", byu: "びゅ", bye: "びぇ", byo: "びょ",
    pya: "ぴゃ", pyi: "ぴぃ", pyu: "ぴゅ", pye: "ぴぇ", pyo: "ぴょ",


    fa: "ふぁ", fi: "ふぃ", fu: "ふ", fe: "ふぇ", fo: "ふぉ",
    tsa: "つぁ", tsi: "つぃ", tsu: "つ", tse: "つぇ", tso: "つぉ",
    cha: "ちゃ", chi: "ち", chu: "ちゅ", che: "ちぇ", cho: "ちょ",


    la: "ぁ", li: "ぃ", lu: "ぅ", le: "ぇ", lo: "ぉ",
    xa: "ぁ", xi: "ぃ", xu: "ぅ", xe: "ぇ", xo: "ぉ",
    ltu: "っ",
    xtu: "っ",
    lya: "ゃ", lyu: "ゅ", lyo: "ょ",
    xya: "ゃ", xyu: "ゅ", xyo: "ょ",

    "-": "ー",
};


var to_roman_table: {[key: string]: string} = {
    "あ": "a"
};




export function toKana(str: string): string {
    var result = "";
    var chars = str.split("");
    var len = chars.length;
    var i = 0;

    while (i < len) {
        if (i + 1 < len) {
            if (chars[i] === "n" && chars[i + 1] === "n") {
                result = result + "ん";
                i = i + 2;
                continue;
            }

            if (chars[i] === chars[i + 1]) {
                if (chars[i] === "n") {
                    result = result + "ん";
                    i = i + 2;
                    continue;
                }

                if (chars[i] === "a") {
                    result = result + "あ";
                    i = i + 1;
                    continue;
                }

                if (chars[i] === "i") {
                    result = result + "い";
                    i = i + 1;
                    continue;
                }

                if (chars[i] === "u") {
                    result = result + "う";
                    i = i + 1;
                    continue;
                }

                if (chars[i] === "e") {
                    result = result + "え";
                    i = i + 1;
                    continue;
                }

                if (chars[i] === "o") {
                    result = result + "お";
                    i = i + 1;
                    continue;
                }

                result = result + "っ";
                i = i + 1;
                continue;
            }
        }


        if (i + 2 < len) {
            var word = chars[i] + chars[i + 1] + chars[i + 2];
            if (to_kana_table[word]) {
                result = result + to_kana_table[word];
                i = i + 3;
                continue;
            }
        }


        if (i + 1 < len) {
            var word = chars[i] + chars[i + 1];
            if (to_kana_table[word]) {
                result = result + to_kana_table[word];
                i = i + 2;
                continue;
            }
        }


        if (to_kana_table[chars[i]]) {
            result = result + to_kana_table[chars[i]];
            i = i + 1;
            continue;
        }
        else {
            result = result + chars[i];
            i = i + 1;
            continue;
        }
    }

    return result;
}



export function toRomans(str: string): string[] {
    return [];
}
