const numbers:Array<number> = [2,4,53,93,629,73,89,6,8,10];
const ood_numbers:Array<number> = [];
const even_numbers:Array<number> = [];

let ood:string = '';
let even:string = '';

for(let i:number=0;i<numbers.length;i++){
	if(numbers[i] % 2 == 0){
		ood_numbers.push(numbers[i]);
	}else{
		even_numbers.push(numbers[i]);
	}
}

for(let j:number=0;j<ood_numbers.length;j++){
	ood += ood_numbers[j].toString();
	if(j!=(ood_numbers.length-1)){
		for(let l:number = 0;l<1;l++){
			ood+=',';
		}
	}
}

for(let k:number=0;k<even_numbers.length;k++){
	even += even_numbers[k].toString();
	if(k!=(even_numbers.length-1)){
		for(let m:number = 0;m<1;m++){
			even+=',';
		}
	}
}

console.log(`ood numbers : ${ood}`);
console.log(`even numbers : ${even}`);
