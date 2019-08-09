// Desavanja na scroll
/*window.sr = ScrollReveal();
sr.reveal('.carousel-caption', {
	duration:2000,
	origin:'left',
	distance:'300px'
});
sr.reveal('.galerija', {
	duration:2000,
	delay:2000,
	origin:'bottom'
});
sr.reveal('.image', {
	duration:2000,
	origin:'left',
	distance:'300px',
	viewFactor: 0.2
});
sr.reveal('.usluge', {
	duration:2000,
	origin:'right',
	distance:'300px',
	viewFactor: 0.2
});
sr.reveal('.albumi1', {
	duration:2000,
	origin:'bottom'
});
sr.reveal('.albumi2', {
	duration:4000,
	origin:'bottom'
});
sr.reveal('.albumi3', {
	duration:6000,
	origin:'bottom'
});
sr.reveal('.video', {
	duration:2000,
	origin:'left',
	distance:'300px'
});
sr.reveal('.video2', {
	duration:2000,
	origin:'right',
	distance:'300px'
});
sr.reveal('.jos-spotova', {
	duration:800,
	delay:800,
	origin:'bottom'
});
sr.reveal('.usluge2', {
	duration:2000,
	origin:'left',
	distance:'300px',
	viewFactor: 0.2
});
sr.reveal('.image2', {
	duration:2000,
	origin:'right',
	distance:'300px',
	viewFactor: 0.2
});

*/


// Smooth Scrolling

// primer 1 

    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });


// Chnage color on scroll of navbar//

	$(window).scroll(function(){
		$('nav').toggleClass('scrolled',$(this).scrollTop() > 860);
	});

// albumi

(function(){

	'use strict';

	var $projects = $('.projects');

	$projects.isotope({
		itemSelector:'.item',
		layoutMode: 'fitRows'
	});

	$('ul.filters > li').on('click', function(e){

		e.preventDefault();

		var filter = $(this).attr('data-filter');

		$('ul.filters > li').removeClass('active');
		$(this).addClass('active');

		$projects.isotope({filter:filter});
	});

	$('.card').mouseenter(function(){

		$(this).find('.card-overlay').css({'top':'-100%'});
		$(this).find('.card-hover').css({'top':'0'});

	}).mouseleave(function(){

		$(this).find('.card-overlay').css({'top':'0'});
		$(this).find('.card-hover').css({'top':'100%'});


	});

})(jQuery);


//type writer effect

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
};


new Glider(document.querySelector('.glider'), {

  slidesToShow: 2.5,
  dots: '#dots',
  arrows: {
      prev:'.glider-prev',
      next:'.glider-next'
    },
  draggable: true,

  // Glider.js breakpoints are mobile-first
  responsive: [
    {
    breakpoint:1600,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 2
      }
    },

    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2
      }
    },

    {
      breakpoint: 793,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1
      }
    },

    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1.3,
        slidesToScroll: 1
      }
    }

  ]
});
