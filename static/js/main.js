$( document ).ready(function() {
    
    $.extend($.lazyLoadXT, {
        edgeY:  200,
        srcAttr: 'data-src'
      });
      



// link_active

    if (window.location.href == 'file:///C:/Users/odmin/Desktop/agroLog/About-page.html') {
        $('#link_about').removeClass('flip');
        $('#link_about').addClass('flip_active');

       
    } 
    if (window.location.href == 'file:///C:/Users/odmin/Desktop/agroLog/auto__park-page.html') {
        $('#link_auto-park').removeClass('flip');
        $('#link_auto-park').addClass('flip_active');

       
    } 
    if (window.location.href == 'file:///C:/Users/odmin/Desktop/agroLog/STO-page.html') {
        $('#link_sto').removeClass('flip');
        $('#link_sto').addClass('flip_active');

       
    } 
    if (window.location.href == 'file:///C:/Users/odmin/Desktop/agroLog/news-page.html') {
        $('#link_news').removeClass('flip');
        $('#link_news').addClass('flip_active');

       
    } 
    if (window.location.href == 'file:///C:/Users/odmin/Desktop/agroLog/Contact-page.html') {
        $('#link_contacts').removeClass('flip');
        $('#link_contacts').addClass('flip_active');

       
    } 


    if (window.location.href == '' && localStorage.team_swipe == 1) {

      

        document.getElementById('block_id').scrollIntoView();
        localStorage.team_swipe = null;
       
    } 

    $('#link_calkul').on("click", function() {
        
        if (window.location.href == '') {

            document.getElementById('block_id').scrollIntoView();

        } else {
            localStorage.setItem('team_swipe', 1);
            window.location.href = "";


        }
        document.getElementById('block_id').scrollIntoView();

    });


 

 


// пользовательский файл

  
   var fileTest = function() {
        var valueFile = $('#add__file_id').val();
        if(valueFile == "") {
          
           
        } else {
            var file = $('#add__file_id').val();
            $(".fill_old").remove();
             $(".file__name").remove();
            
            console.log(file);
            $('.add__btn_a').addClass('add__btn_active');
            $('#add__btn').append('<span class="file__name file__scroll">' + valueFile + '</span>');
        }

      
    
    };
  
   
           $('#add__btn_a_id').on("click", function(){
            $('.add__btn_a').removeClass('add__btn_active');
            $(".file__name").remove();
            $("#add__file_id").remove();
            $('#add__btn').append('<span class="file__name fill_old">Прикріпити файл</span> <input type="file" id="add__file_id" name="add__file_id" class="required" accept="image/*">');
           });
     
   
    
    $('#add__btn').on("click", function(){
        $("#add__file_id").trigger( "click" );
       

        
    });


    setInterval(fileTest, 1000)



















    wow = new WOW({
       
        offset:       100,          // default
      
      });
wow.init();


// таби
    $(".tab__link-auto-prof").on("click", function(){
        ($(this)[0].dataset.tab);
      
        ($(".tab__link-auto-prof").removeClass("tab__link-auto-prof_active"));
         ($(this).addClass("tab__link-auto-prof_active"));
        ($(".tab-auto-content-prof").removeClass("tab-auto-content-prof_active"));
            ($("#"+$(this)[0].dataset.tab).addClass("tab-auto-content-prof_active"));
    });













// селект в инпутах



    $('.select__input').on('click', function(){
        let fieldt = $(this).parents('.select').find(".select__wrap");
        fieldt.toggleClass('select__wrap_active');
        $('.field__icon', this).toggleClass('field__icon_active');
    });


    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(this).parent('.select').find(".select__wrap"); // тут указываем класс элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
	  &&
	  div.has(e.target).length === 0) { // и не по его дочерним элементам
  	  $('.select__wrap').removeClass('select__wrap_active');
  	//   $('.field').removeClass('field-active');
      }
      $('.field__icon').removeClass('field__icon_active');
	});

    $('.select__wrap_item').on('click', function() {
        let text = $(this).text();
        let id = $(this).data('id');
        let field = $(this).parents('.select').find(".field_text ");
        let input_select = $(this).parents('.select').find("input");
        $(field).text(text);
        $(input_select).val(id);
        $('.select__wrap').removeClass('select__wrap_active');
        $('.field__icon').removeClass('field__icon_active');
        // $('.select__input').removeClass('select__input-active');
        
      })
















// перемикач мови

   


    $('#lang-btn').on('click', function(){
        $('.lang-nav').toggleClass('lang-nav_active');
        $('.arrow-lang').toggleClass('arrow-lang_active');
    });

    
    // $(document).mouseup(function (e){ // событие клика по веб-документу
	// 	var div = $(this).parent('.right-nav').find(".lang"); // тут указываем класс элемента
	// 	if (!div.is(e.target) // если клик был не по нашему блоку
	//   &&
	//   div.has(e.target).length === 0) { // и не по его дочерним элементам
  	//   $('.lang-nav').removeClass('lang-nav_active');
  	// //   $('.field').removeClass('field-active');
    //   }
    //   $('.arrow-lang').removeClass('arrow-lang_active');
    // });
    
//   const geniusIdea = localStorage.lang_swipe;

//     if (geniusIdea != localStorage.lang_swipe) {
//         $('.lang-nav').removeClass('lang-nav_active');
//         //   $('.field').removeClass('field-active');
//         $('.arrow-lang').removeClass('arrow-lang_active');
        
      
//     }

//     console.log(localStorage.lang_swipe);

//     $('.lang-text').on('click', function() {
//         let text = $(this).text();
//         let id = $(this).data('id');
//         let field = $(this).parents('.lang').find(".lang-text_main");
//         // let input_select = $(this).parents('.lang').find("input");
//         $(field).text(text);
//         localStorage.setItem('lang_swipe', id);
//         // $(input_select).val(id);
//         $('.lang-nav').removeClass('lang-nav_active');
//         $('.arrow-lang').removeClass('arrow-lang_active');
//         // $('.select__input').removeClass('select__input-active');
//         console.log(localStorage.lang_swipe);
//       })
      
     

    //   if (localStorage.lang_swipe == 1) {
    //     var textLock = $('.lang-text_main').text();
    //     var textField = $(".lang-text_main");
    //     textField.text('Русс')
    //   }
    //   if (localStorage.lang_swipe == 2) {
    //     var textLock = $('.lang-text_main').text();
    //     var textField = $(".lang-text_main");
    //     textField.text('Укр')
    //   }
    //   if (localStorage.lang_swipe == 3) {
    //     var textLock = $('.lang-text_main').text();
    //     var textField = $(".lang-text_main");
    //     textField.text('Eng')
    //   }



    // нав-бар

    const btn = document.getElementById("menu-toggle");
    const lines = btn.querySelectorAll(".line");
    const cls = { open: "open", close: "close" };
    let btnClass = cls.open;
    
    btn.addEventListener("click", () => {
      if (btn.classList.contains(cls.open)) {
        btn.classList.remove(btnClass);
        btnClass = cls.close;
      } else if (btn.classList.contains(cls.close)) {
        btn.classList.remove(btnClass);
        btnClass = cls.open;
      }
    
      void btn.offsetWidth;
      btn.classList.add(btnClass);

      $('.main__link').toggleClass('main__link_active');

            if (!$('.btn-toggle').hasClass('open')) {
                $("html,body").css("overflow", "visible");
            } else {
                $("html,body").css("overflow", "hidden");
            }
            
    });

















    
    $('.btn-add').on('click', function () {
        $('.input-new-wrap').append('<div class="input-wrap-add"><input type="text" name="input-test-2" class="input-add" placeholder="Місто, вул"><div class="btn-abs"><img src="static/img/index/del.svg" alt=""><div class="new-fix-line"></div></div></div>');
        
        $('.btn-abs').on('click', function () {
            console.log( $(".btn-abs").parent());
            
            $(this).parent().remove()
            // $(".input-new-wrap").remove()
        });
    
    
    });

    $('.btn-add-2').on('click', function () {
        $('.input-new-wrap-2').append('<div class="input-wrap-add add-2"><input type="text" name="input-test-3" class="input-add" placeholder="Місто, вулиця, номер буд."><div class="btn-abs"><img src="static/img/index/del.svg" alt=""><div class="new-fix-line"></div></div></div>');
        
        $('.btn-abs').on('click', function () {
            console.log( $(".btn-abs").parent());
            
            $(this).parent().remove()
            // $(".input-new-wrap").remove()
        });
    
    
    });


    $('.btn-abs').on('click', function () {
        console.log( $(".btn-abs").parent());
        
        $(this).parent().remove()
        // $(".input-new-wrap").remove()
    });
    var sumProf = 0;
    $('.left-prof').on("click", function() {
        var prof =  $('.left-prof');
       
        if ($(this)[0] == prof[0]) {
            sumProf = 100;
        } else if ($(this)[0] == prof[1]) {
            sumProf = 200;
        }
        else if ($(this)[0] == prof[2]) {
            sumProf = 300;
        }
        else if ($(this)[0] == prof[3]) {
            sumProf = 400;
        }
        else if ($(this)[0] == prof[4]) {
            sumProf = 500;
        }
        prof.removeClass('left-prof_active');
        $(this).addClass('left-prof_active');

      
        // console.log(sumProf);
        // console.log(prof[0]);
    });

    var res = 100;
        $('.btn-result').on('click', function () {
            var km = $("#input-test-3").val();
            var tn = $("#input-test-4").val();
            console.log(km);
            console.log(tn);
            res = (+sumProf) + (+km) + (+tn);
            console.log(res);
            document.getElementById("main-result").textContent = res + " грн";
        });
       
        // $('.main-result')[0].innerHTML = +res + " грн";
        // console.log($('.main-result'));

// fancybox

var modal_form = document.getElementById('modal-form');
if (modal_form != null) {

    $('.link-fanc').fancybox({
        touch: false,
        scrolling: 'hidden',
       
    });
}


  
$('.log-in').fancybox({
    touch: false,
    scrolling: 'hidden',
   
});






        

    $.validator.setDefaults({
		submitHandler: function() {
			
		}
    });
    


	$(".vakance").validate({
        rules: {
            firstname: "required",
            number: "required",
            username: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
          
        },
        messages: {
            firstname: "Будь-ласка вкажіть ім'я",
            number: "Будь-ласка вкажіть номер телефону",
            email: "Будь-ласка вкажіть email",
            firstname_2: "Будь-ласка вкажіть ім'я",
            number_2: "Будь-ласка вкажіть номер телефону",
            email_2: "Будь-ласка вкажіть email",
            password: {
                required: "Не коректний пароль",
                minlength: "Пароль має мати не меньше 5 символів"
            },
        }
    });


    // propose username by combining first- and lastname
    $("#username").focus(function() {
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        if (firstname && lastname && !this.value) {
            this.value = firstname + "." + lastname;
        }
    });

    //code to hide topic selection, disable for demo
    var newsletter = $("#newsletter");
    // newsletter topics are optional, hide at first
    var inital = newsletter.is(":checked");
    var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
    var topicInputs = topics.find("input").attr("disabled", !inital);
    // show when newsletter is checked
    newsletter.click(function() {
        topics[this.checked ? "removeClass" : "addClass"]("gray");
        topicInputs.attr("disabled", !this.checked);
    });


   

});
