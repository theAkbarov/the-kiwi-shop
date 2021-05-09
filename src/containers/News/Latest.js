import Card from "../../components/Card/Card";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Latest = ({ products }) => {
  return (
    <>
      {products.isFetched ? (
        products.data
          .slice(4, 30)
          .map((el) => (
            <Card
              title={el.title}
              cost={el.price}
              upload_time={el.categories}
              key={el.id + 51}
              id={el.id}
              img={el.image}
            />
          ))
      ) : (
        <div className='spinner'>
          <Spin indicator={antIcon} />
        </div>
      )}
    </>
  );
};

export default Latest;
