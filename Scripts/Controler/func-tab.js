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
import * as Lib from '../Module/Lib.js';
import * as BS from './BS.js';
export function initTab() {
    let Accordions = '';
    Lib.Functions.forEach((func, funcIndex) => {
        let body = '';
        func.Items.forEach((value, valueIndex) => {
            body += BS.CreateListGroupItem(`<b>${Lib.CreateInlineHTML(value.Name)}</b><br>${Lib.CreateInlineHTML(value.Text)}<br><i><b>VD:</b></i><br><var>${Lib.CreateInlineHTML(value.Eg)}</var>`, `[${funcIndex},${valueIndex}]`);
        });
        body = BS.CreateListGroup(body);
        Accordions += BS.CreateAccordionItem(func.Name, '-f-' + funcIndex, body);
    });
    $('#LibFunctions').addClass('accordion').html(Accordions);
    $('#LibFunctions button').click(function () {
        let [groupIndex, valueIndex] = $(this).data('hc-index');
        let textData = Lib.CreateCode(Lib.Functions[groupIndex].Items[valueIndex].Value);
        Word.run((context) => __awaiter(this, void 0, void 0, function* () {
            let range = context.document.getSelection().getRange(Word.RangeLocation.whole);
            yield context.sync;
            range.insertHtml(textData, Word.InsertLocation.replace);
            yield context.sync;
        })).catch(BS.errorHandler);
    });
}
//# sourceMappingURL=func-tab.js.map