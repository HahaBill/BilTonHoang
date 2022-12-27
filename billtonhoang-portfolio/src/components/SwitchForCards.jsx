import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import './styling.css/SwitchForCards.css'

export default function ControlledSwitches(props) {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    props.allowAutomaticFlip()
  };

  return (
    <FormGroup className='switch-card'>
        <FormControlLabel
        control={
            <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            /> }
        label="Automatic flipping"
    />
  </FormGroup>
  );
}