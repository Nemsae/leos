function addOpposingTeamLogo() {
  let $;

  if ($ = window.jQuery) init();
  else {
    const script = document.createElement('script');
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js";
    script.onload = script.onreadystatechange = () => {
      $ = window.jQuery;
      init();
    };
    document.body.appendChild(script);
  }

  function init() {
    const opposingLogoUrl = window._storeUtils.eventJSONData.artists[1].images[1].location;
    const logoDiv = '.event-header__photo-container';
    const dividerDiv = 'event-header__photo-divider';

    /* COMPONENTS */
    $(logoDiv).append(`<img class="event-header__photo" id="opposingLogo" src="${opposingLogoUrl}" />`);
    $(logoDiv).append(`<div id=${`${dividerDiv}-line`} />`);
    $(logoDiv).append(`<div id=${`${dividerDiv}-circle`}>VS<div/>`);

    /* CSS */
    const dividerLineStyle = {
      borderLeft: '1px solid #009cde',
      borderRight: '1px solid #009cde',
      height: '6.6em',
      position: 'absolute',
      right: '50%',
      top: '10%',
      // zIndex: '2',
    };

    const dividerCircleStyle = {
      background: '#009cde',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      textAlign: 'center',
      color: 'white',
      fontSize: 'medium',
      padding: '5px 0 0 0',
      // zIndex: '3',
      position: 'absolute',
      right: '45%',
      top: '33%',
    };

    $(logoDiv).css({ display: 'flex' });
    $(`#${dividerDiv}-circle`).css(dividerCircleStyle);
    $(`#${dividerDiv}-line`).css(dividerLineStyle);
    // $('#opposingLogo').css({ marginLeft: '-2px' });
  }
}

addOpposingTeamLogo();
