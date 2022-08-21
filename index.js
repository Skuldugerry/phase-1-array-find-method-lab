// code your solution here
function superbowlWin(record){
    const wins=record.find((winner)=>winner.result==="W");
if (wins){
    return wins.year}else{
        return undefined;
    }
}
