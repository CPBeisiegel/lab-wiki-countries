import countries from "../../countries.json";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";

export function CountriesDetails(){
    const params = useParams()

    let country = countries.filter(currentCountry => 
        {return currentCountry.alpha3Code === params.alpha3Code})
        

       /*  <Link to={`/`}></Link> */
        return (
            
        <div className="col-7">
        <img src="https://restcountries.eu/data/fra.svg" alt="country flag" style={{width: "300px"}}/>
        <h1>{country[0].name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{country[0].capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
              {country[0].area}
              <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li><a href="/AND">Andorra</a></li> 
                </ul>  
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )

}



