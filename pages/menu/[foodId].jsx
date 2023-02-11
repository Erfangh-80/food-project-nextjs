import DetailsPage from "@/components/template/DetailsPage";
import { useRouter } from "next/router";

const Food = ({ data }) => {
  const router = useRouter();
  
  if (router.isFallback) {
    return <h2>Loading Page...</h2>;
  }

  return <DetailsPage {...data} />;
};

export default Food;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:4000/data");
  const foods = await res.json();
  const data = foods.slice(0, 10);

  const paths = data.map((food) => ({
    params: { foodId: food.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(`${process.env.BASE_URL}/data/${params.foodId}`);
  const data = await res.json();

  if (!data.id) {
    return { notFound: true };
  }
  
  return {
    props: { data },
    revalidate: 10,
  };
};
