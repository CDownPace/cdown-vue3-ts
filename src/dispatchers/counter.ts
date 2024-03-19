import  {minusCounter,addCounter} from '../reduer/conter'
import {PLUS,MINUS} from '../action/counter'

export const dispatch = (ctx: any) => {
	// dispatch执行后返回函数,接受传入的类型参数
	// type --> this.$emit('dispatch', 'ADD_COUNTER') --> 'ADD_COUNTER'
	return function(type) {
		switch(type) {
			// 不同actions,派发执行不同的逻辑方法
			case PLUS:
				addCounter(ctx);
				break;
			case MINUS:
				minusCounter(ctx);
				break;
		}
	}
}