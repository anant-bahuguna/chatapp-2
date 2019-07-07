import { observable, action, computed } from "mobx";

class Store {
  @observable LoginInfo = { isLoggedIn: false, user: null};

  @observable currentPage = ''

  @action changePage(pageName) {
    this.currentPage = pageName
  }

  @action userLogin(isLoggedIn, user) {
    this.LoginInfo ={
      isLoggedIn,
      user
    }
  }
  
}


const appStore = new Store();

// window.appStore = appStore;
export default appStore;