import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMissionById } from "../services/api";

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
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const MissionDetails = () => {
  const { id } = useParams();
  const [mission, setMission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMission = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getMissionById(id);
        setMission(data.mission);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "Failed to load mission details."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMission();
  }, [id]);

  if (loading) {
    return (
      <div className="state-container loading-state details-state">
        <div className="spinner" />
        <p>Loading mission details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="state-container error-state details-state">
        <span className="state-icon">⚠</span>
        <h2>Mission Not Found</h2>
        <p>{error}</p>
        <Link to="/" className="back-link">
          ← Back to Missions
        </Link>
      </div>
    );
  }

  if (!mission) {
    return (
      <div className="state-container empty-state details-state">
        <h2>Mission Not Found</h2>
        <Link to="/" className="back-link">
          ← Back to Missions
        </Link>
      </div>
    );
  }

  return (
    <div className="details-page">
      <Link to="/" className="back-link details-back">
        ← Back to Missions
      </Link>

      <div className="details-hero">
        <img
          src={mission.image || "/favicon.svg"}
          alt={mission.missionName}
          className="details-image"
        />
        <div className="details-hero-overlay" />
        <div className="details-hero-content">
          <span className={`mission-status ${getStatusClass(mission.status)}`}>
            {mission.status}
          </span>
          <h1 className="details-title">{mission.missionName}</h1>
          <p className="details-rocket">{mission.rocketName}</p>
        </div>
      </div>

      <div className="details-content">
        <div className="details-grid">
          <div className="detail-card">
            <span className="detail-label">Launch Date</span>
            <span className="detail-value">{formatDate(mission.launchDate)}</span>
          </div>
          <div className="detail-card">
            <span className="detail-label">Rocket</span>
            <span className="detail-value">{mission.rocketName}</span>
          </div>
          <div className="detail-card">
            <span className="detail-label">Crew Count</span>
            <span className="detail-value">{mission.crewCount ?? "—"}</span>
          </div>
          <div className="detail-card">
            <span className="detail-label">Status</span>
            <span
              className={`detail-value status-text ${getStatusClass(mission.status)}`}
            >
              {mission.status}
            </span>
          </div>
        </div>

        <div className="details-description-section">
          <h2>Mission Overview</h2>
          <p className="details-description">
            {mission.description || "No description available for this mission."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionDetails;
