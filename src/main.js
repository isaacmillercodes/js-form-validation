$(document).ready(function() {

  console.log('sanity check!');



  $('form').on('submit', function(event) {
    event.preventDefault();

    var firstName = $('#first-name').val();

    var lastName = $('#last-name').val()

    validateFirst(firstName);

    validateLast(lastName);


  });

});

function hideCallout() {
    $('.valid-callout').css('visibility', 'hidden');
}

function showCallout(msg) {
  $('.valid-callout > h2').append('<h2>'+msg+'</h2>');
  $('.valid-callout').css('visibility', 'visible');
  setTimeout(hideCallout, 4000);
}

function validateFirst(name) {

  var numValidLetters = 3;
  if (name.length < numValidLetters) {
    showCallout('Get a longer first name, buddy')
  }
  if (name[0] !== name[0].toUpperCase()) {
    showCallout('First names should be capitalized, dude.')
  }

};

function validateLast(name) {

  var lastValidLetters = 5;
  if (name.length < lastValidLetters) {
    showCallout('Your last name is too short, bruh.')
  }
  if (name[0] !== name[0].toUpperCase()) {
    showCallout('Cool last name, but you best capitalize the first letter.')
  }

};

// validate email:
    //     * must have an @
    //     * the last . can't come right after the @
    //     * must have at least one letter in front of the @
