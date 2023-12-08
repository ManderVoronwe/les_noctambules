import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function HoverEffect() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props} style={{ color: 'white' }}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      
      <Button
        variant="success"
        
      >Hover me to see</Button>
    </OverlayTrigger>
  );
}

export default HoverEffect;