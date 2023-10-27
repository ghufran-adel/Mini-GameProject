// function validateForm() 
// {
//     // Make this default to not refresh page
//     event.preventDefault();

//     // Get user info
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;
//     var reason = document.getElementById('reason').value;

//     // Accept alphabetic characters only
//     var alphabetic = /^[a-zA-Z\s]+$/;

//     // valid email address
//     var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//     // Check if name and email are valid
//     if (!name.match(alphabetic)) 
//     {
//         alert('Please enter a valid name containing alphabetic characters only.');
//         return false;
//     }
//     if (!email.match(emailPattern)) 
//     {
//         alert('Please enter a valid email address.');
//         return false;
//     }

//     // Hide the form
//     document.getElementById('contact-form').style.display = 'none';

//     // Display thank you message
//     var thankYouMessage = document.getElementById('thankYouID');
//     thankYouMessage.innerHTML = 'Thank you, ' + name + '!<br> Your <b>' + reason + '</b> has been received.';
//     thankYouMessage.style.display = 'inline';
//     thankYouMessage.style.alignContent = 'center';
   
//     return true;
// }

function validateForm() 
{
    // Make this default to not refresh page. It makes the thank you message disappear if not here.
    event.preventDefault();

    // Prevent the default form submission behavior

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var reason = document.getElementById('reason').value;

    var alphabetic = /^[a-zA-Z\s]+$/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!name.match(alphabetic)) {
        alert('Please enter a valid name containing alphabetic characters only.');
        return false;
    }

    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Hide the form
    document.getElementById('contact-form').style.display = 'none';

    // Display thank you message
    var thankYouMessage = document.getElementById('thankYouID');
    thankYouMessage.innerHTML = 'Thank you, ' + name + '!<br> Your <b>' + reason + '</b> has been received.';
    thankYouMessage.style.display = 'block';
    thankYouMessage.style.textAlign = 'center';

    return true; // Prevent the form from submitting
}
