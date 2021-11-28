'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as Data from '../Data/Data.js';
import * as BS from '../Controler/BS.js';
import { OOXml } from '../Data/OOXml.js';
Array.prototype.Last = function () { return this.length > 0 ? this[this.length - 1] : null; };
Array.prototype.First = function () { return this.length > 0 ? this[0] : null; };
export function AddWarning(para, text) {
}
export function AddError(para, text) {
}
export function IdentifyTest(paragraphs) {
    return __awaiter(this, void 0, void 0, function* () {
        paragraphs.load('text');
        yield paragraphs.context.sync();
        let paraRange = paragraphs.items.map(p => p.getRange(Word.RangeLocation.whole));
        paraRange.forEach(p => p.load('text, isEmpty, font'));
        yield paragraphs.context.sync();
        let Texts = paragraphs.items.map(p => p.text);
        MakeCode(Texts);
    });
}
let JSCode = null;
function MakeCode(texts) {
    JSCode = new Data.JSCode(texts, (ReplaceStrings, CodeStrings) => {
        $('#listIdentify').addClass('accordion');
        $('#listIdentify').append(BS.CreateAccordionItem('Nhận diện', 'identify-result', BS.CreateList(ReplaceStrings, true), false));
        const html = window.Prism.highlight(CodeStrings.join('\n'), window.Prism.languages.javascript, 'javascript');
        $('#listIdentify').append(BS.CreateAccordionItem('Mã nguồn', 'fullcode', `<pre class="language-javascript"><code style="white-space: pre-wrap">${html}</code></pre>`, false));
    }, (ResultStrings, resultText) => {
        $('#listIdentify').append(BS.CreateAlert('Code OK', 'success'));
        $('#listIdentify').append(BS.CreateAccordionItem(ResultStrings.join(', '), 'result-preview', BS.CreateAlert(resultText.replace(/\n/g, '<br>'), 'warning')));
        $('#btnGroupPrint').removeClass('d-none');
    }, e => {
        $('#listIdentify').append(BS.CreateAlert(`Lỗi:<br> ${e}`, 'danger'));
        $('#btnGroupPrint').addClass('d-none');
    });
}
export function MakeCopy(paraRange, context, count) {
    return __awaiter(this, void 0, void 0, function* () {
        yield context.sync();
        let Ooxml = paraRange.getOoxml();
        yield context.sync();
        let newOoxmlValue = Ooxml.value;
        let Xml = new OOXml(newOoxmlValue);
        for (let i = 0; i < count; i++) {
            let newXml = new OOXml(newOoxmlValue);
            JSCode.NextValue();
            JSCode.ReplaceStrings.forEach((code, i) => {
                newXml.Replace(code, JSCode.Result[i]);
            });
            Xml.Join(newXml);
            $('#listResult').append(BS.CreateAlert(`Đã thêm: ${JSCode.ResultStrings().join(', ')}`, 'warning'));
        }
        paraRange.insertOoxml(Xml.XML(), Word.InsertLocation.replace);
        yield context.sync();
    });
}
//# sourceMappingURL=Identify.js.map