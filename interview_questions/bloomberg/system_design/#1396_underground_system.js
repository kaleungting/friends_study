/* 1396. Design Underground System
Medium

Implement the class UndergroundSystem that supports three methods:

1. checkIn(int id, string stationName, int t)

A customer with id card equal to id, gets in the station stationName at time t.
A customer can only be checked into one place at a time.
2. checkOut(int id, string stationName, int t)

A customer with id card equal to id, gets out from the station stationName at time t.
3. getAverageTime(string startStation, string endStation) 

Returns the average time to travel between the startStation and the endStation.
The average time is computed from all the previous traveling from startStation to endStation that happened directly.
Call to getAverageTime is always valid.
You can assume all calls to checkIn and checkOut methods are consistent. That is, if a customer gets in at time t1 at some station, then it gets out at time t2 with t2 > t1. All events happen in chronological order. */

/*

use a Map for both train times and avg times




*/

class UndergroundSystem{
    
    constructor(){
        this.avg = new Map();
        this.train = new Map();
    }

    checkIn(id, start, time){
        this.train.set(id, [start,time]);
    }

    checkOut(id, end, time){
        let [start, startTime] = this.train.get(id);
        let key = `${start}-${end}`;
        if (this.avg.has(key)){
            let [avg, count] = this.avg.get(key);
            let total = avg * count;
            count += 1;
            avg = (total + (time - startTime))/count;
            this.avg.set(key, [avg, count]);
        } else {
            this.avg.set(key, [(time-startTime),1]);
        }
        this.train.delete(id);
    }

    getAvgTime(start,end){
        return this.avg.get(`${start}-${end}`)[0];
    }

}

/* 

Important to store in a database since it needs to be stored in a permanent medium;

Use a hashmap = 


*/