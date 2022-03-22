import './plan.scss';

const Plan = () => {
  return (
    <div className='plan-container'>
      <div className='plan-items'>
        <div className='plan-item'>
          <div className='plan-item-header'>Free</div>
          <ul className='plan-item-content'>
            <li className='plan-item-content-item'>
              <span className='icon-checkmark' /> Pellentesque interdum libero et
            </li>
            <li className='plan-item-content-item'>
              <span className='icon-checkmark' /> Pellentesque posuere jdfkdfkdfhd
            </li>
            <li className='plan-item-content-item'>
              <span className='icon-checkmark' /> Cras sed felis eget
            </li>
            <li className='plan-item-content-item'>
              <span className='icon-checkmark' /> Maecenas eget luctus
            </li>
            <li className='plan-item-content-item'>
              <span className='icon-checkmark' /> Nullam vitae augue
            </li>
          </ul>
          <div className='plan-item-price'>
            <div className='plan-item-price-currency'>$</div>
            <div className='plan-item-price-value'>0</div>
          </div>
          <button className={'plan-item-button'}>Downgrade</button>
        </div>
        <div className='plan-item'>
          <div className='plan-item-header'>Pro</div>
          <ul className='plan-item-content'>
            <li className='plan-item-content-item'>
              <span className='icon-checkmark' /> Pellentesque interdum libero et
            </li>
            <li className='plan-item-content-item'>
              <span className='icon-checkmark' /> Pellentesque posuere jdfkdfkdfhd
            </li>
            <li className='plan-item-content-item'>
              <span className='icon-checkmark' /> Cras sed felis eget
            </li>
            <li className='plan-item-content-item'>
              <span className='icon-checkmark' /> Maecenas eget luctus
            </li>
            <li className='plan-item-content-item'>
              <span className='icon-checkmark' /> Nullam vitae augue
            </li>
          </ul>
          <div className='plan-item-price'>
            <div className='plan-item-price-currency'>$</div>
            <div className='plan-item-price-value'>12</div>
          </div>
          <button className={'plan-item-button'}>Downgrade</button>
        </div>
        <div className='plan-item selected'>
          <div className='plan-item-header'>Team</div>
          <ul className='plan-item-content'>
            <li className='plan-item-content-item'>
              <span className='icon-checkmark' /> Pellentesque interdum libero et
            </li>
            <li className='plan-item-content-item'>
              <span className='icon-checkmark' /> Pellentesque posuere jdfkdfkdfhd
            </li>
            <li className='plan-item-content-item'>
              <span className='icon-checkmark' /> Cras sed felis eget
            </li>
            <li className='plan-item-content-item'>
              <span className='icon-checkmark' /> Maecenas eget luctus
            </li>
            <li className='plan-item-content-item'>
              <span className='icon-checkmark' /> Nullam vitae augue
            </li>
          </ul>
          <div className='plan-item-price'>
            <div className='plan-item-price-currency'>$</div>
            <div className='plan-item-price-value'>0</div>
          </div>
          <button className={'plan-item-button'}>Current Plan</button>
        </div>
        <div className='plan-item'>
          <div className='plan-item-header'>Agency</div>
          <ul className='plan-item-content'>
            <li className='plan-item-content-item'>
              <span className='icon-checkmark' /> Pellentesque interdum libero et
            </li>
            <li className='plan-item-content-item'>
              <span className='icon-checkmark' /> Pellentesque posuere jdfkdfkdfhd
            </li>
            <li className='plan-item-content-item'>
              <span className='icon-checkmark' /> Cras sed felis eget
            </li>
            <li className='plan-item-content-item'>
              <span className='icon-checkmark' /> Maecenas eget luctus
            </li>
            <li className='plan-item-content-item'>
              <span className='icon-checkmark' /> Nullam vitae augue
            </li>
          </ul>
          <div className='plan-item-price'>
            <div className='plan-item-price-currency'>$</div>
            <div className='plan-item-price-value'>43</div>
          </div>
          <button className={'plan-item-button'}>Upgrade</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
