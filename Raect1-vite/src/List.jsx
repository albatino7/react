const List = () => {
  const users = [
    { id: 1, name: "Atul Demond" },
    { id: 2, name: "Sumit Demond" },
    { id: 3, name: "Surendra parasad Singh" },
  ];
  return (
    <>
      {users.map((users) => (
        <h2 key={users.id}>
          id: {users.id} name: {users.name}
        </h2>
      ))}
    </>
  );
};

export default List;
