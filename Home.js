"use strict"
import * as Identify from './Scripts/Controler/Identify-tab.js'
import * as Editor from './Scripts/Controler/Editor-tab.js'
(function () {
    var messageBanner

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
                    Identify.initTab()
                    Editor.initTab()
                }
            }
            LoadHTML()
        })
    }

    //$$(Helper function for treating errors, $loc_script_taskpane_home_js_comment34$)$$
    function errorHandler(error) {
        // $$(Always be sure to catch any accumulated errors that bubble up from the Word.run execution., $loc_script_taskpane_home_js_comment35$)$$
        showNotification("Error:", error)
        console.log("Error: " + error)
        if (error instanceof OfficeExtension.Error) {
            console.log("Debug info: " + JSON.stringify(error.debugInfo))
        }
    }

    // Helper function for displaying notifications
    function showNotification(header, content) {
        $("#notification-header").text(header)
        $("#notification-body").text(content)
        messageBanner.showBanner()
        messageBanner.toggleExpansion()
    }
})()
