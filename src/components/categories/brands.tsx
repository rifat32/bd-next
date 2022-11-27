import ErrorMessage from '@/components/ui/error-message';
import dynamic from 'next/dynamic';
import { useCategories } from '@/framework/category';

const BrandList = dynamic(
  () => import('@/components/categories/brand-lists')
);

const MAP_CATEGORY_TO_GROUP: Record<string, any> = {
  classic: BrandList,
};
interface CategoriesProps {
  layout: string;
  variables: any;

}
export default function Brands({
  layout,
  variables,
}: CategoriesProps) {
  const {brands, categories, isLoading, error } = useCategories(variables);
  if (error) return <ErrorMessage message={error.message} />;
  const Component = MAP_CATEGORY_TO_GROUP[layout];

  return (
    <Component
      notFound={!Boolean(categories.length)}
      categories={brands}
      loading={isLoading}
      
      variables={variables}
    />
  );
}
