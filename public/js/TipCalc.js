const newReceiptFormHandler = () => {
    const restName = document.querySelector('#restName').value.trim();
    const ogAmt = document.querySelector('#ogAmt').value.trim();

    let tipChoiceId = "NULL";
    let tipAmt = 0;
    
    if (document.getElementById('tenPercent').checked) {
        
        tipChoiceId = 1;
        tipAmt = ((parseFloat(ogAmt)/100)*10).toFixed(2);
        
    } else if (document.getElementById('fifteenPercent').checked) {
        
        tipChoiceId = 2;
        tipAmt = ((parseFloat(ogAmt)/100)*15).toFixed(2);

    } else if (document.getElementById('twentyPercent').checked) {

        tipChoiceId = 3;
        tipAmt = ((parseFloat(ogAmt)/100)*20).toFixed(2);

    } else {
        tipAmt = 0;
    }

    const newAmt = (parseFloat(ogAmt) + parseFloat(tipAmt)).toFixed(2);

    const ogAmtParsed = parseFloat(ogAmt);
    const tipAmtParsed = parseFloat(tipAmt);
    const newAmtParsed = parseFloat(newAmt);


    console.log({
        restName,
        ogAmtParsed,
        tipChoiceId,
        tipAmtParsed,
        newAmtParsed
    });

   fetch('/api/receipts', {
        method: 'POST',
        body: ({restName, ogAmtParsed, tipChoiceId, tipAmtParsed, newAmtParsed}),
        headers: { 'Content-Type': 'application/json' },
      }).then(response => console.log(response)).catch(err => {
          console.log(err);
          res.status(400).json(err);
      })

    
}

const newReceiptSubmitBtn = document.getElementById('newReceiptButton');

newReceiptSubmitBtn.addEventListener('click', newReceiptFormHandler);