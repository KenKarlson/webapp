export const App = () => {
  const ids = [
    {
      name: 'Name 0',
      nameIds: '',
      descriptions: 'Description name 0',
    },
    {
      name: 'Name 1',
      nameIds: '',
      descriptions: 'Description test texxt to test text',
    },
    {
      name: 'Name 2',
      nameIds: '',
      descriptions: 'Description name 3 to name 2',
    },
  ];
  return (
    <div>
      <div className="title">
        <h1>Hello & welcome !!!</h1>
      </div>
      <div>
        {ids.map((id) => {
          return (
            <div key={id.name}>
              <h2>{id.name}</h2>
              <p>{id.descriptions}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
