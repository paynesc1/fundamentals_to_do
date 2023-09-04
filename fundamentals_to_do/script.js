
// function my_switch(){
//     var myNumber = 42;
//     var myName = "Spencer";
//     var myHolder = 0;
//     myHolder = myNumber;
//     myNumber = myName;
//     console.log(myNumber);
//     myName = myHolder;
//     console.log(myName);
// }
// my_switch();

//Print integers from -52 to 1066 using a FOR loop.
//for (var i =-51; i<1067; i++){
//    console.log(i)
//}

//Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
// function beCheerful(num) {
//     while (num > 0){
//         console.log("Good Morning")
//         num-=1
//     }
// }
// beCheerful(98)

//Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
// function print_three(){
//     for(var i = -300; i<0; i++) {
//         if(i==-3 || i==-6) {
//             continue;
//         }
//         if (i%3 ==0){
//             console.log(i);
//         }
//     }
// }
// print_three();

//Print integers from 2000 to 5280, using a WHILE.
// function print_int() {
//     num1 = 5280;
//     num2 = 2000;
//     while(num2 < num1+1) {
//         console.log(num2);
//         num2 += 1;
//     }
// }

// print_int()

//If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 


//Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.
// function leap_year(year) {
//     if (year % 100 == 0)
//     {
//         if (year % 400 ==0)
//         {
//             console.log(year,"is a leap year!");
//         }
//         else
//         {
//             console.log(year, "is not a leap year!");
//         }
//     }
//     else if (year % 4 ==0) {
//         console.log(year, "is a leap year!")
//     }
//     else
//     {
//         console.log(year, "is not a leap year!")
//     }
// }
// leap_year(1900)

//Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
// function multiples() {
//     var count = 0;
//     for(var i = 512; i <4096; i++)
//     {
//         if(i%5==0)
//         {
//             console.log(i)
//         }
//         count+=1
//     }
//     console.log("Count:", count)
// }
// multiples()

//Print multiples of 6 up to 60,000, using a WHILE.
// function multiples_six() {
//     var num=6;
//     var count=0;
//     while (num<60000)
//     {
//         if(num%6==0)
//         {
//             console.log(num);
//         }
//         num = num+1
//     }
// }

// multiples_six()

//Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
// function one_hundred() {
//     for(var i = 1;i<101; i++)
//     {
//         if(i%5 == 0)
//         {
//             console.log("Coding")
//         }
//         if(i%10==0)
//         {
//             console.log(" Dojo")
//         }
//     }
// }

// one_hundred()
