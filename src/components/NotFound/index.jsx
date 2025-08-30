import React from "react";
import { FileX } from "lucide-react";
import "./not_found.scss";

const TaskNotFound = () => {
  return (
    <div className="task-not-found">
      <div className="task-not-found__container">
        <div className="task-not-found__icon">
          <FileX size={48} />
        </div>

        <div className="task-not-found__content">
          <h3 className="task-not-found__title">"No Tasks Found"</h3>

          <p className="task-not-found__description">
            No tasks match. Try adjusting your search criteria.`
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskNotFound;
