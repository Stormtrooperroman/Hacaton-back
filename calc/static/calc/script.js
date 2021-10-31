function stopAnim(){
    $(".animationHeader").fadeOut( 1600, "linear" );
    $("#content").fadeIn(1600, "linear");
}

setTimeout(function() { stopAnim(); }, 5000);


function test(){
    setInterval(function() {
    
        $.ajax({
            type: "GET",
            url: "/show",
            statusCode:{
                200:function(e){
                    $(".modal-body").html(e["value"]);
    
                }
            }
        });
    
    }, 1000);
}

(function () {
    'use strict'
  

    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        e.stopPropagation()
        $("#more").css("display", "none");
        $("#both").css("display", "none");
        const regex = new RegExp('^[0-9]+$');
        var collHave = $("#collHave").val();
        var collSale = $("#collSale").val();

        var collSaleDiv = document.getElementById("collSale");
        var collHaveDiv = document.getElementById("collHave");
        $(".invalid-back").css("display", "none");
        if (!form.checkValidity()) {
            
        }

        form.classList.add('was-validated');

        if(regex.test(collHave)){
            if(regex.test(collSale)){
               
                var collHaveInt=parseInt(collHave)
                var collSaleInt=parseInt(collSale)
                if(collHaveInt>=collSaleInt && $("#token1").val() != $("#token2").val()){
                    console.log("Hello")
                    $.ajax({
                        type: "POST",
                        url: "/buy",
                        dataType: "json",
                        contentType: "application/json",
                        data: JSON.stringify({ 'tokenSale': $("#token1").val(), 'tokensHave': collHaveInt, 'tokensToSale': collSaleInt, 'tokenBuy':  $("#token2").val()}),
                        statusCode:{
                            200:function(e){
                                var myModal = new bootstrap.Modal(document.getElementById('modal'));
                                myModal.show();
                                $("#staticBackdropLabel").html("Exchange "+ collSale+ " "+$("#token1").val() + " for "+ $("#token2").val());
                                var data=JSON.stringify(e);
                                console.log(typeof(data))
                                console.log(parseInt(e["value"]))
                                $(".modal-body").html(e["value"]);
                                test();
                            }
                        }
                    });
                }
               if(collHaveInt<collSaleInt){
                $("#more").css("display", "block");
                    
                }
                if($("#token1").val() == $("#token2").val()){
                    $("#both").css("display", "block");
                }
            }
            else{
                collSaleDiv.setCustomValidity('invalid');
            }
        }
        else{
            collHaveDiv.setCustomValidity('invalid');
        }
    }, false)
    })
})()




