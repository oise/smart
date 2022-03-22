import './billing.scss';
import invoiceImg from '/src/assets/invoice.svg';

const Billing = () => {
  return (
    <div className='billing-container'>
      <table className='table table-responsive'>
        <thead>
          <tr>
            <th>Reference ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Invoice</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4571222f6rthswfg9981fr55</td>
            <td>7/12/2020</td>
            <td>$28</td>
            <td>
              <img src={invoiceImg} alt='Invoice Img' className='billing-invoice' />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Billing;
