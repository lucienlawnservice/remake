/*!
* Start Bootstrap - Business Casual v7.0.8 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/


//Custom Scroll to top JavaScript function
$(function(){
    //Function To Add Class
    function showBackToTop(){
    $('#back-to-top').addClass('show-btt');
    }

    //Function To Add Class
    function hideBackToTop(){
    $('#back-to-top').removeClass('show-btt');
    }

    //Check Scroll and Add Class
    function checkScrollPos(){
    if ($(this).scrollTop() >= 700) { //if scroll position is lower than 700px from the top of the screen
        showBackToTop();
    } else {
        hideBackToTop()
    }
    }
    
    // Scroll to the top when the button is clicked
    $('#back-to-top').click(function(){$(window).scrollTop(0)});

    // tell the browser to run the "checkScrollPos()" function just above when the user scrolls
    $(window).on('scroll', function(){ 
    checkScrollPos();
    });
    //Check the scroll position once when the page loads
    checkScrollPos();
})

// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})