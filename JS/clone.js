// * 代码开发过程中有一个常见的技术需求，对简单的数据对象进行克隆
// * 那么你实际是怎么做的？

// * ---------------- 解决下文中缺少 clone 函数的问题……
// 在这里写代码……


//实现简单的对象或数组的拷贝

function clone(obj){
	
	 //判断出数据是数组还是对象，先创建出数组或对象
	let result = typeof obj.splice === 'function'?[]:{};
	
	//排除null并且判断他是数组或对象
	if(obj && typeof obj === 'object'){
		
		//利用for循环数组或对象
		for( let key in obj ){
			
			//排除null如果是对象会计行递归
			if( obj[key] && typeof obj[key] === 'object'){
				
				// 进行引用数据类型的递归
				result[key] = clone(obj[key]);
				
			}else{
				
				// 如果是普通数据就直接进行赋值
				result[key] = obj[key]
				
			}
			
		}
		// 返回结果
		return result
	}
	//如果不是引用数据内型就会直接返回数据
	return obj
}



// * ---------------- 实现的效果：


  const data = {
    person: [
      {
        id: 114514,
        age: 24,
        type: 'student',
      },
    ],
  };

  const mirrorData = clone(data);

  mirrorData.person[0].age = 19;

  console.log(mirrorData.person[0].age === 19);
  
  // 运行结果：true
  
  console.log(data.person[0].age === 24);
  
  // 运行结果：true