import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [search, setSearch] = useState("");
    const [crypto, setCrypto] = useState([]);

    useEffect(() => {
        Axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
            .then((res) => {
                setCrypto(res.data);
            })
            .catch((err) => console.error("API Error:", err));
    }, []);

    return (
        <div className="App">
            <h1>All Cryptocurrencies</h1>

            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
            />

            <table>
                <thead>
                    <tr>
                        <td>Rank</td>
                        <td>Name</td>
                        <td>Symbol</td>
                        <td>Market Cap</td>
                        <td>Price</td>
                        <td>Available Supply</td>
                        <td>Volume (24hrs)</td>
                    </tr>
                </thead>

                <tbody>
                    {crypto
                        .filter((val) =>
                            val.name.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((val, id) => (
                            <tr key={id}>
                                <td className="rank">{val.market_cap_rank}</td>

                                <td className="logo">
                                    <img src={val.image} width="30" alt="logo" />
                                    <p>{val.name}</p>
                                </td>

                                <td className="symbol">{val.symbol.toUpperCase()}</td>

                                <td>₹{val.market_cap.toLocaleString()}</td>

                                <td>₹{val.current_price.toLocaleString()}</td>

                                <td>{val.circulating_supply?.toLocaleString()}</td>

                                <td>{val.total_volume?.toLocaleString()}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
