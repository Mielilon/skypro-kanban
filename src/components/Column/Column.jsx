import Card from "../Card/Card";

export default function Column({ title }) {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Card title={"Название задачи"} topic={"Research"} date={"30.10.23"} />
      </div>
    </div>
  );
}
