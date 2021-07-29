const RecentProjects = () => {
  return (
    <>
      <fieldset>
        <legend>Recent Projects</legend>
        <a
          href="https://github.com/mitchfen/adrift"
          rel="noopener noreferrer"
          target="_blank"
          style={{ fontSize: "larger" }}
        >
          Adrift
        </a>
        <p>
          A short text adventure game. 
        </p>

        <br />

        <a
          href="https://github.com/mitchfen/ore_price_checker"
          rel="noopener noreferrer"
          target="_blank"
          style={{ fontSize: "larger" }}
        >
          Eve Online price checker
        </a>
        <p>
          Determine the most profitable highsec ore in EVE Online.
        </p>

        <br />
        
        <a
          href="https://github.com/mitchfen/homelab"
          rel="noopener noreferrer"
          target="_blank"
          style={{ fontSize: "larger" }}
        >
          my homelab
        </a>
        <p>
          My homelab setup, scripts, and configs.
        </p>
        
        <br />

        <a
          href="https://github.com/mitchfen/concert_tracker"
          rel="noopener noreferrer"
          target="_blank"
          style={{ fontSize: "larger" }}
        >
          concert tracker
        </a>
        <p>
          Keep track of concerts using sqlite.
        </p>
      </fieldset>
    </>
  );
};

export default RecentProjects;
