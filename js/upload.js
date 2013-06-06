/*
 * jQuery File Upload Plugin JS Example 7.0
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint nomen: true, unparam: true, regexp: true */
/*global $, window, document */

$(function () {
    'use strict';
//For Pictures
    // Initialize the jQuery File Upload widget:
    $('#pictureupload').fileupload({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
	url: 'server/php/picture/',
        maxFileSize: 1000000000,
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
            process: [
                {
                    action: 'load',
                    fileTypes: /^image\/(gif|jpeg|png)$/,
                    maxFileSize: 2000000000 // 20MB
                },
                {
                    action: 'resize',
                    maxWidth: 1920,
                    maxHeight: 1080
                },
                {
                    action: 'save'
                }
            ]
    });

    // Enable iframe cross-domain access via redirect option:
    $('#pictureupload').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );

//For videos    
        // Initialize the jQuery File Upload widget:
    $('#videoupload').fileupload({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: 'server/php/video/',		 
        maxFileSize: 1000000000,
            acceptFileTypes: /(\.|\/)(avi|mpe?g|mov|mp4|mpeg4|mxf)$/i,
            process: [
                {
                    action: 'load',
                    fileTypes: /^video\/(avi|mpeg|mpg|mov|mp4|mpeg4|mxf)$/,
                    maxFileSize: 1000000000 // 1000MB
                },
                {
                    action: 'save'
                }
            ]
    });

    // Enable iframe cross-domain access via redirect option:
    $('#videoupload').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );
//For scripts    
    // Initialize the jQuery File Upload widget:
    $('#scriptupload').fileupload({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: 'server/php/script/',
        maxFileSize: 20000000,
            acceptFileTypes: /(\.|\/)(txt|rtf|doc|docx|xls|odt|pdf)$/i,
            process: [
                {
                    action: 'load',
                    fileTypes: /^text\/(txt|rtf|doc|docx|xls|odt|pdf)$/,
                    maxFileSize: 20000000 // 20MB
                },
                {
                    action: 'save'
                }
            ]
    });

    // Enable iframe cross-domain access via redirect option:
    $('#scriptupload').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );
      
    
});


