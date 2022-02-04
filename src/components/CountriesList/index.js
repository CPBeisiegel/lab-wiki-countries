import countries from "../../countries.json";
import {Link} from "react-router-dom";

export function CountriesList(){
    return (
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
        <div className="list-group">
        { countries.map((currentCountry) => {
             return (
                <Link to={`/${currentCountry.alpha3Code}`}>
                    <a className="list-group-item list-group-item-action" href="/ABW">
                    <p>{currentCountry.name.official}</p>
                    </a>
                </Link>
             )     
         })}
        </div>
      </div>

    )
}

