import React, { useState } from 'react'
import './Counter.css';
import { Button } from 'react-bootstrap';
import {message, Space} from 'antd';

const Counter = () => {
  const [counter, setcounter] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();

  const increment=()=>{
    setcounter(counter+1);
  }
  const decrement=()=>{
    if (counter>0) {
      setcounter(counter-1);
    }
    else{
      messageApi.open({
        type: 'error',
        content: 'Cannot decrease below 0',
      });
    }
  }

  return (
    <div className='outer-division'>
        <h1>{counter}</h1>
        {contextHolder}
      <Space>
        <Button className='' onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        </Space>
    </div>
  )
}

export default Counter;