import type { ReactElement } from "react";
import Home from "src/components/home";
import Layout from "src/components/public/layout/layout";

export default function HomePage() {
  return <Home />;
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <>{page}</>
    </Layout>
  );
};
