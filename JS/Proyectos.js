window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{ 
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{ 
				breakpoint: 1200,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 4
				}
			  }
		]
	});

	new Glider(document.querySelector('.carousel__lista1'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores1',
		arrows: {
			prev: '.carousel__anterior1',
			next: '.carousel__siguiente1'
		},
		responsive: [
			{ 
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{ 
				breakpoint: 1200,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 4
				}
			  }
		]
	});

	new Glider(document.querySelector('.carousel__lista2'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores2',
		arrows: {
			prev: '.carousel__anterior2',
			next: '.carousel__siguiente2'
		},
		responsive: [
			{ 
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{ 
				breakpoint: 1200,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 4
				}
			  }
		]
	});

	new Glider(document.querySelector('.carousel__lista3'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores3',
		arrows: {
			prev: '.carousel__anterior3',
			next: '.carousel__siguiente3'
		},
		responsive: [
			{ 
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{ 
				breakpoint: 1200,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 4
				}
			  }
		]
	});

	new Glider(document.querySelector('.carousel__lista4'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores4',
		arrows: {
			prev: '.carousel__anterior4',
			next: '.carousel__siguiente4'
		},
		responsive: [
			{ 
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{ 
				breakpoint: 1200,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 4
				}
			  }
		]
	});

	new Glider(document.querySelector('.carousel__lista5'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores5',
		arrows: {
			prev: '.carousel__anterior5',
			next: '.carousel__siguiente5'
		},
		responsive: [
			{ 
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{ 
				breakpoint: 1200,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 4
				}
			  }
		]
	});

	new Glider(document.querySelector('.carousel__lista6'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores6',
		arrows: {
			prev: '.carousel__anterior6',
			next: '.carousel__siguiente6'
		},
		responsive: [
			{ 
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{ 
				breakpoint: 1200,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 4
				}
			  }
		]
	});
});


