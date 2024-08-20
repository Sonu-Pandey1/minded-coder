import React from "react";

function Content() {
  return (
    <div>
      <h1> HTML Introduction</h1>
      <p>
        Today, I'm writing this tutorial to create a resource that will help you
        learn HTML in less than 30 days. Here's a recommended timeline for
        learning HTML, based on your educational background:
      </p>
      <ul>
        <li>High School students and younger: Around 25 days</li>
        <li>Those beyond High School: Around 20 days</li>
        <li>College students and above: Around 10-20 days</li>
      </ul>
      <p>
        You may be wondering why I'm discussing these timelines. It's important
        for me to set expectations before you start your journey of learning
        html with me.
      </p>
      <p>
        My name is Harry (the same CodeWithHarry guy from YouTube), and today
        I'm writing this comprehensive HTML tutorial for all of you. Let's jump
        right into HTML!
      </p>

      <h2>What is HTML?</h2>
      <p>
        HTML (HyperText Markup Language) was created by Tim Berners-Lee in 1991
        as a standard for creating web pages. It's a markup language used to
        structure content on the web, defining elements like headings,
        paragraphs, links, and images. HTML forms the backbone of web content.
        In layman's terms, HTML is like the skeleton of a website. It's a set of
        instructions that tells a web browser how to display text, images,
        videos, and other elements on a webpage. Think of it as the building
        blocks that create the structure and look of a website, similar to how
        bricks and mortar are used to build a house.In a nutshell:
      </p>
      <ul>
        <li>HTML is the language of the web, used to create websites.</li>
        <li>
          HTML defines the barebone structure or layout of web pages that we see
          on the Internet.
        </li>
        <li>
          HTML consists of a set of tags contained within an HTML document, and
          the associated files typically have either a ".html" or ".htm"
          extension.
        </li>
        <li>
          There are several versions of HTML, with HTML5 being the most recent
          version.
        </li>
      </ul>

      <h2>Features of HTML</h2>
      <ul>
        <li>
          It is platform-independent. For example, Chrome displays the same
          pages identically across different operating systems such as Mac,
          Linux, and Windows.
        </li>
        <li>
          Images, videos, and audio can be added to a web page (For example -
          YouTube shows videos on their website)
        </li>
        <li>HTML is a markup language and not a programming language.</li>
        <li>
          {" "}
          It can be integrated with other languages like CSS, JavaScript, etc.
          to show interactive (or dynamic) web pages
        </li>
      </ul>

      <h2>Why the Term HyperText & Markup Language?</h2>
      <p>
        The term 'Hypertext Markup Language' is composed of two main words:
        'hypertext' and 'markup language.' 'Hypertext' refers to the linking of
        text with other documents, while 'markup language' denotes a language
        that utilizes a specific set of tags. Thus, HTML is the practice of
        displaying text, graphics, audio, video etc. in a certain way using
        special tags. Note: Tags are meaningful texts enclosed in angle braces,
        like For example, the tag. Each tag has a unique meaning and
        significance in building an HTML page, and it can influence the web page
        in various ways.
      </p>

      <h2>History of HTML:</h2>
      <ul>
        <li>In 1989, Tim Berners-Lee established the World Wide Web (www), and in 1991, he created the first version of HTML.</li>
        <li>From 1995 to 1997, further work was done to develop and refine different versions of HTML..</li>
        <li>In 1999, a committee was organized that standardized HTML 4.0, a version still used by many today.</li>
        <li>The latest and most stable version of HTML is 5, also known as HTML5</li>
      </ul>
    </div>
  );
}

export default Content;