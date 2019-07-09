import { observable, action, computed } from "mobx";

class Store {
  @observable LoginInfo = { isLoggedIn: false, user: null};

  @observable currentPage = ''

  @observable currentGroup = ''

  @observable chatName = ''

  @action setName(Name) {
    this.chatName = Name
  }

  @action changePage(pageName) {
    this.currentPage = pageName
  }

  @action setGroup(groupId) {
    this.currentGroup = groupId
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