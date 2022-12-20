import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDyanmic?: boolean
) => {
  //graphql Query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb,in"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  const res = await fetch(
    "https://galvez.stepzen.net/api/sartorial-markhor/__graphql",
    {
      method: "POST",
      cache: isDyanmic ? "no-cache" : "default",
      next: isDyanmic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query: query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  console.log("Loading New Data From API for Category >>>", category, keywords);

  const newsResponse = await res.json();

  //sort function by images present
  const news = sortNewsByImage(newsResponse.data.myQuery);

  //return res
  return news;
};

export default fetchNews;

// use stepzen import curl ,Then
//"http://api.mediastack.com/v1/news?access_key=66b48465d6c067493530c5b7753c9cdd"

// ye use nh kia mene maybe try this next time
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=66b48465d6c067493530c5b7753c9cdd&countries=us%2Cgb&limit100&offset=0&sort=published_desc"
