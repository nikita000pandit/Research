import React from "react";

const MentorProfile = ({ mentor,onSubmitRating }) => {
  const [rating, setRating] = useState(0);

  const handleRatingSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onSubmitRating(mentor.id, rating);
      setRating(0); // Reset the rating after submission
    } else {
      alert("Please provide a rating between 1 and 5");
    }
  };

  const averageRating = mentor.ratings.length
    ? (mentor.ratings.reduce((sum, r) => sum + r, 0) / mentor.ratings.length).toFixed(1)
    : "No ratings yet";
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", marginTop: "20px" }}>
       <img
        src={mentor.image}
        alt={mentor.name}
        style={{ width: "150px", height: "150px", borderRadius: "50%" }}
      />
      <h2>{mentor.name}</h2>
      <p><strong>Research Domains:</strong> {mentor.domain.join(", ")}</p>
      <p><strong>Contact:</strong> {mentor.contact}</p>
      <p><strong>Gmail:</strong> <a href={`mailto:${mentor.gmail}`}>{mentor.gmail}</a></p>
      <p><strong>Location:</strong> {mentor.location}</p>
      <p><strong>Google Scholar:</strong>{mentor.GoogleScholar}</p>
      <p><strong>Published Papers:</strong></p>
      <ul>
        {mentor.publishedPapers.map((paper, index) => (
          <li key={index}>{paper}</li>
        ))}
      </ul>
      <p><strong>Ongoing Projects:</strong></p>
      <ul>
        {mentor.ongoingProjects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
      <p>
        <strong>Social Links:</strong>
        <a href={mentor.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{" "}
        |{" "}
        <a href={mentor.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </p>
  {/* Display average rating */}
      <p>Average Rating: {averageRating}</p>

      {/* Rating input */}
      <div>
        <label>Rate this mentor (1-5): </label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
        <button onClick={handleRatingSubmit}>Submit Rating</button>
      </div>
    </div>
  );
};

export default MentorProfile;