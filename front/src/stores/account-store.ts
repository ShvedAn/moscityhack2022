import { makeAutoObservable } from "mobx";

export type Role = "volunteer" | "organizer" | "sponsor";

class AccountStore {
  constructor() {
    makeAutoObservable(this);
  }

  role: Role = "volunteer";

  setRole(value: Role) {
    this.role = value;
  }

  reset() {
    this.role = "volunteer";
  }
}

const accountStore = new AccountStore();

export default accountStore;
