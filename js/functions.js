'use strict'

//Función de click en la foto

var cv_photo = document.querySelector('#cv_photo');
var back = document.querySelector('.back__button');
var little = document.querySelector('#little_description');
cv_photo.addEventListener('click',

    function change_photo() 
        {
            var more_about = document.querySelector('#more_about');

            let elementStyle = window.getComputedStyle(more_about);
            let elementDisplay = elementStyle.getPropertyValue('display');

        if(elementDisplay == "none")
        {
            cv_photo.classList.add('animated_avatar');
            little.classList.add('animated_avatar');
                setTimeout( 
                    function(){
                        more_about.style.display = "flex";
                        back.style.display = "block";
                        cv_photo.style.display = "none";
                        little.style.display = "none";
                    }, 2000)
            };
        });
