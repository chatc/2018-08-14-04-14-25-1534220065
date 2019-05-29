module.exports = function main(number) 
{
    var line = new Array(3)
    line[0] = '._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.'
    line[1] = '|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|'
    line[2] = '|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|'
    var ans = new Array('','','')
    
    for (var i=0; i < number.length; i++)
    {
        cur_number = parseInt(number[i])
        for(var j=0; j<3; j++)
        {
            ans[j] += line[j].substr(cur_number*6, 3) + (i==number.length-1?'\n':' ')
        }
    }
    return ans[0]+ans[1]+ans[2];
  };