/// <reference types="react" />
declare type WorkoutType = 'a' | 'b';
interface WorkoutHistory {
    [key: string]: Array<{
        excercise: string;
        value: number;
    }>;
}
declare class WorkoutStore {
    currentSquat: number;
    currentBenchPress: number;
    currentShoulderPress: number;
    currentDeadlift: number;
    currentSitup: number;
    lastWorkoutType: WorkoutType;
    history: WorkoutHistory;
}
export declare const WorkoutStoreContext: import("react").Context<WorkoutStore>;
export {};
