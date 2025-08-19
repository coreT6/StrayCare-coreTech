import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Reports() {
  const navigate = useNavigate();

  const [reports] = useState([
    {
      id: 1,
      type: "injured",
      description: "Dog limping near park",
      photo_url: "https://placedog.net/400/300?id=1",
      location: "15.2993, 74.1240",
      status: "pending",
      reported_by: "User1",
    },
    {
      id: 2,
      type: "stray",
      description: "Cat wandering in colony",
      photo_url: "https://placekitten.com/400/300",
      location: "15.4909, 73.8278",
      status: "rescued",
      reported_by: "User2",
    },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Reported Animals</h1>

      {/* Add Report Button */}
      <div className="mb-6">
        <button
          onClick={() => navigate("/add-report")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
        >
          + Add Report
        </button>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={report.photo_url}
              alt={report.description}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold capitalize">
                {report.type}
              </h2>
              <p className="text-gray-700">{report.description}</p>
              <p className="text-sm text-gray-500">📍 {report.location}</p>
              <p
                className={`mt-2 font-semibold ${
                  report.status === "pending"
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                Status: {report.status}
              </p>
              <p className="text-sm text-gray-500">
                Reported by: {report.reported_by}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
