const User = require('../../models/User');

const newReceiptFormHandler = () => {
    const restName = document.querySelector('#restName').value.trim();
    const ogAmtString = document.querySelector('#ogAmt').value.trim();
    const ogAmtParsed = parseInt(ogAmtString);

    let tipChoiceId = "NULL";
    let tipAmt = 0;
    
    if (document.getElementById('tenPercent').checked) {
        
        tipChoiceId = 1;
        tipAmt = ((ogAmtParsed/100)*10).toFixed(2);
        
    } else if(document.getElementById('fifteenPercent').checked) {
        
        tipChoiceId = 2;
        tipAmt = ((ogAmtParsed/100)*15).toFixed(2);

    } else if (document.getElementById('twentyPercent').checked) {

        tipChoiceId = 3;
        tipAmt = ((ogAmtParsed/100)*20).toFixed(2);

    } else {
        tipAmt = 0;
    }

    const newAmt = ogAmtParsed + tipAmt;

    const userId = User.getCurrentUserId();

   fetch('/api/receipts', {
        method: 'POST',
        body: ({userId, restName, ogAmtParsed, tipChoiceId, tipAmt, newAmt}),
        headers: { 'Content-Type': 'application/json' },
      }).then(response => console.log(response)).catch(err => {
          console.log(err);
          res.status(400).json(err);
      })

    
}

const newReceiptSubmitBtn = document.querySelector('.newReceiptBtn');

newReceiptSubmitBtn.addEventListener('click', newReceiptFormHandler);