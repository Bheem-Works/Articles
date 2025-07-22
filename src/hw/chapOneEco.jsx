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
  ];

  // very short questions list. 
  const shortQuestion = [
    {
      question:"Explain the concept allocation of the resources of a central problem of an economy.",
      answer:`Allocation of resources is the central problem faced by all individuals, households and even countries, both rich and poor. This problem arises due to scarcity and choice. 
      <br /><br /> 
      They are:
      1. What to produce? 
      <br /> 
      -> This is the first problem of the allocation of resources as the economy has to decide what to produce and in what quantity.
      The economy has to decide and choose whether to produce capital or consumer goods, civilian or defense goods, luxury, comfort or necessity goods etc., and in what quantity of each good. 
      <br /> 
      2. How to produce?
      <br />
      -> This is the second problem of the allocation of resources as the economy has to decide how to produce the goods and services.
      There are generally two methods of production: labor-intensive and capital-intensive. The economy has to decide which method to use based on the availability of resources and technology.
      <br />
      3. For whom to produce?
      <br />
      -> this is the third problem related to the allocation of resurces. The economy has to decide and choose carefully how to 
      distribute the goods and services produced among the rich and the poor. So that all are benefit and obtain maximum satisfaction.
      <br />
      4. Efficient utilization of resources
      <br />
      -> This is the fourth problem of the allocation of resources where the country hast to ensure fulll employment of resources where the country has 
      to ensute full employmentand best use of resources without any wastages and obtain maximum satsifaction at minimum cost and efforts.

      <br />
      5. How to achieve maximum use of resources?
      <br />
      -> This is the fifth problem of the allocation of resources. Maximum economic growth can be achieved by maaking the best use of resources with latest technologyin order to achieve maximum use of resources.
      by making the beset use of resources with latest technology. 
      The economy has to allocate its resources and technology in order to achiever the maximum economic growth. 
      These problems of allocation of resources are solved depending upon the economic system and type of makrets. 
      <br />
      In a capitalist economy, the price mechanism based on demand and supply solves these problems.
      In a socialist economy, the government plays a significant role in resource allocation.
      In a mixed economy, both the price mechanism and government intervention are used to solve these problems.
      <br />
      `
    }
    ,{
      question: "Explain the concept of the production possibility curve (PPC).",
      answer: `The production possibility curve (PPC) is the focus of varaious combinations of any 2 goods which can be produced by full utilization of the existing resources and technology.
      It is the graphical explanation of scarcity, choice and opportunity cost. It is also called the pdocution frontier. 
      <br /><br />
      # Assumption  of PPC :
      <br />
      1. The economy produces only two goods.
      <br />
      2. The avaible resources are fully utilized.
      <br />
      3. The state of techonology is given constant.
      <br />
      4. There is perfect mobility of factors from one use to another use. 
      <br />

      5. The avaible resources are scarce and limited. 
      <br />
      `
    },{
      question: "Discuss the advantages of duvsuinbs if the labour specialization.",
      answer: ``
    }
  ];

  return (
    <div className='container'>
      {qaList.map((item, index) => (
        <div key={index} className='qa-item'>
          <p className='question'>
            {index + 1}. {item.question}
          </p>
          <p
            className='answer'
            dangerouslySetInnerHTML={{ __html: `-&gt; ${item.answer}` }}
          />
        </div>
      ))}

      {shortQuestion.map((item, index) => (
        <div key={index} className='qa-item'>
          <p className="question">
            {item.question}
          </p>
          <p
            className="answer"
            dangerouslySetInnerHTML={{ __html: `-&gt; ${item.answer}` }}
          />
        </div>
      ))}

      <p>Thanks for writing. You helped me a lot! Nima🙉💘</p>
    </div>
  );
}

export default EconomicsChapOne;
