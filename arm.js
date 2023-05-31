function arm() {
    let full_name = document.getElementById("full_name").value;
    document.getElementById("full_name_out").innerText = full_name;
    let count1 = parseFloat(document.getElementById("count").value);
    let price1 = parseFloat(document.getElementById("price1").value);
    let price2 = parseFloat(document.getElementById("price2").value);
    let price3 = parseFloat(document.getElementById("price3").value);
    let price_middle = (price1 + price2 + price3) / 3;
    let full_result = price_middle * count1;
    document.getElementById("price_middle").innerText = "Средняя цена по коммерческим предложениям: " + price_middle.toFixed(2) + " рублей";  
    document.getElementById("finish").innerText = "Общая сумма по расчету: " + full_result.toFixed(2) + " рублей";       
}

function out() {

}