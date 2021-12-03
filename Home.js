"use strict"
import * as Run from './Scripts/Controler/run-tab.js'
import * as Lib from './Scripts/Controler/lib-tab.js'
import * as Func from './Scripts/Controler/func-tab.js'
(function () {
    // The initialize function must be run each time a new page is loaded.
    Office.initialize = function (reason) {
        $(document).ready(function () {
            let loading = 0
            function LoadHTML() {
                let includes = $('[data-include]')
                $.each(includes, function () {
                    loading++
                    let file = 'Include/' + $(this).data('include') + '.html'
                    $(this).load(file, function () { loading--; LoadHTML() })
                    $(this).removeAttr('data-include')
                })
                if (loading == 0) {
                    Func.initTab()
                    Lib.initTab()
                    Run.initTab()
                }
            }
            LoadHTML()
        })
    }
})()
