import React from 'react';
import IconButton from 'material-ui/IconButton';
import RefreshIcon from 'material-ui/svg-icons/action/autorenew';

import './styles.css';

export const CurrencyFooter = props => (
  <div className='button-footer'>
    <IconButton
      tooltip='REFRESH'
      tooltipPosition='top-center'
      tooltipStyles={{ fontSize: '18px' }}
      onClick={props.refreshCurrencyRate}
    >
      <RefreshIcon />
    </IconButton>
  </div>
);
