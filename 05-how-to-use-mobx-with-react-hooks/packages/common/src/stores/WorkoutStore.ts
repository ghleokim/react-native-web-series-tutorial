import { createContext } from "react";

type WorkoutType = 'a' | 'b'

interface WorkoutHistory {
  [key: string]: Array<{
    excercise: string,
    value: number
  }>
}

/* an example for the history object
{
  '02-18-2019' : [
    {
      excercise: 'squat',
      value: 90
    },
    {
      excercise: 'benchpress',
      value: 100
    }
  ]  
}

*/

class WorkoutStore {  
  currentSquat: number;
  currentBenchPress: number;
  currentShoulderPress: number;
  currentDeadlift: number;
  currentSitup: number;

  // define a type 
  lastWorkoutType: WorkoutType;

  // make a dictionary where date is the key,
  history: WorkoutHistory;
}

export const WorkoutStoreContext = createContext(new WorkoutStore());