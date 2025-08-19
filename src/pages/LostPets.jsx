export default function LostPets() {
  const pets = [
    {
      id: 1,
      pet_name: "Bruno",
      species: "Dog",
      description: "Brown Labrador, blue collar",
      last_seen_location: "Mapusa Park",
      photo_url: "https://place-puppy.com/300x300",
      status: "Lost",
    },
    {
      id: 2,
      pet_name: "Mittens",
      species: "Cat",
      description: "White cat with green eyes",
      last_seen_location: "Panaji Market",
      photo_url: "https://placekitten.com/300/300",
      status: "Lost",
    },
  ];

  return (
    <div className="pt-24 px-6">
      <h2 className="text-3xl font-bold text-orange-600 mb-6">Lost Pets 🐾</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={pet.photo_url}
              alt={pet.pet_name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {pet.pet_name} ({pet.species})
              </h3>
              <p className="text-gray-600 mt-1">{pet.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                📍 Last seen: {pet.last_seen_location}
              </p>
              <span className="inline-block mt-3 px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-600">
                {pet.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
