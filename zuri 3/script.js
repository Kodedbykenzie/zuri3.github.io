const myScreenOutput = document.getElementById('info');
const myInfo = {
    myFirstName: 'Precious',
    myMiddleName: 'Chibundu',
    myLasttName: 'Mozia',
    myHeight: 5.3,
    myCountry: 'Nigeria',
}

myScreenOutput.innerHTML = '<h2>' + 'First Name: ' + myInfo.myFirstName + '<br> ' + 'Middle Name: ' + myInfo.myMiddleName + ' <br>' + ' Last Name: ' + myInfo.myLasttName + '<br> ' + 'Height: ' + myInfo.myHeight + '<br> ' + 'Country: ' + myInfo.myCountry + '</h2>';


console.log(myInfo);