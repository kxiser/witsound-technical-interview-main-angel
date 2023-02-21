function TableUsers({ users }: any) {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data: any, index: any) => {
            return (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  export default TableUsers;