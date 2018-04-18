import * as Types from '../action-types';
let initState = {
    lists: { // 滚动加载中redux中的数据
        hasMore: true,
        offset: 0,
        limit: 10,
        list: [],
        loading: false
    }
};
export function search(state=initState,action) {
    switch (action.type){
        case Types.GET_SEARCH_LIST:
            return {...state, lists:{
                ...state.lists,
                hasMore: action.hasMore,
                list:[...state.lists.list,...action.lists],
                offset: state.lists.offset+1
            }
        };
    }
    return initState;
}
