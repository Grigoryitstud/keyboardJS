const keyboard = ['', '`', "1", '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', "'\'", 'DEL',
 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', '"', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', '^', 'Shift', 'Ctrl',
  'Win', 'Alt', ' ', 'Alt', 'Ctrl', '<', 'ˬ', '>'];
const keyboardShift = ['!', '@', '#', '$', '%', ':', '?', '*', '(', ')', '_', '+'],
KEYS = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79,
     80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 220, 90, 88, 67, 86, 66,
      78, 77, 190, 188, 191, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39];


function init() {
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        if(i === 0){
            out += '<div id="keyboard">' + 
            '<textarea type="text" class="placeToWatch" >'            
             + keyboard[i] + '</textarea>';
        } else
        if(i === 1){
            out += '<div class="keyBll" data = "' + KEYS[i-1] + '" >' +
            '<div class="keyShift" >' + '~' + '</div>'
             + keyboard[i]
             + '</div>'; 
        } else
        if((i > 1) && (i < 14)){
            out += '<div class="key" data = "' + KEYS[i-1] + '" >' +
            '<div class="keyShift" >' + keyboardShift[i - 2] + '</div>'
             + keyboard[i]
             + '</div>'; 
        } else
        if(i === 14){
            out += '<div class="keyBac" data = "' + KEYS[i-1] + '" >' + keyboard[i] + '</div>'; 
        }else
        if(i === 15){
            out += '<div class="keyBl" data = "' + KEYS[i-1] + '" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 28){
            out += '<div class="key" data = "' + KEYS[i-1] + '" >' +
            '<div class="keyShift" >' + '/' + '</div>'+ 
            '<div class="keyTransform" >' + '|' + '</div>'
             + '</div>'; 
        } else
        if(i === 29){
            out += '<div class="keyBl" data = "' + KEYS[i-1] + '" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 30){
            out += '<div class="keyCap" data = "' + KEYS[i-1] + '" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 42){
            out += '<div class="keyBac" data = "' + KEYS[i-1] + '" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 43){
            out += '<div class="keyCap" data = "' + KEYS[i-1] + '" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 44){
            out += '<div class="key" data = "' + KEYS[i-1] + '" >'
             + '<div class="keyTransform" >' + '|' + '</div>' + '</div>'; 
        } else
        if(i === 55){
            out += '<div class="keyBl" data = "' + KEYS[i-1] + '" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 56){
            out += '<div class="keyBl" data = "' + KEYS[i-1] + '" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 57){
            out += '<div class="keyBl" data = "' + KEYS[i-1] + '" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 58){
            out += '<div class="keyBl" data = "' + KEYS[i-1] + '" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 59){
            out += '<div class="keyBl" data = "' + KEYS[i-1] + '" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 60){
            out += '<div class="keyPr" data = "' + KEYS[i-1] + '" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 61){
            out += '<div class="keyBl" data = "' + KEYS[i-1] + '" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 62){
            out += '<div class="keyBl" data = "' + KEYS[i-1] + '" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 63){
            out += '<div class="keyBl" data = "' + KEYS[i-1] + '" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 64){
            out += '<div class="keyBl" data = "' + KEYS[i-1] + '" >' + keyboard[i] + '</div>'; 
        } else
        if(i === 65){
            out += '<div class="keyBl" data = "' + KEYS[i-1] + '" >' + keyboard[i] + '</div>' + '</div>'; 
        } else
        
        {out += '<div class="key" data = "' + KEYS[i-1] + '">' + keyboard[i] + '</div>';}
    }
    document.querySelector('body').innerHTML += out;
    // document.querySelector('#keyboard :nth-child(15)').classList.remove('keyTwo');
    // String.fromKeyCode(KEYS[i-1])

    document.addEventListener('keydown', (event) =>{        
        console.log(event)
        document.querySelector('[data = "' + event.keyCode + '"]').classList.add('active')
    })
    document.addEventListener('keyup', (event) =>{
        document.querySelector('[data = "' + event.keyCode + '"]').classList.remove('active')
    })

}
init()




