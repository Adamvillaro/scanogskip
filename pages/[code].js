import Ockabasi from "./ockabasi";
import Custom404 from "./pages/404";

const codeMap = {
  "1234567890": Ockabasi,
};

export default function CodePage({ code }) {
  const Component = codeMap[code];
  if (Component) {
    return <Component />;
  }
  return <Custom404 />;
}

export async function getServerSideProps({ params }) {
  const { code } = params;
  if (!/^[0-9]{10}$/.test(code)) {
    return { notFound: true };
  }
  return { props: { code } };
}
