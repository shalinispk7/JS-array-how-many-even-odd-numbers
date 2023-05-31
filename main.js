
	
// Even numbers in array	and their sum
	let num=[1,2,3,4,5,6,7,8];
	sum=0;
	c=0;
	document.write("The value store in array are:");
document.write("<br>");
for (i=0;i<num.length;i++){
	document.write(num[i]+" ");
}
document.write("<br>");
document.write("<br>");
	document.write("Even numbers in the array are: ");
	for (i=0;i<num.length;i++){
		if(num[i]%2==0){
			document.write(num[i]+" ");
			sum=sum+num[i];
		}
		if(num[i]%2==0){
        c++
    }
	}
	document.write("<br>"+"Sum of the even numbers are: "+sum+"<br>");
	document.write("Number of even numbers in the array: "+c)
	
	document.write("<br>")
	document.write("<br>")
	// let arr=[3,5,7,9,8,5,4,4,7,8,8]
// let c=0;
// for(i=0;i<arr.length;i++){
    // if(arr[i]%2==0){
        // c++
    // }
// }
// console.log(c)


	// Odd numbers in array	and their sum
	let numb=[1,2,3,4,5,6,7,8];
	sum=0;
	// console.log(numb);
	document.write("Odd numbers in the array are: ");
	for (i=0;i<numb.length;i++){
		if(numb[i]%2!=0){
			document.write(numb[i]+" ");
			sum=sum+numb[i];
		}
	}
	document.write("<br>"+"Sum of the odd numbers are: "+sum);
	
	
	