import "./index.css";

const SpicesItem = (props) => {
  const { details } = props;
  const { imageUrl, category } = details;

  return (
    <li className="spices-item">
      <img src={imageUrl} alt={category} className="spices-image" />
    </li>
  );
};

export default SpicesItem;
