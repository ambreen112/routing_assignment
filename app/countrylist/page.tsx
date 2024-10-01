import Link from "next/link";

const countries = [
  { name: "Pakistan", capital: "Islamabad", population: "240 million" },
  { name: "Turkey", capital: "Ankara", population: "85 million" },
  { name: "Indonesia", capital: "Jakarta", population: "273 million" },
  { name: "Iraq", capital: "Baghdad", population: "40 million" },
  { name: "Kuwait", capital: "Kuwait City", population: "4.3 million" }
];

export default function CountryList() {
  return (
    <div className="bg to-blue-200">
      <h1 className="text-center bg-purple-300 mt-3 font-mono font-bold text-3xl ">LIST OF COUNTRIES</h1>
      <ul className="text-center font-serif text-xl mt-2 text-fuchsia-900">
        {countries.map((country, index) => (
          <li key={index}>
            <Link href={`/countrylist/${country.name.toLowerCase()}`}>
              {country.name}
            </Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
