import { experiences } from "../../data/experiencesData";
import { Card } from "./card";

export function List() {
  return (
    <div className="space-y-2">
      {experiences.map((experience, index) => (
        <Card key={index} {...experience} />
      ))}
    </div>
  );
}
