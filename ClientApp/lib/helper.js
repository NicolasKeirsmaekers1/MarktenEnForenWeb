//Modals.
var modalmgr = function () {
    var confirmContainer = $('#confirmDiv');
    var confirmContainerSecond = $('#secondConfirmDiv');
    var saveAsContainer = $('#saveAsDiv');
    var printAsContainer = $('#printAsDiv');
    var sendContainer = $('#sendDiv');
    var alertContainer = $("#alertDiv");

    function initConfirmClose(restoreCallback) {
        $("body").on('click', function (e) {
            // modal is active and clicking outside modal
            if ($('#confirmDiv').hasClass('in') && e.target['className'] == "modal fade in") {
                var options = {
                    element: null,
                    heading: 'Venster sluiten',
                    body: "<p> Ben je zeker dat je dit venster wil sluiten? </p>",
                    callback: function () {
                        $('#confirmDiv').modal('hide');
                        $('.modal-backdrop').remove();
                    },
                    cancelCallback: function () {
                        $('#confirmDiv').modal('hide');
                        $('.modal-backdrop').remove();

                        setTimeout(restoreCallback, 500);
                    },
                    confirmLabel: 'Venster sluiten',
                    cancelLabel: 'Annuleren'
                };

                modalmgr.confirm(options);
            }
        });
    }

    function publicShowModal(url, selector, data, isJson, callback) {
        var message = {
            url: url,
            type: isJson ? "POST" : "GET",
            data: data
        };

        if (isJson)
            message.contentType = "application/json";

        //$('body').modalmanager('loading');
        $.ajax(message).done(function (data) {
            var $modal = $(selector);
            $modal.html(data);
            $modal.modal({
                backdrop: 'static'
            })
            $modal.modal('show');
            callback && callback();
            //FoutAfhandeling.validationSummaryId = selector + ' #modalValidation';
        }).fail(function (error) {
            //FoutAfhandeling.ajaxCallFailed(error);
        });
    }

    function publicHideModal(selector) {
        $(selector).modal('hide');
        //FoutAfhandeling.validationSummaryId = '';
    }

    function publicConfirmModal(options) {
        var defaults = {
            element: null,
            heading: '',
            body: '',
            callback: function () { },
            cancelCallback: function () { },
            confirmLabel: 'Bevestig',
            cancelLabel: 'Annuleren'
        };

        var options = $.extend(defaults, options);

        confirmContainer.confirmModal({
            heading: options.heading,
            body: options.body,
            callback: function () {
                options.callback(options.element);
            },
            cancelCallback: function () {
                options.cancelCallback(options.element);
            }
        });
    }

    function publicConfirmSecondModal(options) {
        var defaults = {
            element: null,
            heading: '',
            body: '',
            callback: function () { },
            cancelCallback: function () { },
            confirmLabel: 'Bevestig',
            cancelLabel: 'Annuleren'
        };

        var options = $.extend(defaults, options);

        confirmContainerSecond.confirmModal({
            heading: options.heading,
            body: options.body,
            callback: function () {
                options.callback(options.element);
            },
            cancelCallback: function () {
                options.cancelCallback(options.element);
            }
        });
    }

    function publicAlertModal(options) {
        var defaults = {
            element: null,
            heading: '',
            body: '',
            callback: function () { },
            confirmLabel: 'Ok'
        };

        var options = $.extend(defaults, options);

        alertContainer.alertModal({
            heading: options.heading,
            body: options.body,
            callback: function () {
                options.callback(options.element);
            }

        });
    }

    function publicSaveAsModal(toExecute, heading) {
        saveAsContainer.saveAsModal({
            heading: heading,
            callback: toExecute
        });
    }

    function publicPrintAsModal(toExecute, heading) {
        printAsContainer.printAsModal({
            heading: heading,
            callback: toExecute
        });
    }

    function publicSendModal(toExecute, heading, eenheden) {
        sendContainer.sendModal({
            heading: heading,
            callback: toExecute,
            eenheden: eenheden
        });
    }

    return {
        showModal: publicShowModal,
        hideModal: publicHideModal,
        confirm: publicConfirmModal,
        saveAsModal: publicSaveAsModal,
        printAsModal: publicPrintAsModal,
        sendModal: publicSendModal,
        confirmContainer: confirmContainer,
        saveAsContainer: saveAsContainer,
        printAsContainer: printAsContainer,
        sendContainer: sendContainer,
        alert: publicAlertModal,
        alertContainer: alertContainer,
        initConfirmClose: initConfirmClose,
        secondConfirm: publicConfirmSecondModal
    };
}();

//Notifications.
var stack_bottomright = { "dir1": "up", "dir2": "left", "firstpos1": 25, "firstpos2": 25 };

function NotifyInfo(title, message) {
    Notify(title, message, 'info');
}

function NotifySuccess(title, message) {
    Notify(title, message, 'success');
}

function NotifyError(title, message) {
    Notify(title, message, 'error');
}


function Notify(title, message, type) {
    $.pnotify({
        title: title,
        text: message,
        shadow: false,
        type: type,
        styling: 'bootstrap3',
        addclass: "stack-bottomright",
        stack: stack_bottomright,
        nonblock: true,
        nonblock_opacity: 0.4,
        delay: 2500
    });
}

function Notify(title, message, type) {
    var opts = {
        title: title,
        text: message,
        shadow: false,
        type: type,
        addclass: "stack-bottomright",
        stack: stack_bottomright,
        nonblock: true,
        nonblock_opacity: 0.4,
        hide: true,
        delay: 2500
    };
    switch (type) {
        case 'error':
            opts.type = "error";
            break;
        case 'info':
            opts.type = "info";
            break;
        case 'success':
            opts.type = "success";
            break;
    }
    new PNotify(opts);
}

//Error handling.
var validationSummaryId = '#modalValidation'

function getValidationSummary() {
    var container = $(validationSummaryId);
    if (container.length == 0) {
        throw 'Validation summary missing on page.'
    }
    return container;
}

function handleAjaxErrorResult(result) {
    if (result['Code'] == 1) {
        var container = getValidationSummary();
        var containerUl = container.find("ul");
        containerUl.empty();
        $.each(result['Messages'], function (index, foutboodschap) {
            containerUl.append('<li>' + foutboodschap + '</li>');
        });

        container.show();
        container.find('.alert').show();
        container.addClass("validation-summary-errors").removeClass("validation-summary-valid");
    }
}

//Override Bootstrap
//Button.prototype.loadingText = '<i class="fa fa-spinner fa-spin"></i>'
