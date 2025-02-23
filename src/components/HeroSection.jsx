import { faLocationArrow, faFileUpload  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeroSection(){
    return(
        <div className="section">
            <div className="col">
                <h1 className="title">
                    We Provide the Best Recipes for you
                </h1>
                <p className="info">
                    Share your favourite recipes, tips. Browse through a vast collection of recipes from all over the world. Whther you're looking for quick weeknight dinners, Decadent desserts, or healthy meals, you'll find it all here.
                </p>
                <div className="buttons">
                    <button type="button" onclick="#!">
                        <FontAwesomeIcon icon={faLocationArrow}/>
                        Discover
                    </button>
                    <button type="button" onclick="#!">
                        <FontAwesomeIcon icon={faFileUpload}/>
                        Create Recipe
                    </button>
                </div>
            </div>
            <div className="col">
                
            </div>
        </div>
    )
}
