//const Base_Url=" https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdown= document.querySelectorAll(".Droupdown select");
const btn= document.querySelector("form button");
const fromCurr= document.querySelector(".Form");
const toCurr= document.querySelector(".To");



for(let select of dropdown){
      for(code in countryList){
        let newOption = document.createElement("option");
        newOption.innerText=code;
        newOption.value= code;
        select.append(newOption);
      }
      select.addEventListener("change",(evt)=>{
                updateFLag(evt.target); // Give the name what we select
      });
}

const updateFLag=(element)=>{
     let currCode= element.value;
     let countryCode= countryList[currCode];
     let newSrc= `https://flagsapi.com/${countryCode}/flat/64.png`;
     let img= element.parentElement.querySelector("img");
     img.src=newSrc;

}

btn.addEventListener("click" , async (evt)=>{
    evt.preventDefault(); // page does not blink it constant when click
    let amount= document.querySelector(".amount input")
    let amountValue=amount.value;
    if(amountValue=="" || amountValue<1){
        amountValue=1;
        amount.value=1;
    }
      // const url=`1 ${fromCurr.value.toLowerCase} = ${amountValue} ${toCurr.value.toLowerCase}`; 
      let from = fromCurr.value.toLowerCase();
const Base_Url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;

       let response= await fetch(Base_Url);
       let data = await response.json();
       console.log(data);
}); 