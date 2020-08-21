import instance  from './index.js';
import store from 'vuex'

export default{
    getAccount(data){
        return instance.get('/api/query.json',{params : data});
    },
}