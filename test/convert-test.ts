/// <reference path="../typings/power-assert/power-assert.d.ts" />
/// <reference path="../typings/mocha/mocha.d.ts" />

import assert from "power-assert";
import {toKana, toRomans} from "../src/roman";


function convertTest(roman: string, kana: string) {
    assert.equal(kana, toKana(roman));
}



describe("convert-test", () => {
    it("single", () => {
        convertTest("a", "あ");
        convertTest("i", "い");
        convertTest("u", "う");
        convertTest("e", "え");
        convertTest("o", "お");

        convertTest("ka", "か");
        convertTest("ki", "き");
        convertTest("ku", "く");
        convertTest("ke", "け");
        convertTest("ko", "こ");

        convertTest("sa", "さ");
        convertTest("si", "し");
        convertTest("su", "す");
        convertTest("se", "せ");
        convertTest("so", "そ");

        convertTest("ta", "た");
        convertTest("ti", "ち");
        convertTest("tu", "つ");
        convertTest("te", "て");
        convertTest("to", "と");

        convertTest("na", "な");
        convertTest("ni", "に");
        convertTest("nu", "ぬ");
        convertTest("ne", "ね");
        convertTest("no", "の");

        convertTest("ha", "は");
        convertTest("hi", "ひ");
        convertTest("hu", "ふ");
        convertTest("he", "へ");
        convertTest("ho", "ほ");

        convertTest("ma", "ま");
        convertTest("mi", "み");
        convertTest("mu", "む");
        convertTest("me", "め");
        convertTest("mo", "も");

        convertTest("ya", "や");
        convertTest("yu", "ゆ");
        convertTest("yo", "よ");

        convertTest("ra", "ら");
        convertTest("ri", "り");
        convertTest("ru", "る");
        convertTest("re", "れ");
        convertTest("ro", "ろ");

        convertTest("wa", "わ");
        convertTest("wo", "を");


        convertTest("ga", "が");
        convertTest("gi", "ぎ");
        convertTest("gu", "ぐ");
        convertTest("ge", "げ");
        convertTest("go", "ご");

        convertTest("za", "ざ");
        convertTest("zi", "じ");
        convertTest("zu", "ず");
        convertTest("ze", "ぜ");
        convertTest("zo", "ぞ");

        convertTest("da", "だ");
        convertTest("di", "ぢ");
        convertTest("du", "づ");
        convertTest("de", "で");
        convertTest("do", "ど");

        convertTest("ba", "ば");
        convertTest("bi", "び");
        convertTest("bu", "ぶ");
        convertTest("be", "べ");
        convertTest("bo", "ぼ");

        convertTest("pa", "ぱ");
        convertTest("pi", "ぴ");
        convertTest("pu", "ぷ");
        convertTest("pe", "ぺ");
        convertTest("po", "ぽ");



        convertTest("kya", "きゃ");
        convertTest("kyu", "きゅ");
        convertTest("kyo", "きょ");

        convertTest("sya", "しゃ");
        convertTest("syu", "しゅ");
        convertTest("syo", "しょ");

        convertTest("tya", "ちゃ");
        convertTest("tyu", "ちゅ");
        convertTest("tyo", "ちょ");

        convertTest("nya", "にゃ");
        convertTest("nyu", "にゅ");
        convertTest("nyo", "にょ");

        convertTest("hya", "ひゃ");
        convertTest("hyu", "ひゅ");
        convertTest("hyo", "ひょ");

        convertTest("mya", "みゃ");
        convertTest("myu", "みゅ");
        convertTest("myo", "みょ");

        convertTest("rya", "りゃ");
        convertTest("ryu", "りゅ");
        convertTest("ryo", "りょ");

        convertTest("gya", "ぎゃ");
        convertTest("gyu", "ぎゅ");
        convertTest("gyo", "ぎょ");

        convertTest("zya", "じゃ");
        convertTest("zyu", "じゅ");
        convertTest("zyo", "じょ");

        convertTest("bya", "びゃ");
        convertTest("byu", "びゅ");
        convertTest("byo", "びょ");

        convertTest("pya", "ぴゃ");
        convertTest("pyu", "ぴゅ");
        convertTest("pyo", "ぴょ");

        convertTest("kka", "っか");
    });


    it("long", () => {
        convertTest("aiueokakikukeko", "あいうえおかきくけこ");

        convertTest("ro-ma", "ろーま");
    });
});
