function BioComponent({ name, skills }) {
  return (
    <>
      <div className="bioContainer">
        <div className="headerBioContainer">
          <h1>Hola mi nombre es: {name}</h1>
        </div>
        <div className="imgBiocontainer">
          <img alt="Imagen React"></img>
        </div>
        <div className="skillsBioContainer">
          {skills.map(skill => (
            <ul>
              <li key={skill.id}> {skill.name} </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
