import "./ProfileCard.css"; 

function ProfileCard({ name, title, bio, location }) {
  return (
    <div className="profile-card">
      <h2 className="name">{name}</h2>
      {title && <p className="title">{title}</p>}
      {location && <p className="location">📍 {location}</p>}
      <p className="bio">{bio}</p>

      <div className="actions">
        <a className="btn" href="#">Follow</a>
        <a className="btn outline" href="#">Message</a>
      </div>
    </div>
  );
}

export default ProfileCard;