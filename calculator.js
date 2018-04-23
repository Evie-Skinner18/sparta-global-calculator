var which_calculator = prompt("Which calculator would you like to use? Type B for basic or A for advanced. Type goodbye to exit the app.");
if (which_calculator == "B"){
  // get the user inputs
  var value1 = prompt('enter first value');
  console.log(value1);
  var value2 = prompt('enter the second value');
  console.log(value2);
  var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (%)modulus');
  console.log(choice);
}
if (choice == "a"){
  console.log(value1 + value2);
}
else if (choice == "s"){
  console.log(value1 - value2);
}
else if (choice == "m"){
  console.log(value1 * value2);
}
else if (choice == "d"){
  console.log(value1 / value2);
}
else if (choice == "%"){
  console.log(value1 % value2);
}

if (which_calculator == "A"){
  var value1 = prompt('enter first value');
  console.log(value1);
  var choice = prompt('Choose your action (p)ower  (sq)uare root');
  console.log(choice);
}
if (choice == "p"){
  var exponent = prompt('enter the exponent');
  console.log(exponent);
  console.log(Math.pow (value1, exponent));
}
else if (choice == "sq"){
  console.log(Math.sqrt(value1));
}


do {
  which_calculator = prompt("Which calculator would you like to use? Type B for basic or A for advanced. Type goodbye to exit the app.");
}
while(which_calculator != "goodbye");
