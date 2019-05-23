describe("Add", function() {
    it("should add two numbers", function() {      
      let result = add(2, 2);
      expect(result).toBe(4);
    }); 
    
    it("should add an array of numbers", function(){
      let result = add(5,5,5);
      expect(result).toBe(15);
    });

    it("should convert strings to numbers", function(){
      let result = add("2",5,5);
      expect(result).toBe(12);
    });

    it("should add float numbers", function(){
      let result = add(1.2, 3.5);
      expect(result).toBe(4.7);
     });
  });


  describe("Multiplier", function() {
    it("should multiply two numbers", function() {      
      let result = multiply(2, 2);
      expect(result).toBe(4);
    }); 
    
    it("should multiply an array of numbers", function(){
      let result = multiply(5,5,5);
      expect(result).toBe(125);
    });

    it("should convert strings to numbers", function(){
      let result = multiply("2",5,5);
      expect(result).toBe(50);
    });

    it("should multiply float numbers", function(){
      let result = multiply(1.2, 3.5);
      expect(result).toBe(4.2);
     });
  });