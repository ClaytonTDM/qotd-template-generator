const jsdom = require("jsdom");
const dom = new jsdom.JSDOM;
const $ = require("jquery")(dom.window);
setTimeout(function() {
console.clear();
}, 3500);
printWithDelay('--------------------------------------------\n\n@QOTD\n');
$.ajax({
    method: 'GET',
    url: 'https://api.reddit.com/r/askreddit/new.json',
    success: function(result) {
    console.log(result);
    const txt = JSON.stringify(result);
    var obj = JSON.parse(txt);
    var postnum = Math.floor(Math.random() * 25);
    const qotd = obj.data.children[postnum].data.title;
    var qotdString = "QOTD: " + qotd;
    printWithDelay(qotdString + '\n');
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/facts?limit=1',
    headers: { 'X-Api-Key': '1HHHukaNEC5Kh3iDOLeZjQ==nxxKAnwy9XbK9bYM'},
    contentType: 'application/json',
    success: function(result) {
    console.log(result);
    const txt = JSON.stringify(result);
    var txt1 = txt.replace("[", "");
    var txt2 = txt1.replace("]", "");
    var obj = JSON.parse(txt2);
    const fact = obj.fact;
    var factString = "FOTD: " + fact;
    printWithDelay(factString + '\n');
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes',
    headers: { 'X-Api-Key': '1HHHukaNEC5Kh3iDOLeZjQ==nxxKAnwy9XbK9bYM'},
    contentType: 'application/json',
    success: function(result) {
    console.log(result);
    const txt = JSON.stringify(result);
    var txt1 = txt.replace("[", "");
    var txt2 = txt1.replace("]", "");
    var obj = JSON.parse(txt2);
    const quote = obj.quote;
    const author = obj.author;
    var quoteString = 'Quote: "' + quote + '" - ' + obj.author + "\n";
    printWithDelay(quoteString);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
printWithMoreDelay('Answer in <#691121807960440852> :)\n\n--------------------------------------------');
function printWithDelay(string) {
    setTimeout(function() {
        console.log(string);
    }, 4000);
}
function printWithMoreDelay(string) {
    setTimeout(function() {
        console.log(string);
    }, 6000);
}
