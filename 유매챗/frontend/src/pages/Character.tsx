import { Link, useParams } from "react-router-dom";
import characters from "../data/character";
import ViewHeader from "../components/ViewHeader";

const Character = () => {
  const params = useParams();

  return (
    <div>
      {params.id ? (
        <div>
          <ViewHeader />
          <div className="view_container_p0">
            <div className="character_profil">
              <div className="character_card">
                <img
                  src={characters[Number(params.id)].imagePath}
                  alt={characters[Number(params.id)].name}
                  className="character_image"
                />
                <div className="character_info">
                  <h5 className="character_name">
                    {characters[Number(params.id)].name}
                  </h5>
                  <p className="character_description">
                    {characters[Number(params.id)].description}
                  </p>
                  <div className="character_tags">
                    {characters[Number(params.id)].tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="character_tag">
                        #<span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="chat_btn">채팅하기</div>
          </div>
        </div>
      ) : (
        <div>
          <ViewHeader />
          <div className="view_container_p0">
            <div className="character_container">
              {characters.map((character, index) => (
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Character;
