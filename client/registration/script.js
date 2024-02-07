document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('signup-form');
    
    form.addEventListener('submit', function(event) {
      
      event.preventDefault();
      
      // Validation code here
      if (form.checkValidity() === false) {
        alert('Please fill out all required fields.');
        form.reportValidity();
      } else {
        // If form is valid, you can proceed to submit it to your server
        alert('Form is complete and valid, ready to be submitted!');
        //  use AJAX to submit the form data
      }
    });
  });
  