// This function is called onload in the popup code
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) 
	{
        switch (request.directive) 
		{
        case "popup-click":
            // execute the content script
            chrome.tabs.executeScript(null, 
			{ // defaults to the current tab
                file: "Inject_files/bg_Inject.js", 
                allFrames: true 
            });
            sendResponse({}); // sending back empty response to sender
            break;
		case "popup-click2":
            // execute the content script
            chrome.tabs.executeScript(null, 
			{ // defaults to the current tab
                file: "Inject_files/fontfam_Inject.js", 
                allFrames: true 
            });
            sendResponse({}); // sending back empty response to sender
            break;
		case "popup-click3":
			// execute the content script
			chrome.tabs.executeScript(null, 
			{ // defaults to the current tab
				file: "Inject_files/size_Inject.js", 
				allFrames: true 
			});
			sendResponse({}); // sending back empty response to sender
			break;
		case "popup-click4":
            // execute the content script
            chrome.tabs.executeScript(null, 
			{ // defaults to the current tab
                file: "Inject_files/colour_Inject2.js", 
                allFrames: true 
            });
            sendResponse({}); // sending back empty response to sender
            break;
		case "popup-click5":
            // execute the content script
            chrome.tabs.executeScript(null, 
			{ // defaults to the current tab
                file: "Inject_files/charSpace_Inject.js", 
                allFrames: true 
            });
            sendResponse({}); // sending back empty response to sender
            break;
		case "popup-click6":
            // execute the content script
            chrome.tabs.executeScript(null, 
			{ // defaults to the current tab
                file: "Inject_files/wordSpace_Inject.js", 
                allFrames: true 
            });
            sendResponse({}); // sending back empty response to sender
            break;
		case "popup-click7":
			// execute the content script
			chrome.tabs.executeScript(null, 
			{ // defaults to the current tab
				file: "Inject_files/paraSpace_Inject.js", 
				allFrames: true 
			});
			sendResponse({}); // sending back empty response to sender
			break;
		case "popup-click8":
            // execute the content script
            chrome.tabs.executeScript(null, 
			{ // defaults to the current tab
                file: "Inject_files/lineSpace_Inject.js", 
                allFrames: true 
            });
            sendResponse({}); // sending back empty response to sender
            break;
        default:
            // helps debug when request directive doesn't match
            alert("Unmatched request of '" + request + "' from script to background.js from " + sender);
        }
    }
);