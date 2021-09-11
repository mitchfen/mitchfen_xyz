const Projects = () => {
  return (
    <>
      <fieldset>
        <legend>Highlighted projects</legend>

        <a
          href="https://github.com/mitchfen/homelab"
          rel="noopener noreferrer"
          target="_blank"
          style={{ fontSize: "larger" }}
        >
          My homelab ⚗️
        </a>
        <p>
          I built my own Proxmox server and virtualize everything!
          I run pfSense, Portainer, Pihole, and Grafana.
        </p>
        
        <br />

        <a
          href="https://github.com/mitchfen/ore_price_checker"
          rel="noopener noreferrer"
          target="_blank"
          style={{ fontSize: "larger" }}
        >
          Ore price checker ⛏️
        </a>
        <p>
          Little app to determine the most profitable highsec ore to mine in EVE Online.
        </p>
      </fieldset>
    </>
  );
};

export default Projects;
