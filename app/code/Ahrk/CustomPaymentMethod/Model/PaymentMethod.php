<?php declare(strict_types=1);

namespace Ahrk\CustomPaymentMethod\Model;
use Magento\Payment\Model\InfoInterface;

class  PaymentMethod extends \Magento\Payment\Model\Method\AbstractMethod
{

    protected $_code = 'custom_payment_method';


    public function authorize(InfoInterface $payment, $amount)
    {
        return $this; // TODO: Change the autogenerated stub
    }
}
