import { observable , action} from 'mobx'
export default class Home {
    //@observable 修饰符
    @observable count = 100;
    //@action 修饰方法
    @action changeCount(type) {
        type === '+' ? this.count++ : this.count--;
    }
}