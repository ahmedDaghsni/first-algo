function  Fuc (str)  {
    let num = 0;
    
    for (let i = 0; i <= str.length; i++) {
       if (str.charAt(i) == " ") {
            num++;
        }


        }
        return num +  1;
    }
    

    console.log(Fuc("algorothime checkpoint"))
