let id;
let pin;
let unum;
let amt;
alert("Welcome to Datalinks Finance & System Consulting Limited USSD Service\nPlease click Ok to continue")

bankDetails();


function bankDetails() {
   id = prompt("Please note that a #7 Network charge will be applied to your account for banking services on this channel\n 1. Accept\n 2. Cancel ");
   if (id == 1){
    bankInstruction();
   }
  }
function bankInstruction() {
    id = prompt("Please select your service option to continue:\n 1) Airtime Top-Up\n 2) Pay Bills\n 3) Transfer\n 4) Check Balance\n 5) Back")
        if (id == 1) {
            AirtimeTopUp();
        }
        else if (id == 2) {
            PayBills();
        }
        else if (id == 3) {
            trf();
        }
        
        else if (id == 4) {
            checkBal();
        }

        else if (id == 5) {
            bankDetails();
        }
}


//Airtime Top Up Option function
function AirtimeTopUp() {
    id = prompt("1. For Self\n2. For Others\n3. Back");
    if (id == 1){
        prompt("Please  Select Network Provider:\n 1). MTN\n 2). Airtel\n 3). Glo\n 4). etisalat\n 5). Back");
        if (id == 1) {
            mtnAirtime();
        }
        else if(id == 2) {
            airtelAirtime();
        }
        else if(id == 3) {
            gloAirtime();
        }
        else if(id == 4) {
            etisalatAirtime();
        }
    }
    if (id == 2) {
        prompt("Please  Select Network Provider:\n 1). MTN\n 2). Airtel\n 3). Glo\n 4). etisalat\n 5). Back");
        if (id == 1) {
            mtnAirtime();
        }
        else if(id == 2) {
            airtelAirtime();
        }
        else if(id == 3) {
            gloAirtime();
        }
        else if(id == 4) {
            etisalatAirtime();
        }
    }
    else if (id = 3 ) {
        bankInstruction();
    }
}

    
    //Service Provider
    function check(){
        pin = prompt("please enter your pin\nHint: 1111");
        if (pin == 1111){
                unum = parseInt(prompt("Please Enter Phone Number"));
                amt = prompt("Please Airtime Amount");
             successMessage();
            
            } else 
            {
                wrongMessage();
            }
        }

        function mtnAirtime() {
            check();
        }
        function airtelAirtime() {
            check();
        }
        function gloAirtime() {
            check();
        }
        function etisalatAirtime() {
            check();
}
    

//Paying Bills Option function
function PayBills() {
    id = prompt("Please select your service: \n1. Cable Subscription\n2. Electricity\n3. Back");
    if (id == 1){
        cableSubscription();
    }
    else if (id == 2){
        electricityBills();
    }
    else if (id == 3){
        bankInstruction();
    }
}


//Cable Subscription
function cableSubscription() {
        id = prompt("Please select your Cable Network:\n1. DsTv\n2. GoTv \n3. StarTimes\n4.Back");
        if (id == 1) {
            DsTvSubscription();
        }
        else if (id == 2) {
            GoTvSubscription();
        }
        else if (id == 3){
            starTimesSubscription();
        }
        else if (id == 4) {
            cableSubscription();
        }
}


//DsTv Subscription
function DsTvSubscription() {
    unum = prompt("Please Enter your DsTv IUC Number");
    id = prompt("Please Select Your Package\n1. DsTv Premium-#21000\n2. DsTv Compact plus-#14250\n3. DsTv Compact-#9000\n4. DsTv Confam-#5300\n5. DsTv Yanga-2950\n6. DsTv Padi-2150\n7. Back");
    if (id == 1) {
        packages();
    }
    else if (id == 2) {
        packages();
    }
    else if (id == 3) {
        packages();
    }
    else if (id == 4) {
        packages();
    }
    else if (id == 5) {
        packages();
    }
    else if (id == 6) {
        packages();
    }
    else if(id == 7) {
        bankInstruction();
    }
}

//GoTv Subscription
function GoTvSubscription() {
    unum = prompt("Please Enter your GoTv IUC Number");
    id = prompt("Please Select Your Package\n1. GoTv Supa-#5500\n2. GoTv Max-#3600\n3. GoTv Jolli-#2460\n4. GoTv Jinja-#1640\n5. Back\n6. GoTv Smallie-#800\n7. Back");
    if (id == 1) {
        packages();
    }
    else if (id == 2) {
        packages();
    }
    else if (id == 3) {
        packages();
    }
    else if (id == 4) {
        packages();
    }
    else if (id == 5) {
        packages();
    }
    else if (id == 6) {
        packages();
    }
    else if(id == 4) {
        DsTvSubscription();
    } 
}

//StarTimes Subscription
function starTimesSubscription() {
    unum = prompt("Please Enter your StarTimes IUC Number");
    id = prompt("Please Select Your StarTimesPackage\n1. Nova-#800\n2.Sport Plus-#1200\n3. Basic-1850\n4. Smart-#2600\n5. Classic-#2750\n6. Super-#4900\n7. Chinese-#7800\n8. Back");
    if (id == 1) {
        packages();
    }
    else if (id == 2) {
        packages();
    }
    else if (id == 3) {
        packages();
    }
    else if (id == 4) {
        packages();
    }
    else if (id == 5) {
        packages();
    }
    else if (id == 6) {
        packages();
    }
    else if (id == 7) {
        packages();
    }
    else if(id == 8){
        DsTvSubscription();
    } 
}

//Electricity Bills payment function
function electricityBills() {
        id = prompt("Please select your electricity provider:\n1. AEDC\n2. IKEDC \n3. PHED\n4. BEDC\n5. KEDCO\n6. kAEDCO\n7. Back")
    if (id == 1) {
        electBill();
    }
    else if (id == 2) {
        electBill();
    }
    else if (id == 3) {
        electBill();
    }
    else if (id == 4) {
        electBill();
    }
    else if (id == 5) {
        electBill();
    }
    else if (id == 6) {
        electBill();
    }
    else if (id == 7) {
        bankInstruction();
    }

}


//Package Response
function packages() {
    let pin = prompt("Please enter your pin\nHint: 1111");
    if (pin == 1111){
        successMessage();
    } else {
        wrongMessage();
        bankInstruction();
    }
}


//Electricity Bills subfunction
function electBill() {
    pin = prompt("please enter your pin\nHint: 1111");
    if (pin == 1111){
        unum = parseInt(prompt("Please Enter Bill Number"));
        amt = prompt("Please Enter Airtime Amount");
        successMessage();
            
    }   else {
                wrongMessage();
        }
}


//Transfer  function
function trf() {
    id = prompt("1. To DFSCl - DFSCL\n2. DFSCL - Other Banks\n3. Back");
    if (id == 1){
        confirm();
    }
    else if (id == 2){
        otherbank();
    }
    else if (id == 3){
        bankInstruction();
    }

}


//Transfer confirmation function
function confirm() {
        pin = prompt("Please enter your pin\nHint: 1111");
        if (pin == 1111){
            unum = parseInt(prompt("Please Enter Account Number"));
            amt = prompt("Please Enter Amount");
            alert(`The tranSfer of #${amt} to ${unum} was successful!`)
                
        }   else {
                    wrongMessage();
            }
}

//Other Bank confirmation function
function otherbank() {
    let id = prompt("please choose bank\n1.FirstBank\n2.UBA\n3.Union\n4.Zenith\n5.FCMB\n6.Fidelity\n7.KeyStone\n8.GTB\n9.Access\n10.Back");
    if (id == 1){
        confirm();
    }
    else if (id == 2) {
        confirm();
    }
    else if (id == 3) {
        confirm();
    }
    else if (id == 4) {
        confirm();
    }
    else if (id == 5) {
        confirm();
    }
    else if (id == 6) {
        confirm();
    }
    else if (id == 7) {
        confirm();
    }
    else if (id == 8) {
        confirm();
    }
    else if (id == 9) {
        confirm();
    }
    else if (id == 10) {
        trf();
    }
}

//Check balance function
function checkBal() {
    amt = 10000;
    pin = prompt("Please enter your pin\nHint: 1111");
    if (pin == 1111){
       id = prompt("You will be charged the service fee of #20:\n1. Accept\n2. Cancel");
        if(id == 1){
            alert(`Your account balance is: #${amt}`)
        }
    }   else {
                wrongMessage();
        }
}

//Success Message
function successMessage() {
    alert("Transaction successfull!");
}
//Wrong Message
function wrongMessage() {
    alert("Wrong pin");
}
