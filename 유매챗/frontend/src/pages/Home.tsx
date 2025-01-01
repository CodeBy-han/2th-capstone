import { Link } from "react-router-dom";
import ViewHeader from "../components/ViewHeader";
import characters from "../data/character";

const Home = () => {
  return (
    <div>
      <ViewHeader />
      <div className="view_container">
        <section>
          <div className="top_container">
            <h4 className="view_title">추천 캐릭터</h4>
            <Link className="more_btn" to={"/character"}>
              더보기 {">"}
            </Link>
          </div>
          <div className="character_container">
            {characters.slice(0, 4).map((character, index) => (
              <Link key={index} to={`/character/${index}`}>
                <div className="character_card">
                  <img
                    src={character.imagePath}
                    alt={character.name}
                    className="character_image"
                  />
                  <div className="character_info">
                    <h5 className="character_name">{character.name}</h5>
                    <p className="character_description">
                      {character.description}
                    </p>
                    <div className="character_tags">
                      {character.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="character_tag">
                          #<span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
