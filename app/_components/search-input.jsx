"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Row, Col, Form } from 'react-bootstrap'
import { Search, Clear } from '@mui/icons-material'

export default function SearchInput() {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      return;
    };

    const encodedInputValue = encodeURIComponent(inputValue);

    router.push(`/search/${encodedInputValue}`);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center">
      <Row className="align-items-center shadow w-100 rounded-3 bg-white">
        <Col className="col-1 d-flex justify-content-center">
          <Search onClick={handleSubmit}/>
        </Col>
        <Col>
          <input
            type="text"
            className="w-100 p-2"
            placeholder="eggs,butter,onions..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Col>
        <Col className="col-1 d-flex justify-content-center">
          <Clear onClick={() => setInputValue('')}/>
        </Col>
      </Row>
    </form>
  )
}
