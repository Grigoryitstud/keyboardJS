const keyboard = ['', '`', "1", '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', "'\'", 'DEL',
 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', '"', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', '^', 'Shift', 'Ctrl',
  'Win', 'Alt', ' ', 'Alt', 'Ctrl', '<', '^', '>'];
const keyboardShift = ['!', '@', '#', '$', '%', ':', '?', '*', '(', ')', '_', '+']

function init() {
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        if(i === 0){
            out += '<div id="keyboard">' + 
            '<textarea type="text" class="placeToWatch" >'            
             + keyboard[i] + '</textarea>';
        } else
        if(i === 1){
            out += '<div class="keyBll" >' +
            '<div class="keyShift" >' + '~' + '</div>'
             + keyboard[i]
             + '</div>'; 
        } else
        if((i > 1) && (i < 14)){
            out += '<div class="key" >' +
            '<div class="keyShift" >' + keyboardShift[i - 2] + '</div>'
             + keyboard[i]
             + '</div>'; 
        } else
        if(i === 14){
            out += '<div class="keyBac" >' + keyboard[i] + '</div>'; 
        }else
        if(i === 15){
            out += '<div class="keyBl" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 28){
            out += '<div class="key" >' +
            '<div class="keyShift" >' + '/' + '</div>'+ 
            '<div class="keyTransform" >' + '|' + '</div>'
             + '</div>'; 
        } else
        if(i === 29){
            out += '<div class="keyBl" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 30){
            out += '<div class="keyCap" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 42){
            out += '<div class="keyBac" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 43){
            out += '<div class="keyCap" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 44){
            out += '<div class="key" >'
             + '<div class="keyTransform" >' + '|' + '</div>' + '</div>'; 
        } else
        if(i === 55){
            out += '<div class="keyBl" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 56){
            out += '<div class="keyBl" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 57){
            out += '<div class="keyBl" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 58){
            out += '<div class="keyBl" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 59){
            out += '<div class="keyBl" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 60){
            out += '<div class="keyPr" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 61){
            out += '<div class="keyBl" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 62){
            out += '<div class="keyBl" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 63){
            out += '<div class="keyBl" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 64){
            out += '<div class="keyBl" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 65){
            out += '<div class="keyBl" >' + keyboard[i] + '</div>' + '</div>'; 
        } else
        
        {out += '<div class="key" >' + keyboard[i] + '</div>';}
    }
    document.querySelector('body').innerHTML += out;
    console.log(out)
    // document.querySelector('#keyboard :nth-child(15)').classList.remove('keyTwo');
}
init()


