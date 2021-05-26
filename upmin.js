$( function() {
    $( "#tabs" ).tabs({collapsible: true, active: false});
  } );
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  $( function() {
    $("#acadprograms").accordion({ header: "h3", collapsible: true, active: false });
  } );
  $( function() {
    $("#CHSS").accordion({ header: "h4", collapsible: true, active: false});
  } );
  $( function() {
    $("#CSM").accordion({ header: "h4", collapsible: true, active: false });
  } );
  $( function() {
    $("#SoM").accordion({ header: "h4", collapsible: true, active: false });
  } );
  $( function() {
    var availableTags = [
      "Agusan del Norte",
      "Agusan del Sur",
      "Basilan",
      "Bukidnon",
      "Camiguin",
      "Cotabato",
      "Davao de Oro",
      "Davao del Norte",
      "Davao del Sur",
      "Davao Occidental",
      "Davao Oriental",
      "Dinagat Islands",
      "Lanao del Norte",
      "Lanao del Sur",
      "Maguindanao",
      "Misamis Occidental",
      "Misamis Oriental",
      "Sarangani",
      "South Cotabato",
      "Sultan Kudarat",
      "Sulu",
      "Surigao del Norte",
      "Surigao del Sur",
      "Tawi-Tawi",
      "Zamboanga del Norte",
      "Zamboanga del Sur",
      "Zamboanga Sibugay"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );
  $( function() {
      $( "#radio-1" ).checkboxradio();
    } );
    $( function() {
      $( "#radio-2" ).checkboxradio();
    } );
    $(document).ready(function() {
        $( "#spinner" ).spinner({
          max: 4,
          min: 1
        });
        $("input[type='radio']").change(function() {
        var r1_val=$("input[name=r1]:checked").val();
        var r2_val=$("input[name=r2]:checked").val();
})
})