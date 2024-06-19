import { makeAutoObservable } from "mobx";

class walletsStore {
  state = [{ id: 1, name: "test", balance: 200, color: "" }];

  constructor() {
    makeAutoObservable(this);
  }

  addWallet(newWallet) {
    this.state.push(newWallet);
  }

  deleteWallet(walletId) {}
}

export default new walletsStore();
