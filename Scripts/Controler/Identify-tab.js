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
import * as Identify from '../Module/Identify.js';
export function initTab() {
    $('#btnIdentify').click(function () {
        Word.run((context) => __awaiter(this, void 0, void 0, function* () {
            let paragraphs = context.document.getSelection().paragraphs;
            $('#listIdentify').html('');
            yield Identify.IdentifyTest(paragraphs);
            yield context.sync;
        })).catch(errorHandler);
    });
    $('#btnPrint').click(function () {
        Word.run((context) => __awaiter(this, void 0, void 0, function* () {
            let count = $('#txtPrintCount').val();
            if (!count || count < 1) {
                $('#listResult').html('<div class="alert alert-danger">Số lượng không đúng</div>');
                return;
            }
            else {
                $('#listResult').html('');
            }
            let range = context.document.getSelection();
            yield Identify.MakeCopy(range, context, count);
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
//# sourceMappingURL=Identify-tab.js.map