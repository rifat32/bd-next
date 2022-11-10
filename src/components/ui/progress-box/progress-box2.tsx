import { CheckMark } from '@/components/icons/checkmark';
import cn from 'classnames';
import Scrollbar from '@/components/ui/scrollbar';
import styles from './progress-box.module.css';



const ProgressBox2: React.FC<any> = () => {
  return (
    <Scrollbar
      className="h-full w-full"
      options={{
        scrollbars: {
          autoHide: 'never',
        },
      }}
    >
      <div className="flex w-full flex-col py-7 md:flex-row md:items-start md:justify-start">
       
          <div className={styles.progress_container} key={1}>
            <div
              className={cn(
                styles.progress_wrapper,
               styles.checked 
              )}
            >
              <div className={styles.status_wrapper}>
                {/* {status >= item.serial ? (
                  <div className="h-4 w-3">
                    <CheckMark className="w-full" />
                  </div>
                ) : (
                  item.serial
                )} */}
                {/* 1 */}
              </div>
              <div className={styles.bar} />
            </div>

            <div className="flex flex-col items-start ltr:ml-5 rtl:mr-5 md:items-center ltr:md:ml-0 rtl:md:mr-0">
              {/* {item && (
                <span className="text-base font-semibold capitalize text-body-dark ltr:text-left rtl:text-right md:px-2 md:!text-center">
                  {item?.name}
                </span>
              )} */}
               <span className="text-base font-semibold capitalize text-body-dark ltr:text-left rtl:text-right md:px-2 md:!text-center">
                 Cancelled
                </span>
            </div>
          </div>
      
      </div>
    </Scrollbar>
  );
};

export default ProgressBox2;
