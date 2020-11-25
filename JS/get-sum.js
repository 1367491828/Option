/**
 * @description 求范围内（开区间） 3 的倍数的数字之和
 * @param {number[]} arr 排序或乱序的数组
 * @param {number} start 开始范围
 * @param {number} end 结束范围
 * @returns {number} 返回和
 */
const getSumOfTriple = (arr, start, end) => {
	// 请实现……

	// 如果传入了范围需要做处理数据筛选符合条件的数据
	if (start && end) {
		// 如果传递了start和end
		arr = arr.filter(item => {
			// 筛选出start和end值之间的值
			return (item > start && item < end)

		})
	}
	
	// 进行筛选数组中整除三和累加计算
	arr = arr.filter(item => {

		// 筛选出整除3的数。
		return (item % 3 === 0)

	}).reduce((a, b) => {
		//累加
		return a + b;

	})
	
	//返回计算结果
	return arr;

};

const arr = [5, 8, 3, 9, 4, 7, 1, 2, 6];
console.log(getSumOfTriple(arr))
// 计算结果： => 18
const arr2 = Array.from({ length: 143 }, (e, i) => i * 7);
console.log(getSumOfTriple(arr2, 200, 500))
// 计算结果： => 4851

// * ---------------- 实现的效果：

{
  const arr = [5, 8, 3, 9, 4, 7, 1, 2, 6];

  //          [      3  9              6]

  console.log(getSumOfTriple(arr)); // => 18
}

{
  // * arr = [0, 7, 14, 21, ... , 987, 994]
  const arr = Array.from({ length: 143 }, (e, i) => i * 7);

  // 203, 210, 217, 224, 231, 238, ..., 455, 462, 469, 476, 483, 490, 497
  //      210            231       ...       462            483

  console.log(getSumOfTriple(arr, 200, 500)); // => 4851
}
