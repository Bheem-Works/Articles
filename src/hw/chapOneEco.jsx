import React from 'react';
function EconomicsChapOne() {

  const qaList = [
    {
      question: "What is meant by scarcity and choices?",
      answer: `Scarcity is the situation where available resources are limited and cannot fulfill the unlimited human wants. Choice is the process of selecting the most urgent or important human want or need from among various alternatives and fulfilling it using the available resources.`
    },
    {
      question: "Enlist any four central problems of allocation of resources.",
      answer: `Any four central problems of allocation of resources are:<br>
      1. What to produce?<br>
      2. How to produce?<br>
      3. Whom to produce for?<br>
      4. Efficient utilization of resources<br>
      5. Maximum use of resources<br>
      `
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
      2. Improvement in technology.<br />
      `
    },
    {
      question: "What is meant by division of labour?",
      answer: `Division of labour refers to dividing a work unit into different tasks, with each task performed by different workers specialized in it.`
    },
    {
      question: "What is a capitalist economy?",
      answer: `It is an economic system where there is private ownership, and all economic decisions are made by the price mechanism based on market demand and supply. This is known as a capitalist economy.`
    },
    {
      question:"Write a short answers."
    },
    {
      question:"Explain the concept allocation of resources or central problems of an economy? ",
      answer:""
    },
    {
      question:"explain the concept of productive possbility curve",
      answer:""
    },{
      question:"Discuss the advantages and divisions of the labour or specialzation",
      answer:""
    },
    {
      question:"what is economoy explain any four features",
      answer:""
    }
  ];

  return (
    <div className='container'>
      {qaList.map((item, index) => (
        <div key={index} className='qa-item'>
          <p className='questions'>
            {index + 1}. {item.question}
          </p>
          {/* Render answer with HTML and add '->' at the beginning */}
          <p
            className='answer'
            dangerouslySetInnerHTML={{ __html: `-&gt; ${item.answer}` }}
          />
        </div>
      ))}
      <p>Thanks for writing. You helped me a lot! Nima🙉💘</p>
    </div>
  );
}
export default EconomicsChapOne;

