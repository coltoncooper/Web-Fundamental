function printRange(start, end, skip){
    if(skip == null){
        skip=1
    }
    if(end == null){
        end=start;
        start=0;
    }
    for(var i=start; i < end; i=i+skip){
        console.log(i)
    }

}
printRange(1, 8)