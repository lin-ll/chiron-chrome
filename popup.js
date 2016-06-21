document.getElementById('paideia-latin').addEventListener('click', function() { 
  chrome.tabs.executeScript({code: 'runPaideiaChromium("latin")',}); 
});

document.getElementById('paideia-greek').addEventListener('click', function() { 
  chrome.tabs.executeScript({code: 'runPaideiaChromium("greek")',});
});

document.getElementById('quizlet').addEventListener('click', function() {
  chrome.tabs.executeScript({code: 'quizlet()',});
})