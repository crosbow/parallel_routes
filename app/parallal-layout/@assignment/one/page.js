import wait from "@/app/lib/wait";

const AssignmentPage = async () => {
  await wait(1000);

  return (
    <div>
      <h2 className="text-5xl text-violet-600"> Assignment 1 </h2>
      <p className="mt-4 text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi qui
        libero reiciendis temporibus sunt quos aperiam, corrupti quasi est
        doloremque dolore, iusto, earum laboriosam aspernatur possimus eligendi
        assumenda aut. Vel?
      </p>
    </div>
  );
};
export default AssignmentPage;
