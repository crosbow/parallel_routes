const ParallelLayout = ({ children, quiz, assignment, notification }) => {
  return (
    <div>
      {children}
      <div className="space-y-10 p-5">
        {quiz}
        {assignment}
        {notification}
      </div>
    </div>
  );
};
export default ParallelLayout;
