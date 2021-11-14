import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo'

//возвращаем обьект который обьединяет акшен креаторы
export default {
    ...TodoActionCreators,
    ...UserActionCreators
}