    $(function() {
        $(".dial").knob({
            'min':0,
            'max':255,
            'draw' : function () {
              var R = $("#Red").val()
              var G = $("#Green").val()
              var B = $("#Blue").val()
              var str = "("+R +","+ G + "," + B+")";
              $("#color").text(str)
              $("#box").css("background-color","rgb"+str);

                        

              }
        });
    });
