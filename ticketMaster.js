function ticketMaster() {
  // Define the sigil uptop in the case that jQuery doesn't yet exist at time of script firing
  var $;

  // Quick check for the existence of jQuery
  if ($ = window.jQuery) init(); // jshint ignore:line
  else {
    var script = document.createElement("script");
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js";

    script.onload = script.onreadystatechange = function () {
      $ = window.jQuery;
      init();
    };

    document.body.appendChild(script);
  }

  // code runs when jQuery exists
  function init(){

    //
  };

};
