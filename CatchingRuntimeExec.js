Java.perform(function () {
    var targetClass = Java.use("java.lang.Runtime");

    targetClass.exec.overload('java.lang.String').implementation = function (x) {
        console.log("[*] exec() got called!: "+x);
        return this.exec(x);
    };

    targetClass.exec.overload('[Ljava.lang.String;').implementation = function (x) {
        console.log("[*] exec() got called!: "+x);
        return this.exec(x);
    };

    targetClass.exec.overload('java.lang.String', '[Ljava.lang.String;').implementation = function (x,y) {
        console.log("[*] exec() got called X= "+x);
        console.log("[*] exec() got called Y= "+y);
        return this.exec(x,y);
    };

    targetClass.exec.overload('[Ljava.lang.String;', '[Ljava.lang.String;').implementation = function (x,y) {
        console.log("[*] exec() got called X= "+x);
        console.log("[*] exec() got called Y= "+y);
        return this.exec(x,y);
    };

    targetClass.exec.overload('[Ljava.lang.String;', '[Ljava.lang.String;', 'java.io.File').implementation = function (x,y,z) {
        console.log("[*] exec() got called X= "+x);
        console.log("[*] exec() got called Y= "+y);
        console.log("[*] exec() got called Z= "+z);
        return this.exec(x,y,z);
    };

    targetClass.exec.overload('java.lang.String', '[Ljava.lang.String;', 'java.io.File').implementation = function (x,y,z) {
        console.log("[*] exec() got called X= "+x);
        console.log("[*] exec() got called Y= "+y);
        console.log("[*] exec() got called Z= "+z);
        return this.exec(x,y,z);
    };

});