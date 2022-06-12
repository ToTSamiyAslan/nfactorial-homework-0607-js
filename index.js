import{NAME, ADDRESS, prices, setPrice, available} from "./extra.js";
import promptSync from 'prompt-sync';
const prompt = promptSync();
setPrice();
console.log(`What do u want to buy ?\nWe have ${available.clothes}`);
let index = available.userInfo(prompt());
console.log((index == -1) ? "We haven't got such clothe" : `you have to pay ${prices[index]}`);
let a = index == -1;
if(!a){
available.clothes.splice(index, 1);
prices.splice(index, 1);
}
let restClothes = [];
for(let i = 0; i < available.clothes.length; i++){
    restClothes[i] = `${available.clothes[i]} - ${prices[i]}`;
}
console.log( `THE CLOSTHES AFTER BUYING:` );
let j = restClothes.length;
while(j >= 0){
    console.log(restClothes[Math.abs(j - restClothes.length)]);
    j--;
}
