import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddReport() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    type: "injured",
    description: "",
    photo_url: "",
    location: "",
    reported_by: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Report Submitted:", form);
    // here you’d normally send the form to backend
    navigate("/reports"); // go back to Reports page after submit
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Report an Animal</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Type */}
        <div>
          <label className="block mb-1 font-medium">Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="injured">Injured</option>
            <option value="stray">Stray</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Photo URL */}
        <div>
          <label className="block mb-1 font-medium">Photo URL</label>
          <input
            type="url"
            name="photo_url"
            value={form.photo_url}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="e.g. near Mapusa park"
            required
          />
        </div>

        {/* Reported By */}
        <div>
          <label className="block mb-1 font-medium">Reported By</label>
          <input
            type="text"
            name="reported_by"
            value={form.reported_by}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Your name"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
}
