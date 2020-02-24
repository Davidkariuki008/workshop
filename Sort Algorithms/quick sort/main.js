function quick_Sort(array){
    if (array.length <=1){
        return array;
    }
    else{
        var left = [];
        var right = [];
        var newArray = [];
        var pivot =array.pop();
        var length = array.length;

        for (vari=0;i<length;i++){
            if(array[i]<=pivot){
                left.push(array[i]);
            }
            else{
                right.push(array[i]);
            }
        }
        return newArray.con-cat(quick_Sort(left),pivot,quick_Sort(right));
    }
}
var input_array=[7,30,5,87,-3,90,-56,12,32,13];
document.write("array Before performing sort is " +input_array);
var sortedArray = quick_Sort(input_array);
document.write(" Sorted Array is:" +sortedArray);