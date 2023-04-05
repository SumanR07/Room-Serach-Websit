function Show(){
    var qua,rate,total;

    qua = Number(document.getElementById('qua').value);
    rate = Number(document.getElementById('rate').value);
    total = qua * rate;
    document.getElementById('total').value = total;
}