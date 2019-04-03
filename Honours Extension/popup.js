//Background button
function clickHandler(e) 
{
    chrome.runtime.sendMessage({directive: "popup-click"}, function(response) 
	{
        this.close(); // close the popup when the background finishes processing request
    });
}

document.addEventListener('DOMContentLoaded', function () 
{
    document.getElementById('background').addEventListener('click', clickHandler);
})

//Font family
function clickHandler2(e) 
{
    chrome.runtime.sendMessage({directive: "popup-click2"}, function(response) 
	{
        this.close(); // close the popup when the background finishes processing request
    });
}

document.addEventListener('DOMContentLoaded', function () 
{
    document.getElementById('text-font').addEventListener('click', clickHandler2);
})

//Font size
function clickHandler3(e) 
{
    chrome.runtime.sendMessage({directive: "popup-click3"}, function(response) 
	{
        this.close(); // close the popup when the background finishes processing request
    });
}

document.addEventListener('DOMContentLoaded', function () 
{
    document.getElementById('text-size').addEventListener('click', clickHandler3);
})

//Font colour
function clickHandler4(e) 
{
    chrome.runtime.sendMessage({directive: "popup-click4"}, function(response) 
	{
        this.close(); // close the popup when the background finishes processing request
    });
}

document.addEventListener('DOMContentLoaded', function () 
{
    document.getElementById('text-colour').addEventListener('click', clickHandler4);
})

//Character spacing
function clickHandler5(e) 
{
    chrome.runtime.sendMessage({directive: "popup-click5"}, function(response) 
	{
        this.close(); // close the popup when the background finishes processing request
    });
}

document.addEventListener('DOMContentLoaded', function () 
{
    document.getElementById('charSpacing').addEventListener('click', clickHandler5);
})

//Word Spacing
function clickHandler6(e) 
{
    chrome.runtime.sendMessage({directive: "popup-click6"}, function(response) 
	{
        this.close(); // close the popup when the background finishes processing request
    });
}

document.addEventListener('DOMContentLoaded', function () 
{
    document.getElementById('word-space').addEventListener('click', clickHandler6);
})

//Paragraph Spacing
function clickHandler7(e) 
{
    chrome.runtime.sendMessage({directive: "popup-click7"}, function(response) 
	{
        this.close(); // close the popup when the background finishes processing request
    });
}

document.addEventListener('DOMContentLoaded', function () 
{
    document.getElementById('para-space').addEventListener('click', clickHandler7);
})

//Line Spacing
function clickHandler8(e) 
{
    chrome.runtime.sendMessage({directive: "popup-click8"}, function(response) 
	{
        this.close(); // close the popup when the background finishes processing request
    });
}

document.addEventListener('DOMContentLoaded', function () 
{
    document.getElementById('line-space').addEventListener('click', clickHandler8);
})