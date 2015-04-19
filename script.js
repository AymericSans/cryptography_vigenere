// ----- Vignère cipher -----

// [√]-- Function convert
// [√]-- Function Alter
// [√]-- ToggleKey
// [ ]-- Alert if they are not string element


// Cryptologie function convertKey

var toggleCrypt = document.querySelector('.crypte');
    

if (toggleCrypt.innerHTML == "Décrypter")
{
    $('#key').change(function() {
        console.log('it works');
    });
}

function convertKey (str, currentkey) {

    var o_text = str.replace(/\s/g, ""),

         o_letters = o_text.split(""), //variable selectig each character in the open text and putting it in an array
         c_text = currentkey,
         c_letters = c_text.split(""),
         c_text = "",
         alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

         for (var i = 0; i < o_letters.length; i++) {

            function getNum () {
               var  o = o_letters[i],
                    mod_o = alphabet.indexOf(o) + 1,                    
                    c = c_letters[i % currentkey.length], // probleme with i when supp to currentkey
                    mod_c = alphabet.indexOf(c) + 1,
                    num = mod_o + mod_c,
                    numModM = num % alphabet.length,
                    modM = alphabet[numModM - 1];

                     // console.log(o);
                     // console.log(mod_o);
                     // console.log(c);
                     // console.log(mod_c);
                     // console.log(num);
                     // console.log(numModM);
                     // console.log(modM);



                return modM;

            };
            
            c_text = c_text + getNum();

            
         }

         return c_text;
};

// Cryptologie function alterKEY

function alterKey (str, currentkey) {

    var o_text = str, 
         o_letters = o_text.split(""), //variable selectig each character in the open text and putting it in an array
         c_text = currentkey,
         c_letters = c_text.split(""),
         c_text = "",
         alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

         for (var i = 0; i < o_letters.length; i++) {

            function getNum () {
               var  o = o_letters[i],
                    mod_o = alphabet.indexOf(o) + 1,                    
                    c = c_letters[i % currentkey.length], // probleme with i when supp to currentkey
                    mod_c = alphabet.indexOf(c) + 1,
                    num = mod_o - mod_c,
                    numModM = (num + alphabet.length)% alphabet.length,
                    modM = alphabet[numModM - 1];

                     // console.log(o);
                     // console.log(mod_o);
                     // console.log(c);
                     // console.log(mod_c);
                     // console.log(num);
                     // console.log(numModM);
                     // console.log(modM);



                return modM;

            };
            
            c_text = c_text + getNum();

            
         }

         return c_text;
};


//Toggle event handler

toggleCrypt.onclick = function() {
    if (toggleCrypt.innerHTML == "Crypter") {


        var toggleTextArea = document.getElementById('overlay1'),
            toggleKey = document.getElementById('key');

        var innerTextArea = toggleTextArea.value,
            //innerKey = parseInt(toggleKey.value);
            innerKey = toggleKey.value;


        toggleCrypt.innerHTML = "Décrypter";
        document.getElementById('overlay1').value = '';
        document.getElementById('overlay1').value = convertKey(innerTextArea.toLowerCase(), innerKey);
    }
    else {
         var toggleTextArea = document.getElementById('overlay1'),
            toggleKey = document.getElementById('key');

        var innerTextArea = toggleTextArea.value,
            //innerKey = parseInt(toggleKey.value);
            innerKey = toggleKey.value;

        toggleCrypt.innerHTML = "Crypter";
        document.getElementById('overlay1').value = '';
        document.getElementById('overlay1').value = alterKey(innerTextArea.toLowerCase(), innerKey);
        
    }
};








