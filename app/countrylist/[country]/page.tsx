'use client';

const countries = [
  { name: "Pakistan", capital: "Islamabad", population: "240 million" },
  { name: "Turkey", capital: "Ankara", population: "85 million" },
  { name: "Indonesia", capital: "Jakarta", population: "273 million" },
  { name: "Iraq", capital: "Baghdad", population: "40 million" },
  { name: "Kuwait", capital: "Kuwait City", population: "4.3 million" }
];

export default function Country({ params }) {
  const country = countries.find(c => c.name.toLowerCase() === params.country.toLowerCase());

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      <h1 className="text-center bg bg-lime-500 text-3xl font-serif">Detail Of Country</h1>
      <h2 className="text-center mt-2 text-xl font-sans bg bg-pink-300 font-bold">Country Name: {country.name}</h2>
      <h2 className="text-center bg-yellow-200 mt-2 text-xl font-sans font-extrabold">Population: {country.population}</h2>
      <h2 className="text-center bg bg-green-200 mt-2 text-xl font-sans font-semibold">Capital: {country.capital}</h2>

      <button className="text-center  bg bg-orange-600 font-bold py-2 px-4 rounded mt-12" onClick={()=> window.history.back()}>back to list</button>
    </div>
    
  );
}
