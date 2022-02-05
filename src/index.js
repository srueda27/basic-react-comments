// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";

// Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h3>Warning!</h3>
          Are you sure?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          postDate="Today at 6:00AM"
          commentText="Nice blog"
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Joe"
          postDate="Yesterday at 5:38PM"
          commentText="Good job"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          postDate="Yesterday at 7:19PM"
          commentText="You're doing it great"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

// Takte the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector("#root")
);