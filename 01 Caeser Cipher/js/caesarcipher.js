function Cipher() {

  // Get values from user
  message = document.getElementById('message').value;
  key = document.getElementById('key').value;
  isEncrypt = document.getElementById('flexRadioDefault1').checked;
  
  // Create encrypted message variable that will be returned to user
  newMessage = "";

  // Loop through each character in message
  for (let i = 0; i < message.length; i++) {
    number = message[i].charCodeAt(0);

    // Ensure the current character is a valid ASCII character...
    if(number >= 0 & number <= 255){
      if(isEncrypt){
        number = parseInt(number) + parseInt(key)
      }else{
        number = parseInt(number) - parseInt(key)
      }

      // Ensure the new ciphered character is also a valid ASCII character
      if(number < 0){
        while(number < 0){
          number += 255;
        }
      }else if(number > 255){
        while(number > 255){
          number -= 255;
        }
      }
    }

    // Add character to the new value
    newMessage += String.fromCharCode(number)

    }
  // Return message
  document.getElementById('newMessage').value = newMessage;
}
