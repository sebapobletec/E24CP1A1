    $(function() {
        $(".dial").knob({
            'min':0,
            'max':255,
            'draw' : function () {
              var R = $("#Red").val()
              var G = $("#Green").val()
              var B = $("#Blue").val()
              var str = "("+R+","+G+","+B+")";

              $("#redtext").text(R)
              $("#redtext").css("color","rgb("+R+",0,0")

              $("#greentext").text("|"+G)
              $("#greentext").css("color","rgb(0,"+ G +",0")

              $("#bluetext").text("|"+B+")")
              $("#bluetext").css("color","rgb(0,0,"+B)

              $("#box").css("background-color","rgb"+str);



              }
        });
    });
