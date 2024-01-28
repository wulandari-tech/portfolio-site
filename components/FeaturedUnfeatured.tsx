import List from "@/components/List";

// TODO: sort out typing
export default function FeaturedUnfeatured({ featuredProps, unfeaturedProps, ListedComponent }) {
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
