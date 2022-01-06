var url = window.location.href;

var gaScriptSource = document.createElement("script");
gaScriptSource.type = "text/javascript";
gaScriptSource.async = true;

var gaFunction = document.createElement("script");
gaFunction.type = "text/javascript";

var bodyElement = document.activeElement;

if (url.search("mafo-a") != -1)
{
    gaScriptSource.src = "https://www.googletagmanager.com/gtag/js?id=UA-138887690-2";
    gaFunction.innerHTML = "window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'UA-138887690-2');"
    bodyElement.appendChild(gaScriptSource);
    bodyElement.appendChild(gaFunction);
}
else if (url.search("localhost") != -1 || url.search("mafo-o") != -1)
{
    //Acceptance GA
    gaScriptSource.src = "https://www.googletagmanager.com/gtag/js?id=UA-138887690-2";
    gaFunction.innerHTML = "window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'UA-138887690-2');"
    bodyElement.appendChild(gaScriptSource);
    bodyElement.appendChild(gaFunction);
}
else
{
    gaScriptSource.src = "https://www.googletagmanager.com/gtag/js?id=UA-138887690-1";
    gaFunction.innerHTML = "window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'UA-138887690-1');"
    bodyElement.appendChild(gaScriptSource);
    bodyElement.appendChild(gaFunction);
}

console.log(url);