import  { useState } from "react";

type Data = {
  id: number;
  name: string;
  age: number;
};

const Header = () => {
  const [data, setData] = useState<Data[]>([]);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  const handleAdd = () => {
    const newData: Data = {
      id: Date.now(),
      name: name,
      age: age,
    };

    setData((prev) => [...prev, newData]);
    setName("");
    setAge(0);
    
  };
  const handleDelete = (id:number) =>{
    setData(data.filter(item => item.id !== id))
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <button type="submit">Qo‘shish</button>
      </form>

      <ul>
        {data.map((item) => (
          <div key={item.id}>
            <div style={{ display: "flex", gap: "10px", flexDirection: "column", width: "200px", border: "1px solid black", padding: "10px" }}>
              <div>{item.name}</div>
              <div>{item.age} - yosh</div>
              <button onClick={() => handleDelete(item.id)}>ochirish</button>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Header;
