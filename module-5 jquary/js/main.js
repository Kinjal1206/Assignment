// Q2 js start

$(document).ready(function(){
    $(".addbtn").click(function(){
        $(".add").addClass("addans");
    })
})
     $(document).ready(function(){
        $(".removebtn").click(function(){
            $(".add").removeClass("addans");
        })
    })

    

    $(document).ready(function(){
        $(".animatebtn").click(function(){
          $(".ani").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px',
            
          });
        });
      });

//Q2 js end

//Q3 js start

    $(document).ready(function(){
        $(".aa").click(function(){
            $(".panal").slideToggle("slow");
        })
    })

//Q3 js end



//Q4 js start

    $(document).ready(function(){
        $("span").parentsUntil(".aa").css({"border":"2px red solid","padding":"20px"});
    })

//Q4 js end