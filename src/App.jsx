import "./App.css";
// =================================================Операції===========================================
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTasks } from "./redux/operations";
// import { getTasks } from "./redux/selectors";
// function App() {
//   const dispatch = useDispatch();

//   const { items, isLoading, error } = useSelector(getTasks);

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);
//   return (
//     <div>
//       {isLoading && <p>Loading tasks...</p>}
//       {error && <p>{error}</p>}
//       <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
//     </div>
//   );
// }

// export default App;

// ===========================================Планувальник завдань============================
import { Layout } from "./components/Layout/Layout.jsx";
import { AppBar } from "./components/AppBar/AppBar";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./redux/operations.js";
import { getError, getIsLoading } from "./redux/selectors.js";
export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </Layout>
  );
};
