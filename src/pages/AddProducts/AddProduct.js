import classes from "./AddProduct.module.scss"

const AddProduct = () => {
    return (
      <div className={classes.newProduct}>
        <div className={classes.Container}>
          <h1 className={classes.Heading}>This should be New Product page </h1>
          <h3 className={classes.Heading}>Coming Sooooon... </h3>
        </div>
      </div>
    );
}

export default AddProduct
