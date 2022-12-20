import { categories } from "../../../constants";
import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../NewsList";

type Props = {
  params: { category: Category };
};

async function NewsCategory({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category);

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;

// export async function generateStaticParams() {
//   return categories.map((category) => {
//     category: category;
//   }); 
// }

export async function generateStaticParams() {
    return categories.map(category => ({category: category}))
}

//the first category is the folder name agr slug ID hota to ID ata category ki jaga first wale
//This function prebuilds the pages
//mtlb k jo links hn sports health etc woh ye function pehle se hi fetch krna shuru krdeta h taa k loading kam ho
