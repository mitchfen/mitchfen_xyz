const Welcome = () => {
  return (
    <>
      <fieldset>
        <legend>Welcome.cob</legend>
        <code className="magenta">IDENTIFICATION DIVISION.</code>
        <br />
        <code className="magenta">PROGRAM-ID. </code>
        <code>mitchfenxyz.</code>
        <br />
        <code className="magenta">AUTHOR. </code>
        <code>Mitchell Fenner.</code>
        <br />
        <br />
        <code className="magenta">PROCEDURE DIVISION.</code>
        <br />
        <code className="magenta">DISPLAY </code>
        <code>"Welcome to my site ^.^"</code>
        <br />
        <code className="magenta">STOP RUN.</code>
      </fieldset>
    </>
  );
};

export default Welcome;
