import Scrollbar from '@/components/ui/scrollbar';
import NotFound from '@/components/ui/not-found';
import TreeMenu from '@/components/ui/tree-menu';
import CategoriesLoader from '@/components/ui/loaders/categories-loader';
import { isMobile } from 'react-device-detect';
import type { Category } from '@/types';
import Select from '../ui/select/select';
import { useRouter } from 'next/router';

interface StickySidebarListCategoriesProps {
  notFound: boolean;
  loading: boolean;
  categories: any[];
 
}

const BrandLists: React.FC<
  StickySidebarListCategoriesProps
> = ({ notFound, categories, loading }) => {
  // if (loading) {
  //   return (
  //     <div className="hidden xl:block">
  //       <div className="mt-8 w-72 px-2">
  //         <CategoriesLoader />
  //       </div>
  //     </div>
  //   );
  // }
  const router = useRouter();
  const { pathname, query } = router;
  const brandChange = (slug:string) => {
    router.push(
      {
        pathname,
        query: { ...query, brand: slug },
      },
      undefined,
      {
        scroll: false,
      }
    );
  }

  return (
    <div className={` bg-light text-center    `}  >
     <label htmlFor="brands">Brands </label>
     <select id='brands' className='form-control' onChange={(e) => {
      brandChange(e.target.value)
     }}>
    {/* {categories.brands} */}
    <option value="">
All
    </option>
    {categories.map(el => (  <option value={`${el.id}`}>
        {el.name}
      </option>))}
    
     </select>
     {/* <aside
      className={`hidden h-full bg-light lg:sticky lg:top-22 xl:block xl:w-72 `}
    >
      {!isMobile && (
        <div className="max-h-full flex-grow overflow-hidden">
          <Scrollbar
            className="max-h-screen w-full"
            style={{ height: 'calc(100vh - 5.35rem)' }}
          >
            {!notFound ? (
              <div className="px-5">
                <TreeMenu items={categories} className="xl:py-8" />
              </div>
            ) : (
              <div className="min-h-full w-full px-9 pt-6 pb-8 lg:p-8">
                <NotFound text="text-no-category" className="h-96" />
              </div>
            )}
          </Scrollbar>
        </div>
      )}

      {isMobile && (
        <div className="max-h-full flex-grow overflow-hidden">
          {!notFound ? (
            <div className="px-5">
              <TreeMenu items={categories} className="xl:py-8" />
            </div>
          ) : (
            <div className="min-h-full w-full px-9 pt-6 pb-8 lg:p-8">
              <NotFound text="text-no-category" className="h-96" />
            </div>
          )}
        </div>
      )}
    </aside> */}
    
    
    </div>
    
  );
};

export default BrandLists;
