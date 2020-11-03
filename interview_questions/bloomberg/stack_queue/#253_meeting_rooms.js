var minMeetingRooms = function (intervals) {
  let start = [],
    end = [];

  for (let i = 0; i < intervals.length; i++) {
    start[i] = intervals[i][0];
    end[i] = intervals[i][1];
  }

  start = start.sort((a, b) => a - b);
  end = end.sort((a, b) => a - b);

  let endPt = 0;
  let usedRoom = 0;

  for (let startPt = 0; startPt < start.length; startPt++) {
    if (start[startPt] < end[endPt]) {
      usedRoom++;
    } else {
      endPt++;
    }
  }

  return usedRoom;
};

/* pseudocode

it doesn't matter which meeting ends, you just know that as you're going through the meeting start times in chronological order, if there is a meeting that has just ended
then you wouldn't need to start a room because you can use the same room.

so if you have the start and the end sorted, and you move along the startingTime, you can check it against the end time. 

iterate through the intervals,
create an object for start time, sort
create an object for end time, sort

iterate through start times, comparing start time with end time, if it is smaller than end time, then you need a room
else 
increase the endPter
*/

/*
Time Complexity - O(N) - iterate through the lengths of the array
Space Complexity - O(N) - 2N, two objects to store the starting/ending times
*/
