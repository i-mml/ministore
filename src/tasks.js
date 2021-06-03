import React from 'react';
import "./App.js";

// const TaskList = (props) => {
//  return <div className={"list"}>
//     {props.tasks.map((item) => (
//       <TaskItem item={item}/>
//     ))}
//   </div>;
// };

// const TaskItem = (props =>{
//    return <div className={"task"}>
//     <p className={"taskTitle"}>{props.item}</p>
//   </div>
// })


const TaskList = ({tasks}) => {
    return <div className={"list"}>
       {tasks.map((item) => (
         <TaskItem item={item}/>
       ))}
     </div>;
   };
   
   const TaskItem = ({item}) =>{
      return <div className={"task"}>
       <p className={"taskTitle"}>{item}</p>
     </div>
   }

export default TaskList;
