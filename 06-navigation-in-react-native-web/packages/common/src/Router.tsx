import * as React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { CurrentWorkouts } from "./modules/CurrentWorkouts";
import { WorkoutHistory } from "./modules/WorkoutHistory";
import { RouterStoreContext } from "./stores/RouterStore";

export const Router = observer(() => {
  const RouterStore = useContext(RouterStoreContext);

  return RouterStore.screen === 'WorkoutHistory' ? <WorkoutHistory /> : <CurrentWorkouts />
})