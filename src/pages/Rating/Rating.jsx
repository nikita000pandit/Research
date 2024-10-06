import React from 'react'
import MentorProfile from '../MentorProfile/MentorProfile';
const Rating = ({mentors}) => {
    const [filteredMentors, setFilteredMentors] = useState(mentors);

    const handleSubmitRating = (mentorId, rating) => {
      setFilteredMentors((prevMentors) =>
        prevMentors.map((mentor) =>
          mentor.id === mentorId
            ? { ...mentor, ratings: [...mentor.ratings, rating] }
            : mentor
        )
      );
    };
  return (
    <div>
      <MentorProfile onSubmitRating={handleSubmitRating}/>
    </div>
  )
}

export default Rating
