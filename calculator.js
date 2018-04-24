
var which_calculator = prompt("Which calculator would you like to use? Type B for basic or A for advanced. Type goodbye to exit the app.");
while (which_calculator !=="goodbye"){

    if (which_calculator == "B"){
      var value1 = parseInt(prompt('enter first value'));
      alert(value1);
      var value2 = parseInt(prompt('enter the second value'));
      alert(value2);
      var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (%)modulus');
    }
    if (choice == "a"){
      alert(value1 + value2);
    }
    else if (choice == "s"){
      alert(value1 - value2);
    }
    else if (choice == "m"){
      alert(value1 * value2);
    }
    else if (choice == "d"){
      alert(value1 / value2);
    }
    else if (choice == "%"){
      alert(value1 % value2);
    }

    if (which_calculator == "A"){
      var value1 = parseInt(prompt('enter first value'));
      alert(value1);
      var choice = prompt('Choose your action (p)ower  (sq)uare root');
    }
    if (choice == "p"){
      var exponent = parseInt(prompt('enter the exponent'));
      alert(exponent);
      alert(Math.pow (value1, exponent));
    }
    else if (choice == "sq"){
      alert(Math.sqrt(value1));
    }


  which_calculator = prompt("Which calculator would you like to use? Type B for basic or A for advanced. Type goodbye to exit the app.");
} //END OF MASSIVE LOOP
