function addOpposingTeamLogo() {
  // Define the sigil uptop in the case that jQuery doesn't yet exist at time of script firing
  let $;
  // Quick check for the existence of jQuery
  if ($ = window.jQuery) {
    console.log('Sanity:jQuery exists!');
    init(); // jshint ignore:line
  }

  else {
    const script = document.createElement('script');
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js";
    script.onload = script.onreadystatechange = () => {
      $ = window.jQuery;
      init();
    };
    document.body.appendChild(script);
  }

  // code runs when jQuery exists
  function init() {
    const opposingLogoUrl = window._storeUtils.eventJSONData.artists[1].images[1].location;
    const logoDiv = '.event-header__photo-container';
    // const logoDiv = '.split-content__secondary event-header__photo-container';

    // $('#theDiv').prepend('<img id="theImg" src="theImg.png" />')
    $(logoDiv).append('<div id="event-header__photo-divider">VS<div/>')
    $(logoDiv).append(`<img class="event-header__photo" id="opposingLogo" src="${opposingLogoUrl}" />`);

    //  CSS
    $(logoDiv).css({ display: 'flex' });
    $('#event-header__photo-divider').css({ margin: 'auto' });
    $('#opposingLogo').css({ marginLeft: '-2px' });
  }
}

addOpposingTeamLogo();
