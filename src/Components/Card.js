import { useState } from "react";
import Modal from "./Modal";

const Card = ({ books }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState("");

  return (
    <>
      {books.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.volumeInfo.pageCount;

        if (thumbnail !== undefined && amount !== undefined && amount > 0) {
          return (
            <div key={thumbnail}>
              <div
                className="card"
                onClick={() => {
                  setBookItem(item);
                  setShow(true);
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount">&#8377;{amount}</p>
                </div>
              </div>
              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </div>
          );
        }
      })}
    </>
  );
};
export default Card;
