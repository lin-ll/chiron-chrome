/* ********
  AUTHOR: Lucy Lin
  DATE: 21 June 2016 (Tuesday)
  DESCRIPTION:
  	call the relevant functions in the content script 
  NOTES:
    paideiafy.js is injected into the page as a content script from 'manifest.json'
    my.css is also injected into the page as a content script from 'manifest.json'
******** */
document.getElementById('paideia-latin').addEventListener('click', function() { 
  chrome.tabs.executeScript({code: 'runPaideiaChromium("latin")',}); 
});

document.getElementById('paideia-greek').addEventListener('click', function() { 
  chrome.tabs.executeScript({code: 'runPaideiaChromium("greek")',});
});

document.getElementById('quizlet').addEventListener('click', function() {
  chrome.tabs.executeScript({code: 'quizlet()',});
})