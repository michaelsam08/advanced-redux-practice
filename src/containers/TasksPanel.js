import React, { Component } from "react";
import { connect } from "react-redux";
import TaskItem from "../components/TaskItem";

function TasksPanelContainer(props) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">
          <i className="fa fa-clock-o fa-fw" /> Tasks Panel
        </h3>
      </div>
      <div className="panel-body">
        <div className="list-group">
          {props.tasks.map(function(t, i) {
            return <TaskItem key={i} task={t} />;
          })}
        </div>
        <div className="text-right">
          <a href="#">
            View All Activity <i className="fa fa-arrow-circle-right" />
          </a>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

const TasksPanel = connect(mapStateToProps)(TasksPanelContainer);

export default TasksPanel;
