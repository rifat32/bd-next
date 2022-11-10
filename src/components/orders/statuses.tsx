import ErrorMessage from '@/components/ui/error-message';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import ProgressBox from '@/components/ui/progress-box/progress-box';
import { useOrderStatuses } from '@/framework/order';
import { CheckMark } from '@/components/icons/checkmark';
import cn from 'classnames';
import Scrollbar from '@/components/ui/scrollbar';
import ProgressBox2 from '../ui/progress-box/progress-box2';

interface Props {
  status: any;
  language?: any;
  orderStatus:any;
}

const OrderStatuses = ({ status, language,orderStatus }: Props) => {
  const { orderStatuses, isLoading, error } = useOrderStatuses({
    limit: 100,
    language: language
  });

  if (isLoading) return <Spinner showText={false} className="h-[200px]" />;
  if (error) return <ErrorMessage message={error.message} />;
  console.log("order-status",orderStatus)
  if(orderStatus?.slug  == "cancelled") {
  return (<ProgressBox2  />)
  }
  return <ProgressBox data={orderStatuses} status={status} />;
};

export default OrderStatuses;
