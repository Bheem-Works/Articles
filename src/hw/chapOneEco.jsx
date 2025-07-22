import React from 'react';

function EconomicsChapOne() {
  // Main questions list
  const qaList = [
    {
      question: "What is meant by scarcity and choices?",
      answer: `Scarcity is the situation where available resources are limited and cannot fulfill unlimited human wants. Choice is the process of selecting the most urgent or important human want or need from among various alternatives and fulfilling it using the available resources.`
    },
    {
      question: "Enlist any four central problems of allocation of resources.",
      answer: `Any four central problems of allocation of resources are:<br>
      1. What to produce?<br>
      2. How to produce?<br>
      3. Whom to produce for?<br>
      4. Efficient utilization of resources<br>
      5. Maximum use of resources<br>`
    },
    {
      question: "What is opportunity cost?",
      answer: `Opportunity cost is the money or benefits lost by not selecting a particular option during the decision-making process.`
    },
    {
      question: "Why is the PPC concave to the origin?",
      answer: `The Production Possibility Curve (PPC) is concave to the origin because of the law of increasing opportunity cost. As more resources are shifted from one good to another, the opportunity cost increases.`
    },
    {
      question: "Mention any two reasons for the rightward shift of the PPC (Production Possibility Curve).",
      answer: `Any two reasons for the rightward shift of the PPC are:<br />
      1. Increase in productive resources.<br />
      2. Improvement in technology.<br />`
    },
    {
      question: "What is meant by division of labour?",
      answer: `Division of labour refers to dividing a work unit into different tasks, with each task performed by different workers specialized in it.`
    },
    {
      question: "What is a capitalist economy?",
      answer: `It is an economic system where there is private ownership, and all economic decisions are made by the price mechanism based on market demand and supply. This is known as a capitalist economy.`
    },
  ];

  // Very short questions list
  const shortQuestion = [
    {
      question: "Explain the concept of allocation of resources as a central problem of an economy.",
      answer: `Allocation of resources is the central problem faced by all individuals, households, and even countries, both rich and poor. This problem arises due to scarcity and choice. 
      <br /><br /> 
      They are:<br /> 
      1. What to produce? <br /> <br />  
      -> This is the first problem of allocation of resources as the economy has to decide what to produce and in what quantity. The economy must choose whether to produce capital or consumer goods, civilian or defense goods, luxury, comfort, or necessity goods, etc., and in what quantity of each good. 
      <br /> <br />  
      2. How to produce?<br /> <br /> 
      -> This is the second problem of allocation of resources as the economy has to decide how to produce the goods and services. There are generally two methods of production: labor-intensive and capital-intensive. The economy must decide which method to use based on the availability of resources and technology.
      <br /> <br /> 
      3. For whom to produce?<br /> <br /> 
      -> This is the third problem related to allocation of resources. The economy has to decide how to distribute the goods and services produced among the rich and the poor so that all benefit and obtain maximum satisfaction.
      <br /> <br /> 
      4. Efficient utilization of resources<br /> <br /> 
      -> This is the fourth problem of allocation of resources where the country has to ensure full employment and best use of resources without any wastage to obtain maximum satisfaction at minimum cost and effort.
      <br /> <br /> 
      5. How to achieve maximum use of resources?<br /> <br /> 
      -> This is the fifth problem of allocation of resources. Maximum economic growth can be achieved by making the best use of resources with the latest technology. The economy must allocate its resources and technology to achieve maximum economic growth. These problems of allocation of resources are solved depending upon the economic system and type of markets. 
      <br /><br /> 
      In a capitalist economy, the price mechanism based on demand and supply solves these problems.<br />
      In a socialist economy, the government plays a significant role in resource allocation.<br />
      In a mixed economy, both the price mechanism and government intervention are used to solve these problems.<br />`
    },
    {
      question: "Explain the concept of the production possibility curve (PPC).",
      answer: `The production possibility curve (PPC) shows various combinations of any two goods which can be produced by full utilization of existing resources and technology. It is the graphical explanation of scarcity, choice, and opportunity cost. It is also called the production frontier. 
      <br /><br />
      <strong>Assumptions of PPC:</strong><br />
      1. The economy produces only two goods.<br />
      2. The available resources are fully utilized.<br />
      3. The state of technology is given and constant.<br />
      4. There is perfect mobility of factors from one use to another.<br />
      5. The available resources are scarce and limited.<br />`
    },
    {
      question: "Discuss the advantages of division of labour and specialization.",
      answer: `1. Increases efficiency and productivity.<br />
      2. Saves time and reduces wastage.<br />
      3. Improves quality of output.<br />
      4. Facilitates use of machinery and technology.<br />
      5. Encourages innovation and skill development.<br />`
    },
    {
      question: "What is a mixed economy? Explain any four features.",
      answer: `A mixed economy is an economic system where there is the co-existence of both private and public sectors, and they together make economic decisions and control resources.
      Example: Nepal, India, Indonesia
      <br /> <br />
      The main features of a mixed economy are: <br />  <br /> 
      A. Co-existence of public and private enterprises <br /> 
      -> In a mixed economy, there is the co-existence of both private and public sectors. The government demarcates the areas and activities of private and public sectors.
      <br /> <br /> 
      B. Freedom of enterprise <br /> 
      -> People are free to choose the occupation or enterprise of their interest and ability. Consumers are free to choose the products of their interest and producers are free to produce goods they want. The government imposes some restrictions on the private sector in prices and activities.
      <br /> <br /> 
      C. Economic planning <br /> 
      -> There is a system of economic planning with the objective of social welfare and economic development of the country. The government exercises some restrictions on the activities of the private sector. 
      <br /> <br /> 
      D. Price mechanism and price control <br /> 
      -> The government allows the price mechanism to determine the prices of goods and services in the market. However, there are administered prices in certain basic goods and services for social welfare objectives.
      <br /> <br /> 
      `
    }
  ];

  return (
    <div className='container'>
      <h2>Economics Chapter One: Questions & Answers</h2>
      <ol>
        {qaList.map((item, index) => (
          <li key={index} className='qa-item'>
            <p className='question'>
              <strong>Q{index + 1}:</strong> {item.question}
            </p>
            <p
              className='answer'
              dangerouslySetInnerHTML={{ __html: `-&gt; ${item.answer}` }}
            />
          </li>
        ))}
      </ol>
      <h2 className='qa-item'>Very Short Questions</h2>
      <ol start={qaList.length + 1}>
        {shortQuestion.map((item, index) => (
          <li key={index} className='qa-item'>
            <p className="question">
              <strong>Q{qaList.length + index + 1}:</strong> {item.question}
            </p>
            <p
              className="answer"
              dangerouslySetInnerHTML={{ __html: `-&gt; ${item.answer}` }}
            />
          </li>
        ))}
      </ol>
      <footer style={{ marginTop: '2rem', fontSize: '1em', color: '#888' }}>
        <p>Thanks Mate!</p>
        &copy; 2024 Vim Magar. All rights reserved.
      </footer>
    </div>
  );
}

export default EconomicsChapOne;
