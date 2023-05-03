const ImproveSkill = () => {
  const list = [
    "Learn new recepies",
    "Experiment with food",
    "Write your own recepies",
    "Know nutrition facts",
    "Get cooking tips",
    "Get ranked",
  ];
  return (
    <div className="hero improveSkill">
      <div className="col img">
        <img src="/img/gallery/img_10.jpg" alt="" />
      </div>
      <div className="col typography">
        <h1 className="hero__title">Improve Your Culinary Skills</h1>

        {list.map((item) => (
          <p className="skill__item" key={item}>
            {item}
          </p>
        ))}

        <button className="btn">Signup now</button>
      </div>
    </div>
  );
};

export default ImproveSkill;
