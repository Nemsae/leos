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
    const dividerDiv = 'event-header__photo-divider';
    // const logoDiv = '.split-content__secondary event-header__photo-container';

    /* Adding the opposing team logo */
    $(logoDiv).append(`<img class="event-header__photo" id="opposingLogo" src="${opposingLogoUrl}" />`);
    /* Adding the divider */
    $(logoDiv).append(`<div id=${dividerDiv} />`);
    /* Adding the circle and line to the divider */
    $(`#${dividerDiv}`).append(`<div id=${`${dividerDiv}-line`} />`);
    $(`#${dividerDiv}`).append(`<div id=${`${dividerDiv}-circle`}>VS<div/>`);

    //  COLOR for divider: #009cde
    //  BUG; breakpoint at 740px changes positioning of divider
    //  TODO: remove zIndex
    const dividerDivStyle = {
      // display: 'block',
      // float: 'right',
      zIndex: '1',
      position: 'absolute',
      right: '45%',
      top: '33%',
    };

    const dividerCircleStyle = {
      background: '#009cde',  //  or darker #0075a7
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      textAlign: 'center',
      color: 'white',
      fontSize: 'medium',
      padding: '5px 0 0 0',
      zIndex: '3',
      // position: 'absolute'
    };

    const dividerLineStyle = {
      borderLeft: '1px solid #009cde',
      borderRight: '1px solid #009cde',
      height: '5.7em',
      position: 'absolute',
      right: '50%',
      top: '-40%',
      zIndex: '2',
    };

    /* CSS */
    /* CSS */
    /* CSS */
    $(logoDiv).css({ display: 'flex' });
    $(`#${dividerDiv}`).css(dividerDivStyle);
    $(`#${dividerDiv}-circle`).css(dividerCircleStyle);
    $(`#${dividerDiv}-line`).css(dividerLineStyle);
    $('#opposingLogo').css({ marginLeft: '-2px' });
  }
}

addOpposingTeamLogo();
