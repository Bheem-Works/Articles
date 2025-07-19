import React from 'react';
function EconomicsChapOne() {

  const qaList = [
    {
      question: "what is mean by scarcity and the choices?",
      answer: `scarcity is the situation where the avaible resources are scarced or not support to full fill 
      the unlimited humans wants and whether the choice is a process on selectring the most urgent or important 
      human want or need from among the various alternatives and fullfilling it using the 
      avaible source resources.`
    },
    {
      question: "Enlist any four central problems of allocations of the resources.",
      answer: `Any four soucrces of the allocations of the resources are -: 
      <br> 
      1.what to produces? <br>
      2.How to produces? <br>
      3.Whom to produce? <br>
      4.Efficent way to utilize the resources <br>
      5. Maximum uses of the resources <br>
      `
    },
    {
      question:"What is oppurtunity cost ? ",
      answer:`Opportunity cost is money or benefits lost by not selecting a particular option during the decision-making process`
    },
    {
      question:"What is the ppc cuncave of the origin ? ",
      answer:``
    },
    {
      question:"Mention any two reason of the rightward shift ppc(possibility production cost)",
      answer:``
    },{
      question:"What is meant by the division of the labour ? ",
      answer:``
    },{
      quesiton:"what is the capitilist economy ? ",
      answer:``
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
      <p>Thanks for writting. You helped me alot! Nima🙉💘</p>
    </div>
  );
}
export default EconomicsChapOne;
