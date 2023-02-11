import MenuPage from "@/components/template/MenuPage";

const Menu = ({ data }) => {
  return <MenuPage data={data} />;
};

export default Menu;

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60 * 60,
  };
};
