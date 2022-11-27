import { useModalAction } from '@/components/ui/modal/modal.context';
import { RadioGroup } from '@headlessui/react';
import { useAtom, WritableAtom } from 'jotai';
import { useEffect } from 'react';

import { AddressHeader } from '@/components/address/address-header';
import { useTranslation } from 'next-i18next';
import type { Address, Shipping } from '@/types';
import ShippingCard from './shipping-card';

interface AddressesProps {
  shippings: Shipping[] | undefined | null;
  label: string;
  atom: WritableAtom<Shipping | null, Shipping>;
  className?: string;
  userId: string;
  count: number;

}

export const ShippingGrid: React.FC<AddressesProps> = ({
  shippings,
  label,
  atom,
  className,
  userId,
  count,
 
}) => {
  const { t } = useTranslation('common');
  const [selectedAddress, setAddress] = useAtom(atom);
  const { openModal } = useModalAction();

  useEffect(() => {
    if (shippings?.length) {
      if (selectedAddress?.id) {
        const index = shippings.findIndex((a) => a.id === selectedAddress.id);
        setAddress(shippings[index]);
      } else {
        setAddress(shippings?.[0]);
      }
    }
  }, [shippings, shippings?.length, selectedAddress?.id, setAddress]);


  function onEdit(address: any) {
    openModal('ADD_OR_UPDATE_ADDRESS', { customerId: userId, address });
  }
  function onDelete(address: any) {
    openModal('DELETE_ADDRESS', { customerId: userId, addressId: address?.id });
  }

  return (
    <>
      {/* image */}
      {
        selectedAddress?.id === 3?( <div className={className}>
    
  
          <img src="http://jaftexbd.com/public/shipping-chart.jpeg" alt="image" style={{
            height:"15rem",
            margin:"auto"
          }} />
      
       </div>):(null)
      }
     

       <div className={className}>
       <div className="flex items-center justify-between mb-5 md:mb-8">
      <div className="flex items-center space-x-3 md:space-x-4 rtl:space-x-reverse">
        {3 && (
          <span className="rounded-full w-8 h-8 bg-accent flex items-center justify-center text-base lg:text-xl text-light">
            {3}
          </span>
        )}
        <p className="text-lg lg:text-xl text-heading capitalize">Shipping Charge</p>
      </div>
   
    </div>
         
      {!shippings?.length ? (
        <div className="grid grid-cols-1 gap-4">
          <span className="relative px-5 py-6 text-base text-center bg-gray-100 border rounded border-border-200">
            {"No Shipping"}
          </span>
        </div>
      ) : (
        <RadioGroup value={selectedAddress} onChange={setAddress}>
          <RadioGroup.Label className="sr-only">{label}</RadioGroup.Label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {shippings?.map((shipping) => (
              <RadioGroup.Option value={shipping} key={shipping?.id}>
                {({ checked }: { checked: boolean }) => (
                  <ShippingCard
                    checked={checked}
                    onDelete={() => onDelete(shipping)}
                    onEdit={() => onEdit(shipping)}
                    address={shipping}
                  />
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      )}
    </div>
  
    </>
 
  );
};
export default ShippingGrid;
