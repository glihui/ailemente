function sayHello(name,fn){
  if(name=='小郭'){
    fn()
  }
}
test('测试加法',()=>{
  expect(1+2).toBe(3)
})
test('测试函数',()=>{
  const fn = jest.fn()
  sayHello('小郭',fn)
  expect(fn).toHaveBeenCalled()
})
  