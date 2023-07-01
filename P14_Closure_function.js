function display(a){
    function output(b) {
        function show(c) {
            return a+b+c;
        }
        return show;
    }
    return output;
}
console.log(display(10)(20)(30));
