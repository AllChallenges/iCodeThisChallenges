import React from "react";
import "./home.css";
import Search from "../../assets/icons/search";
import Close from "../../assets/icons/close";
import Person from "../../assets/icons/person";
import Check from "../../assets/icons/check";
import { Link } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = React.useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home__container">
      <header className="home__header">
        <h1 className="home__title">iCodeThis Challenges</h1>
        <p className="home__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          maiores?
        </p>
        <div className="link__group">
          <div className="link link__completed">
            <Check
              size={{ width: 20, height: 20 }}
              className="link__completed-icon"
            />
            0 completed
          </div>
          <a
            className="link link__profile"
            href="https://icodethis.com/Rabe_Datta_"
            target="_blank"
            rel="noreferrer"
          >
            <Person
              size={{ width: 20, height: 20 }}
              className="link__profile-icon"
            />
            iCodethis profile
          </a>
        </div>
      </header>

      <section className="home__search">
        <div className="search__input__container">
          <div className="search__input__search-icon">
            <Search size={{ width: 20, height: 20 }} />
          </div>
          <input
            onChange={handleSearch}
            value={search}
            id="search"
            placeholder="Search..."
            className="search__input"
          />

          {search.trim().length > 0 && (
            <div
              className="search__input__close-icon"
              role="button"
              onClick={() => setSearch("")}
            >
              <Close size={{ width: 20, height: 20 }} />
            </div>
          )}
        </div>
      </section>

      <section className="grid">
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </section>

      <footer className="home__footer" role="contentinfo">
        <h5 className="home__footer__text">
          All Challenges completed by{" "}
          <a
            href="https://github.com/RabeDatta"
            target="_blank"
            rel="noreferrer"
          >
            @RabeDatta
          </a>
        </h5>
      </footer>
    </div>
  );
};

const GridItem = () => {
  return (
    <Link to="/projects/SubscribeModal">
      <div className="grid__item" tabIndex={-1}>
        <div className="grid__img">
          <img src="/challenges/subscribe_modal.webp" alt="img" />
        </div>
        <div className="grid__overly" tabIndex={-1}>
          <h2> Subscribe Modal</h2>
          <a href="#" className="overly__btn" role="button">
            View Project
          </a>
        </div>
      </div>
    </Link>
  );
};

export default Home;
