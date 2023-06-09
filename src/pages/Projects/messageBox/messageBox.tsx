import React, { useEffect } from "react";
import "./messageBox.css";
import CloseIcon from "../../../assets/icons/close.tsx";
import SearchIcon from "../../../assets/icons/search.tsx";
import { people } from "./data.ts";

type status = {
  id: number;
  name: string;
  selectedStatus: boolean;
};

const MessageBox = () => {
  const [selectedState, setSelectedState] = React.useState<status[]>([]);

  console.log("selectedState", selectedState);
  return (
    <div className="main__ui">
      <div className="message__box">
        {/* MESSAGE HEADER */}
        <header className="message__header">
          <h5 className="message__header__title"> New Message </h5>
          <span className="message__close" role="button" tabIndex={0}>
            <CloseIcon
              size={{ width: 34, height: 34 }}
              className="message__close__icon"
            />
          </span>
        </header>

        {/* MESSAGE INPUT */}
        <div className="message__input">
          <span className="message__search__icon">
            <SearchIcon
              size={{ width: 24, height: 24 }}
              className="message__search__icon"
            />
          </span>
          <input type="text" placeholder="Type to Search" />
        </div>

        {/* MESSAGE SUBHEADER */}
        <div className="message__subheader">
          <p> Recent Conversations </p>
        </div>

        {/* SELECTED NAME */}
        {selectedState.length > 0 && (
          <div className="person__selected__lists">
            {selectedState.map((item) => (
              <div className="person__selected">
                <p>{item.name.split(" ")[0]}</p>
              </div>
            ))}
          </div>
        )}

        {/* MESSAGE LIST */}
        <section className="message__lists">
          {people.map((person) => (
            <Person
              id={person.id}
              setSelectedState={setSelectedState}
              key={person.id}
              imageUrl={person.imageUrl}
              name={person.name}
              email={person.email}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

const Person = ({
  id,
  imageUrl,
  name,
  email,
  setSelectedState,
}: {
  id: number;
  imageUrl: string;
  name: string;
  email: string;
  setSelectedState: React.Dispatch<React.SetStateAction<status[]>>;
}) => {
  const [checkbox, setCheckbox] = React.useState(false);

  const handleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  useEffect(() => {
    setSelectedState((prev) => {
      if (!checkbox) {
        console.log("checkbox", checkbox);
        return prev.filter((item) => id !== item.id);
      } else {
        return [...prev, { id, name, selectedStatus: true }];
      }
    });
  }, [checkbox, id, name, setSelectedState]);

  return (
    <div className="message__list">
      <div className="message__person">
        <img src={imageUrl} alt="avatar" className="message__person__avatar" />
        <div className="message__person__info">
          <p className="message__person__name">{name}</p>
          <p className="message__person__email">{email}</p>
        </div>
      </div>
      <label className="person__check__container">
        <input
          name={name}
          checked={checkbox}
          type="checkbox"
          className="person__checkbox"
          onChange={handleCheckbox}
        />
        <span className="person__checkmark"></span>
      </label>
    </div>
  );
};

export default MessageBox;
