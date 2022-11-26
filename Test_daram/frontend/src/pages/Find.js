import React, {useState} from 'react';
import axios from 'axios';

const Find = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try{
      const response = await axios.get(
        'http://127.0.0.1:8000/api/',
      );
      setData(response.data);
    } catch (e) {
      console.log(e)
    }
  };


  return(
    <div>
      <h1>친구찾기</h1>
      <p>보고싶은 친구를 찾아보아요</p>
      <button onClick={onClick}>불러오기</button>
      {data && <textarea rows={15} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
      <br /><br /><br />

      <button onClick={onClick}>예쁘게 불러오기</button>
      <br /><br />
      {data && <li>{JSON.stringify(data, ['id', 'title', 'content'], 2)}</li>}
      {data && <li>{JSON.stringify(data, ['id'], 2)}</li>}
      {data && <li>{JSON.stringify(data, ['title'], 2)}</li>}
      {data && <li>{JSON.stringify(data, ['content'], 2)}</li>}
      {data && <li>id: {data.id}</li>}
      {data && <li>title: {data.name}</li>}
      {data && <li>content: {data.email}</li>}
    </div>
  );
};

export default Find;