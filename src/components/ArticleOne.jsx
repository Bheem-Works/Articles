import React from 'react';
import './Article.css'; // Keep this if you add external styling

function ArticleOne() {
  return (
    <div className="article-container">
      {/* Article Header */}
      <div className="help-title">
        <h1><strong>Self-taught coder with no mentor, seeking help!</strong></h1>
        <hr />
      </div>

      {/* Introduction */}
      <div className="body-section">
        <h2>Hello, my name is Vim</h2>
        <p>
          So, let's talk about the problems. There are many things I’ve been going through,
          and honestly, I still don’t have a solid idea of how to get out of this. But I’m still trying.
          The biggest issue is that I’m doing everything alone, with no mentor.
        </p>
        <p>
          It’s been eight months since I started learning programming. I had no guidance,
          just YouTube tutorials. I’ve learned HTML, CSS, JavaScript, Tailwind, and React.
          But here I am — with regret. I wasn’t learning to build something meaningful;
          I was just recreating what others built on YouTube.
        </p>
        <p>
          I learned coding the hard way — I didn’t have a laptop at first. I started on my phone.
          After months, I finally got a laptop. I thought I could now build things... but I couldn’t.
          The real reason I’m stuck is I never got proper mentorship. Somehow, I learned JavaScript and React in a month,
          just the basics. But when I went to platforms like LeetCode and CodeWars, I couldn’t solve even the easy problems.
          I was so dependent on tutorials that I never understood how to solve things myself.
        </p>
      </div>

      {/* Realization */}
      <div className="regret-section">
        <p>
          I always think to myself: <strong>“I need to build something on my own.”</strong>
          But when I sit down to code, I get stuck. If it was Figma, I’d probably make something cool —
          but when it comes to coding, I freeze. I have a bunch of unique ideas,
          but when it’s time to build them, I feel lost.
        </p>
        <p>
          The people around me? They’re not really into deep learning either. They follow tutorials just like I did.
          They know how to render stuff, but not how it works behind the scenes.
          <strong> I want to go deep — understand everything: what’s happening and why.</strong>
        </p>
        <p>
          So here I am, asking for help. Should I move to a different language for now and come back later?
          Or should I just stay stuck here? I want to build games. I want to learn by doing.
          I don’t want an AI to give me the full code — I want help that makes me think and solve it myself.
        </p>
        <p>
          I’m from Nepal, and unfortunately, many learners here are stuck in “tutorial hell.”
          Not many people know how to build logic or real projects. I’m currently going to a bootcamp and an office,
          but even there, it feels like nobody is building real things. People are stuck just memorizing syntax,
          thinking that’s what programming is.
        </p>
        <p>
          <strong>I want to build big things with JavaScript. I want to make games. That’s why I started learning Lua too.</strong>
          I want to go deep into the things I care about. Any kind of guidance or support would be super helpful.
        </p>
        <p>
          <strong>I want to build what I imagine — not just what others are building.</strong>
          When I ask for help, I want to get something that makes things clear.
          I’m not fluent in English — this was helped a bit by AI — but I hope you understand what I’m trying to say.
        </p>
        <p>
          I plan to make a “Help Seeker” website. I’ll share it in the future.
          It’ll be public, for others who are stuck like me. I’ll include comments and ways to reach me.
          I’m stuck right now — not because I’m not trying, but because I don’t know what’s best at this point.
        </p>
        <p>
          You can say, “Move to another language,” or, “Just write a bunch of code,” and I’ve done that too.
          But I’m still here. Still stuck.
        </p>
        <p>
          <strong>I have hope. I’ve come this far. I’ve learned what I could. I’m still fighting.</strong>
          I just need a little help — a little push. I know I can go far.
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xovdloqv"
          method="POST"
          className="contact-form"
        >
          <label>
            Your email:
            <input type="email" name="email" className="input-field" required />
          </label>

          <label>
            Your message:
            <textarea name="message" rows="4" className="input-field" required></textarea>
          </label>

          <button type="submit" className="submit-button">Send</button>
          <p>My GitHub : 
            <a href="https://github.com/bheem-works">Bheem-Works</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ArticleOne;
