import { createAction, handleActions } from 'redux-actions';

const COUNT_INCREMENT = 'reduxExampleReducer/COUNT_INCREMENT';
const COUNT_DECREMENT = 'reduxExampleReducer/COUNT_DECREMENT';

export const increment = createAction(COUNT_INCREMENT);
export const decrement = createAction(COUNT_DECREMENT);

// 모듈의 초기 상태를 정의합니다.
const initialState = {
    number: 0
};

export default handleActions({
    [COUNT_INCREMENT]: (state, action) => {
        return { number: state.number + 1 };
    },
    [COUNT_DECREMENT]: (state, action) => {
        return { number: state.number - 1 };
    },
}, initialState);