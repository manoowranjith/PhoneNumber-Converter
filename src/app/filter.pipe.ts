import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tempNumber: string, code:string):any{
    var convertedNumber="";
    if(code=="91")
    {
      convertedNumber=""
      convertedNumber+="91-"
      if(tempNumber.length>0)
        convertedNumber+= tempNumber.substring(0,5) + " " + tempNumber.substring(5, 10)
    }
    else if(code=="05")
    {
      convertedNumber=""
      convertedNumber+="05 "
      convertedNumber+= tempNumber.substring(0,2) + " " + tempNumber.substring(2,4) + " "+ tempNumber.substring(4,6) + " "+ tempNumber.substring(6,8)
    }
    else if(code=="03")
    {
      convertedNumber=""
      convertedNumber+="03-"
      convertedNumber+= tempNumber.substring(0,5) + " " + tempNumber.substring(5,10)
    }
    else if(code=="09")
    {
      convertedNumber=""
      convertedNumber+="09"
      convertedNumber+= tempNumber.substring(0,2) + " " + tempNumber.substring(2,5) + " " + tempNumber.substring(5,9)
    }
    else if(code=="021")
    {
      convertedNumber=""
      convertedNumber+="021 "
      convertedNumber+= tempNumber.substring(0,4) + " " + tempNumber.substring(4,8) 
    }
    else if(code=="49")
    {
      convertedNumber=""
      convertedNumber+="49 "
      convertedNumber+= tempNumber.substring(0,4) + " " + tempNumber.substring(4,10) 
    }
    else{
      return ["XXXX XXXX"]
    }
    return [convertedNumber];
  }

}
