import React, { useState, useEffect } from 'react';
import { PartCard } from '../components/part-card';
import { Layout } from '../components/layout';
import { PartController } from '../services';
import { Part } from '../types';

function Main() {
  const [parts, setParts] = useState([] as Part[]);
  const partController = new PartController();

  useEffect(() => {
    const QUANTITY = 3;
    const parts = partController.getParts(QUANTITY);
    setParts(parts);

  }, [])

  return (
    <Layout>
      <div className="card-list">
        {parts.map((part, key) => (<PartCard part={part} key={key} />))}
      </div>
    </Layout>
  );
}

export default Main;
