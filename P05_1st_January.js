console.log("1st January will be a Sunday between 2000 and 2030");
for (var year = 2000; year <= 2030; year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log(year);
    }
