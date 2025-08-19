import { useEffect, useState } from "react";

export default function Adoptions() {
  const [adoptions, setAdoptions] = useState([]);

  useEffect(() => {
    // Mock data (replace with API call later)
    setAdoptions([
      {
        id: 301,
        species: "Dog",
        description: "Friendly Golden Retriever",
        photo_url: "https://placedog.net/500/400?id=1",
        status: "available",
      },
      {
        id: 302,
        species: "Cat",
        description: "Calm Persian Cat",
        photo_url: "https://placekitten.com/500/400",
        status: "adopted",
      },
      {
        id: 303,
        species: "Dog",
        description: "Playful Beagle puppy",
        photo_url: "https://placedog.net/500/400?id=2",
        status: "available",
      },
    ]);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-700">
        🐾 Animals Available for Adoption
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {adoptions.map((animal) => (
          <div
            key={animal.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={animal.photo_url}
              alt={animal.species}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{animal.species}</h2>
              <p className="text-gray-600 mb-3">{animal.description}</p>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  animal.status === "available"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {animal.status}
              </span>

              {animal.status === "available" && (
                <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition">
                  Adopt Me
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
