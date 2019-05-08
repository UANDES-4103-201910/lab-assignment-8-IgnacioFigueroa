// Note: $(() => {}); is equivalent to $(document).ready(function(){})
class KeyboardController{
    constructor(inputId){
        this.inputId = inputId;
        this.target = document.getElementById(inputId)
    }

    write(key){
        console.log(key.textContent);
        if (key.textContent.includes("Enter")){
            this.target.append("<br>");
        }
        else if(key.textContent.includes("Bksp")){
            var thisText2 = this.target.text();
            var newText2 = thisText2.substr(0,thisText2.length-1*3);
            this.target.text(newText2);
        }
        else {
            this.target.append(key.textContent.replace(/ /g,''));
        }
    }
}


$(() => {
    var keyboardController = new KeyboardController(document.getElementById("keyboard-input").id);
    $(".key").click(function (e) {
        keyboardController.write(this);
    });
    $("#toggler").click(function(e){
        $(".keyboard_row").toggle();
    })
});