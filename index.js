$(document).ready(function() {
    var count = 0;
  
    // Add click event to the cards
    $('.card').on('click', function() {
  
      // Check if the user has already selected three artists
      if (count >= 3) {
        alert('You can only select up to three artists!');
        return;
      }
  
      // Increment the count
      count++;
  
      // Get the artist image source from the background image CSS property
      var backgroundImg = $(this).css('background-image');
      var imgSrc = backgroundImg.replace('url("', '').replace('")', '');
  
      // Create a new img element
      var img = $('<img>').attr('src', imgSrc).addClass('fade-in');
  
      // Append the img element to the available divs
      if ($('.selected-one').is(':empty')) {
        $('.selected-one').append(img);
      } else if ($('.selected-two').is(':empty')) {
        $('.selected-two').append(img);
      } else if ($('.selected-three').is(':empty')) {
        $('.selected-three').append(img);
      }
  
      // Disable the clicked card
      $(this).addClass('disabled');
  
      // Check if the user has selected three artists
      if (count === 3) {
        // Disable all the remaining cards
        $('.card:not(.disabled)').addClass('disabled');
      }
    });
  });
  // Wait for the page to load
  window.addEventListener('load', function () {
    // Find the link element by its ID
    const link = document.getElementById('submit-link');
  
    // Add a click event listener to the link
    link.addEventListener('click', function (event) {
      // Prevent the default link behavior
      event.preventDefault();
  
      // Add a smooth transition effect
      document.body.classList.add('smooth-transition');
  
      // Wait for a short delay before navigating to the new page
      setTimeout(function () {
        window.location.href = link.href;
      }, 500); // Adjust the delay time as needed
    });
  });  