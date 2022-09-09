
function errorMessage() {
    alert("Wrong pin!\nPlease try again");
}
var bank;
var network;
let amt;
let id;
let pin;
let acctNum;
let bin = 1111;
let num;
let bamt= 10000;
let damt;
bamt -= amt;
bamt += damt


welAtm();

//ATM welcome message
function welAtm() {
    alert(" Welcome to Datalinks Bank\n Please Insert your card and press Ok to continue")
           atmPin();
    }  
    

//ATM Pin function
function atmPin() {
        pin = prompt("Please enter your ATM pin\nhint: 1111");
    if (pin == bin) {
        accType();
    } else{
        errorMessage();
    }
}


//ATM account type
function accType() {
    id = prompt("Please select your account type\n1.Savings\n2.Current");
    if (id == 1) {
        atmOptFunc();
    }
    else if (id ==2) {
        atmOptFunc();
    }
    else if (id == 3) {
        atmPin();
    }
}


//ATM options function
function atmOptFunc() {
    id = prompt("Please Choose transaction\n1.Withdrawal\n2.Transfer\n3.Deposit\n4.Balance Inquiry\n5.Quickteller\n6.Back");
    if (id == 1) {
        withDraw();
    }
    else if (id ==2) {
        trf();
    }
    else if (id == 3) {
       depos();
    }
    else if (id == 4) {
        balEnquiry();
    }
    else if (id == 5) {
        quicktell();
    }
    else if (id == 6){
    accType();
    }
}


//Withdrawal options function
function withDraw() {
        id = prompt("Please select amount option\n1.1000\n2.5000\n3.10000\n4.15000\n5.20000\n6.40000\n7.Others\n8.Back");
    if (id == 1) {
        amt = 1000;
        withDrawOpt()
    }
    else if (id == 2) {
        amt = 5000;
        withDrawOpt();

    }
    else if (id == 3) {
        amt = 10000;
        withDrawOpt();

    }
    else if (id == 4) {
        amt = 15000;
        withDrawOpt();

    }
    else if (id == 5) {
        amt = 20000;
        withDrawOpt();

    }
    else if (id == 6) {
        amt = 40000;
        withDrawOpt();

    }
    else if (id == 7) {
        othersWithFunc();

    }
    else if (id == 8) {
        atmFunc();

    }
    else {
        accType();
    }
}


//Successful withdrawal message 
function withDrawOpt() {
    
        if (amt <= bamt) {
            alert("Please take your cash");
        }
        else {
            alert('Insufficient fund');
            atmPin();
        }
    }
    
//Others withdrawal function
function othersWithFunc() {
    id = prompt("please enter amount");
    withDrawOpt()
}


//Transfer  function
function trf() {
    id = prompt("1. Datalinks - Datalinks\n2. Datalinks - Other Banks\n3. Back");
    if (id == 1) {
        bank= "Datalinks"
        confirm();
    }
    else if (id == 2) {
        otherbank();
    }
    else if (id == 3){
        atmOptFunc();
    }
}


// bal amount checker
// function balcheck {
//     if (amt >= bamt) {

//     }
//     else {
//         alert('Insufficient fund')
//     }
// }



//Transfer confirmation function
function confirm() {
        id = prompt("Please select beneficiary account type:\n1.Savings\n2.Current");
        if (id == 1) {
            acctNum = parseInt(prompt("Please Enter Account Number"));
            amt = prompt("Please Enter Amount");
            if (amt <= bamt) {
                alert(`The transfer of #${amt} to ${bank} with acct No: ${acctNum} was successful!`);
            }
            else {
                alert('Insufficient fund')
            }
            
                
        }   
        else if (id == 2) {
            acctNum = parseInt(prompt("Please Enter Account Number"));
            amt = prompt("Please Enter Amount");
            if (amt <= bamt) {
                    alert(`The transfer of #${amt} to ${bank} with acct No: ${acctNum} was successful!`);
            }
            else {
                alert('Insufficient fund')
            }
           
        }
}


//Other bank transfer confirmation function
function otherbank() {
    id = prompt("Please Choose beneficiary bank Alphabeth category:\n1. A - F\n2. G - Q\n3. R - Z\n4.Back");
    if (id == 1) {
        A_Ffunction ()
    }
    else if (id == 2) {
        G_Qfunction();
    }
    else if (id == 3) {
        R_Zfunction();
    }
    else if (id == 4) {
        trf();
    }
}
    //A - F function
    function A_Ffunction () {
        id = prompt("Please Choose beneficiary bank: \n1.Access Bank\n2.EcoBank\n3.FCMB\n4.Fidelity Bank\n5.First Bank\n6.Back");
        if (id == 1) {
            bank = "Access Bank"
            confirm();
        }
        else if (id == 2) {
            bank = "EcoBank";
            confirm();
        }
        else if (id == 3) {
            bank = "FCMB";
            confirm();
        }
        else if (id == 4) {
            bank = "Fidelity";
            confirm();
        }
        else if (id == 5) {
            confirm();
            bank = "FirstBank";
        }
        else if (id == 6) {
            otherbank();
        }
    }


    //G - Q function
    function G_Qfunction () {
        id = prompt("Please Choose beneficiary bank: \n1.GTB\n2.Jaiz Bank\n3.Keystone Bank\n4.Back");
        if (id == 1) {
            bank = "GTB"
            confirm();
        }
        else if (id == 2) {
            bank = "Jaiz Bank";
            confirm();
        }
        else if (id == 3) {
            bank = "Keystone Bank";
            confirm();
        }
        else if (id == 4) {
            otherbank();
    }
    }
    
    //R - Z function
    function R_Zfunction () {
        id = prompt("Please Choose beneficiary bank: \n1.Stanbic IBTC Bank\n2.UBA\n3.Union Bank\n4.Unity Bank\n5.Zenith bank\n6.Back");
        if (id == 1) {
            bank = "Stanbic IBTC Bank"
            confirm();
        }
        else if (id == 2) {
            bank = "UBA";
            confirm();
        }
        else if (id == 3) {
            bank = "Union Bank";
            confirm();
        }
        else if (id == 4) {
            bank = "Unity Bank";
            confirm();
        }
        else if (id == 5) {
            bank = "Zenith Bank";
            confirm();
        }
        else if (id == 6) {
            otherbank();
        }
    }

        
//Paying Bills Option function
function PayBills() {
    id = prompt("Please select your service: \n1. Cable Subscription\n2. Electricity\n3. Back");
    if (id = 1) {
        cableSubscription();
    }
    else if (id = 2) {
        electricityBills();
    }
    else if (id == 3) {
        atmOptFunc();;
    }
}


//Cable Subscription
function cableSubscription() {
        id = prompt("Please select your Cable Network:\n1. DsTv\n2. GoTv \n3. StarTimes\n4.Back");
        if (id = 1) {
            DsTvSubscription();
        }
        else if (id == 2) {
            GoTvSubscription();
        }
        else if (id == 3) {
            starTimesSubscription();
        }
        else if (id == 4) {
            PayBills();
        }
}


//DsTv Subscription
function DsTvSubscription() {
    num = prompt("Please Enter your DsTv IUC Number");
    id = prompt("Please Select Your Package\n1. DsTv Premium-#21000\n2. DsTv Compact plus-#14250\n3. DsTv Compact-#9000\n4. DsTv Confam-#5300\n5. DsTv Yanga-2950\n6. DsTv Padi-2150\n7. Back");
    if (id == 1) {
        amt = 21000;
        packages();
    }
    else if (id == 2) {
        amt = 14250;
        packages();
    }
    else if (id == 3) {
        amt = 9000;
        packages();
    }
    else if (id == 4) {
        amt = 5300;
        packages();
    }
    else if (id == 5) {
        amt = 2950;
        packages();
    }
    else if (id == 6) {
        amt = 2150;
        packages();
    }
    else if(id == 7) {
        PayBills();
    }
}


//GoTv Subscription
function GoTvSubscription() {
    num = prompt("Please Enter your GoTv IUC Number");
    id = prompt("Please Select Your Package\n1. GoTv Supa-#5500\n2. GoTv Max-#3600\n3. GoTv Jolli-#2460\n4. GoTv Jinja-#1640\n5. Back\n6. GoTv Smallie-#800\n7. Back");
    if (id == 1) {
        packages();
    }
    else if (id == 2) {
        packages();
    }
    else if (id === 3) {
        packages();
    }
    else if (id === 4) {
        packages();
    }
    else if (id === 5) {
        packages();
    }
    else if (id === 6) {
        packages();
    }
    else if(id == 4) {
        DsTvSubscription();
    } 
}


//StarTimes Subscription
function starTimesSubscription() {
    num = prompt("Please Enter your StarTimes IUC Number");
    id = prompt("Please Select Your StarTimesPackage\n1. Nova-#800\n2.Sport Plus-#1200\n3. Basic-1850\n4. Smart-#2600\n5. Classic-#2750\n6. Super-#4900\n7. Chinese-#7800\n8. Back");
    if (id == 1) {
        packages();
    }
    else if (id == 2) {
        packages();
    }
    else if (id === 3) {
        packages();
    }
    else if (id === 4) {
        packages();
    }
    else if (id === 5) {
        packages();
    }
    else if (id === 6) {
        packages();
    }
    else if (id === 7) {
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
    if (amt <= bamt) {
        alert(`You have paid for your cable subscription with IUC Number: ${num}`);
            alert("Transaction Successful"); 
    }
    else {
        alert('Insufficient fund');
        atmPin();
    }
}



//Electricity Bills subfunction
function electBill() {
        num = parseInt(prompt("Please Enter Bill Number"));
        amt = parseInt(prompt("Please Enter Amount"));

        if (amt >= bamt) {
            alert(`You have paid ${amt} for ${num} bill account`);
            alert("Transaction Successful"); 
        }
        else {
            alert('Insufficient fund');
            electricityBills();
        }       
    } 





//Quickteller Options function
function quicktell() {
    id = prompt("Please select your service:\n1. Airtime\n2. PayBills\n3. Pay Merchant\n4. Back");
    if (id == 1) {
        AirtimeTopUp();
    }
    else if (id == 2) {
        PayBills();
    }
    else if (id == 3) {
        payMerch();
    }
    else if (id == 4) {
        atmOptFunc();
    }
}


function check() {
    num = prompt("Please Enter Phone Number");
    amt = prompt("Please Airtime Amount");

    if (amt <= bamt) {
        alert(`Please confirm the recharge of #${amt} to ${network} ${num}`);
        alert(`The ${network} recharge of #${amt} to ${num} was successful!`);
    }
    else {
        alert('Insufficient fund');
        atmPin();
    }

    
}

//Airtime Top Up Option function
function AirtimeTopUp() {
        id = prompt("Please  Select Network Provider:\n 1. MTN\n 2. Airtel\n 3. Glo\n 4. Etisalat\n 5. Back");
        if (id == 1) {
            mtnAirtime();
        }
        else if (id == 2) {
          airtelAirtime();
        }
        else if (id == 3) {
            gloAirtime();
        }
        else if (id == 4) {
          etisalatAirtime();
        }
        else if (id == 5) {
            quicktell();
        }
    }
    
    
//Service Providers and confirm transaction   
function mtnAirtime() {
    network = "MTN";
    check();
}
function airtelAirtime() {
    network = "Airtel";
    check();
   }
function gloAirtime() {
    network = "Glo";
    check();
    }
function etisalatAirtime() {
    network = "Etisalat";
    check();
   }




function payMerch() {
    id = prompt("Please  Select Merchant Service:\n 1). Pay Remita\n 2). Pay Bet9ja\n 3). Back");
    if (id == 1) {
        network = "Remita";
        quikpro();
    }
    else if (id == 2) {
        network = "Bet9ja";
        quikpro();
    }
    else if (id == 3) {
        quicktell();
    }
}


//Quickerteller input parameters function;
function quikpro() {
    num = prompt("Please enter your user ID");
    amt = prompt("Please enter amount");
    id =  prompt("You will be charged a service fee of #100.\nAre you sure you want to continue\n1. Yes\n2. No")
    if (id == 1) {

        
        if (amt <= bamt) {
            alert(`You have transfered ${amt} to your ${network} account with user ID ${num}`);
            alert("Transaction Successful!");
        }
        else {
            alert('Insufficient fund');
            atmPin();
        }


         
    }
    else if (id == 2) {
        quicktell();

    }
    
}


//Deposit option function
function depos() {
        id = prompt("1. Savings\n2. Current");
    if (id == 1) {
        acctNum = prompt("Please enter Account number");
        damt = prompt("Please enter amount");
        alert(`Please confirm your transaction of ${damt} to ${acctNum}`);
        id =  prompt("Are you sure you want to continue\n1. Yes\n2. No");
        if (id == 1) {
            alert("Transaction successful");
        }
        else {
            quicktell();
        }
    }
    else if(id == 2) {
        id = prompt("1. Savings\n2. Current");
        if (id == 1) {
            acctNum = prompt("Please enter Account number");
            damt = prompt("Please enter amount");
            alert(`Please confirm your transaction of ${amt} to ${acctNum}`);
            id =  prompt("Are you sure you want to continue\n1. Yes\n2. No");
            if (id == 1) {
                alert("Transaction successful");
            }
            else {
                quicktell();
            }
        }
    }
}

//Balance Enquiry function
function balEnquiry() {
        alert(`Your account balance is: #${bamt}`); 
}