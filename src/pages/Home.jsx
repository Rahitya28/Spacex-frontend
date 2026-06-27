import { useEffect, useMemo, useState } from "react";
import { getAllMissions } from "../services/api";
import MissionCard from "../components/MissionCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

const Home = () => {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getAllMissions();
        setMissions(data.missions || []);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "Failed to load missions. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMissions();
  }, []);

  const filteredMissions = useMemo(() => {
    let result = [...missions];

    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase().trim();
      result = result.filter((mission) =>
        mission.missionName?.toLowerCase().includes(query)
      );
    }

    if (filterStatus !== "all") {
      result = result.filter(
        (mission) =>
          mission.status?.toLowerCase() === filterStatus.toLowerCase()
      );
    }

    result.sort((a, b) => {
      const dateA = new Date(a.launchDate).getTime() || 0;
      const dateB = new Date(b.launchDate).getTime() || 0;
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    return result;
  }, [missions, searchTerm, filterStatus, sortOrder]);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-eyebrow">Mission Dashboard</p>
          <h1 className="hero-title">SpaceX Mission Control</h1>
          <p className="hero-subtitle">
            Monitor, search, and explore every launch in the fleet — from
            scheduled missions to completed flights.
          </p>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="dashboard-controls">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <Filter
            filterStatus={filterStatus}
            onFilterChange={setFilterStatus}
          />
          <div className="sort-control">
            <label htmlFor="sort-order" className="filter-label">
              Sort by Launch Date
            </label>
            <select
              id="sort-order"
              className="filter-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
            </select>
          </div>
        </div>

        {loading && (
          <div className="state-container loading-state">
            <div className="spinner" />
            <p>Loading missions...</p>
          </div>
        )}

        {error && !loading && (
          <div className="state-container error-state">
            <span className="state-icon">⚠</span>
            <h2>Unable to Load Missions</h2>
            <p>{error}</p>
            <button
              className="retry-btn"
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && filteredMissions.length === 0 && (
          <div className="state-container empty-state">
            <span className="state-icon">🛰</span>
            <h2>No Missions Found</h2>
            <p>Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {!loading && !error && filteredMissions.length > 0 && (
          <>
            <p className="results-count">
              Showing {filteredMissions.length} of {missions.length} missions
            </p>
            <div className="missions-grid">
              {filteredMissions.map((mission) => (
                <MissionCard key={mission._id} mission={mission} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
