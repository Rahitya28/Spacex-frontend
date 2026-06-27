import { Link } from "react-router-dom";

const getStatusClass = (status) => {
  const normalized = status?.toLowerCase() || "";
  if (normalized === "success") return "status-success";
  if (normalized === "failed") return "status-failed";
  return "status-scheduled";
};

const formatDate = (dateString) => {
  if (!dateString) return "TBD";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const MissionCard = ({ mission }) => {
  const {
    _id,
    missionName,
    rocketName,
    launchDate,
    status,
    description,
    crewCount,
    image,
  } = mission;

  return (
    <article className="mission-card">
      <div className="mission-card-image-wrapper">
        <img
          src={image || "/favicon.svg"}
          alt={`${missionName} mission`}
          className="mission-card-image"
          loading="lazy"
        />
        <span className={`mission-status ${getStatusClass(status)}`}>
          {status}
        </span>
      </div>

      <div className="mission-card-body">
        <h3 className="mission-card-title">{missionName}</h3>

        <div className="mission-card-meta">
          <div className="meta-item">
            <span className="meta-label">Rocket</span>
            <span className="meta-value">{rocketName}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Launch Date</span>
            <span className="meta-value">{formatDate(launchDate)}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Crew</span>
            <span className="meta-value">{crewCount ?? "—"}</span>
          </div>
        </div>

        <p className="mission-card-description">
          {description || "No description available."}
        </p>

        <Link to={`/mission/${_id}`} className="mission-card-link">
          View Mission Details
          <span className="link-arrow">→</span>
        </Link>
      </div>
    </article>
  );
};

export default MissionCard;
