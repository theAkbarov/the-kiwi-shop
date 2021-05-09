import Card from "../../components/Card/Card";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const News = ({ products }) => {
  return (
    <>
      {products.isFetched ? (
        products.data
          .slice(0, 16)
          .map((el) => (
            <Card
              title={el.title}
              cost={el.price}
              upload_time={el.categories}
              key={el.id + 89}
              id={el.id}
              img={el.image}
            />
          ))
      ) : (
        <div className="spinner">
          <Spin indicator={antIcon} />
        </div>
      )}
    </>
  );
};

export default News;
