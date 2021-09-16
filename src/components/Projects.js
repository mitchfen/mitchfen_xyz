const Projects = () => {
  return (
    <>
      <h3>Projects</h3>
      <hr />
      <a
        href="https://github.com/mitchfen/homelab"
        rel="noopener noreferrer"
        target="_blank"
        style={{ fontSize: "larger" }}
      >
        My homelab
      </a>
      <p>
        Virtualize all the things! <br />
        I've built up a Proxmox server with VMs for Pi-hole, Grafana, and a
        samba file share. I also run pfSense in a VM and use PCI passthrough to
        enable hardware acceleration. All my containers are handled by a
        Portainer instance.{" "}
      </p>

      <br />

      <a
        href="https://github.com/mitchfen/ore_price_checker"
        rel="noopener noreferrer"
        target="_blank"
        style={{ fontSize: "larger" }}
      >
        Ore price checker
      </a>
      <p>
        Little TypeScript app to determine the most profitable highsec ore to
        mine in EVE Online.
      </p>

      <br />
      <a
        href="https://github.com/mitchfen/personal_website"
        rel="noopener noreferrer"
        target="_blank"
        style={{ fontSize: "larger" }}
      >
        My website
      </a>
      <p>
        I'm more interested in DevOps than front-end development, so I'm using
        this site as an opportunity to play with CI/CD. It's continuously
        deployed to Azure using GitHub Actions.
      </p>
    </>
  );
};

export default Projects;
