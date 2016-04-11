/* ###### init skrol to point  ######*/
/* ###### bower i page-scroll-to-id  ######*/
/*(function($){
    $(window).load(function(){
        $("a[rel='m_PageScroll2id']").mPageScroll2id({
				    offset:200,
				    highlightClass:"left-nav-el-active"
				});
    });
 })(jQuery);*/ 


$(document).ready(function(){

	/*$(function() {
	    $('.chart').easyPieChart({
	    	animate: 2000,
	        trackColor: "#eee",
	        barColor: "#007ebe",
	        size: "80",
	        lineWidth: "5"
	    });
	});*/
	$('.left-menu-el').click(function(){
		$(this).find('.left-menu-el-sub-wrap').slideToggle()
	})
	$('.col-open-message-el-status-bar-val').each(function(){
		var progress = $(this).data('progress');
		$(this).css('width',progress+'%')
		if(progress<30 && progress>0){
			$(this).css('background-color','#00B8DF')
		}
		if(progress<50 && progress>30){
			$(this).css('background-color','#00CE74')
		}
		if( progress>70){
			$(this).css('background-color','#E1523E')
		}
	})

	$('.main-right-top-tabs-el').click(function(){
		var activeTab = $(this).data('tabs');
		$('.main-right-top-tabs-el').each(function(){
			$(this).removeClass('main-right-top-tabs-el-active');
		})
		$(this).addClass('main-right-top-tabs-el-active');
		$('.tabs-wraper').each(function(){
			var wrapTab = $(this).data('tabswrap');
			$(this).removeClass('active-tabs');
			if (activeTab===wrapTab) {
				$(this).addClass('active-tabs');
			};
		})
	})
	$('.main-right-formCol-el-title').click(function(){
		$(this).next('.main-right-formCol-el-cont').slideToggle()
	})

	$('.icon-PanelOfPerfomance').click(function(){
		$('.incident-hide-tools').slideToggle()
	})
	$('.main-left-sort-title').click(function(){
		$('.main-left-sort-wraper').slideToggle()
	})
	$('.icon-EditPerfomance').click(function(){
		$('.incident-hide-tools-edit').removeClass('hidden')
		$('.incident-hide-tools-view').addClass('hidden')
	})
	$('#incident').click()

	//Select
	$('.custom-select').niceSelect();


	$('.incident-modal-head .button-el').click(function(){
		var activeTab = $(this).data('modal-tab');
		$('.incident-modal-head .button-el').each(function(){
			$(this).removeClass('button-el-active');
		})
		$(this).addClass('button-el-active');
		$('.incident-modal-wraper').each(function(){
			var wrapTab = $(this).data('modal-wraper');
			$(this).addClass('hidden');
			if (activeTab===wrapTab) {
				$(this).removeClass('hidden');
			};
		})
	})
	/* ###### init EasyDropDown style for selects  ######*/
	/* ###### bower i easydropdown  ######*/
	/*<select class="dropdown"> add class (dropdown)
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
</select>
*/

	/* ###### init bpopup  ######*/
	/* ###### bower i bpopup  ######*/
	// Add class hide
	$('.left-logo').click(function(){
		$('.incident-modal').bPopup({
				closeClass:'incident-modal-close',
				position:['auto','auto'], // position center
				follow: [true,false],
		}); 
	})


	/* ###### init stickUp  ######*/
	/* ###### bower i sticky  ######*/
	/*$("#sticker").sticky({topSpacing:0});*/


	/* ###### init OwlCarousel2  ######*/
	/*!!! add class owlCarousel !!!*/
	/* ###### bower i OwlCarousel2 ######*/
	// $("#owl-example").owlCarousel({
	//  	items : 1,
	//  	margin:50,
	//  	autoHeight : true,
	//  	pagination : false,
	//  	autoPlay : true,
	//  	singleItem:true,
	//  	nav:true,
	// 		navText:['<i class="fa fa-arrow-circle-o-left"></i>','<i class="fa fa-arrow-circle-o-right"></i>']
	//  	}
	//  ); 	

	/* ###### init validate form  ######*/
	/* ###### bower i jquery-validation ######*/
	/*$('#myform').validate({
			rules:{ //правила для полей 
				name:{
					required:true,
					minlength:5 //минимальное значение поля
				},
				phone:{
					required:true,
					number:true
				}
			},
			messages:{
				name:{
					required: 'Это поле обязатлеьно для заполнения', //какое сообщение будет выводиться
					minlength:'Имя должно быть не меньше 5 символов'
				},
				phone:{
					required: 'Это поле обязатлеьно для заполнения',
					number:'Введите правильный телефон'
				},
				
			}
			submitHandler:function(){ //выполнять если все валидно
					alert('Форма заполнена правильно');
				}
	})*/

	/* ###### init animatedModal  ######*/
	/* ###### bower i animatedModal  ######*/
	// $(".play").animatedModal({
	//  	 animatedIn:'lightSpeedIn',
	//     animatedOut:'bounceOutDown',
	//     color:'#0394c7'
	//  	});

	/* ###### init responsive-tabs  ######*/
	/* ###### bower i responsive-tabs  ######*/
/*    $('#horizontalTab').responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: true,
        active: 0
        
    });*/

	/* ###### init fancybox  ######*/
	/* ###### bower i fancybox  ######*/
	// $(".play").fancybox();
	// a(href="img/item-house-1.png" rel="group-element(для объединения в группу)") - image in a
	//	img(src="img/item-house-1.png", alt="")
	
})