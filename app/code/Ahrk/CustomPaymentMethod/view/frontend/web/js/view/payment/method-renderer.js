define(
    ['uiComponent',
    'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function(
        Component,
        rendererList
    )
    {
        'use strict';
        rendererList.push (
            {
                type: 'custom_payment_method', //code
                component: 'Ahrk_CustomPaymentMethod/js/view/payment/method-renderer/custom_payment_method'
            },

            //other payment method renderers if required
        );

        /**
         * add view logic here if neded
         */

        return Component.extend({});
    }
);
