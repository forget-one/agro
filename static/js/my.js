document.querySelectorAll('.contact_us').forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        let data = {};
        data.field_1 = document.querySelector('.field_1').value
        data.field_2 = document.querySelector('.field_2').value
        data.field_3 = document.querySelector('.field_3').value
        console.log(data)

        $.ajax({
            url: '/client/',
            method:'POST',
            async: true,
            data: data,
            success: function(data){
                console.log(data)
            }
        });
    });
}); 

