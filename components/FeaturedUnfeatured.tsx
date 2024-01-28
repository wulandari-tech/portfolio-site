import List from "@/components/List";
import { FeaturedUnfeaturedProps } from "@/types";

export default function FeaturedUnfeatured<T extends object>({ featuredProps, unfeaturedProps, ListedComponent }: FeaturedUnfeaturedProps<T>) {
    return (
        <>
          {featuredProps.length > 0 && <section>
              <h2>Featured...</h2>
              <List dataList={featuredProps} ListedComponent={ListedComponent}/>
          </section>}
          {unfeaturedProps.length > 0 && <section>
              <h2>{unfeaturedProps.length ? 'More' : 'Featured'}...</h2>
              <List dataList={unfeaturedProps} ListedComponent={ListedComponent}/>
          </section>}
        </>
      );
}
