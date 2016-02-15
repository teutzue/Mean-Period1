/**
 * Created by CosticaTeodor on 15/02/16.
 */

/*
 Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.
 Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive
 real-time applications that run across distributed devices.

 Node js is a single threaded application but it support concurrency via concept of event and callbacks. As every API of
 Node js are asynchronous and being a single thread, it uses async function calls to maintain the concurrency. Node uses
 observer pattern. Node thread keeps an event loop and whenever any task get completed, it fires the corresponding event
  which signals the event listener function to get executed.

 See image representation of the event loop

 Advantages:
 -Asynchronous and Event Driven All APIs of Node.js library are asynchronous that is, non-blocking. It essentially means
  a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a
  notification mechanism of Events of Node.js helps the server to get a response from the previous API call.

  -Very Fast Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution.

  -Single Threaded but Highly Scalable - Node.js uses a single threaded model with event looping. Event mechanism helps
  the server to respond in a non-blocking way and makes the server highly scalable as opposed to traditional servers which
   create limited threads to handle requests. Node.js uses a single threaded program and the same program can provide
   service to a much larger number of requests than traditional servers like Apache HTTP Server.

   -No Buffering - Node.js applications never buffer any data. These applications simply output the data in chunks.

 NPM
 ----
 Node Package Manager (npm) makes it easy for JavaScript developers
 to share and reuse code, and it makes it easy to update the code
 that you're sharing.
 In a project with many dependencies npm can be a life saver when it comes to
 updating packages, downloading new ones and removing no longer used ones with simple
 commands like npm update, npm install "package to be installed" or npm prune.
 In every Node project that uses many dependencies a package.json with information about the
 dependencies their version the entry point of an application.
 there you could right the commands to use your dependencies as you would do in the command line.


 */