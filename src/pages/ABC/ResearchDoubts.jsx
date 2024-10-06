import React, { useState } from "react";
import MentorProfile from "../../pages/MentorProfile/MentorProfile";

const ResearchDoubts = () => {
  // Mock Data: List of Mentors
  const mentors = [
    {
      id: 1,
      image: "https://cse.kiit.ac.in/wp-content/uploads/2018/08/Aleena-Swetapadma.jpg",
      name: "Aleena Swetapadma",
      domain: ["ML", "AI", "Deep Learning"],
      GoogleScholar:"https://scholar.google.co.in/citations?user=u0vcD2UAAAAJ&hl=en",
      socialLinks: {
        linkedin: "https://linkedin.com/alice-johnson",
        twitter: "https://twitter.com/alice-johnson", GoogleScholar:"https://scholar.google.co.in/citations?user=u0vcD2UAAAAJ&hl=en"
    

      },
      
      contact: "alice.johnson@university.com",
      gmail: "22054434@kiit.ac.in",
      location: "California, USA",
      publishedPapers: ["Deep Learning Techniques", "AI in Healthcare"],
      ongoingProjects: ["ML in Autonomous Driving", "AI for Medicine"],
      ratings: []
    },
    {
      id: 2,
      name: "Dr. Bob Smith",
      domain: ["ML", "AI", "Deep Learning"],
      socialLinks: {
        linkedin: "https://linkedin.com/bob-smith",
        twitter: "https://twitter.com/bob-smith",
      },
      contact: "bob.smith@university.com",
      gmail: "bob.smith@gmail.com",
      location: "New York, USA",
      publishedPapers: ["Web Dev for Beginners", "Data Science 101"],
      ongoingProjects: ["Next-Gen Web Framework", "Big Data Solutions"],
      ratings: []
    },
    // Add more mentor objects as needed
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMentors, setFilteredMentors] = useState([]);

  const handleSearch = () => {
    const results = mentors.filter((mentor) =>
      mentor.domain.some((keyword) =>
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredMentors(results);
  };
 

  return (
    <div>
      <h1>Research Doubts</h1>
      <p>
        Welcome to the Research Doubts section. Here, you can connect with
        mentors and professors specialized in various research domains such as
        Machine Learning, Web Development, Data Science, and more. Enter the
        relevant keywords below to find a mentor who can help with your research
        queries.
      </p>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter keywords like ML, Web Development, Data Science..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
        {filteredMentors.length > 0 ? (
          filteredMentors.map((mentor) => (
            <MentorProfile key={mentor.id} mentor={mentor}  />
          ))
        ) : (
          <p>No mentors found. Try different keywords.</p>
        )}
      </div>
      <Rating mentors={mentors}/>
    </div>
  );
};

export default ResearchDoubts;