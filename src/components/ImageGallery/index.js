import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import TabItem from "../TabItem";
import SpicesItem from "../SpicesItem";
import "./index.css";

const tabs = [
  {
    id: 1,
    value: "All",
    name: "ALL",
  },
  {
    id: 2,
    value: "Animals",
    name: "ANIMALS",
  },
  {
    id: 3,
    value: "Birds",
    name: "BIRDS",
  },
  {
    id: 4,
    value: "Insects",
    name: "INSECTS",
  },
];

const spices = [
  {
    imageUrl:
      "https://res.cloudinary.com/dbwmdblhs/image/upload/v1709204649/qwdt35htz1u91zrtml70.jpg",
    category: "INSECTS",
    id: uuidv4(),
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dbwmdblhs/image/upload/v1709201461/wgebv93wqvrifasaxa0w.jpg",
    category: "ANIMALS",
    id: uuidv4(),
  },

  {
    imageUrl:
      "https://res.cloudinary.com/dbwmdblhs/image/upload/v1709203048/sbclkmtafxwqwvnqwvb6.jpg",
    category: "ANIMALS",
    id: uuidv4(),
  },

  {
    imageUrl:
      "https://res.cloudinary.com/dbwmdblhs/image/upload/v1709203167/hpov6jttytqqmzsq1jyj.jpg",
    category: "ANIMALS",
    id: uuidv4(),
  },

  {
    imageUrl:
      "https://res.cloudinary.com/dbwmdblhs/image/upload/v1709203462/fbc0r33ggpmkpczc3ojx.jpg",
    category: "BIRDS",
    id: uuidv4(),
  },

  {
    imageUrl:
      "https://res.cloudinary.com/dbwmdblhs/image/upload/v1709202138/hcckmirqtchys90ry4p8.jpg",
    category: "ANIMALS",
    id: uuidv4(),
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dbwmdblhs/image/upload/v1709203682/c6pqw5svoutg12ivg2rb.jpg",
    category: "BIRDS",
    id: uuidv4(),
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dbwmdblhs/image/upload/v1709203831/vxgnkxblzvzgmtushlmv.jpg",
    category: "BIRDS",
    id: uuidv4(),
  },

  {
    imageUrl:
      "https://res.cloudinary.com/dbwmdblhs/image/upload/v1709204898/qnzucr33fzhx4y3gqtop.jpg",
    category: "INSECTS",
    id: uuidv4(),
  },

  {
    imageUrl:
      "https://res.cloudinary.com/dbwmdblhs/image/upload/v1709204246/nkuzr5tbejpiacssbjaj.jpg",
    category: "BIRDS",
    id: uuidv4(),
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dbwmdblhs/image/upload/v1709206823/apww8ur2r8pepycda9r8.jpg",
    category: "INSECTS",
    id: uuidv4(),
  },

  {
    imageUrl:
      "https://res.cloudinary.com/dbwmdblhs/image/upload/v1709203326/bjuqugzpnghdmtweahnh.jpg",
    category: "BIRDS",
    id: uuidv4(),
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dbwmdblhs/image/upload/v1709204415/wvxwbbusb1xryqkgzlk9.jpg",
    category: "INSECTS",
    id: uuidv4(),
  },

  {
    imageUrl:
      "https://res.cloudinary.com/dbwmdblhs/image/upload/v1709202482/fil81vxctsmjjmitdybo.jpg",
    category: "ANIMALS",
    id: uuidv4(),
  },

  {
    imageUrl:
      "https://res.cloudinary.com/dbwmdblhs/image/upload/v1709204997/xi6t6y6pq1sewtzxsv7j.jpg",
    category: "INSECTS",
    id: uuidv4(),
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dbwmdblhs/image/upload/v1709203983/e8a19ubfploa67edvjgk.jpg",
    category: "BIRDS",
    id: uuidv4(),
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dbwmdblhs/image/upload/v1709202696/cgkchgxslj0upghxf20g.jpg",
    category: "ANIMALS",
    id: uuidv4(),
  },
];

class ImageGallery extends Component {
  state = {
    activeTabId: tabs[0].id,
    spicesList: spices,
  };

  changeActiveTab = (id) => {
    if (id === 1) {
      this.setState({ spicesList: spices });
    } else {
      const tabOption = tabs.filter((each) => each.id === id);
      const updatedData = spices.filter(
        (eachSpice) => eachSpice.category === tabOption[0].name
      );
      this.setState({ spicesList: updatedData });
    }

    this.setState({ activeTabId: id });
  };

  render() {
    const activeTabId = this.state;
    const { spicesList } = this.state;
    return (
      <div className="app-container">
        <ul className="tabs-list">
          {tabs.map((each) => (
            <TabItem
              tabDetails={each}
              key={each.id}
              tabId={activeTabId}
              changeActiveTab={this.changeActiveTab}
            />
          ))}
        </ul>
        <ul className="items-list">
          {spicesList.map((eachSpices) => (
            <SpicesItem key={eachSpices.id} details={eachSpices} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ImageGallery;
