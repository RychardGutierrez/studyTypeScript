const statuses = {
  notStarted: 0,
  inProgress: 1,
  done: 2,
};

console.log(statuses.inProgress);

interface Task {
  id: string;
  status: StatusEnum;
}

enum StatusEnum {
  NotStarred = "notStarted",
  InProgress = "inProgress",
  Done = "done",
}

console.log(StatusEnum.InProgress);

let notStartedStatus: StatusEnum = StatusEnum.InProgress;

console.log(notStartedStatus);
