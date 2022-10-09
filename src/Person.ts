import { Information } from "./evizi.training.type/Information";
import { IJobInfo } from "./evizi.training.interface/IJob";

export class Person extends Information implements IJobInfo {
  Id: number;
  constructor(Id: number) {
    super();
    this.Id = Id;
  }

  JobId(): void {
    console.log("ID-01");
  }

  JobName(): void {
    console.log("QA");
  }

  getName() {
    return this.name;
  }
}

let P = new Person(1, "hung", 123);
console.log(P.getName());
