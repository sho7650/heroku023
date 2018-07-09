function helloWorld(){
  return "Hello World !";
} 

describe("Hello world Test", function(){

  it("says hello", function(){
      expect(helloWorld()).toEqual("Hello World !");
  })

});