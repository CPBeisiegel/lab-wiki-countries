import {Navbar} from "../../components/Navbar";
import {CountriesList} from "../../components/CountriesList";



export function Home(){
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <CountriesList />
                </div>
            </div>
        </div>
    )
}