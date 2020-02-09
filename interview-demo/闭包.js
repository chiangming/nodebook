var name = "The Window";

　　
var object = {　　　　
  name: "My Object",
  getNameFunc: function() {　　　　　　
    function f1() {　　　　　　　　
      return this.name;
    };
    return f1

    　　　　
  }

  　　
};

　　
alert(object.getNameFunc()());