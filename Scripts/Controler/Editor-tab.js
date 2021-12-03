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
import * as Editor from '../Module/Editor.js';
import * as BS from '../Controler/BS.js';
export function initTab() {
    let Accordions = '';
    Editor.Functions.forEach((func, funcIndex) => {
        let body = '';
        func.Items.forEach((value, valueIndex) => {
            body += BS.CreateListGroupItem(`<b>${value.Name}</b><br>${value.Text}`, `[${funcIndex},${valueIndex}]`);
        });
        body = BS.CreateListGroup(body);
        Accordions += BS.CreateAccordionItem(func.Name, '-f-' + funcIndex, body);
    });
    $('#EditorFunctions').addClass('accordion').html(Accordions);
    $('#EditorFunctions button').click(function () {
        let [groupIndex, valueIndex] = $(this).data('hc-index');
        let textData = Editor.CreateCode(Editor.Functions[groupIndex].Items[valueIndex].Value);
        Word.run((context) => __awaiter(this, void 0, void 0, function* () {
            let range = context.document.getSelection().getRange(Word.RangeLocation.whole);
            yield context.sync;
            range.insertHtml(textData, Word.InsertLocation.replace);
            yield context.sync;
        })).catch(errorHandler);
    });
    Accordions = '';
    Editor.Data.forEach((group, groupIndex) => {
        let body = '';
        group.Items.forEach((value, valueIndex) => {
            body += BS.CreateListGroupItem(value.Name, `[${groupIndex},${valueIndex}]`);
        });
        body = BS.CreateListGroup(body);
        Accordions += BS.CreateAccordionItem(group.Name, '-e-' + groupIndex, body);
    });
    $('#EditorList').addClass('accordion').html(Accordions);
    $('#EditorList button').click(function () {
        let [groupIndex, valueIndex] = $(this).data('hc-index');
        let textData = Editor.CreateHTML(Editor.Data[groupIndex].Items[valueIndex].Value);
        Word.run((context) => __awaiter(this, void 0, void 0, function* () {
            let range = context.document.getSelection().getRange(Word.RangeLocation.whole);
            yield context.sync;
            range.insertHtml(textData, Word.InsertLocation.replace);
            yield context.sync;
        })).catch(errorHandler);
    });
    function errorHandler(error) {
        console.log('Error: ' + error);
        if (error instanceof OfficeExtension.Error) {
            console.log('Debug info: ' + JSON.stringify(error.debugInfo));
        }
    }
    function showNotification(header, content) {
    }
}
//# sourceMappingURL=Editor-tab.js.map