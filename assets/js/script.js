$(function () {
  // Display the current date in the header
  $('#currentDay').text(dayjs().format('MMM D, YYYY'));

  // Get the current hour in 24-hour format
  const currentHour = dayjs().hour();

  // Loop through the time blocks and apply classes based on the current hour
  const timeBlocks = document.querySelectorAll('.time-block');
  timeBlocks.forEach(function (timeBlock) {
    const blockId = parseInt(timeBlock.id.split('-')[1]); // Extract the hour from the ID

    if (currentHour === blockId) {
      timeBlock.classList.remove('past', 'future');
      timeBlock.classList.add('present');
    } else if (currentHour > blockId) {
      timeBlock.classList.remove('present', 'future');
      timeBlock.classList.add('past');
    } else {
      timeBlock.classList.remove('past', 'present');
      timeBlock.classList.add('future');
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  timeBlocks.forEach(function (timeBlock) {
    const blockId = timeBlock.id;
    const userInput = localStorage.getItem(blockId);

    if (userInput) {
      timeBlock.querySelector('.description').value = userInput;
    }
  });

  // Get all save buttons on the page
  const saveButtons = document.querySelectorAll('.saveBtn');

  // Add click event listeners to the save buttons
  saveButtons.forEach(function (saveButton) {
    saveButton.addEventListener('click', function () {
      // Get the parent time-block element
      const timeBlock = saveButton.parentElement;

      // Get the ID of the time-block
      const timeBlockId = timeBlock.id;

      // Get the user input from the input field within the time-block
      const userInput = timeBlock.querySelector('.description').value;

      // Save the user input in local storage using the time-block ID as the key
      localStorage.setItem(timeBlockId, userInput);
    });
  });
});
    


   
  
  
   
