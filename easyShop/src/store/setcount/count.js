import {observable,action} from 'mobx'
export default class Count {
    @observable timer = 0;
    @action changeTimer() {
        
    }
}