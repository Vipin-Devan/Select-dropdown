import "./styles.css";
import { useState } from "react";
const countries = [
  { name: "INDIA", value: "IN", cities: ["Mumbai", "Delhi"] },
  { name: "PAKISTAN", value: "PK", cities: ["kARACHi", "ISLAMABAD"] },
  { name: "Bangladesh", value: "bg", cities: ["Dhanka", "chittangong"] }
];

export default function App() {
  const [country, setCountry] = useState(null);

  return (
    <div className="App">
      <select
        onChange={(e) => {
          console.log(e.target.value);
          setCountry(countries.filter((c) => c.name === e.target.value));
        }}
      >
        {countries.map((country) => (
          <option>{country.name}</option>
        ))}
      </select>
      {country ? (
        <select>
          {country[0].cities.map((c) => (
            <option>{c}</option>
          ))}
        </select>
      ) : (
        ""
      )}
    </div>
  );
}
