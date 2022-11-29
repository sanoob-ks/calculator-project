function btnClick(val){
    document.getElementById('input_screen').value=document.getElementById('input_screen').value+val
}
function clearScreen(){
    document.getElementById('input_screen').value=""
}
function equalClick(){
    var text=document.getElementById('input_screen').value
    var final_text=sample+value+text
    var result=eval(final_text)
    document.getElementById('input_screen').value=result

}
var value,sample
function operatorClick(val){
    value=val
    sample=document.getElementById('input_screen').value
    document.getElementById('input_screen').value=""
    



}